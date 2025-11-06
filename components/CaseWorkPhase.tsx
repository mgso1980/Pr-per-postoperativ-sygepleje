
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
                <p>I denne sektion skal du arbejde med en realistisk patientcase. Formålet er at anvende din teoretiske viden fra de foregående faser i et praksisnært scenarie.</p>
                <p>Læs casen grundigt og brug tid på at reflektere over de tilhørende spørgsmål. Dette vil hjælpe dig med at forbinde teori med klinisk ræsonnement og handling.</p>
            </LearningCard>

            <LearningCard title="Case: Præsentation af Hr. Svendsen" icon={<TeamIcon />}>
                <h4 className="font-bold">Baggrund</h4>
                <p>Hr. Svendsen er en 81-årig mand, der bor med sin 76-årige hustru i et rækkehus i to etager. De har et godt socialt netværk med børn og børnebørn i nærheden. Hjemmeplejen hjælper med rengøring, og en sygeplejerske doserer hans medicin hver 14. dag.</p>
                
                <h4 className="font-bold mt-4">Sygehistorie & Funktionsniveau</h4>
                <div className="mt-2 space-y-3">
                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                        <h5 className="font-semibold">Lunger & Hjerte</h5>
                        <p className="text-sm">Har svær KOL pga. et livslangt tobaksforbrug (ryger stadig ca. 10 cigaretter dagligt). Lider af hjerteinsufficiens og hypertension. Dette medfører funktionsdyspnø, hoste og deklive ødemer.</p>
                    </div>
                     <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                        <h5 className="font-semibold">Endokrinologi & Medicin</h5>
                        <p className="text-sm">Har insulinkrævende diabetes (Type 1). Hjemmesygeplejen doserer medicin, men Hr. Svendsen håndterer selv sin insulin og inhalationsmedicin.</p>
                    </div>
                     <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                        <h5 className="font-semibold">Mobilitet & Ernæring</h5>
                        <p className="text-sm">Er usikker på benene pga. knæartrose og frygt for at falde. Kan gå på trapper med pauser. Han er småtspisende. Kognitivt er han velfungerende.</p>
                    </div>
                </div>
            </LearningCard>
            
            <LearningCard title="Den Akutte Situation & Plan" icon={<TeamIcon />}>
                <h4 className="font-bold">Situation</h4>
                <p>Hr. Svendsen er faldet i hjemmet og indbragt til FAM (Fælles Akutmodtagelse). Der er taget blodprøver og foretaget røntgenundersøgelser.</p>
                <ul className="list-disc list-inside mt-2">
                    <li><strong>Rtg. af thorax:</strong> Viser forandringer, der er forenelige med hans kendte KOL.</li>
                    <li><strong>Rtg. af bækken:</strong> Viser en <strong className="text-red-600">venstresidig collum femoris fraktur</strong>.</li>
                </ul>
                <p className="mt-2">Ortopædkirurgen har vurderet billederne og anbefaler operation snarest muligt.</p>
            </LearningCard>

            <LearningCard title="Refleksionsspørgsmål til Casen" icon={<TeamIcon />}>
                <p>Brug de følgende spørgsmål til at anvende din viden på casen om Hr. Svendsen.</p>
                <div className="space-y-4 mt-4">
                    <div>
                        <h4 className="font-bold text-teal-700">1. Den Præoperative Fase</h4>
                        <p>Med udgangspunkt i Hr. Svendsens komplekse sygehistorie (svær KOL, insulinkrævende diabetes, hjerteinsufficiens) og den akutte fraktur, hvilke præoperative forberedelser og risikovurderinger er de vigtigste? Tænk på fasteregler, medicinjustering (især insulin), lungefysioterapi og informeret samtykke.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-teal-700">2. Den Peroperative Fase</h4>
                        <p>Hvilke særlige hensyn skal der tages til Hr. Svendsen under selve operationen (peroperativt)? Overvej valg af anæstesi, lejring (pga. artrose og skrøbelighed) og monitorering af hans vitale parametre i lyset af hans hjerte- og lungesygdom.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-teal-700">3. Den Postoperative Fase</h4>
                        <p>Udarbejd en plan for det tidlige postoperative forløb. Hvad er de største risici for komplikationer for netop Hr. Svendsen (f.eks. lungebetændelse, DVT, delirium, sårinfektion, ustabilt blodsukker)? Beskriv dine sygeplejefaglige interventioner for at forebygge disse og fremme en hurtig og sikker mobilisering.</p>
                    </div>
                </div>
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
