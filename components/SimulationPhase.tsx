
import React, { useState, useRef, useEffect } from 'react';
import LearningCard from './LearningCard';
import { CheckCircleIcon, BrainIcon, HeartRateMonitorIcon, VideoCameraIcon } from './IconComponents';
import PatientMonitor from './PatientMonitor';
import { VitalSigns } from '../types';

interface SimulationPhaseProps {
    onComplete: (isCompleted: boolean) => void;
}

const initialVitals: VitalSigns = {
    bt: "125/75",
    pulse: "98",
    rf: "20",
    spO2: "96",
    temp: "36.8",
    status: 'Stabil'
};

const deterioratedVitals: VitalSigns = {
    bt: '90/55',
    pulse: '132',
    rf: '32',
    spO2: '84',
    temp: '39.4',
    status: 'Kritisk'
};

const SimulationPhase: React.FC<SimulationPhaseProps> = ({ onComplete }) => {
    const [isCompleted, setIsCompleted] = useState(false);
    const [currentVitals, setCurrentVitals] = useState<VitalSigns>(initialVitals);
    const [simulationStarted, setSimulationStarted] = useState(false);
    const [isAlarmActive, setIsAlarmActive] = useState(false);
    
    // Ref to store the interval ID
    const alarmIntervalRef = useRef<number | null>(null);
    // Ref to store AudioContext to avoid creating too many
    const audioContextRef = useRef<AudioContext | null>(null);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            stopAlarm();
            if (audioContextRef.current) {
                audioContextRef.current.close();
            }
        };
    }, []);

    const playBeepSequence = () => {
        try {
            const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
            if (!AudioContext) return;

            if (!audioContextRef.current) {
                audioContextRef.current = new AudioContext();
            }
            const ctx = audioContextRef.current;
            if (ctx.state === 'suspended') {
                ctx.resume();
            }

            const oscillator = ctx.createOscillator();
            const gainNode = ctx.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(ctx.destination);

            // Medical alarm tone (Square wave)
            oscillator.type = 'square';
            oscillator.frequency.setValueAtTime(880, ctx.currentTime); // A5 pitch
            
            const now = ctx.currentTime;
            const vol = 0.15;

            // Beep 1
            gainNode.gain.setValueAtTime(vol, now);
            gainNode.gain.linearRampToValueAtTime(vol, now + 0.1);
            gainNode.gain.linearRampToValueAtTime(0, now + 0.11);
            
            // Beep 2
            gainNode.gain.setValueAtTime(0, now + 0.2);
            gainNode.gain.linearRampToValueAtTime(vol, now + 0.21);
            gainNode.gain.linearRampToValueAtTime(vol, now + 0.31);
            gainNode.gain.linearRampToValueAtTime(0, now + 0.32);

            // Beep 3
            gainNode.gain.setValueAtTime(0, now + 0.4);
            gainNode.gain.linearRampToValueAtTime(vol, now + 0.41);
            gainNode.gain.linearRampToValueAtTime(vol, now + 0.51);
            gainNode.gain.linearRampToValueAtTime(0, now + 0.52);

            oscillator.start(now);
            oscillator.stop(now + 0.6);
        } catch (error) {
            console.error("Kunne ikke afspille lyd:", error);
        }
    };

    const startAlarmLoop = () => {
        setIsAlarmActive(true);
        playBeepSequence(); // Play immediately
        
        // Set interval to play every 2 seconds
        if (alarmIntervalRef.current) clearInterval(alarmIntervalRef.current);
        alarmIntervalRef.current = window.setInterval(() => {
            playBeepSequence();
        }, 2000);
    };

    const stopAlarm = () => {
        if (alarmIntervalRef.current) {
            clearInterval(alarmIntervalRef.current);
            alarmIntervalRef.current = null;
        }
        setIsAlarmActive(false);
    };

    const handleStartDeterioration = () => {
        setCurrentVitals(deterioratedVitals);
        setSimulationStarted(true);
        startAlarmLoop();
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
                <p className="mt-2">Brug en telefon eller webcam til at optage "Sygeplejerskens" performance. <strong>Bemærk:</strong> Videoen skal ikke uploades, men gemmes på jeres egen enhed til senere evaluering og feedback i gruppen.</p>
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
                            <li><strong>Aflæs monitor:</strong> Se på patientmonitoren og sig højt: "Okay, jeg kan se dine værdier er..." (aflæs værdierne).</li>
                            <li><strong>Forlad stuen kortvarigt:</strong> Sig: "Jeg henter lige noget smertestillende." og gå ud af billedet. Mens du er væk, bliver "Patienten" mere urolig, stønner højere og kalder: "Av! Det gør ondt! Er der nogen her?!".</li>
                            <li><strong>Genindtræd og start forværring:</strong> Klik på knappen <strong className="text-red-600">"Start Forværring"</strong>, idet du "kommer tilbage" til patienten.</li>
                            <li><strong>Reager på forværringen:</strong> Orienter dig hurtigt mod patienten og monitoren og reager relevant på situationen.</li>
                            <li><strong>Aflæs igen:</strong> Aflæs de nye, forværrede værdier højt. Sig: "Dine værdier er ændret. Jeg skal nu udregne en TOKS-score."</li>
                            <li><strong>Konkludér:</strong> Her skal du selv udregne TOKS-scoren ved hjælp af din viden fra "Værktøjer"-fanen. Sig derefter resultatet højt: "Din TOKS-score er [indsæt din udregning]. Det er kritisk, så jeg ringer til lægen med det samme."</li>
                            <li><strong>Aflevér ISBAR:</strong> En anden medstuderende er nu "Læge". Aflevér en fuld, mundtlig ISBAR-rapport baseret på al din viden om casen og de nye værdier.</li>
                             <li><strong className="text-teal-700">Stop videooptagelsen.</strong></li>
                        </ol>
                    </div>

                    <div className="lg:w-1/2 w-full">
                         <PatientMonitor 
                            vitals={currentVitals} 
                            isAlarmActive={isAlarmActive}
                            onSilenceAlarm={stopAlarm}
                         />
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
            
            <LearningCard title="Debriefing (fælles)" icon={<BrainIcon />}>
                <p className="text-sm font-bold mb-2">Se videoen igennem straks efter scenariet.</p>
                <p className="text-sm">Når I har set optagelsen, skal I bruge den som udgangspunkt for en fælles evaluering:</p>
                <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                    <li>Stemte jeres oplevelse af situationen overens med det, I så på videoen?</li>
                    <li>Hvordan var "Sygeplejerskens" kommunikation og ro under presset?</li>
                    <li>Var ISBAR-rapporten struktureret korrekt? Fik I alle vigtige detaljer med?</li>
                    <li>Hvad fungerede rigtig godt, og hvad ville I gøre anderledes fremadrettet?</li>
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
