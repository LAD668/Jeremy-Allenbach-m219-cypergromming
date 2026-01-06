import React from 'react';

interface AlertProps {
  children: React.ReactNode;
  variant?: 'info' | 'warning' | 'danger' | 'success';
  icon?: React.ReactNode;
  className?: string;
}

export const Alert: React.FC<AlertProps> = ({
  children,
  variant = 'info',
  icon,
  className = ''
}) => {
  const variantStyles = {
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    danger: 'bg-red-50 border-red-200 text-red-800',
    success: 'bg-green-50 border-green-200 text-green-800'
  };
  
  return (
    <div className={`border-l-4 rounded-2xl p-5 ${variantStyles[variant]} ${className}`}>
      <div className="flex items-start gap-3">
        {icon && <div className="flex-shrink-0">{icon}</div>}
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};
