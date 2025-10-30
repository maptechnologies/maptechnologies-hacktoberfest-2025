import { NavLink } from '@/types';

export const NAV_LINKS: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export const FOOTER_LINKS: NavLink[] = [
  { name: "About Us", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy-policy" },
];

export const SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    iconName: "Facebook" as const,
  },
  {
    name: "Twitter", 
    href: "https://twitter.com",
    iconName: "Twitter" as const,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com", 
    iconName: "Linkedin" as const,
  },
  {
    name: "GitHub",
    href: "https://github.com",
    iconName: "Github" as const,
  },
];

export const COMPANY_INFO = {
  name: "MapTechnologies",
  tagline: "Empowering innovation through technology.",
  description: "We craft modern, scalable, and smart digital solutions.",
  fullDescription: "Empowering innovation through technology. We craft modern, scalable, and smart digital solutions that transform your ideas into reality."
};