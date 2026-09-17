import type { Metadata } from "next";

/* Title and description come from the root layout; this exists to pin the
   canonical. Google Ads appends utm_* and gclid to every inbound URL, and
   without this each variant is a distinct indexable URL serving identical
   copy. */
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

import MainSection from "@/components/MainSection";
import About from "@/components/About";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section id="hero">
        <MainSection />
      </section>
      <section id="about">
        <About />
      </section>
    </main>
  );
}
