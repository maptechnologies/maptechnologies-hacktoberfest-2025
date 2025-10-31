import AOS from "aos";
import "aos/dist/aos.css";

/**
 * Initialize AOS (Animate On Scroll) library with default configuration
 */
export const initializeAOS = () => {
  AOS.init({ 
    duration: 800, 
    once: true 
  });
};

/**
 * Utility function to combine class names conditionally
 */
export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

/**
 * Generate gradient class string for Tailwind CSS
 */
export const getGradientClass = (gradient: string): string => {
  return `bg-gradient-to-r ${gradient}`;
};