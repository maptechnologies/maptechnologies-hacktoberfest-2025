import { Facebook, Twitter, Linkedin, Github } from 'lucide-react';
import { SocialLink } from '@/types';

/**
 * Get the appropriate icon component based on the icon name
 */
export const getIconComponent = (iconName: SocialLink['iconName']) => {
  const iconMap = {
    Facebook,
    Twitter,
    Linkedin,
    Github,
  };
  
  return iconMap[iconName];
};