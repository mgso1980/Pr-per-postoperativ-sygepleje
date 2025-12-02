import React, { useState } from 'react';
import { Phase } from './types';
import TabButton from './components/TabButton';
import PreoperativePhase from './components/PreoperativePhase';
import PeroperativePhase from './components/PeroperativePhase';
import PostoperativePhase from './components/PostoperativePhase';
import CaseWorkPhase from './components/CaseWorkPhase';
import ToolsAndCommunicationPhase from './components/ToolsAndCommunicationPhase';
import SimulationPhase from './components/SimulationPhase';
import GlossaryPhase from './components/GlossaryPhase';
import { StethoscopeIcon } from './components/IconComponents';
import ProgressIndicator from './components/ProgressIndicator';

const App: React.FC = () => {
  const [activePhase, setActivePhase] = useState<Phase>(Phase.PRE);
  const [completionStatus, setCompletionStatus] = useState<Record<Phase, boolean>>({
    [Phase.PRE]: false,
    [Phase.PER]: false,
    [Phase.POST]: false,
    [Phase.CASE]: false,
    [Phase.TOOLS]: false,
    [Phase.GLOSSARY]: false,
    [Phase.SIMULATION]: false,
  });

  const handlePhaseComplete = (phase: Phase, isCompleted: boolean) => {
    setCompletionStatus(prev => ({ ...prev, [phase]: isCompleted }));
  };

  // Map phases to specific color themes
  const getPhaseTheme = (phase: Phase) => {
    switch (phase) {
      case Phase.PRE: return { color: 'sky', label: 'Præ-operativ' };
      case Phase.PER: return { color: 'orange', label: 'Per-operativ' };
      case Phase.POST: return { color: 'emerald', label: 'Post-operativ' };
      case Phase.CASE: return { color: 'indigo', label: 'Casearbejde' };
      case Phase.TOOLS: return { color: 'slate', label: 'Værktøjer' };
      case Phase.GLOSSARY: return { color: 'cyan', label: 'Opslagsværk' };
      case Phase.SIMULATION: return { color: 'rose', label: 'Simulation' };
      default: return { color: 'teal', label: 'Præ-operativ' };
    }
  };

  const currentTheme = getPhaseTheme(activePhase);

  // Dynamic header classes based on theme
  const getHeaderClass = (color: string) => {
    const colorMap: Record<string, string> = {
      sky: 'text-sky-600',
      orange: 'text-orange-600',
      emerald: 'text-emerald-600',
      indigo: 'text-indigo-600',
      slate: 'text-slate-600',
      cyan: 'text-cyan-600',
      rose: 'text-rose-600',
      teal: 'text-teal-600',
    };
    return colorMap[color] || 'text-teal-600';
  };

  const getBorderClass = (color: string) => {
     const colorMap: Record<string, string> = {
      sky: 'border-sky-500',
      orange: 'border-orange-500',
      emerald: 'border-emerald-500',
      indigo: 'border-indigo-500',
      slate: 'border-slate-500',
      cyan: 'border-cyan-500',
      rose: 'border-rose-500',
      teal: 'border-teal-500',
    };
    return colorMap[color] || 'border-teal-500';
  }

  const renderContent = () => {
    switch (activePhase) {
      case Phase.PRE:
        return <PreoperativePhase onQuizComplete={(isCompleted) => handlePhaseComplete(Phase.PRE, isCompleted)} />;
      case Phase.PER:
        return <PeroperativePhase onQuizComplete={(isCompleted) => handlePhaseComplete(Phase.PER, isCompleted)} />;
      case Phase.POST:
        return <PostoperativePhase onQuizComplete={(isCompleted) => handlePhaseComplete(Phase.POST, isCompleted)} />;
      case Phase.CASE:
        return <CaseWorkPhase onComplete={(isCompleted) => handlePhaseComplete(Phase.CASE, isCompleted)} />;
      case Phase.TOOLS:
        return <ToolsAndCommunicationPhase onComplete={(isCompleted) => handlePhaseComplete(Phase.TOOLS, isCompleted)} />;
      case Phase.GLOSSARY:
        return <GlossaryPhase onComplete={(isCompleted) => handlePhaseComplete(Phase.GLOSSARY, isCompleted)} />;
      case Phase.SIMULATION:
        return <SimulationPhase onComplete={(isCompleted) => handlePhaseComplete(Phase.SIMULATION, isCompleted)} />;
      default:
        return <PreoperativePhase onQuizComplete={(isCompleted) => handlePhaseComplete(Phase.PRE, isCompleted)} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans transition-colors duration-500">
      <header className={`bg-white shadow-md sticky top-0 z-10 border-t-4 ${getBorderClass(currentTheme.color)} transition-colors duration-500`}>
        <div className="container mx-auto px-4 py-4 md:px-8 md:py-5">
          <div className="flex items-center space-x-4">
            <div className={`${getHeaderClass(currentTheme.color)} transition-colors duration-500`}>
              <StethoscopeIcon />
            </div>
            <div>
              <h1 className={`text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-500 ${getHeaderClass(currentTheme.color)}`}>
                {currentTheme.label}
              </h1>
            </div>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto p-4 md:p-8">
        <ProgressIndicator activePhase={activePhase} completionStatus={completionStatus} />

        <div className="bg-white rounded-xl shadow-sm p-2 md:p-3 mb-8 border border-slate-100">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2">
            <TabButton
              label="Præ-operativ"
              isActive={activePhase === Phase.PRE}
              onClick={() => setActivePhase(Phase.PRE)}
              color="sky"
            />
            <TabButton
              label="Per-operativ"
              isActive={activePhase === Phase.PER}
              onClick={() => setActivePhase(Phase.PER)}
              color="orange"
            />
            <TabButton
              label="Post-operativ"
              isActive={activePhase === Phase.POST}
              onClick={() => setActivePhase(Phase.POST)}
              color="emerald"
            />
            <TabButton
              label="Casearbejde"
              isActive={activePhase === Phase.CASE}
              onClick={() => setActivePhase(Phase.CASE)}
              color="indigo"
            />
             <TabButton
              label="Værktøjer"
              isActive={activePhase === Phase.TOOLS}
              onClick={() => setActivePhase(Phase.TOOLS)}
              color="slate"
            />
             <TabButton
              label="Opslagsværk"
              isActive={activePhase === Phase.GLOSSARY}
              onClick={() => setActivePhase(Phase.GLOSSARY)}
              color="cyan"
            />
             <TabButton
              label="Simulation"
              isActive={activePhase === Phase.SIMULATION}
              onClick={() => setActivePhase(Phase.SIMULATION)}
              color="rose"
            />
          </div>
        </div>
        
        <div className="animate-fade-in">
          {renderContent()}
        </div>
      </main>

      <footer className="text-center p-8 text-slate-400 text-sm">
        <p>Udviklet for 5. Semester v. Adjunkt Maria Gravgaard Sørensen</p>
      </footer>
    </div>
  );
};

export default App;