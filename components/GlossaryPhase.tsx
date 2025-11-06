import React, { useState } from 'react';
import LearningCard from './LearningCard';
import { BookOpenIcon, CheckCircleIcon } from './IconComponents';

interface GlossaryPhaseProps {
    onComplete: (isCompleted: boolean) => void;
}

const glossaryData = [
    {
        term: "PONV",
        definition: "Forkortelse for Post Operative Nausea and Vomiting (Postoperativ kvalme og opkast). En meget almindelig komplikation efter anæstesi."
    },
    {
        term: "Atelektase",
        definition: "Sammenfald af lungevæv, hvor små luftsække (alveoler) i lungen klapper sammen og ikke længere deltager i luftskiftet. Forebygges med dyb vejrtrækning og mobilisering."
    },
    {
        term: "ASA-score",
        definition: "Et klassifikationssystem fra American Society of Anesthesiologists (ASA I-VI) til at vurdere en patients fysiske tilstand og operative risiko før anæstesi."
    },
    {
        term: "Mallampati-score",
        definition: "En score (I-IV) brugt til at forudsige, hvor let eller svær intubation (placering af vejrtrækningsrør i luftrøret) vil være, baseret på synligheden af strukturer i svælget."
    },
    {
        term: "DVT",
        definition: "Dyb Venetrombose. En blodprop, der dannes i en af kroppens dybe vener, oftest i benene. En alvorlig postoperativ risiko."
    },
    {
        term: "Ileus",
        definition: "Paralytisk ileus eller tarmslyng, hvor den normale fremadskridende bevægelse (peristaltik) i tarmen midlertidigt stopper. Ofte set efter abdominalkirurgi."
    },
    {
        term: "Delirium",
        definition: "En akut, forbigående og ofte svingende tilstand af forvirring, nedsat opmærksomhed og bevidsthedsforstyrrelse. Ofte udløst af fysisk sygdom, operation eller medicin hos sårbare patienter."
    },
    {
        term: "Hypotermi",
        definition: "En tilstand hvor kroppens kernetemperatur falder til under 35°C. En risiko under lange operationer, som kan øge risikoen for blødning og infektion."
    },
    {
        term: "Sepsis",
        definition: "En livstruende tilstand, der opstår, når kroppens respons på en infektion skader sit eget væv og organer (organsvigt)."
    },
    {
        term: "TOKS/EWS",
        definition: "Tidlig Opsporing af Kritisk Sygdom / Early Warning Score. Et pointsystem baseret på vitale værdier (RF, SpO2, puls, BT, temp, bevidsthed) til hurtigt at identificere patienter i risiko for forværring."
    }
];


const GlossaryPhase: React.FC<GlossaryPhaseProps> = ({ onComplete }) => {
    const [isCompleted, setIsCompleted] = useState(false);
    const [openTerm, setOpenTerm] = useState<string | null>(null);

    const handleMarkAsComplete = () => {
        setIsCompleted(true);
        onComplete(true);
    };

    const toggleTerm = (term: string) => {
        setOpenTerm(openTerm === term ? null : term);
    };

    return (
        <div className="space-y-6">
            <LearningCard title="Klinisk Opslagsværk" icon={<BookOpenIcon />}>
                <p>Brug dette opslagsværk til hurtigt at få en definition på nogle af de centrale begreber, du støder på i det perioperative forløb. Klik på et begreb for at se definitionen.</p>
                <div className="space-y-2 mt-4">
                    {glossaryData.map(item => (
                        <div key={item.term} className="border border-slate-200 rounded-lg overflow-hidden">
                            <button
                                onClick={() => toggleTerm(item.term)}
                                className="w-full flex justify-between items-center p-4 text-left bg-slate-50 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                            >
                                <span className="font-semibold text-slate-800">{item.term}</span>
                                <svg className={`w-5 h-5 text-slate-500 transform transition-transform duration-300 ${openTerm === item.term ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {openTerm === item.term && (
                                <div className="p-4 bg-white animate-fade-in-down">
                                    <p className="text-slate-600">{item.definition}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                 <style>{`
                    .animate-fade-in-down { animation: fadeInDown 0.4s ease-out; }
                    @keyframes fadeInDown {
                        from { opacity: 0; transform: translateY(-10px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                `}</style>
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

export default GlossaryPhase;