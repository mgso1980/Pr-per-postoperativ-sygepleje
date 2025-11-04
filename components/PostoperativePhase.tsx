import React from 'react';
import LearningCard from './LearningCard';
import { HeartPulseIcon, ClipboardCheckIcon, FaceSmileIcon, QuestionMarkCircleIcon } from './IconComponents';
import Quiz from './Quiz';
import { postoperativeQuiz } from '../data/quizData';

interface PostoperativePhaseProps {
    onQuizComplete: (isCompleted: boolean) => void;
}

const PostoperativePhase: React.FC<PostoperativePhaseProps> = ({ onQuizComplete }) => {
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
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Visual_Analog_Scale.svg/1200px-Visual_Analog_Scale.svg.png" alt="Visuel Analog Skala (VAS) for smertevurdering" className="mx-auto mt-4 rounded-lg shadow-sm border border-slate-200" />
      </LearningCard>
      
      <LearningCard title="Test din Viden: Post-operativ" icon={<QuestionMarkCircleIcon />} className="lg:col-span-2">
        <Quiz questions={postoperativeQuiz} onComplete={onQuizComplete} />
      </LearningCard>
    </div>
  );
};

export default PostoperativePhase;