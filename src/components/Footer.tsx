"use client";
import { Phone } from "lucide-react"; 
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer
        id="footer" 
        className="bg-gray-900 text-gray-300 py-10"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div>
            {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logo1.png" alt="Loan In Need Logo" width={90} height={18} priority />
        </Link>
            <p className="mt-2 text-sm text-gray-400 leading-relaxed">
              Your trusted partner for instant financial solutions. Quick,
              secure, and hassle-free loans.
            </p>
            <p className="mt-3 text-sm text-gray-400 flex items-center">
  <Phone className="w-4 h-4 text-gray-500 mr-2" /> 
  Call:{" "}
  <a href="tel:9266328731" className="hover:text-white ml-1">
    9266328731
  </a>
</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-base">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Loan Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Track Application
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-base">
              <li>
                <a
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-and-conditions"
                  className="text-gray-400 hover:text-white"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Grievance Cell
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm md:text-base text-gray-400">
          © {new Date().getFullYear()} LoanInNeed. All rights reserved. | A Unit
          of Sashi Enterprises Ltd.
        </div>
      </footer>
    </>
  );
}
