
import React from 'react';
import LearningCard from './LearningCard';
import { ClipboardCheckIcon, ChartBarIcon, NoSymbolIcon, AbcdeIcon, QuestionMarkCircleIcon } from './IconComponents';
import Quiz from './Quiz';
import { preoperativeQuiz } from '../data/quizData';

interface PreoperativePhaseProps {
    onQuizComplete: (isCompleted: boolean) => void;
}

const PreoperativePhase: React.FC<PreoperativePhaseProps> = ({ onQuizComplete }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <LearningCard title="Kerneområder i Accelereret Forløb" icon={<ClipboardCheckIcon />} className="lg:col-span-2">
        <p>Det accelererede operationsforløb sigter mod at nedsætte komplikationsrisiko og sikre hurtigere rekonvalescens. Dette opnås ved at fokusere på fem kerneområder:</p>
        <ul className="list-disc list-inside">
          <li><strong>Præoperativ information:</strong> Forbereder patienten mentalt og reducerer angst.</li>
          <li><strong>Stress-reduktion:</strong> Minimerer kroppens fysiologiske stressrespons på kirurgi.</li>
          <li><strong>Smertebehandling:</strong> Effektiv smertekontrol muliggør tidlig mobilisering.</li>
          <li><strong>Mobilisering:</strong> Hurtig tilbagevenden til aktivitet for at forhindre komplikationer som DVT og lungeproblemer.</li>
          <li><strong>Ernæring:</strong> Sikrer at patienten har de nødvendige ressourcer til heling.</li>
        </ul>
      </LearningCard>
      
      <LearningCard title="Informeret Samtykke" icon={<ClipboardCheckIcon />}>
        <p>Informeret samtykke er fundamentalt. Det indebærer, at patienten har modtaget, forstået og accepteret information om indgrebet.</p>
        <ul className="list-disc list-inside">
          <li>Kan tilsidesættes ved <strong>vital indikation</strong> (akut behov).</li>
          <li>Patienten har ret til at <strong>frabede sig information</strong>.</li>
          <li>Det er afgørende at <strong>dokumentere</strong> både givet information og samtykke (eller mangel på samme).</li>
        </ul>
      </LearningCard>

      <LearningCard title="Risikovurdering af Patienten" icon={<ChartBarIcon />} className="lg:col-span-3">
        <p>En grundig risikovurdering er essentiel for at planlægge et sikkert forløb. Vurderingen dækker flere områder:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <div className="bg-slate-50 p-3 rounded-lg">
            <h4 className="font-bold">Sygdomsvurdering</h4>
            <ul className="text-sm list-disc list-inside">
              <li>Klinisk almen tilstand</li>
              <li>Respiration, cirkulation, hjerte</li>
              <li>Væske- og elektrolytbalance</li>
              <li>Nyre- og leverfunktion</li>
              <li>Ernæringstilstand & misbrug</li>
            </ul>
          </div>
          <div className="bg-slate-50 p-3 rounded-lg">
            <h4 className="font-bold">Anæstesi-specifikke forhold</h4>
            <ul className="text-sm list-disc list-inside">
              <li>Alder og BMI (&gt;30 eller &lt;20)</li>
              <li>Tidligere anæstesi-komplikationer</li>
              <li>Intubationsforhold (Mallampati-score)</li>
              <li>Tandstatus og deformiteter</li>
              <li>Diskusprolaps (ift. spinal anæstesi)</li>
            </ul>
          </div>
           <div className="bg-slate-50 p-3 rounded-lg">
            <h4 className="font-bold">Undersøgelser</h4>
            <ul className="text-sm list-disc list-inside">
              <li><strong>Blodprøver:</strong> Hæmoglobin, elektrolytter, kreatinin, blodtype (BAS/BAC).</li>
              <li><strong>Andre:</strong> Urin-stix, EKG, Rtg. Thorax.</li>
            </ul>
          </div>
        </div>
      </LearningCard>

      <LearningCard title="Fasteregler" icon={<NoSymbolIcon />} className="md:col-span-1">
        <h4 className="font-bold">Elektiv Kirurgi</h4>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Indtil 6 timer før:</strong> Fast føde, bolcher, juice med frugtkød, mælkeprodukter.</li>
          <li><strong>Indtil 2 timer før:</strong> Tynde væsker (vand, saft, kaffe/the u. mælk). Rygning og tyggegummi.</li>
          <li><strong>Anbefaling:</strong> Indtag 200 ml sukkerholdig væske 2 timer før operation.</li>
        </ul>
        <h4 className="font-bold mt-4">Akut Kirurgi</h4>
        <p className="text-sm">Samme regler gælder, men patienter med ileus, tarmobstruktion eller øget aspirationsrisiko anses aldrig for at være fastende.</p>
      </LearningCard>

      <LearningCard title="ABCDE Vurdering" icon={<AbcdeIcon />} className="md:col-span-2">
        <p>En systematisk gennemgang af patienten for at identificere og håndtere livstruende tilstande præoperativt.</p>
        <ul className="space-y-2 mt-2">
          <li><strong className="text-teal-700">A - Airway:</strong> Vurdering af luftveje, Mallampati-score, tandstatus. Afgørende for valg af anæstesi.</li>
          <li><strong className="text-teal-700">B - Breathing:</strong> Lungefunktion, rygerstatus, BMI, allergi. Optimer behandling af lungesygdom.</li>
          <li><strong className="text-teal-700">C - Circulation:</strong> Puls, BT, kapillærrespons, hjertefunktion (iskæmi, arytmi).</li>
          <li><strong className="text-teal-700">D - Disability:</strong> Neurologisk status (GCS), blodsukker (BS), psykisk tilstand, alkohol/medicinforbrug.</li>
          <li><strong className="text-teal-700">E - Exposure:</strong> Temperatur, smerter, faste, lejring, blodprøver, hygiejne.</li>
        </ul>
      </LearningCard>
      
      <LearningCard title="Test din Viden: Præ-operativ" icon={<QuestionMarkCircleIcon />} className="lg:col-span-3">
        <Quiz questions={preoperativeQuiz} onComplete={onQuizComplete} />
      </LearningCard>
    </div>
  );
};

export default PreoperativePhase;
