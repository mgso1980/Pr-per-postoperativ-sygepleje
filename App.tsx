import React, { useState } from 'react';
import { Phase } from './types';
import TabButton from './components/TabButton';
import PreoperativePhase from './components/PreoperativePhase';
import PeroperativePhase from './components/PeroperativePhase';
import PostoperativePhase from './components/PostoperativePhase';
import CaseWorkPhase from './components/CaseWorkPhase';
import ToolsAndCommunicationPhase from './components/ToolsAndCommunicationPhase';
import SimulationPhase from './components/SimulationPhase';
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
    [Phase.SIMULATION]: false,
  });

  const handlePhaseComplete = (phase: Phase, isCompleted: boolean) => {
    setCompletionStatus(prev => ({ ...prev, [phase]: isCompleted }));
  };

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
      case Phase.SIMULATION:
        return <SimulationPhase onComplete={(isCompleted) => handlePhaseComplete(Phase.SIMULATION, isCompleted)} />;
      default:
        return <PreoperativePhase onQuizComplete={(isCompleted) => handlePhaseComplete(Phase.PRE, isCompleted)} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans">
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 md:px-8 md:py-5">
          <div className="flex items-center space-x-4">
            <div className="text-teal-600">
              <StethoscopeIcon />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-700 tracking-tight">
              Præ-, Per- og Postoperativ Sygepleje
            </h1>
          </div>
          <p className="text-slate-500 mt-1">Et interaktivt læringsforløb</p>
        </div>
      </header>
      
      <main className="container mx-auto p-4 md:p-8">
        <ProgressIndicator activePhase={activePhase} completionStatus={completionStatus} />

        <div className="bg-white rounded-lg shadow-sm p-2 md:p-3 mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            <TabButton
              label="Præ-operativ fase"
              isActive={activePhase === Phase.PRE}
              onClick={() => setActivePhase(Phase.PRE)}
            />
            <TabButton
              label="Per-operativ fase"
              isActive={activePhase === Phase.PER}
              onClick={() => setActivePhase(Phase.PER)}
            />
            <TabButton
              label="Post-operativ fase"
              isActive={activePhase === Phase.POST}
              onClick={() => setActivePhase(Phase.POST)}
            />
            <TabButton
              label="Casearbejde"
              isActive={activePhase === Phase.CASE}
              onClick={() => setActivePhase(Phase.CASE)}
            />
             <TabButton
              label="Værktøjer"
              isActive={activePhase === Phase.TOOLS}
              onClick={() => setActivePhase(Phase.TOOLS)}
            />
             <TabButton
              label="Simulationstræning"
              isActive={activePhase === Phase.SIMULATION}
              onClick={() => setActivePhase(Phase.SIMULATION)}
            />
          </div>
        </div>
        
        <div className="animate-fade-in">
          {renderContent()}
        </div>
      </main>

      <footer className="text-center p-4 text-slate-500 text-sm">
        <p>Udviklet for 5. Semester v. Adjunkt Maria Gravgaard Sørensen</p>
      </footer>
    </div>
  );
};

export default App;