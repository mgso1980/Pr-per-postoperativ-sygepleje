import React, { useState } from 'react';
import LearningCard from './LearningCard';
import { WrenchScrewdriverIcon, CheckCircleIcon, BrainIcon, PhoneForwardIcon, HeartRateMonitorIcon } from './IconComponents';

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

                <h4 className="font-bold mt-6">Afprøv det på casen om Hr. Svendsen</h4>
                <div className="mt-2 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <p className="font-semibold">Case: Første postoperative dag</p>
                    <p className="text-sm mt-1">Det er dagen efter Hr. Svendsens operation for collum femoris fraktur. Du kommer ind på stuen og finder ham forpustet og lidt konfus. Han klager over smerter i hoften (VAS 6) trods smertebehandling, og han har let feber (38.3°C). Hans iltsaturation er 91% med 2L ilt.</p>
                </div>
                <p className="mt-4"><strong>Din opgave:</strong> Prøv at tænke de fem trin i sygeplejeprocessen igennem for Hr. Svendsen. Hvad vil du vurdere yderligere? Hvilke sygeplejediagnoser er mest presserende (f.eks. ineffektiv vejrtrækning, akutte smerter, risiko for infektion)? Hvad er dine mål og handlinger? Og hvordan vil du evaluere effekten?</p>
            </LearningCard>

            <LearningCard title="Værktøj: TOKS (Tidlig Opsporing af Kritisk Sygdom)" icon={<HeartRateMonitorIcon />}>
                <p>TOKS (også kendt som EWS - Early Warning Score) er et scoringssystem, der bruges til systematisk at vurdere en patients vitale værdier. En samlet score indikerer patientens tilstand og udløser en bestemt handling.</p>
                <h4 className="font-bold mt-4">Mini-case: Hr. Svendsen, postoperativ dag 1</h4>
                <p>Du måler et fuldt sæt vitalværdier på Hr. Svendsen. Han har følgende værdier: <strong className="font-semibold">Respirationsfrekvens=23, SpO2=91% (med 2L ilt), Puls=112, Systolisk BT=108, Temperatur=38.3°C, Bevidsthedsniveau=Konfus (V på AVPU).</strong></p>
                <p className="mt-2">Ifølge et standard TOKS-skema ville scoren være:</p>
                <ul className="list-disc list-inside">
                    <li>RF (21-24) = <strong>2 point</strong></li>
                    <li>SpO2 (&le;91%) = <strong>3 point</strong></li>
                    <li>Puls (111-130) = <strong>2 point</strong></li>
                    <li>BT (101-110) = <strong>1 point</strong></li>
                    <li>Temp (38.1-39.0) = <strong>1 point</strong></li>
                    <li>Bevidsthed (Konfus) = <strong>3 point</strong></li>
                </ul>
                <p className="font-bold mt-2">Samlet TOKS score: <span className="text-red-600">12 point</span>.</p>
                <p><strong>Handling:</strong> En score på 12 er ekstremt kritisk. Det kræver omgående reaktion: Kald af akutteam/læge med det samme, tæt overvågning og start på behandling. Dette understreger alvoren i den situation, du skal kommunikere via ISBAR.</p>
            </LearningCard>

            <LearningCard title="Interaktivt Værktøj: ISBAR" icon={<PhoneForwardIcon />}>
                <p>ISBAR er et struktureret kommunikationsredskab, der sikrer en præcis og sikker overlevering af information mellem sundhedsprofessionelle. Brug det, når du skal kontakte en læge eller overlevere en patient.</p>
                <p className="mt-2"><strong>Prøv selv:</strong> Forestil dig, at du skal kontakte lægen om <strong className="font-semibold">Hr. Svendsen</strong> på første postoperative dag (som beskrevet ovenfor). Udfyld felterne herunder for at strukturere din rapport.</p>
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