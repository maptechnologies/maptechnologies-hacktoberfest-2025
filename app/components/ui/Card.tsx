import React from 'react';
import { CardProps } from '@/types';

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
}) => {
  const baseClasses = 'rounded-xl shadow-lg transition-shadow duration-300';
  
  const variantClasses = {
    default: 'bg-white hover:shadow-xl',
    featured: 'bg-gradient-to-br from-white to-gray-50 hover:shadow-2xl border border-gray-100',
  };
  
  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default Card;