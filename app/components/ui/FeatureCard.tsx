import React from 'react';
import { FeatureCardProps } from '@/types';
import Card from './Card';

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  gradient = 'from-blue-500 to-cyan-500',
}) => {
  return (
    <Card className="p-8 text-center">
      <div className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-full flex items-center justify-center mx-auto mb-6`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  );
};

export default FeatureCard;