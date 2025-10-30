"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { FOOTER_LINKS, SOCIAL_LINKS, COMPANY_INFO } from "@/constants";
import { initializeAOS } from "@/lib/utils";
import { getIconComponent } from "@/lib/icons";

const Footer = () => {
  useEffect(() => {
    initializeAOS();
  }, []);

  return (
    <footer
      data-aos="fade-up"
      className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-10 mt-16"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1: Brand Info */}
        <div data-aos="fade-right" className="text-center md:text-left">
          <h2 className="text-2xl font-extrabold text-yellow-300 mb-3">
            {COMPANY_INFO.name}
          </h2>
          <p className="text-gray-200 text-sm">
            {COMPANY_INFO.tagline}  
            {COMPANY_INFO.description}
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div data-aos="zoom-in" className="text-center">
          <h3 className="text-lg font-semibold mb-3 text-yellow-300">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {FOOTER_LINKS.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-yellow-300 transition duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Social Links */}
        <div data-aos="fade-left" className="text-center md:text-right">
          <h3 className="text-lg font-semibold mb-3 text-yellow-300">
            Follow Us
          </h3>
          <div className="flex justify-center md:justify-end space-x-5">
            {SOCIAL_LINKS.map((link) => {
              const IconComponent = getIconComponent(link.iconName);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  className="hover:text-yellow-300 transition-all duration-300"
                >
                  <IconComponent />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        data-aos="fade-up"
        className="mt-10 border-t border-white/30 pt-4 text-center text-sm text-gray-200"
      >
        © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
