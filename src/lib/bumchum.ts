// src/lib/bumchum.ts
// Pushes a lead to the BumChum (Talkvit) external-leads API.
// Runs server-side only so BUMCHUM_AUTH_KEY is never exposed to the browser.

export type BumchumLead = {
  name: string;
  /** May arrive prefixed ("+919876543210") or bare ("9876543210") — split before sending. */
  phone: string;
  /** Overrides the default dial code when the form ever collects a non-IN number. */
  countryCode?: string;
  city: string;
  loanAmount: string;
  salary: string;
  cibil?: string;
  gclid?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
};

const DEFAULT_COUNTRY_CODE = "+91";

/**
 * BumChum wants the dial code and the national number as separate fields, but the
 * form posts them joined ("+919876543210"). Pull them apart so the country code is
 * never duplicated inside `phone`.
 */
export function splitPhone(raw: string, fallbackCode = DEFAULT_COUNTRY_CODE) {
  const digits = (raw || "").replace(/\D/g, "");

  // "+919876543210" / "919876543210" → code 91, national 9876543210
  if (digits.length > 10 && digits.startsWith("91")) {
    return { countryCode: "+91", phone: digits.slice(2) };
  }

  // "09876543210" → drop the trunk prefix
  if (digits.length === 11 && digits.startsWith("0")) {
    return { countryCode: fallbackCode, phone: digits.slice(1) };
  }

  // Already bare ("9876543210"), or something unexpected we pass through as-is.
  return { countryCode: fallbackCode, phone: digits };
}

export async function sendLeadToBumchum(data: BumchumLead) {
  const url =
    "https://talkapiprod.bumchumfinserve.com/api/v1/leads/webhook/create-external-leads";
  const authKey = process.env.BUMCHUM_AUTH_KEY;

  if (!authKey) {
    console.warn(
      "⚠ [BumChum] Aborted: BUMCHUM_AUTH_KEY is not set in the environment.",
    );
    return;
  }

  const { countryCode, phone } = splitPhone(data.phone, data.countryCode);
  console.log(
    `[BumChum] Phone split: "${data.phone}" → code "${countryCode}" + number "${phone}"`,
  );

  // Payload field names live here — adjust in one place if BumChum expects different keys.
  const payload = {
    name: data.name,
    countryCode: "+91",
    phone,
    city: data.city,
    loanAmount: data.loanAmount,
    monthlySalary: data.salary,
    cibilScore: data.cibil || "",
    subSource: process.env.NEXT_PUBLIC_SOURCE_URL || "loaninneed.in",
    source: "GOOGLE_CAMPAIGN_FORM",
    formName: "LOAN_IN_NEED_CAMPAIGN",
    priority: "HIGH",
    categoryName: "LOAN_INQUIRY",
    categoryCode: "LIQ",
    gclid: data.gclid || "",
    utmSource: data.utmSource || "",
    utmMedium: data.utmMedium || "",
    utmCampaign: data.utmCampaign || "",
    utmContent: data.utmContent || "",
    utmTerm: data.utmTerm || "",
  };

  console.log("[BumChum] Request payload:", JSON.stringify(payload, null, 2));

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  const startedAt = Date.now();

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-key": authKey,
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    const elapsed = Date.now() - startedAt;
    const text = await res.text();

    console.log(
      `[BumChum] Response: ${res.status} ${res.statusText} (${elapsed}ms)`,
    );
    console.log(
      "[BumChum] Response headers:",
      JSON.stringify(Object.fromEntries(res.headers), null, 2),
    );
    console.log("[BumChum] Response body:", text || "(empty)");

    if (!res.ok) {
      console.error(
        `❌ [BumChum] Rejected the lead — HTTP ${res.status}: ${text}`,
      );

      return;
    }
  } catch (error) {
    const elapsed = Date.now() - startedAt;
    if (error instanceof Error && error.name === "AbortError") {
      console.error(
        `❌ [BumChum] Timed out after ${elapsed}ms — no response from ${url}`,
      );
    } else {
      console.error(
        `❌ [BumChum] Request failed after ${elapsed}ms (never reached the API):`,
        error,
      );
    }
  } finally {
    clearTimeout(timeout);
  }
}
