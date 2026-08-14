// app/api/users/route.ts
import { NextResponse } from "next/server";
import User from "@/models/User";
import { google } from "googleapis";
import { connectDB } from "@/lib/db";
import { sendLeadToBumchum } from "@/lib/bumchum";

// Save data to Google Sheets
// async function saveToGoogleSheet(data: {
//   name: string;
//   phone: string;
//   city: string;
//   loanAmount: string;
//   cibil?: string;
//   salary: string;
//   gclid?: string;
// }) {
//   const auth = new google.auth.JWT({
//     email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
//     key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n"),
//     scopes: ["https://www.googleapis.com/auth/spreadsheets"],
//   });

//   const sheets = google.sheets({ version: "v4", auth });
//   const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID!;


//   const getResponse = await sheets.spreadsheets.values.get({
//     spreadsheetId,
//     range: "'Google Leads March'!A2:I50000",
//   });

//   const rows = getResponse.data.values || [];

//   let lastRow = 1;
//   for (let i = rows.length - 1; i >= 0; i--) {
//     if (rows[i].some(cell => cell !== "")) {
//       lastRow = 2 + i;
//       break;
//     }
//   }

//   const nextRow = lastRow + 1;
//   const range = `'Google Leads March'!A${nextRow}:I${nextRow}`;

//   await sheets.spreadsheets.values.append({
//     spreadsheetId,
//     range,
//     valueInputOption: "USER_ENTERED",
//     requestBody: {
//       values: [
//         [
//           "", // UTM
//           data.name,
//           data.phone,
//           data.city,
//           data.loanAmount,
//           data.salary,
//           data.cibil || "",
//           data.gclid || "",
//           // new Date().toISOString().replace("T", " ").replace("Z", ""),
//           new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
//         ],
//       ],
//     },
//   });
// }

async function saveToGoogleSheet(data: {
  name: string;
  phone: string;
  city: string;
  loanAmount: string;
  cibil?: string;
  salary: string;
  gclid?: string;
}) {
  try {
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID!;

    const sheetName = "March26"; // ✅ EXACT name from console

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A:I`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            "", // UTM placeholder
            data.name,
            data.phone,
            data.city,
            data.loanAmount,
            data.salary,
            data.cibil || "",
            data.gclid || "",
            new Date().toLocaleString("en-IN", {
              timeZone: "Asia/Kolkata",
            }),
          ],
        ],
      },
    });

    console.log("✅ Data saved to Google Sheets");
  } catch (error) {
    console.error("❌ Google Sheets Error:", error);
  }
}

// ✅ POST /api/users
export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    const {
      name,
      phone,
      city,
      loanAmount,
      cibil,
      salary,
      gclid,
      utmSource,
      utmMedium,
      utmCampaign,
      utmContent,
      utmTerm,
    } = body;

    console.log("[/api/users] Received submission:", JSON.stringify(body));

    if (!name || !phone || !city || !loanAmount || !salary) {
      console.warn("[/api/users] Rejected: missing required fields");
      return NextResponse.json(
        { message: "Name, Phone, City, Loan Amount, and Salary are required" },
        { status: 400 }
      );
    }

    // Save to MongoDB
    const newUser = new User({
      name: name.trim(),
      phone: phone.trim(),
      salary: salary.toString().trim(),
      city: city.trim(),
      loanAmount: loanAmount.toString().trim(),
      cibil: cibil ? cibil.toString().trim() : undefined,
      gclid: gclid ? gclid.trim() : undefined,
    });

    const savedUser = await newUser.save();
    console.log("[/api/users] Saved to MongoDB, id:", savedUser._id);

    // Push to Google Sheets and BumChum in parallel — both swallow their own
    // errors so a downstream outage never fails the user's submission.
    const results = await Promise.allSettled([
      saveToGoogleSheet({
        name,
        phone,
        city,
        loanAmount,
        cibil,
        salary,
        gclid,
      }),
      sendLeadToBumchum({
        name,
        phone,
        city,
        loanAmount,
        salary,
        cibil,
        gclid,
        utmSource,
        utmMedium,
        utmCampaign,
        utmContent,
        utmTerm,
      }),
    ]);

    // Both helpers catch their own errors, so a "rejected" here means the helper
    // itself threw unexpectedly — worth surfacing separately.
    results.forEach((r, i) => {
      const label = ["Google Sheets", "BumChum"][i];
      if (r.status === "rejected") {
        console.error(`[/api/users] ${label} handler threw:`, r.reason);
      } else {
        console.log(`[/api/users] ${label} handler finished`);
      }
    });

    return NextResponse.json(
      { message: "User data saved successfully!", user: savedUser },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("❌ Error saving user:", error);

    const errorMessage =
      error instanceof Error
        ? error.message
        : typeof error === "string"
          ? error
          : "Unknown error";

    return NextResponse.json(
      { message: "Error saving user", error: errorMessage },
      { status: 500 }
    );
  }
}
