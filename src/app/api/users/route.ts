// app/api/users/route.ts
import { NextResponse } from "next/server";
import User from "@/models/User";
import { google } from "googleapis";
import { connectDB } from "@/lib/db";

// Save data to Google Sheets
async function saveToGoogleSheet(data: {
  name: string;
  phone: string;
  city: string;
  loanAmount: string;
  cibil?: string;
  salary: string;
  gclid?: string;
}) {
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n"), 
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID!;

  
const getResponse = await sheets.spreadsheets.values.get({
  spreadsheetId,
  range: "'Google Leads December'!D2:K50000",
});

const rows = getResponse.data.values || [];

let lastRow = 1; 
for (let i = rows.length - 1; i >= 0; i--) {
  if (rows[i].some(cell => cell !== "")) {
    lastRow = 2 + i; 
    break;
  }
}

const nextRow = lastRow + 1;
const range = `'Google Leads December'!D${nextRow}:K${nextRow}`;

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          data.name,
          data.phone,
          data.city,
          data.loanAmount,
          data.cibil || "",
          data.salary,
          data.gclid || "",
          // new Date().toISOString().replace("T", " ").replace("Z", ""),
          new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
        ],
      ],
    },
  });
}

// ✅ POST /api/users
export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    const { name, phone, city, loanAmount, cibil, salary, gclid } = body;

    if (!name || !phone || !city || !loanAmount || !salary) {
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

    // Save to Google Sheets (non-blocking)
    await saveToGoogleSheet({
      name: body.name,
      phone: body.phone,
      city: body.city,
      loanAmount: body.loanAmount,
      cibil: body.cibil,
      salary: body.salary,
      gclid: body.gclid,
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
