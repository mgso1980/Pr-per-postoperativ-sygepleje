
import React, { useState } from 'react';
import LearningCard from './LearningCard';
import { TeamIcon, SyringeIcon, ClipboardCheckIcon, QuestionMarkCircleIcon, CheckCircleIcon } from './IconComponents';
import Quiz from './Quiz';
import { peroperativeQuiz } from '../data/quizData';
import DragAndDropChecklist from './DragAndDropChecklist';

interface PeroperativePhaseProps {
    onQuizComplete: (isCompleted: boolean) => void;
}

const PeroperativePhase: React.FC<PeroperativePhaseProps> = ({ onQuizComplete }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleCompletion = (status: boolean) => {
    setIsCompleted(status);
    onQuizComplete(status);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      <LearningCard title="Team og Patientsikkerhed" icon={<TeamIcon />} className="md:col-span-1">
        <p>Under det peroperative forløb er der højt fokus på <strong>patientsikkerhed</strong> og <strong>teamsamarbejde</strong> på operationsstuen.</p>
        <h4 className="font-bold mt-4">Teamet består typisk af:</h4>
        <ul className="list-disc list-inside">
          <li>Kirurg(er)</li>
          <li>Anæstesilæge</li>
          <li>Anæstesisygeplejerske(r)</li>
          <li>Operationssygeplejerske(r)</li>
          <li>Evt. portør</li>
        </ul>
      </LearningCard>

      <LearningCard title="Sikker Kirurgi Tjekliste" icon={<ClipboardCheckIcon />} className="md:col-span-2">
        <p>WHO's tjekliste for sikker kirurgi er et kritisk værktøj til at forbedre sikkerheden. Den sikrer, at kritiske punkter gennemgås i tre faser.</p>
        <p className="mt-2"><strong>Din opgave:</strong> Træk opgaverne fra 'Opgaver'-feltet over i den korrekte fase-kolonne ('Tjek Ind', 'Time Out' eller 'Tjek Ud') for at samle tjeklisten.</p>
        <DragAndDropChecklist />
      </LearningCard>

      <LearningCard title="Anæstesiformer" icon={<SyringeIcon />} className="lg:col-span-3">
        <p>Anæstesi (fra græsk: <em>an-</em> "nægtelse" og <em>aisthesis</em> "fornemmelse") er en central del af operationen.</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
          <div className="border border-slate-200 p-4 rounded-lg flex flex-col justify-between">
            <div>
              <h4 className="font-bold">Generel/Universel Anæstesi</h4>
              <p className="text-sm">Patienten er bevidstløs og smertefri med hæmmede reflekser. Opnås med en kombination af:</p>
              <ul className="list-disc list-inside text-sm mt-2">
                <li><strong>Analgetika</strong> (smertestillende)</li>
                <li><strong>Hypnotika</strong> (sovemedicin)</li>
                <li><strong>Relaksantia</strong> (muskelrelakserende)</li>
              </ul>
              <p className="text-sm mt-2">Kræver nøje ABCDE-overvågning.</p>
            </div>
            <a href="https://video.rn.dk/sadan-foregar-bedovelse-i-fuld" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm text-teal-600 font-semibold hover:text-teal-700 transition-colors">
              Se video om fuld bedøvelse &rarr;
            </a>
          </div>
          <div className="border border-slate-200 p-4 rounded-lg flex flex-col justify-between">
            <div>
              <h4 className="font-bold">Regional Anæstesi</h4>
              <p className="text-sm">Bedøvelse af en større del af kroppen, mens patienten kan være vågen.</p>
              <ul className="list-disc list-inside text-sm mt-2">
                <li><strong>Spinal:</strong> Lokalanæstesi i subarachnoidalrummet. Hurtig virkning (ca. 10 min), varighed 4-6 timer. Til indgreb under navleniveau.</li>
                <li><strong>Epidural:</strong> Kateter i epiduralrummet. Kan bruges til både per- og postoperativ smertebehandling.</li>
              </ul>
            </div>
            <a href="https://www.helbredsprofilen.dk/temaer/bedoevelse/hvad-er-spinalbedoevelse" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm text-teal-600 font-semibold hover:text-teal-700 transition-colors">
              Læs mere og se video &rarr;
            </a>
          </div>
          <div className="border border-slate-200 p-4 rounded-lg flex flex-col justify-between">
            <div>
              <h4 className="font-bold">Lokal Anæstesi</h4>
              <p className="text-sm">Lokalanæstesi indsprøjtes lokalt omkring operationsfeltet eller nervebaner. ABCDE er som udgangspunkt upåvirket, men kræver minimum overvågning.</p>
            </div>
          </div>
        </div>
      </LearningCard>

      <LearningCard title="Test din Viden: Per-operativ" icon={<QuestionMarkCircleIcon />} className="lg:col-span-3">
        <Quiz questions={peroperativeQuiz} onComplete={handleCompletion} />
      </LearningCard>

      <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center pt-4 pb-8">
         {isCompleted ? (
             <div className="inline-flex items-center space-x-2 text-lg font-semibold text-green-700 bg-green-100 py-3 px-6 rounded-lg animate-fade-in">
                 <CheckCircleIcon />
                 <span>Fase gennemført!</span>
             </div>
         ) : (
             <button
                 onClick={() => handleCompletion(true)}
                 className="bg-orange-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400"
             >
                 Markér som Gennemført
             </button>
         )}
       </div>
    </div>
  );
};

export default PeroperativePhase;
