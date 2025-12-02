
import React, { useState } from 'react';
import LearningCard from './LearningCard';
import { HeartPulseIcon, ClipboardCheckIcon, FaceSmileIcon, QuestionMarkCircleIcon, CheckCircleIcon } from './IconComponents';
import Quiz from './Quiz';
import { postoperativeQuiz } from '../data/quizData';

interface PostoperativePhaseProps {
    onQuizComplete: (isCompleted: boolean) => void;
}

const PostoperativePhase: React.FC<PostoperativePhaseProps> = ({ onQuizComplete }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleCompletion = (status: boolean) => {
    setIsCompleted(status);
    onQuizComplete(status);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      
      <LearningCard title="Opvågningsforløbet" icon={<HeartPulseIcon />}>
        <p>Dette er fasen, hvor patienten genvinder sit habituelle funktionsniveau efter anæstesi og kirurgi. Fokus er på at håndtere postoperative komplikationer og sikre, at patienten er stabil (ABCDE).</p>
        <h4 className="font-bold mt-4">Typiske komplikationer:</h4>
        <ul className="list-disc list-inside text-sm columns-2">
          <li>PONV (kvalme/opkast)</li>
          <li>Shivering (kulderystelser)</li>
          <li>Smerter</li>
          <li>Infektioner & blødning</li>
          <li>Atelektase & lungeemboli</li>
          <li>DVT (dyb venetrombose)</li>
          <li>Arytmi & ileus</li>
          <li>Konfusion/delirium</li>
        </ul>
      </LearningCard>

      <LearningCard title="Udskrivningskriterier fra Opvågning" icon={<ClipboardCheckIcon />}>
        <p>Udskrivelse sker på baggrund af en samlet vurdering, ofte støttet af et scoringssystem. Kriterierne sikrer, at patienten er tilstrækkeligt restitueret til at kunne overflyttes til en sengeafdeling.</p>
        <p><strong>Sygeplejerske kan udskrive ved:</strong></p>
        <ul className="list-disc list-inside">
            <li>ASA &lt; III</li>
            <li>Ukompliceret kirurgisk indgreb og anæstesi</li>
            <li>Blodtab &le; 500 ml</li>
            <li>Stabil score (fx delscore &le; 1 eller summeret &lt; 4)</li>
        </ul>
         <p><strong>Læge skal vurdere ved:</strong> ASA &gt; III, langvarig anæstesi, større blodtab eller ustabil score.</p>
      </LearningCard>

      <LearningCard title="Smertebehandling" icon={<FaceSmileIcon />} className="lg:col-span-2">
        <p>Det overordnede mål med smertebehandlingen er at minimere postoperative smerter og bivirkninger. Dette resulterer i, at patienten hurtigt kan <strong>mobiliseres og rehabiliteres</strong>.</p>
        
        <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
          <h4 className="text-sm font-bold text-slate-700 mb-2 text-center">Visuel Analog Skala (VAS)</h4>
          <svg viewBox="0 0 400 60" className="w-full h-auto select-none">
            <defs>
              <linearGradient id="vasGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#4ade80', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#facc15', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#ef4444', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            {/* Bar */}
            <rect x="10" y="25" width="380" height="8" rx="4" fill="url(#vasGradient)" stroke="#cbd5e1" strokeWidth="1" />
            
            {/* End Ticks */}
            <line x1="10" y1="20" x2="10" y2="38" stroke="#334155" strokeWidth="2" />
            <line x1="390" y1="20" x2="390" y2="38" stroke="#334155" strokeWidth="2" />
            
            {/* Middle Tick */}
            <line x1="200" y1="25" x2="200" y2="33" stroke="#ffffff" strokeWidth="2" />

            {/* Numbers */}
            <text x="10" y="52" textAnchor="middle" fontSize="12" fill="#334155" fontWeight="bold">0</text>
            <text x="200" y="52" textAnchor="middle" fontSize="12" fill="#334155" fontWeight="bold">5</text>
            <text x="390" y="52" textAnchor="middle" fontSize="12" fill="#334155" fontWeight="bold">10</text>

            {/* Labels */}
            <text x="10" y="15" textAnchor="start" fontSize="11" fill="#475569" fontWeight="500">Ingen smerter</text>
            <text x="390" y="15" textAnchor="end" fontSize="11" fill="#475569" fontWeight="500">Værst tænkelige</text>
          </svg>
          <p className="text-xs text-center text-slate-400 mt-2 italic">Skala fra 0 (ingen smerte) til 10 (værst tænkelige smerte)</p>
        </div>
      </LearningCard>
      
      <LearningCard title="Test din Viden: Post-operativ" icon={<QuestionMarkCircleIcon />} className="lg:col-span-2">
        <Quiz questions={postoperativeQuiz} onComplete={handleCompletion} />
      </LearningCard>

      <div className="col-span-1 lg:col-span-2 text-center pt-4 pb-8">
         {isCompleted ? (
             <div className="inline-flex items-center space-x-2 text-lg font-semibold text-green-700 bg-green-100 py-3 px-6 rounded-lg animate-fade-in">
                 <CheckCircleIcon />
                 <span>Fase gennemført!</span>
             </div>
         ) : (
             <button
                 onClick={() => handleCompletion(true)}
                 className="bg-emerald-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-emerald-700 transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
             >
                 Markér som Gennemført
             </button>
         )}
       </div>
    </div>
  );
};

export default PostoperativePhase;
