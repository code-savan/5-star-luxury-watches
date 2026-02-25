
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'px-10 py-4 text-[10px] tracking-[0.3em] uppercase transition-all duration-500 font-bold disabled:opacity-50 relative overflow-hidden group';
  
  const variants = {
    primary: 'bg-stone-950 text-white hover:bg-gold-400 shadow-xl',
    secondary: 'bg-gold-400 text-white hover:bg-stone-950',
    outline: 'bg-transparent border border-stone-200 text-stone-900 hover:border-gold-400 hover:text-gold-400'
  };

  const widthStyle = fullWidth ? 'w-full' : 'w-auto';

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
    </button>
  );
};
