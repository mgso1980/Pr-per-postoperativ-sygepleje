import React, { useState } from 'react';
import LearningCard from './LearningCard';
import { TeamIcon, CheckCircleIcon } from './IconComponents';

interface CaseWorkPhaseProps {
    onComplete: (isCompleted: boolean) => void;
}

const CaseWorkPhase: React.FC<CaseWorkPhaseProps> = ({ onComplete }) => {
    const [isCompleted, setIsCompleted] = useState(false);

    const handleMarkAsComplete = () => {
        setIsCompleted(true);
        onComplete(true);
    };
    
    return (
        <div className="space-y-6">
            <LearningCard title="Introduktion til Casearbejde" icon={<TeamIcon />}>
                <p>I denne sektion skal du arbejde med tre fiktive, men realistiske patientcases. Formålet er at anvende din teoretiske viden fra de foregående faser i praksisnære scenarier.</p>
                <p>Læs hver case grundigt og reflekter over de tilhørende spørgsmål. Gennemgå alle cases for at få fuldt udbytte af læringsforløbet.</p>
            </LearningCard>

            <LearningCard title="Case 1: Den ældre patient med hoftenær fraktur" icon={<TeamIcon />}>
                <h4 className="font-bold">Situation</h4>
                <p>Agnes, 82 år, er indlagt efter et fald i hjemmet med en hoftenær fraktur. Hun skal have indsat en hemialloplastik. Agnes er kendt med type 2-diabetes og let forhøjet blodtryk, som er velbehandlet. Hun er normalvægtig, men er blevet mere skrøbelig det seneste år. Hun bor alene og er normalt selvhjulpen. Præoperativt er hun nervøs og har smerter (VAS 6).</p>
                <h4 className="font-bold mt-4">Refleksionsspørgsmål</h4>
                <ul className="list-disc list-inside space-y-2">
                    <li>Hvilke sygeplejefaglige observationer og interventioner vil du prioritere i den præoperative fase for Agnes? Overvej hendes alder, komorbiditeter og nuværende tilstand.</li>
                    <li>Hvilke potentielle peroperative risici er der for Agnes, og hvordan kan teamet på operationsstuen arbejde for at minimere disse?</li>
                    <li>Udarbejd en plan for de første 24 timer postoperativt med fokus på smertebehandling, mobilisering og forebyggelse af komplikationer som delirium og infektion.</li>
                </ul>
            </LearningCard>

            <LearningCard title="Case 2: Den unge, nervøse patient" icon={<TeamIcon />}>
                <h4 className="font-bold">Situation</h4>
                <p>Brian, 28 år, skal have foretaget en planlagt laparoskopisk kolecystektomi (fjernelse af galdeblæren). Han er fysisk sund og rask, men udviser tydelige tegn på angst. Han stiller mange spørgsmål, har svedige håndflader og en puls på 110. Han fortæller, at det er hans første operation, og at han er bange for "ikke at vågne op igen".</p>
                <h4 className="font-bold mt-4">Refleksionsspørgsmål</h4>
                <ul className="list-disc list-inside space-y-2">
                    <li>Hvordan vil du som sygeplejerske møde Brian i den præoperative fase for at afhjælpe hans angst? Beskriv konkrete kommunikative og informative tiltag.</li>
                    <li>Hvilken betydning kan Brians angst have for det per- og postoperative forløb (f.eks. ift. smerteoplevelse og restitution)?</li>
                    <li>Hvordan kan du inddrage anæstesisygeplejersken i plejen af Brian for at skabe et trygt og sammenhængende forløb?</li>
                </ul>
            </LearningCard>

            <LearningCard title="Case 3: Postoperativ komplikation" icon={<TeamIcon />}>
                <h4 className="font-bold">Situation</h4>
                <p>Carl, 55 år, er på 2. dagen efter en åben hemikolektomi pga. cancer. Han har et epiduralkateter. Om morgenen klager han over tiltagende mavesmerter. Hans bugvæg føles spændt, og hans seneste blodprøver viser stigende infektionstal.</p>
                 <h4 className="font-bold mt-4">Refleksionsspørgsmål</h4>
                <ul className="list-disc list-inside space-y-2">
                    <li>Hvilke postoperative komplikationer mistænker du? Begrund din mistanke.</li>
                    <li>Beskriv dine umiddelbare sygeplejehandlinger. Hvem skal du kontakte (brug ISBAR)?</li>
                </ul>
            </LearningCard>
            
            <div className="text-center pt-4">
                {isCompleted ? (
                    <div className="inline-flex items-center space-x-2 text-lg font-semibold text-green-700 bg-green-100 py-3 px-6 rounded-lg">
                        <CheckCircleIcon />
                        <span>Godt gået! Du har gennemført casearbejdet.</span>
                    </div>
                ) : (
                    <button
                        onClick={handleMarkAsComplete}
                        className="bg-teal-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-teal-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                    >
                        Markér som Gennemført
                    </button>
                )}
            </div>
        </div>
    );
};

export default CaseWorkPhase;