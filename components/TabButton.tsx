
import React from 'react';

interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ label, isActive, onClick }) => {
  const baseClasses = "w-full text-center font-semibold text-sm md:text-base py-3 px-2 rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500";
  const activeClasses = "bg-teal-600 text-white shadow";
  const inactiveClasses = "bg-slate-200 text-slate-700 hover:bg-slate-300";

  return (
    <button
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default TabButton;
