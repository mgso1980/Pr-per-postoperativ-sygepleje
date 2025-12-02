import React from 'react';
import { Phase } from '../types';
import { CheckCircleIcon } from './IconComponents';

interface ProgressIndicatorProps {
  activePhase: Phase;
  completionStatus: Record<Phase, boolean>;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ activePhase, completionStatus }) => {
  const phases = [
    { phase: Phase.PRE, label: "Præ", color: "sky" },
    { phase: Phase.PER, label: "Per", color: "orange" },
    { phase: Phase.POST, label: "Post", color: "emerald" },
    { phase: Phase.CASE, label: "Case", color: "indigo" },
    { phase: Phase.TOOLS, label: "Værktøj", color: "slate" },
    { phase: Phase.GLOSSARY, label: "Opslag", color: "cyan" },
    { phase: Phase.SIMULATION, label: "Sim", color: "rose" },
  ];

  const getColorClasses = (color: string, isActive: boolean, isCompleted: boolean) => {
    const map: Record<string, { active: string, completed: string, text: string }> = {
      sky: { active: 'border-sky-500 text-sky-600', completed: 'bg-sky-600', text: 'text-sky-700' },
      orange: { active: 'border-orange-500 text-orange-600', completed: 'bg-orange-500', text: 'text-orange-700' },
      emerald: { active: 'border-emerald-500 text-emerald-600', completed: 'bg-emerald-600', text: 'text-emerald-700' },
      indigo: { active: 'border-indigo-500 text-indigo-600', completed: 'bg-indigo-600', text: 'text-indigo-700' },
      slate: { active: 'border-slate-500 text-slate-600', completed: 'bg-slate-600', text: 'text-slate-700' },
      cyan: { active: 'border-cyan-500 text-cyan-600', completed: 'bg-cyan-600', text: 'text-cyan-700' },
      rose: { active: 'border-rose-500 text-rose-600', completed: 'bg-rose-600', text: 'text-rose-700' },
    };

    const theme = map[color] || map.sky;

    if (isCompleted) return `${theme.completed} text-white border-transparent`;
    if (isActive) return `bg-white border-2 ${theme.active} animate-pulse`;
    return 'bg-slate-100 text-slate-400 border-transparent';
  };

  const getLabelColor = (color: string, isActive: boolean, isCompleted: boolean) => {
      if (!isActive && !isCompleted) return 'text-slate-400';
      const map: Record<string, string> = {
        sky: 'text-sky-700',
        orange: 'text-orange-700',
        emerald: 'text-emerald-700',
        indigo: 'text-indigo-700',
        slate: 'text-slate-700',
        cyan: 'text-cyan-700',
        rose: 'text-rose-700',
      };
      return `font-bold ${map[color]}`;
  }

  const getBarColor = (color: string) => {
      const map: Record<string, string> = {
        sky: 'bg-sky-500',
        orange: 'bg-orange-400',
        emerald: 'bg-emerald-500',
        indigo: 'bg-indigo-500',
        slate: 'bg-slate-500',
        cyan: 'bg-cyan-500',
        rose: 'bg-rose-500',
      };
      return map[color] || 'bg-teal-500';
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mb-8 border border-slate-100">
      <div className="flex items-start">
        {phases.map(({ phase, label, color }, index) => {
          const isCompleted = completionStatus[phase];
          const isActive = activePhase === phase;
          
          return (
            <React.Fragment key={phase}>
              <div className={`flex flex-col items-center w-1/${phases.length}`}>
                <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-xs md:text-sm transition-all duration-500 ${getColorClasses(color, isActive, isCompleted)}`}>
                  {isCompleted ? <CheckCircleIcon /> : index + 1}
                </div>
                <p className={`mt-2 text-[10px] md:text-xs text-center uppercase tracking-wide transition-colors duration-300 ${getLabelColor(color, isActive, isCompleted)}`}>{label}</p>
              </div>
              {index < phases.length - 1 && (
                <div className={`flex-1 h-1 mt-4 md:mt-5 mx-1 rounded-full transition-all duration-700 ${completionStatus[phase] ? getBarColor(color) : 'bg-slate-100'}`}></div>
              )}
            </React.Fragment>
          )
        })}
      </div>
    </div>
  );
};

export default ProgressIndicator;