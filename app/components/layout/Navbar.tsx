"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, COMPANY_INFO } from "@/constants";
import { initializeAOS } from "@/lib/utils";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    initializeAOS();
  }, []);

  return (
    <nav
      data-aos="fade-down"
      className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-lg backdrop-blur-md bg-opacity-90"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white tracking-wide"
          data-aos="fade-right"
        >
          {COMPANY_INFO.name}
        </Link>

        {/* Desktop Menu */}
        <ul
          className="hidden md:flex space-x-8 text-white font-medium"
          data-aos="zoom-in"
        >
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="hover:text-yellow-300 transition-all duration-200 relative group"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden" data-aos="fade-left">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul
          data-aos="fade-down"
          className="md:hidden flex flex-col items-center bg-indigo-700 text-white space-y-4 py-6 shadow-lg"
        >
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-300 transition duration-200 text-lg"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
