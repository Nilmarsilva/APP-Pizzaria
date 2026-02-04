import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'admin';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-bold transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none';

  const variants = {
    primary: 'bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary/90',
    secondary: 'bg-primary-blue text-white shadow-lg shadow-primary-blue/20 hover:bg-primary-blue/90',
    admin: 'bg-primary-admin text-white shadow-lg shadow-primary-admin/20 hover:bg-primary-admin/90',
    outline: 'border-2 border-primary text-primary hover:bg-primary/5',
    ghost: 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-xl',
    icon: 'p-2 rounded-full'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="material-symbols-outlined animate-spin">progress_activity</span>
      ) : children}
    </button>
  );
};

export default Button;
