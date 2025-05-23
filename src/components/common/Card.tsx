import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  elevation?: 'none' | 'low' | 'medium' | 'high';
  onClick?: () => void;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  elevation = 'medium',
  onClick,
  hoverEffect = false
}) => {
  const elevationClasses = {
    none: '',
    low: 'shadow-sm',
    medium: 'shadow-md',
    high: 'shadow-lg'
  };

  const hoverClasses = hoverEffect 
    ? 'transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer' 
    : '';

  return (
    <div 
      className={`
        bg-white rounded-lg overflow-hidden 
        ${elevationClasses[elevation]} 
        ${hoverClasses} 
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;