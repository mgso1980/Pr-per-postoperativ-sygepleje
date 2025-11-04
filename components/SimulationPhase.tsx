import React, { useState } from 'react';
import LearningCard from './LearningCard';
import { CheckCircleIcon, BrainIcon, HeartRateMonitorIcon, ClipboardCheckIcon, ChatBubbleLeftRightIcon } from './IconComponents';

interface SimulationPhaseProps {
    onComplete: (isCompleted: boolean) => void;
}

const SimulationPhase: React.FC<SimulationPhaseProps> = ({ onComplete }) => {
    const [isCompleted, setIsCompleted] = useState(false);

    const handleMarkAsComplete = () => {
        setIsCompleted(true);
        onComplete(true);
    };
    
    return (
        <div className="space-y-6">
            <LearningCard title="Simulation: Færdighedsstationer" icon={<BrainIcon />}>
                <p>Denne sektion er redesignet til at fokusere på mindre, håndterbare øvelser, der kan udføres med minimalt setup. Formålet er at træne specifikke, kritiske færdigheder i et sikkert miljø. Grib en medstuderende og prøv stationerne af.</p>
                <p>Den vigtigste læring sker i den efterfølgende refleksion over jeres handlinger.</p>
            </LearningCard>

            <LearningCard title="Station 1: Patientidentifikation & Præoperativ Tjekliste" icon={<ClipboardCheckIcon />}>
                <h4 className="font-bold">Læringsmål</h4>
                <p className="text-sm">At kunne udføre en sikker patientidentifikation og verbalt gennemgå kritiske punkter på den præoperative tjekliste.</p>
                
                <h4 className="font-bold mt-4">Setup</h4>
                <p className="text-sm">En medstuderende, der agerer patient. Et simpelt patient-ID armbånd (kan være et stykke papir) og en udprintet tjekliste.</p>

                <h4 className="font-bold mt-4">Øvelse (parvis)</h4>
                <ol className="list-decimal list-inside space-y-1 mt-2 text-sm">
                    <li>Én studerende er sygeplejerske, den anden er patient.</li>
                    <li>Sygeplejersken skal identificere patienten korrekt ved at spørge om fulde navn og CPR-nummer og sammenligne med informationen på ID-armbåndet.</li>
                    <li>Sygeplejersken gennemgår derefter de vigtigste punkter på tjeklisten højt sammen med "patienten" (f.eks. faste, samtykke, kendte allergier, fjernelse af smykker).</li>
                    <li>Byt roller.</li>
                </ol>
                
                <h4 className="font-bold mt-4">Debriefing-spørgsmål</h4>
                <ul className="list-disc list-inside text-sm">
                    <li>Blev alle sikkerhedsprocedurer for ID-kontrol fulgt?</li>
                    <li>Hvordan oplevede "patienten" situationen? Føltes den tryg og informativ?</li>
                </ul>
            </LearningCard>

            <LearningCard title="Station 2: Struktureret ISBAR-overlevering" icon={<ChatBubbleLeftRightIcon />}>
                <h4 className="font-bold">Læringsmål</h4>
                <p className="text-sm">At kunne levere en klar, koncis og struktureret mundtlig rapport ved hjælp af ISBAR-modellen.</p>
                
                <h4 className="font-bold mt-4">Setup</h4>
                <p className="text-sm">Et case-kort (brug f.eks. "Case 3: Carl" fra Casearbejde-fanen). En medstuderende agerer modtager (læge eller sygeplejerskekollega).</p>

                <h4 className="font-bold mt-4">Øvelse (parvis)</h4>
                <ol className="list-decimal list-inside space-y-1 mt-2 text-sm">
                    <li>Én studerende (sender) forbereder en ISBAR-rapport baseret på casen.</li>
                    <li>Senderen "ringer op" til den anden studerende (modtager) og afleverer rapporten.</li>
                    <li>Modtageren lytter, stiller uddybende spørgsmål og giver en kvittering (f.eks. "Forstået, jeg kommer om 5 minutter").</li>
                     <li>Byt roller med en ny case.</li>
                </ol>
                
                <h4 className="font-bold mt-4">Debriefing-spørgsmål</h4>
                <ul className="list-disc list-inside text-sm">
                    <li>Fik modtageren al nødvendig information til at kunne handle?</li>
                    <li>Hvilket element i ISBAR (I, S, B, A eller R) var sværest at formulere?</li>
                </ul>
            </LearningCard>

            <LearningCard title="Station 3 & 4: Smertevurdering (VAS) & TOKS" icon={<HeartRateMonitorIcon />}>
                <h4 className="font-bold">Læringsmål</h4>
                <p className="text-sm">At kunne forklare og anvende VAS-skalaen. At kunne beregne en TOKS-score og angive den korrekte handling.</p>
                
                <h4 className="font-bold mt-4">Setup</h4>
                <p className="text-sm">Et billede af en VAS-skala. Kort med forskellige sæt af vitalværdier påskrevet (f.eks. fra TOKS-eksemplet i "Værktøjer"-fanen).</p>

                <h4 className="font-bold mt-4">Øvelse - Del 1: VAS</h4>
                <p className="text-sm">I par, forklar til din medstuderende (som agerer patient), hvordan VAS-skalaen fra 0 til 10 fungerer. Spørg dem om deres nuværende smertescore og hvordan de har det. Diskuter hvad en score på f.eks. 6 ville udløse af handling.</p>
                
                <h4 className="font-bold mt-4">Øvelse - Del 2: TOKS</h4>
                <p className="text-sm">Træk et kort med et sæt vitalværdier. Beregn den samlede TOKS-score. Fortæl højt, hvilken handlingsalgoritme scoren udløser (f.eks. "Score på 8. Læge skal kontaktes omgående, og patienten skal have kontinuerlig observation.").</p>
                
                <h4 className="font-bold mt-4">Debriefing-spørgsmål</h4>
                <ul className="list-disc list-inside text-sm">
                    <li>Var din forklaring af VAS let for "patienten" at forstå?</li>
                    <li>Var TOKS-beregningen korrekt? Var du sikker på, hvilken handling den udløste?</li>
                </ul>
            </LearningCard>


            <div className="text-center pt-4">
                {isCompleted ? (
                    <div className="inline-flex items-center space-x-2 text-lg font-semibold text-green-700 bg-green-100 py-3 px-6 rounded-lg">
                        <CheckCircleIcon />
                        <span>Godt gået! Du har gennemført sektionen.</span>
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

export default SimulationPhase;