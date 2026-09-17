import type { Metadata } from "next";

/* `thank-you/page.tsx` is a client component (it reads `useSearchParams`), and
   a client component cannot export `metadata` — hence this layout, which
   exists only to carry it. */
export const metadata: Metadata = {
  title: "Application Received — LoanInNeed",
  description: "Thank you. Your loan application has been received.",
  /* Hard noindex, regardless of `isIndexable`. This is the post-conversion
     page: it should never be a search result, both because landing on it
     directly is meaningless to a visitor and because an indexed thank-you page
     lets anyone trigger the Ads conversion tag from organic traffic. */
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function ThankYouLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
