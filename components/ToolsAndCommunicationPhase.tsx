
import React, { useState } from 'react';
import LearningCard from './LearningCard';
import { WrenchScrewdriverIcon, CheckCircleIcon, BrainIcon, PhoneForwardIcon, HeartRateMonitorIcon } from './IconComponents';

interface ToolsAndCommunicationPhaseProps {
    onComplete: (isCompleted: boolean) => void;
}

const ToolsAndCommunicationPhase: React.FC<ToolsAndCommunicationPhaseProps> = ({ onComplete }) => {
    const [isCompleted, setIsCompleted] = useState(false);
    const [isbar, setIsbar] = useState({ i: '', s: '', b: '', a: '', r: '' });
    const [showFeedback, setShowFeedback] = useState(false);

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
                <p>Denne sektion samler en række essentielle, tværgående redskaber, en sygeplejerske bruger. Fokus er flyttet fra, *hvad* du skal vide, til *hvordan* du handler, kommunikerer og ræsonnerer professionelt i klinisk praksis.</p>
            </LearningCard>

            <LearningCard title="Sygeplejeprocessen" icon={<BrainIcon />}>
                <p>Sygeplejeprocessen er den systematiske metode, der sikrer en kvalificeret og målrettet pleje. Modellen består af 5 faser:</p>
                <ul className="list-none space-y-4 mt-4">
                    <li className="flex flex-col sm:flex-row sm:items-start gap-2">
                        <div className="bg-teal-100 text-teal-800 font-bold px-3 py-1 rounded text-sm whitespace-nowrap min-w-[160px]">1. Vurdering</div>
                        <div className="text-sm text-slate-700"><span className="font-semibold">Dataindsamling:</span> Indsamling af data og vurdering af data (f.eks. observationer, målinger, samtale).</div>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:items-start gap-2">
                        <div className="bg-teal-100 text-teal-800 font-bold px-3 py-1 rounded text-sm whitespace-nowrap min-w-[160px]">2. Problemafdækning</div>
                        <div className="text-sm text-slate-700">Vurdering af, om data udgør et problem, samt vurdering af patientens ressourcer.</div>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:items-start gap-2">
                        <div className="bg-teal-100 text-teal-800 font-bold px-3 py-1 rounded text-sm whitespace-nowrap min-w-[160px]">3. Målfastsættelse</div>
                        <div className="text-sm text-slate-700">Opstille mål og identificering af handlingsplan.</div>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:items-start gap-2">
                        <div className="bg-teal-100 text-teal-800 font-bold px-3 py-1 rounded text-sm whitespace-nowrap min-w-[160px]">4. Sygeplejehandling</div>
                        <div className="text-sm text-slate-700">Iværksættelse af pleje og tilrettelæggelse af handlinger.</div>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:items-start gap-2">
                        <div className="bg-teal-100 text-teal-800 font-bold px-3 py-1 rounded text-sm whitespace-nowrap min-w-[160px]">5. Evaluering</div>
                        <div className="text-sm text-slate-700">Vurdering af handlinger og opnåelse af mål.</div>
                    </li>
                </ul>

                <h4 className="font-bold mt-6">Afprøv det på casen om Hr. Svendsen</h4>
                <div className="mt-2 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <p className="font-semibold">Case: Første postoperative dag</p>
                    <p className="text-sm mt-1">Det er dagen efter Hr. Svendsens operation for collum femoris fraktur. Du kommer ind på stuen og finder ham forpustet og lidt konfus. Han klager over smerter i hoften (VAS 6) trods smertebehandling, og han har let feber (38.3°C). Hans iltsaturation er 91% med 2L ilt.</p>
                </div>
                <p className="mt-4"><strong>Din opgave:</strong> Prøv at tænke de fem trin i sygeplejeprocessen igennem for Hr. Svendsen. Hvad indeholder din <strong>Vurdering/Dataindsamling</strong>? Hvilken <strong>Problemafdækning</strong> er mest presserende (f.eks. ineffektiv vejrtrækning vs. smerter)? Hvad er din <strong>Målfastsættelse</strong> og hvilken <strong>Sygeplejehandling</strong> iværksætter du? Hvordan vil du foretage <strong>Evaluering</strong>?</p>
            </LearningCard>

            <LearningCard title="Værktøj: TOKS (Tidlig Opsporing af Kritisk Sygdom)" icon={<HeartRateMonitorIcon />}>
                <p>TOKS (også kendt som EWS - Early Warning Score) er et scoringssystem, der bruges til systematisk at vurdere en patients vitale værdier. En samlet score indikerer patientens tilstand og udløser en bestemt handling.</p>
                
                {/* Visual TOKS Chart Table */}
                <div className="mt-6 mb-6 overflow-x-auto border border-slate-300 rounded-lg shadow-sm">
                    <table className="w-full text-xs md:text-sm text-center border-collapse min-w-[600px]">
                        <thead>
                            <tr className="bg-slate-100 text-slate-700">
                                <th className="p-2 border-r border-slate-300 text-left font-bold w-32">Vitalværdi</th>
                                <th className="p-2 border-r border-white bg-red-200 w-16 font-bold">3</th>
                                <th className="p-2 border-r border-white bg-orange-200 w-16 font-bold">2</th>
                                <th className="p-2 border-r border-white bg-yellow-100 w-16 font-bold">1</th>
                                <th className="p-2 border-r border-slate-200 bg-white w-20 font-bold">0</th>
                                <th className="p-2 border-r border-white bg-yellow-100 w-16 font-bold">1</th>
                                <th className="p-2 border-r border-white bg-orange-200 w-16 font-bold">2</th>
                                <th className="p-2 bg-red-200 w-16 font-bold">3</th>
                            </tr>
                        </thead>
                        <tbody className="font-mono text-slate-800">
                            <tr className="border-t border-slate-200">
                                <td className="p-2 border-r border-slate-300 text-left font-sans font-semibold">Respiration /min</td>
                                <td className="p-2 border-r border-white bg-red-100">&le; 8</td>
                                <td className="p-2 border-r border-white bg-orange-100"></td>
                                <td className="p-2 border-r border-white bg-yellow-50">9-11</td>
                                <td className="p-2 border-r border-slate-200 bg-white font-bold">12-20</td>
                                <td className="p-2 border-r border-white bg-yellow-50">21-24</td>
                                <td className="p-2 border-r border-white bg-orange-100"></td>
                                <td className="p-2 bg-red-100">&ge; 25</td>
                            </tr>
                            <tr className="border-t border-slate-200">
                                <td className="p-2 border-r border-slate-300 text-left font-sans font-semibold">SpO2 %</td>
                                <td className="p-2 border-r border-white bg-red-100">&le; 91</td>
                                <td className="p-2 border-r border-white bg-orange-100">92-93</td>
                                <td className="p-2 border-r border-white bg-yellow-50">94-95</td>
                                <td className="p-2 border-r border-slate-200 bg-white font-bold">&ge; 96</td>
                                <td className="p-2 border-r border-white bg-yellow-50"></td>
                                <td className="p-2 border-r border-white bg-orange-100"></td>
                                <td className="p-2 bg-red-100"></td>
                            </tr>
                             <tr className="border-t border-slate-200">
                                <td className="p-2 border-r border-slate-300 text-left font-sans font-semibold">Puls /min</td>
                                <td className="p-2 border-r border-white bg-red-100">&le; 40</td>
                                <td className="p-2 border-r border-white bg-orange-100"></td>
                                <td className="p-2 border-r border-white bg-yellow-50">41-50</td>
                                <td className="p-2 border-r border-slate-200 bg-white font-bold">51-90</td>
                                <td className="p-2 border-r border-white bg-yellow-50">91-110</td>
                                <td className="p-2 border-r border-white bg-orange-100">111-130</td>
                                <td className="p-2 bg-red-100">&ge; 131</td>
                            </tr>
                             <tr className="border-t border-slate-200">
                                <td className="p-2 border-r border-slate-300 text-left font-sans font-semibold">Systolisk BT</td>
                                <td className="p-2 border-r border-white bg-red-100">&le; 90</td>
                                <td className="p-2 border-r border-white bg-orange-100">91-100</td>
                                <td className="p-2 border-r border-white bg-yellow-50">101-110</td>
                                <td className="p-2 border-r border-slate-200 bg-white font-bold">111-219</td>
                                <td className="p-2 border-r border-white bg-yellow-50"></td>
                                <td className="p-2 border-r border-white bg-orange-100"></td>
                                <td className="p-2 bg-red-100">&ge; 220</td>
                            </tr>
                            <tr className="border-t border-slate-200">
                                <td className="p-2 border-r border-slate-300 text-left font-sans font-semibold">Temperatur</td>
                                <td className="p-2 border-r border-white bg-red-100">&le; 35.0</td>
                                <td className="p-2 border-r border-white bg-orange-100"></td>
                                <td className="p-2 border-r border-white bg-yellow-50">35.1-36.0</td>
                                <td className="p-2 border-r border-slate-200 bg-white font-bold">36.1-38.0</td>
                                <td className="p-2 border-r border-white bg-yellow-50">38.1-39.0</td>
                                <td className="p-2 border-r border-white bg-orange-100">&ge; 39.1</td>
                                <td className="p-2 bg-red-100"></td>
                            </tr>
                            <tr className="border-t border-slate-200">
                                <td className="p-2 border-r border-slate-300 text-left font-sans font-semibold">Bevidsthed</td>
                                <td className="p-2 border-r border-white bg-red-100"></td>
                                <td className="p-2 border-r border-white bg-orange-100"></td>
                                <td className="p-2 border-r border-white bg-yellow-50"></td>
                                <td className="p-2 border-r border-slate-200 bg-white font-bold">Vågen/Klar</td>
                                <td className="p-2 border-r border-white bg-yellow-50"></td>
                                <td className="p-2 border-r border-white bg-orange-100"></td>
                                <td className="p-2 bg-red-100">Uklar/P/U</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4 className="font-bold mt-4">Mini-case: Hr. Svendsen, postoperativ dag 1</h4>
                <p>Du måler et fuldt sæt vitalværdier på Hr. Svendsen. Han har følgende værdier: <strong className="font-semibold">Respirationsfrekvens=23, SpO2=91% (med 2L ilt), Puls=112, Systolisk BT=108, Temperatur=38.3°C, Bevidsthedsniveau=Konfus (V på AVPU).</strong></p>
                <p className="mt-2">Ifølge et standard TOKS-skema ville scoren være:</p>
                <ul className="list-disc list-inside">
                    <li>RF (21-24) = <strong>1 point</strong></li>
                    <li>SpO2 (&le;91%) = <strong>3 point</strong></li>
                    <li>Puls (111-130) = <strong>2 point</strong></li>
                    <li>BT (101-110) = <strong>1 point</strong></li>
                    <li>Temp (38.1-39.0) = <strong>1 point</strong></li>
                    <li>Bevidsthed (Uklar/Konfus) = <strong>3 point</strong></li>
                </ul>
                <p className="font-bold mt-2">Samlet TOKS score: <span className="text-red-600">11 point</span>.</p>
                <p><strong>Handling:</strong> En score på over 9 eller en enkeltværdi på 3 (SpO2 & Bevidsthed) er ekstremt kritisk. Det kræver omgående reaktion: Kald af akutteam/læge med det samme, tæt overvågning og start på behandling. Dette understreger alvoren i den situation, du skal kommunikere via ISBAR.</p>
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

                <div className="mt-6">
                    <button
                        onClick={() => setShowFeedback(!showFeedback)}
                        className="bg-slate-800 text-white font-semibold py-2 px-4 rounded-md hover:bg-slate-700 transition-colors text-sm"
                    >
                        {showFeedback ? 'Skjul forslag' : 'Se forslag til ISBAR-rapport'}
                    </button>

                    {showFeedback && (
                        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg animate-fade-in">
                            <h5 className="font-bold text-green-800 mb-2">Eksempel på en god ISBAR-overlevering:</h5>
                            <div className="space-y-2 text-sm text-slate-700">
                                <p><strong className="font-semibold">I:</strong> "Goddag, det er sygeplejerske [Navn] fra Ortopædkirurgisk afsnit. Jeg ringer angående Hr. Svendsen, CPR [nummer]."</p>
                                <p><strong className="font-semibold">S:</strong> "Jeg ringer, fordi patienten er blevet kritisk dårlig med en TOKS-score på 11. Han er akut konfus, takykard og desaturerer."</p>
                                <p><strong className="font-semibold">B:</strong> "Han er postoperativ dag 1 efter hofteoperation. Har kendt svær KOL og diabetes. Får vanligt 2L ilt, men det rækker ikke nu."</p>
                                <p><strong className="font-semibold">A:</strong> "Værdierne er: RF 23, SpO2 91%, Puls 112, BT 108, Temp 38.3. Han er klamtsvedende. Jeg mistænker lungekomplikation (pneumoni/emboli) eller sepsis."</p>
                                <p><strong className="font-semibold">R:</strong> "Jeg har brug for, at du kommer akut. Skal jeg give mere ilt, tage en A-punktur eller starte væskebehandling indtil du er her?"</p>
                            </div>
                        </div>
                    )}
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
