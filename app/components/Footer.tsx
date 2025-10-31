"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
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
            MapTechnologies
          </h2>
          <p className="text-gray-200 text-sm">
            Empowering innovation through technology. We craft modern, scalable,
            and smart digital solutions.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div data-aos="zoom-in" className="text-center">
          <h3 className="text-lg font-semibold mb-3 text-yellow-300">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/about"
                className="hover:text-yellow-300 transition-all duration-300
                         hover:scale-105 hover:translate-x-1 inline-block
                         hover:drop-shadow-sm active:scale-95"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-yellow-300 transition-all duration-300
                         hover:scale-105 hover:translate-x-1 inline-block
                         hover:drop-shadow-sm active:scale-95"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-yellow-300 transition-all duration-300
                         hover:scale-105 hover:translate-x-1 inline-block
                         hover:drop-shadow-sm active:scale-95"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="hover:text-yellow-300 transition-all duration-300
                         hover:scale-105 hover:translate-x-1 inline-block
                         hover:drop-shadow-sm active:scale-95"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Social Links */}
        <div data-aos="fade-left" className="text-center md:text-right">
          <h3 className="text-lg font-semibold mb-3 text-yellow-300">
            Follow Us
          </h3>
          <div className="flex justify-center md:justify-end space-x-5">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="hover:text-yellow-300 transition-all duration-300
                       hover:scale-125 hover:rotate-12 hover:-translate-y-1
                       p-2 rounded-full hover:bg-white/10 hover:shadow-lg
                       hover:shadow-blue-500/30 active:scale-110"
            >
              <Facebook />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              className="hover:text-yellow-300 transition-all duration-300
                       hover:scale-125 hover:rotate-12 hover:-translate-y-1
                       p-2 rounded-full hover:bg-white/10 hover:shadow-lg
                       hover:shadow-blue-400/30 active:scale-110"
            >
              <Twitter />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-yellow-300 transition-all duration-300
                       hover:scale-125 hover:rotate-12 hover:-translate-y-1
                       p-2 rounded-full hover:bg-white/10 hover:shadow-lg
                       hover:shadow-blue-600/30 active:scale-110"
            >
              <Linkedin />
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              className="hover:text-yellow-300 transition-all duration-300
                       hover:scale-125 hover:rotate-12 hover:-translate-y-1
                       p-2 rounded-full hover:bg-white/10 hover:shadow-lg
                       hover:shadow-gray-400/30 active:scale-110"
            >
              <Github />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        data-aos="fade-up"
        className="mt-10 border-t border-white/30 pt-4 text-center text-sm text-gray-200"
      >
        © {new Date().getFullYear()} MapTechnologies. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
