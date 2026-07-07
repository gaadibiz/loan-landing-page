"use client";
import { Phone, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "About Us", href: "#" },
  { label: "Loan Services", href: "#" },
  { label: "Track Application", href: "#" },
  { label: "Contact Support", href: "#" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Refund Policy", href: "#" },
  { label: "Grievance Cell", href: "#" },
];

function SectionHeading({ title }: { title: string }) {
  return (
    <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
      <span className="w-1 h-4 bg-red-500 rounded-full inline-block flex-shrink-0" />
      {title}
    </h3>
  );
}

function FooterLink({ label, href }: { label: string; href: string }) {
  return (
    <li>
      <a
        href={href}
        className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-red-400 transition-colors group"
      >
        <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
        {label}
      </a>
    </li>
  );
}

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-gray-300">
      {/* Red gradient top accent */}
      <div className="h-1 bg-gradient-to-r from-red-800 via-red-500 to-red-800" />

      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand Column */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" className="inline-flex items-center mb-5">
            <Image src="/logo1.png" alt="Loan In Need Logo" width={100} height={22} priority />
          </Link>
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            Your trusted partner for instant financial solutions. Quick, secure, and hassle-free loans designed for your urgent financial needs.
          </p>
          <a
            href="tel:9266328731"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
          >
            <Phone className="w-4 h-4" />
            9266328731
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <SectionHeading title="Quick Links" />
          <ul className="space-y-3">
            {quickLinks.map((l) => (
              <FooterLink key={l.label} {...l} />
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <SectionHeading title="Legal" />
          <ul className="space-y-3">
            {legalLinks.map((l) => (
              <FooterLink key={l.label} {...l} />
            ))}
          </ul>
        </div>

        {/* Contact & CTA */}
        <div>
          <SectionHeading title="Get in Touch" />
          <div className="space-y-3 text-sm text-gray-400 mb-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-red-500 flex-shrink-0" />
              <a href="tel:9266328731" className="hover:text-white transition-colors">
                +91 9266328731
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-red-500 flex-shrink-0" />
              <span>India</span>
            </div>
          </div>

          {/* Apply CTA card */}
          <div className="p-4 bg-gray-800 rounded-xl border border-gray-700">
            <p className="text-xs text-gray-400 mb-2">Need a loan right now?</p>
            <a
              href="#loan-form"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-400 hover:text-red-300 transition-colors group"
            >
              Apply Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <span>
            © {new Date().getFullYear()} LoanInNeed. All rights reserved. | A Unit of Sashi Enterprises Ltd.
          </span>
          <span className="flex items-center gap-4">
            <a href="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy</a>
            <span className="text-gray-700">|</span>
            <a href="/terms-and-conditions" className="hover:text-gray-300 transition-colors">Terms</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
