"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleTrackLoan = () => {
    toast.success("📑 Loan details opened!");
    setMenuOpen(false); 
  };

  return (
    <nav className="bg-white shadow-md w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-1">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="Loan In Need Logo" 
            width={150} 
            height={30} 
            priority 
            style={{ width: "150px", height: "auto" }}
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-8">
          {/* About → Footer */}
          <ScrollLink
            to="footer"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer text-gray-700 hover:text-red-600 font-medium"
          >
            About
          </ScrollLink>
          
          {/* Services → About */}
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer text-gray-700 hover:text-red-600 font-medium"
          >
            Services
          </ScrollLink>
          
          {/* Contact → Call */}
          <a
            href="tel:8796633465"
            className="text-gray-700 hover:text-red-600 font-medium"
          >
            Contact
          </a>
          
          <button
            onClick={handleTrackLoan}
            className="bg-red-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-red-700 transition"
          >
            Track Loan
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <span className="text-2xl">&times;</span> // Close icon
          ) : (
            <span className="text-2xl">&#9776;</span> // Hamburger icon
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">
          {/* About → Footer */}
          <ScrollLink
            to="footer"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={() => setMenuOpen(false)}
            className="block cursor-pointer text-gray-700 hover:text-red-600 font-medium"
          >
            About
          </ScrollLink>
          
          {/* Services → About */}
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={() => setMenuOpen(false)}
            className="block cursor-pointer text-gray-700 hover:text-red-600 font-medium"
          >
            Services
          </ScrollLink>
          
          {/* Contact → Call */}
          <a
            href="tel:8796633465"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-700 hover:text-red-600 font-medium"
          >
            Contact
          </a>
          
          <button
            onClick={handleTrackLoan}
            className="block w-full bg-red-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-red-700 transition"
          >
            Track Loan
          </button>
        </div>
      )}
    </nav>
  );
}
