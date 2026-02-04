import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  icon,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label className="text-[#111618] dark:text-gray-200 text-sm font-semibold ml-1">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
            {icon}
          </span>
        )}
        <input
          className={`
            w-full h-14 bg-white dark:bg-gray-800 border rounded-xl outline-none transition-all dark:text-white placeholder:text-gray-400
            ${icon ? 'pl-12' : 'pl-4'} pr-4
            ${error ? 'border-red-500 ring-2 ring-red-500/10' : 'border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary/20 focus:border-primary'}
            ${className}
          `}
          {...props}
        />
      </div>
      {error && <p className="text-red-500 text-xs ml-1 font-medium">{error}</p>}
    </div>
  );
};

export default Input;
