import React, { useState } from 'react';
import LearningCard from './LearningCard';
import { CheckCircleIcon, BrainIcon, HeartRateMonitorIcon, VideoCameraIcon, ArrowUpTrayIcon } from './IconComponents';
import PatientMonitor from './PatientMonitor';
import { VitalSigns } from '../types';

interface SimulationPhaseProps {
    onComplete: (isCompleted: boolean) => void;
}

const initialVitals: VitalSigns = {
    bt: "125/75",
    pulse: "98",
    rf: "20",
    spO2: "93",
    temp: "36.8",
    status: 'Stabil'
};

const deterioratedVitals: VitalSigns = {
    bt: '108/70',
    pulse: '112',
    rf: '23',
    spO2: '91',
    temp: '38.3',
    status: 'Kritisk'
};

const SimulationPhase: React.FC<SimulationPhaseProps> = ({ onComplete }) => {
    const [isCompleted, setIsCompleted] = useState(false);
    const [currentVitals, setCurrentVitals] = useState<VitalSigns>(initialVitals);
    const [simulationStarted, setSimulationStarted] = useState(false);
    const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success'>('idle');

    const handleStartDeterioration = () => {
        setCurrentVitals(deterioratedVitals);
        setSimulationStarted(true);
        // Optional: play an alert sound
        new Audio('https://www.soundjay.com/buttons/sounds/beep-07a.mp3').play();
    };

    const handleFileUpload = () => {
        setUploadStatus('uploading');
        setTimeout(() => {
            setUploadStatus('success');
        }, 2000); // Simulate 2s upload
    };

    const handleMarkAsComplete = () => {
        setIsCompleted(true);
        onComplete(true);
    };
    
    return (
        <div className="space-y-6">
            <LearningCard title="Simulation: Videoøvelse" icon={<VideoCameraIcon />}>
                <p>I denne sektion skal I omsætte jeres viden til praksis ved at <strong className="text-teal-700">optage en video</strong> af et simuleret scenarie. Formålet er at træne jeres kliniske observation, handling og kommunikation.</p>
                <p className="mt-2 font-semibold">Arbejd i grupper på 4-5 studerende og fordel rollerne:</p>
                 <ul className="list-disc list-inside">
                    <li>Én spiller "Sygeplejerske" (den der handler og taler).</li>
                    <li>Én spiller "Patient".</li>
                    <li>Én spiller "Læge" (modtager ISBAR-rapporten).</li>
                    <li>Resten af gruppen står for at optage videoen og give konstruktiv feedback bagefter.</li>
                </ul>
                <p className="mt-2">Brug en telefon eller webcam til at optage "Sygeplejerskens" performance.</p>
            </LearningCard>

            <LearningCard title="Scenarie: Hr. Svendsen i Opvågningsafsnittet" icon={<HeartRateMonitorIcon />}>
                <h4 className="font-bold">Situation</h4>
                <p className="text-sm mb-4">Du er sygeplejerske i opvågningsafsnittet og modtager Hr. Svendsen efter hans operation. Følg manuskriptet nedenfor, mens I optager.</p>

                <div className="flex flex-col lg:flex-row gap-6 items-start">
                    <div className="lg:w-1/2 w-full">
                        <h3 className="font-bold text-lg text-slate-800">Manuskript & Handlinger</h3>
                        <p className="text-xs text-slate-500 mb-2">"Sygeplejersken" skal udføre disse handlinger på videoen.</p>
                        <ol className="list-decimal list-inside space-y-3 text-sm">
                            <li><strong className="text-teal-700">Start videooptagelsen.</strong></li>
                            <li><strong>Identificer patienten:</strong> Vend dig mod "Patienten" og sig: "Goddag, mit navn er [dit navn]. Vil du venligst sige dit fulde navn og CPR-nummer?". "Patienten" svarer, og du lader som om, du tjekker det mod et armbånd.</li>
                            <li><strong>Observer patienten:</strong> "Patienten" agerer nu konfus, tager sig til hoften og siger: "Jeg har ondt... Jeg har det underligt og kan ikke rigtig få vejret."</li>
                            <li><strong>Aflæs monitor:</strong> Se på patientmonitoren og sig højt: "Okay, jeg kan se dine værdier er [aflæs de stabile værdier fra monitoren]."</li>
                            <li><strong>Start forværring:</strong> Klik på knappen <strong className="text-red-600">"Start Forværring"</strong>. Monitoren vil opdatere, og en alarm vil lyde.</li>
                            <li><strong>Reager og aflæs igen:</strong> Aflæs de nye, forværrede værdier højt. Sig: "Dine værdier er ændret. Jeg skal nu udregne en TOKS-score."</li>
                            <li><strong>Konkludér:</strong> Her skal du selv udregne TOKS-scoren ved hjælp af din viden fra "Værktøjer"-fanen. Sig derefter resultatet højt: "Din TOKS-score er [indsæt din udregning]. Det er kritisk, så jeg ringer til lægen med det samme."</li>
                            <li><strong>Aflevér ISBAR:</strong> En anden medstuderende er nu "Læge". Aflevér en fuld, mundtlig ISBAR-rapport baseret på al din viden om casen og de nye værdier.</li>
                             <li><strong className="text-teal-700">Stop videooptagelsen.</strong></li>
                        </ol>
                    </div>

                    <div className="lg:w-1/2 w-full">
                         <PatientMonitor vitals={currentVitals} />
                         {!simulationStarted && (
                            <button 
                                onClick={handleStartDeterioration}
                                className="w-full mt-4 bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg animate-pulse"
                            >
                                Start Forværring
                            </button>
                         )}
                    </div>
                </div>
            </LearningCard>

            <LearningCard title="Aflevering af Video" icon={<ArrowUpTrayIcon />}>
                <p>Når I er tilfredse med jeres optagelse, skal videoen afleveres. Brug upload-funktionen herunder.</p>
                <div className="mt-4 border-2 border-dashed border-slate-300 rounded-lg p-8 text-center">
                    {uploadStatus === 'idle' && (
                        <>
                            <p className="text-slate-600 mb-4">Træk jeres videofil herhen eller klik for at vælge en fil.</p>
                            <button onClick={handleFileUpload} className="bg-teal-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-teal-700 transition-colors">
                                Vælg Video
                            </button>
                        </>
                    )}
                    {uploadStatus === 'uploading' && (
                        <div className="flex items-center justify-center space-x-2 text-slate-600">
                             <svg className="animate-spin h-5 w-5 text-teal-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Uploader video...</span>
                        </div>
                    )}
                    {uploadStatus === 'success' && (
                         <div className="flex items-center justify-center space-x-2 text-lg font-semibold text-green-700">
                            <CheckCircleIcon />
                            <span>Video afleveret!</span>
                        </div>
                    )}
                </div>
            </LearningCard>
            
            <LearningCard title="Debriefing (fælles)" icon={<BrainIcon />}>
                <p className="text-sm">Når I har gennemført scenariet, så byt roller og prøv igen. Diskutér derefter følgende:</p>
                <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                    <li>Hvordan føltes det at skulle handle "live" foran et kamera?</li>
                    <li>Hvilke observationer på monitoren og fra "patienten" var vigtigst?</li>
                    <li>Var ISBAR-rapporten klar og præcis? Hvad kunne gøres bedre?</li>
                    <li>Hvilken del af simulationen var mest udfordrende? Hvad var mest lærerigt?</li>
                </ul>
            </LearningCard>

            <div className="text-center pt-4">
                {isCompleted ? (
                    <div className="inline-flex items-center space-x-2 text-lg font-semibold text-green-700 bg-green-100 py-3 px-6 rounded-lg">
                        <CheckCircleIcon />
                        <span>Godt gået! I har gennemført scenariet.</span>
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