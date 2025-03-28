
import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
  buttonText?: string;
  buttonLink?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period,
  features,
  isPopular = false,
  buttonText = 'Choose Plan',
  buttonLink = '/contact',
}) => {
  return (
    <div 
      className={cn(
        'gym-card overflow-hidden border transition-all duration-300',
        isPopular 
          ? 'border-teal scale-105 shadow-xl' 
          : 'border-gray-200 hover:border-teal/50'
      )}
    >
      {isPopular && (
        <div className="bg-teal text-white text-center py-2 text-sm font-semibold">
          Most Popular
        </div>
      )}
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <div className="flex items-end mb-6">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-gray-500 ml-2">/{period}</span>
        </div>
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check size={20} className="text-teal mr-2 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Link 
          to={buttonLink} 
          className={cn(
            'block w-full text-center py-3 px-6 rounded-md font-semibold transition-all duration-300',
            isPopular 
              ? 'bg-brightRed hover:bg-brightRed/90 text-white' 
              : 'bg-gray-100 hover:bg-teal hover:text-white'
          )}
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;
