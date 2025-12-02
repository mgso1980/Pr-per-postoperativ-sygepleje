import React from 'react';

interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  color?: 'teal' | 'sky' | 'orange' | 'emerald' | 'indigo' | 'slate' | 'cyan' | 'rose';
}

const TabButton: React.FC<TabButtonProps> = ({ label, isActive, onClick, color = 'teal' }) => {
  const baseClasses = "w-full text-center font-semibold text-xs sm:text-sm md:text-base py-3 px-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const colorVariants: Record<string, string> = {
    teal: 'bg-teal-600 focus:ring-teal-500 shadow-teal-200',
    sky: 'bg-sky-600 focus:ring-sky-500 shadow-sky-200',
    orange: 'bg-orange-500 focus:ring-orange-400 shadow-orange-200',
    emerald: 'bg-emerald-600 focus:ring-emerald-500 shadow-emerald-200',
    indigo: 'bg-indigo-600 focus:ring-indigo-500 shadow-indigo-200',
    slate: 'bg-slate-600 focus:ring-slate-500 shadow-slate-200',
    cyan: 'bg-cyan-600 focus:ring-cyan-500 shadow-cyan-200',
    rose: 'bg-rose-600 focus:ring-rose-500 shadow-rose-200',
  };

  // Hover tints for inactive state
  const hoverVariants: Record<string, string> = {
    teal: 'hover:bg-teal-50 hover:text-teal-700',
    sky: 'hover:bg-sky-50 hover:text-sky-700',
    orange: 'hover:bg-orange-50 hover:text-orange-700',
    emerald: 'hover:bg-emerald-50 hover:text-emerald-700',
    indigo: 'hover:bg-indigo-50 hover:text-indigo-700',
    slate: 'hover:bg-slate-100 hover:text-slate-700',
    cyan: 'hover:bg-cyan-50 hover:text-cyan-700',
    rose: 'hover:bg-rose-50 hover:text-rose-700',
  }

  const activeClass = `${colorVariants[color]} text-white shadow-md transform scale-105`;
  const inactiveClass = `bg-transparent text-slate-500 ${hoverVariants[color]}`;

  return (
    <button
      className={`${baseClasses} ${isActive ? activeClass : inactiveClass}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default TabButton;