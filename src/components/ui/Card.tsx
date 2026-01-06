import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  onClick,
  style
}) => {
  const baseStyles = 'bg-[#F5F1EB] rounded-[2rem] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)]';
  const hoverStyles = hover ? 'transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] cursor-pointer' : '';
  const clickStyles = onClick ? 'cursor-pointer' : '';
  
  return (
    <div
      className={`${baseStyles} ${hoverStyles} ${clickStyles} ${className}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  );
};
