"use client";
import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50"
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <ChevronUp size={24} className="animate-bounce" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;