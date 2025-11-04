import React, { useState } from 'react';
import LearningCard from './LearningCard';
import { WrenchScrewdriverIcon, CheckCircleIcon, BrainIcon, PhoneForwardIcon, HeartRateMonitorIcon, ChatBubbleLeftRightIcon } from './IconComponents';

interface ToolsAndCommunicationPhaseProps {
    onComplete: (isCompleted: boolean) => void;
}

const ToolsAndCommunicationPhase: React.FC<ToolsAndCommunicationPhaseProps> = ({ onComplete }) => {
    const [isCompleted, setIsCompleted] = useState(false);
    const [isbar, setIsbar] = useState({ i: '', s: '', b: '', a: '', r: '' });

    const handleMarkAsComplete = () => {
        setIsCompleted(true);
        onComplete(true);
    };
    
    const handleIsbarChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setIsbar(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="space-y-6">
            <LearningCard title="Værktøjer & Kommunikation" icon={<WrenchScrewdriverIcon />}>
                <p>Denne sektion samler en række essentielle, tværgående redskaber, en sygeplejerske bruger i hele det perioperative forløb. Fokus er flyttet fra, *hvad* du skal vide, til *hvordan* du handler, kommunikerer og ræsonnerer professionelt i klinisk praksis.</p>
            </LearningCard>

            <LearningCard title="Sygeplejeprocessen" icon={<BrainIcon />}>
                <p>Sygeplejeprocessen er den systematiske, problemløsende metode, sygeplejersker bruger til at sikre en kvalificeret og målrettet pleje. Den består af fem forbundne faser, der sikrer en kontinuerlig og dynamisk tilgang til patienten:</p>
                <ul className="list-decimal list-inside space-y-2 mt-4 font-semibold">
                    <li><strong className="font-bold">Vurdering:</strong> Du indhenter information ved at observere patienten, måle vitale værdier, læse journalen og tale med patient og pårørende.</li>
                    <li><strong className="font-bold">Diagnose:</strong> Du analyserer informationen og identificerer nuværende eller potentielle sygeplejeproblemer (f.eks. "patienten har tegn på infektion").</li>
                    <li><strong className="font-bold">Planlægning:</strong> Du opstiller mål og beslutter, hvilke handlinger der skal til for at løse problemerne. Hvad er mest akut?</li>
                    <li><strong className="font-bold">Handling (Implementering):</strong> Du udfører de planlagte sygeplejeinterventioner (f.eks. måler temperatur, kontakter læge).</li>
                    <li><strong className="font-bold">Evaluering:</strong> Du vurderer effekten af dine handlinger. Er målene nået? Skal planen justeres?</li>
                </ul>

                <h4 className="font-bold mt-6">Afprøv det på en case</h4>
                <div className="mt-2 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <p className="font-semibold">Case: Modtagelse på opvågningen</p>
                    <p className="text-sm mt-1">Lone, 64 år, er lige ankommet til opvågningsafsnittet efter en laparoskopisk kolecystektomi i fuld anæstesi. Hun er træt, men vågen og klar. Hendes blodtryk er 105/60 mmHg, pulsen er 110 slag/min, respirationsfrekvensen er 22/min, saturationen (SpO2) er 92% på 2L ilt, og hun klager over smerter i maven med en VAS-score på 7.</p>
                </div>
                <p className="mt-4"><strong>Din opgave:</strong> Prøv at tænke de fem trin igennem. Hvad vil du vurdere yderligere? Hvilke sygeplejediagnoser er mest presserende? Hvad er dine mål og handlinger? Og hvordan vil du evaluere effekten af dine handlinger?</p>
            </LearningCard>

            <LearningCard title="Interaktivt Værktøj: ISBAR" icon={<PhoneForwardIcon />}>
                <p>ISBAR er et struktureret kommunikationsredskab, der sikrer en præcis og sikker overlevering af information mellem sundhedsprofessionelle. Brug det, når du skal kontakte en læge eller overlevere en patient.</p>
                <p className="mt-2"><strong>Prøv selv:</strong> Forestil dig, at du skal kontakte en læge om <strong className="font-semibold">Case 3: Carl</strong> (fra "Casearbejde"-fanen). Udfyld felterne herunder.</p>
                <div className="space-y-3 mt-4">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">I - Identifikation</label>
                        <textarea name="i" value={isbar.i} onChange={handleIsbarChange} placeholder="Hvem er du, hvor ringer du fra? Hvem er patienten (navn, CPR)?" className="w-full p-2 border border-slate-300 rounded-md text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500"></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">S - Situation</label>
                        <textarea name="s" value={isbar.s} onChange={handleIsbarChange} placeholder="Hvad er problemet? Hvorfor ringer du?" className="w-full p-2 border border-slate-300 rounded-md text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500"></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">B - Baggrund</label>
                        <textarea name="b" value={isbar.b} onChange={handleIsbarChange} placeholder="Relevant baggrundsinformation (diagnose, operation, hidtidigt forløb)." className="w-full p-2 border border-slate-300 rounded-md text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500"></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">A - Analyse</label>
                        <textarea name="a" value={isbar.a} onChange={handleIsbarChange} placeholder="Hvad tror du, der er galt? Hvad er dine målinger og observationer?" className="w-full p-2 border border-slate-300 rounded-md text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500"></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">R - Råd</label>
                        <textarea name="r" value={isbar.r} onChange={handleIsbarChange} placeholder="Hvad har du brug for? (f.eks. 'Jeg har brug for, at du kommer og tilser patienten')." className="w-full p-2 border border-slate-300 rounded-md text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500"></textarea>
                    </div>
                </div>
            </LearningCard>

            <LearningCard title="Værktøj: TOKS (Tidlig Opsporing af Kritisk Sygdom)" icon={<HeartRateMonitorIcon />}>
                <p>TOKS (også kendt som EWS - Early Warning Score) er et scoringssystem, der bruges til systematisk at vurdere en patients vitale værdier. En samlet score indikerer patientens tilstand og udløser en bestemt handling.</p>
                <h4 className="font-bold mt-4">Mini-case:</h4>
                <p>En patient har følgende værdier: <strong className="font-semibold">Respirationsfrekvens=23, SpO2=93%, Puls=115, Systolisk BT=105, Temperatur=38.2°C, Bevidsthedsniveau=Vågen.</strong></p>
                <p className="mt-2">Ifølge et standard TOKS-skema ville scoren være:</p>
                <ul className="list-disc list-inside">
                    <li>RF (21-24) = <strong>2 point</strong></li>
                    <li>SpO2 (92-93%) = <strong>2 point</strong></li>
                    <li>Puls (111-130) = <strong>2 point</strong></li>
                    <li>BT (101-110) = <strong>1 point</strong></li>
                    <li>Temp (38.1-39.0) = <strong>1 point</strong></li>
                    <li>Bevidsthed = <strong>0 point</strong></li>
                </ul>
                <p className="font-bold mt-2">Samlet TOKS score: <span className="text-red-600">8 point</span>.</p>
                <p><strong>Handling:</strong> En score på 8 er kritisk høj. Det kræver omgående reaktion: Kontakt til læge/akutteam, hyppigere målinger og iværksættelse af behandling.</p>
            </LearningCard>

            <LearningCard title="Værktøj: Den Motiverende Samtale" icon={<ChatBubbleLeftRightIcon />}>
                <p>Den motiverende samtale (Motivational Interviewing) er en patientcentreret kommunikationsstil, der har til formål at styrke patientens egen motivation for og engagement i forandring. Det handler ikke om at overtale, men om at udforske og fremkalde patientens egne grunde til at deltage aktivt i sit forløb.</p>
                <h4 className="font-bold mt-4">Kerne-principper:</h4>
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>Partnerskab:</strong> Du og patienten er ligeværdige partnere, der arbejder sammen.</li>
                    <li><strong>Accept:</strong> Du anerkender patientens autonomi og perspektiv uden at dømme.</li>
                    <li><strong>Medfølelse:</strong> Du handler aktivt til fordel for patientens velbefindende.</li>
                    <li><strong>Fremkaldelse:</strong> Du "trækker" patientens egne ideer og motivationer frem i stedet for at "pådutte" dine egne.</li>
                </ul>
                <h4 className="font-bold mt-4">Fra lukkede til åbne spørgsmål:</h4>
                <p>Åbne spørgsmål inviterer til refleksion og dialog.</p>
                <ul className="list-disc list-inside">
                    <li><strong>Lukket:</strong> "Har du ondt?" (Svar: Ja/Nej)</li>
                    <li><strong>Åbent:</strong> "Kan du prøve at beskrive, hvordan smerten føles?"</li>
                    <br/>
                    <li><strong>Lukket:</strong> "Skal du ikke op at gå en tur?"</li>
                    <li><strong>Åbent:</strong> "Hvad tænker du kunne være det første lille skridt for at komme på benene igen?"</li>
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

export default ToolsAndCommunicationPhase;