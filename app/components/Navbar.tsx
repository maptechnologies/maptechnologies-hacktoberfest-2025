"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    
    // Close mobile menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('nav') && menuOpen) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [menuOpen]);

  // Close menu when pressing Escape key
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [menuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      data-aos="fade-down"
      className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-lg backdrop-blur-md bg-opacity-90"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white tracking-wide flex-shrink-0"
          data-aos="fade-right"
          onClick={() => setMenuOpen(false)}
        >
          MapTechnologies
        </Link>

        {/* Desktop Menu */}
        <ul
          className="hidden md:flex space-x-6 lg:space-x-8 text-white font-medium"
          data-aos="zoom-in"
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="hover:text-yellow-300 transition-all duration-200 relative group px-2 py-1"
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
            className="text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50 rounded-md p-2 transition-all duration-200 hover:bg-white hover:bg-opacity-10"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          menuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <ul className="flex flex-col items-center bg-indigo-700 text-white space-y-1 py-4 shadow-lg border-t border-indigo-500">
          {navLinks.map((link, index) => (
            <li key={link.name} className="w-full">
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center hover:text-yellow-300 hover:bg-indigo-600 transition-all duration-200 text-lg py-3 px-6"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: menuOpen ? 'slideInFromTop 0.3s ease-out forwards' : 'none'
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay for mobile menu */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-[-1] md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
