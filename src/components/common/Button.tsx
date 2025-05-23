import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-[#1A4F8A] hover:bg-[#0F3B6F] text-white focus:ring-blue-500',
    secondary: 'bg-[#FCAF3D] hover:bg-[#F99D1C] text-[#1A4F8A] focus:ring-[#FCAF3D]',
    outline: 'border border-[#1A4F8A] text-[#1A4F8A] hover:bg-[#F5F8FC] focus:ring-blue-500',
    text: 'text-[#1A4F8A] hover:bg-[#F5F8FC] focus:ring-blue-500'
  };
  
  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3'
  };
  
  const iconSpacing = {
    left: 'mr-2',
    right: 'ml-2'
  };

  return (
    <button
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${fullWidth ? 'w-full' : ''}
        ${disabled || isLoading ? 'opacity-60 cursor-not-allowed' : ''}
        ${className}
      `}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="animate-spin mr-2" size={size === 'sm' ? 16 : size === 'md' ? 18 : 20} />
      ) : icon && iconPosition === 'left' ? (
        <span className={iconSpacing.left}>{icon}</span>
      ) : null}
      
      {children}
      
      {!isLoading && icon && iconPosition === 'right' ? (
        <span className={iconSpacing.right}>{icon}</span>
      ) : null}
    </button>
  );
};

export default Button;