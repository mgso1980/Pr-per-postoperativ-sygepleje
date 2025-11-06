import React, { useState } from 'react';
import LearningCard from './LearningCard';
import { TeamIcon, CheckCircleIcon } from './IconComponents';

interface CaseWorkPhaseProps {
    onComplete: (isCompleted: boolean) => void;
}

const caseQuiz = [
    {
        question: "Hr. Svendsen (svær KOL, Type 1 diabetes) skal opereres akut. Hvilken præoperativ handling er mest kritisk for at undgå en livstruende komplikation under anæstesien?",
        options: [
            "Give ham ekstra smertestillende for hans knæartrose.",
            "Sikre en grundig vurdering af hans luftveje og lungefunktion i samarbejde med anæstesien.",
            "Lægge en detaljeret plan for hans genoptræning efter operationen."
        ],
        correctAnswer: 1,
        feedback: "Korrekt! Med svær KOL er Hr. Svendsen i høj risiko for respiratoriske komplikationer. En tæt dialog med anæstesien om lungefunktion og luftvejshåndtering er afgørende for at overleve operationen."
    },
    {
        question: "Under operationen, hvilken anæstesiform vil sandsynligvis være at foretrække for Hr. Svendsen for at minimere belastningen på hans hjerte og lunger?",
        options: [
            "Generel anæstesi, da det er standard og sikrer, at han sover dybt.",
            "Spinal anæstesi, da det bedøver den nedre del af kroppen uden at påvirke bevidsthed og respiration i samme grad.",
            "Lokal anæstesi i operationsfeltet alene."
        ],
        correctAnswer: 1,
        feedback: "Helt rigtigt! En spinal anæstesi er ofte førstevalg til ældre, skrøbelige patienter med hjerte/lunge-sygdom, da den giver god smertedækning med mindre systemisk påvirkning end fuld bedøvelse."
    },
    {
        question: "Hvilken postoperativ komplikation udgør den STØRSTE og mest umiddelbare risiko for Hr. Svendsen, givet hans samlede tilstand?",
        options: [
            "Forstoppelse på grund af immobilisering og morfin.",
            "Langsom sårheling på grund af diabetes.",
            "Lungebetændelse (pneumoni) og respirationsinsufficiens pga. hans KOL, smerter og sengeleje."
        ],
        correctAnswer: 2,
        feedback: "Korrekt! Med hans svære KOL er han ekstremt sårbar over for lungekomplikationer. Smerter forhindrer ham i at hoste og trække vejret dybt, hvilket fører til sekretstagnation og pneumoni. Aggressiv lungefysioterapi, smertebehandling og mobilisering er altafgørende."
    }
];

const CaseWorkPhase: React.FC<CaseWorkPhaseProps> = ({ onComplete }) => {
    const [isPhaseCompleted, setIsPhaseCompleted] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [quizFinished, setQuizFinished] = useState(false);

    const handleAnswerClick = (answerIndex: number) => {
        if (selectedAnswer !== null) return;
        setSelectedAnswer(answerIndex);
        const correct = caseQuiz[currentQuestionIndex].correctAnswer === answerIndex;
        setIsCorrect(correct);
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < caseQuiz.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            setSelectedAnswer(null);
            setIsCorrect(null);
        } else {
            setQuizFinished(true);
        }
    };

    const handleMarkAsComplete = () => {
        setIsPhaseCompleted(true);
        onComplete(true);
    };
    
    const currentQuestion = caseQuiz[currentQuestionIndex];
    
    return (
        <div className="space-y-6">
            <LearningCard title="Introduktion til Casearbejde" icon={<TeamIcon />}>
                <p>I denne sektion skal du arbejde med en realistisk patientcase. Formålet er at anvende din teoretiske viden fra de foregående faser i et praksisnært scenarie.</p>
                <p>Læs casen grundigt og besvar de efterfølgende spørgsmål for at forbinde teori med klinisk ræsonnement og handling.</p>
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
                <h4 className="font-bold mt-4">Den Akutte Situation</h4>
                 <p className="mt-2">Hr. Svendsen er faldet i hjemmet. Røntgen viser en <strong className="text-red-600">venstresidig collum femoris fraktur</strong>. Ortopædkirurgen anbefaler operation snarest muligt.</p>
            </LearningCard>

            <LearningCard title="Interaktiv Case: Tag Stilling" icon={<TeamIcon />}>
                {!quizFinished ? (
                    <div className="p-1">
                        <div className="mb-4">
                            <p className="text-sm text-slate-500">Spørgsmål {currentQuestionIndex + 1} af {caseQuiz.length}</p>
                            <h4 className="text-lg font-semibold text-slate-700 mt-1">{currentQuestion.question}</h4>
                        </div>
                        <div className="space-y-3">
                            {currentQuestion.options.map((option, index) => {
                                let buttonClass = "w-full text-left p-3 rounded-lg border-2 transition-all duration-200 disabled:cursor-not-allowed ";
                                if (selectedAnswer !== null) {
                                    if (index === currentQuestion.correctAnswer) {
                                        buttonClass += 'bg-green-100 border-green-500 text-green-800 font-semibold';
                                    } else if (index === selectedAnswer) {
                                        buttonClass += 'bg-red-100 border-red-500 text-red-800';
                                    } else {
                                        buttonClass += 'bg-slate-100 border-slate-200 text-slate-500';
                                    }
                                } else {
                                    buttonClass += 'bg-white border-slate-300 hover:bg-teal-50 hover:border-teal-400';
                                }
                                return (
                                    <button key={index} onClick={() => handleAnswerClick(index)} disabled={selectedAnswer !== null} className={buttonClass}>
                                        {option}
                                    </button>
                                );
                            })}
                        </div>
                        {selectedAnswer !== null && (
                            <div className={`mt-4 p-3 rounded-lg animate-fade-in ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
                                <p className={`font-semibold ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                                    {isCorrect ? "Godt ræsonneret!" : "Prøv igen..."}
                                </p>
                                <p className="text-sm text-slate-600 mt-1">{currentQuestion.feedback}</p>
                                <button onClick={handleNextQuestion} className="mt-4 bg-slate-800 text-white font-bold py-2 px-5 rounded-lg hover:bg-slate-700 transition-colors duration-300">
                                    {currentQuestionIndex < caseQuiz.length - 1 ? "Næste Spørgsmål" : "Afslut Case"}
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="text-center p-4">
                        <h3 className="text-2xl font-bold text-slate-800">Godt klaret!</h3>
                        <p className="text-lg mt-2">Du har nu arbejdet dig igennem casen om Hr. Svendsen. Du kan nu markere fasen som gennemført.</p>
                    </div>
                )}
            </LearningCard>
            
            <div className="text-center pt-4">
                {isPhaseCompleted ? (
                    <div className="inline-flex items-center space-x-2 text-lg font-semibold text-green-700 bg-green-100 py-3 px-6 rounded-lg">
                        <CheckCircleIcon />
                        <span>Godt gået! Du har gennemført casearbejdet.</span>
                    </div>
                ) : (
                    <button
                        onClick={handleMarkAsComplete}
                        disabled={!quizFinished}
                        className="bg-teal-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-teal-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:bg-slate-400 disabled:cursor-not-allowed"
                    >
                        Markér som Gennemført
                    </button>
                )}
            </div>
        </div>
    );
};

export default CaseWorkPhase;