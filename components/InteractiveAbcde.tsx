
import React, { useState } from 'react';
import { abcdeData } from '../data/abcdeData';

const InteractiveAbcde: React.FC = () => {
    const [openAccordion, setOpenAccordion] = useState<string | null>(null);
    const [selectedQuizAnswer, setSelectedQuizAnswer] = useState<string | null>(null);
    const [isQuizCorrect, setIsQuizCorrect] = useState<boolean | null>(null);

    const toggleAccordion = (id: string) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    const handleQuizAnswer = (answer: string) => {
        if (selectedQuizAnswer) return;
        setSelectedQuizAnswer(answer);
        setIsQuizCorrect(answer === 'B');
    };

    const quizOptions = [
        { id: 'A', text: 'A - Airway' },
        { id: 'B', text: 'B - Breathing' },
        { id: 'C', text: 'C - Circulation' }
    ];

    return (
        <div>
            <p className="mb-4">En systematisk gennemgang af patienten for at identificere og håndtere livstruende tilstande. Klik på hvert punkt for at se detaljer.</p>
            <div className="space-y-2">
                {abcdeData.map(section => (
                    <div key={section.id} className="border border-slate-200 rounded-lg overflow-hidden">
                        <button
                            onClick={() => toggleAccordion(section.id)}
                            className="w-full flex justify-between items-center p-4 text-left bg-slate-50 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        >
                            <span className="flex items-center">
                                <span className="text-xl font-bold text-teal-600 mr-4 w-6">{section.letter}</span>
                                <span className="font-semibold text-slate-800">{section.title}</span>
                            </span>
                            <svg
                                className={`w-5 h-5 text-slate-500 transform transition-transform duration-300 ${openAccordion === section.id ? 'rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {openAccordion === section.id && (
                            <div className="p-4 bg-white animate-fade-in-down">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <h4 className="font-bold text-slate-700 mb-2">Vurdering</h4>
                                        <ul className="list-disc list-inside text-sm space-y-1">
                                            {section.assessment.map((item, i) => <li key={i}>{item}</li>)}
                                        </ul>
                                    </div>
                                     <div>
                                        <h4 className="font-bold text-red-600 mb-2">Kritiske Fund</h4>
                                        <ul className="list-disc list-inside text-sm space-y-1">
                                            {section.criticalFindings.map((item, i) => <li key={i}>{item}</li>)}
                                        </ul>
                                    </div>
                                     <div>
                                        <h4 className="font-bold text-green-600 mb-2">Handling</h4>
                                        <ul className="list-disc list-inside text-sm space-y-1">
                                            {section.actions.map((item, i) => <li key={i}>{item}</li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Mini-scenario quiz */}
            <div className="mt-6 p-4 bg-teal-50 rounded-lg border border-teal-200">
                <h4 className="font-bold text-slate-800">Test din Anvendelse</h4>
                <p className="text-sm mt-1">Du observerer følgende hos Hr. Svendsen: Han har en respirationsfrekvens på 24, bruger hjælpemuskler og har en SpO2 på 92%.</p>
                <p className="font-semibold mt-3">Hvilken del af ABCDE-vurderingen er mest presserende at fokusere på nu?</p>
                <div className="flex flex-col sm:flex-row gap-2 mt-2">
                    {quizOptions.map(opt => {
                        let buttonClass = "w-full text-center p-2 rounded-md border-2 transition-all duration-200 disabled:cursor-not-allowed ";
                         if (selectedQuizAnswer) {
                            if (opt.id === 'B') { // Correct answer
                                buttonClass += 'bg-green-100 border-green-500 text-green-800 font-semibold';
                            } else if (opt.id === selectedQuizAnswer) { // Incorrect selected
                                buttonClass += 'bg-red-100 border-red-500 text-red-800';
                            } else {
                                buttonClass += 'bg-slate-100 border-slate-200 text-slate-500';
                            }
                        } else {
                           buttonClass += 'bg-white border-slate-300 hover:bg-teal-100 hover:border-teal-400';
                        }
                        return (
                            <button key={opt.id} onClick={() => handleQuizAnswer(opt.id)} disabled={!!selectedQuizAnswer} className={buttonClass}>
                                {opt.text}
                            </button>
                        )
                    })}
                </div>
                {isQuizCorrect !== null && (
                     <div className={`mt-3 p-2 rounded-md text-sm ${isQuizCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {isQuizCorrect 
                            ? "Korrekt! Fundene peger tydeligt på et problem med vejrtrækningen (Breathing)."
                            : "Ikke helt. Selvom de andre punkter er vigtige, peger RF, SpO2 og brug af hjælpemuskler direkte på et problem med Breathing."
                        }
                    </div>
                )}
            </div>
             <style>{`
                .animate-fade-in-down { animation: fadeInDown 0.4s ease-out; }
                @keyframes fadeInDown {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};

export default InteractiveAbcde;
