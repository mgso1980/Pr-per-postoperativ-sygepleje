
import React from 'react';

interface LearningCardProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const LearningCard: React.FC<LearningCardProps> = ({ title, icon, children, className = '' }) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden transition-shadow hover:shadow-xl ${className}`}>
      <div className="p-6">
        <div className="flex items-center mb-4">
          {icon && <div className="text-teal-600 mr-4">{icon}</div>}
          <h3 className="text-xl font-bold text-slate-800">{title}</h3>
        </div>
        <div className="text-slate-600 space-y-4 prose prose-sm md:prose-base max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
};

export default LearningCard;
