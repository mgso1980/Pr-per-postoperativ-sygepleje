import React from 'react';
import { Phase } from '../types';
import { CheckCircleIcon } from './IconComponents';

interface ProgressIndicatorProps {
  activePhase: Phase;
  completionStatus: Record<Phase, boolean>;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ activePhase, completionStatus }) => {
  const phases = [
    { phase: Phase.PRE, label: "Præ-operativ" },
    { phase: Phase.PER, label: "Per-operativ" },
    { phase: Phase.POST, label: "Post-operativ" },
    { phase: Phase.CASE, label: "Casearbejde" },
    { phase: Phase.TOOLS, label: "Værktøjer" },
    { phase: Phase.GLOSSARY, label: "Opslagsværk" },
    { phase: Phase.SIMULATION, label: "Simulation" },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
      <h2 className="text-sm font-bold text-slate-600 mb-3 text-center">Dit Fremskridt</h2>
      <div className="flex items-start">
        {phases.map(({ phase, label }, index) => (
          <React.Fragment key={phase}>
            <div className={`flex flex-col items-center w-1/${phases.length}`}>
              <div className={`${
                  completionStatus[phase] 
                    ? 'bg-teal-600 text-white' 
                    : activePhase === phase 
                    ? 'border-2 border-teal-500 text-teal-600 animate-pulse' 
                    : 'bg-slate-200 text-slate-500'
                } w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 flex-shrink-0`}>
                {completionStatus[phase] ? <CheckCircleIcon /> : index + 1}
              </div>
              <p className={`${
                  completionStatus[phase] 
                    ? 'text-teal-700 font-semibold' 
                    : activePhase === phase 
                    ? 'text-teal-600 font-bold'
                    : 'text-slate-500'
                } mt-2 text-xs md:text-sm text-center`}>{label}</p>
            </div>
            {index < phases.length - 1 && (
              <div className={`flex-1 h-1 mt-4 mx-1 rounded-full transition-all duration-500 ${completionStatus[phase] ? 'bg-teal-500' : 'bg-slate-200'}`}></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;