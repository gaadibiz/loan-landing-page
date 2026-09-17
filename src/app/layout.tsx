import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import { siteUrl, isIndexable, OG_IMAGE, SITE_NAME } from "@/constant/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const GTM_ID = "GTM-NGZJ6DKC";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  /* No `template` here.

     `template: "%s | LoanInNeed"` would be the tidy way, but the root title
     already ends in the brand and the sub-pages are few enough to name
     themselves. Adding it would produce "Apply LoanInNeed.in | LoanInNeed".
     Each page says its own name instead. */
  title: "Instant Personal Loan Online | Apply in Minutes — LoanInNeed",
  description:
    "Apply for an instant personal loan with LoanInNeed. Quick approval, minimal paperwork and disbursal to your bank account. A unit of Naveen Finance, an RBI-registered NBFC.",
  applicationName: SITE_NAME,
  keywords: [
    "LoanInNeed",
    "instant personal loan",
    "online loan application",
    "quick loan approval",
    "personal loan India",
    "NBFC personal loan",
    "loan without collateral",
    "salaried personal loan",
  ],
  authors: [{ name: SITE_NAME, url: siteUrl }],
  creator: SITE_NAME,
  publisher: "Naveen Finance",
  /* The footer prints a support number as plain text and the thank-you page
     links a WhatsApp number. Left to itself iOS Safari also auto-links every
     loan amount and tenure in the form as a phone number, which looks broken.
     The real numbers are explicit <a href="tel:"> links, so nothing is lost by
     turning the guessing off. */
  formatDetection: { telephone: false, address: false, email: false },
  robots: {
    index: isIndexable,
    follow: isIndexable,
    googleBot: {
      index: isIndexable,
      follow: isIndexable,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/logo1.png",
    shortcut: "/logo1.png",
    apple: "/logo1.png",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Instant Personal Loan Online | Apply in Minutes — LoanInNeed",
    description:
      "Quick approval, minimal paperwork, money in your account fast. Apply online with LoanInNeed — a unit of Naveen Finance, an RBI-registered NBFC.",
    siteName: SITE_NAME,
    locale: "en_IN",
    images: [
      {
        url: OG_IMAGE.url,
        width: OG_IMAGE.width,
        height: OG_IMAGE.height,
        alt: "LoanInNeed — instant personal loans online",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instant Personal Loan Online | Apply in Minutes — LoanInNeed",
    description:
      "Quick approval, minimal paperwork, money in your account fast. Apply online with LoanInNeed.",
    images: [OG_IMAGE.url],
  },
  category: "Finance",
  classification: "Personal Loans & Lending",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager — must stay the first thing in <head> */}
        {/* eslint-disable-next-line @next/next/next-script-for-ga --
            deliberate: `next/script` with `afterInteractive` injects into the
            body after hydration, so the snippet would never reach the served
            <head> the way Google's install instructions require. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        {/* Google Tag Manager (noscript) — must stay the first thing in <body> */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* Google Ads gtag.js */}
        <Script
          id="gtag-src"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-10980985072"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-10980985072');
          `}
        </Script>

        {/* ✅ Global Navbar */}
        <Navbar />

        {/* ✅ Page Content */}
        <main className="min-h-screen">{children}</main>

        {/* ✅ Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
