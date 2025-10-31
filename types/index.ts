export interface NavLink {
  name: string;
  href: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'featured';
}

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient?: string;
}

export interface SocialLink {
  name: string;
  href: string;
  iconName: 'Facebook' | 'Twitter' | 'Linkedin' | 'Github';
}