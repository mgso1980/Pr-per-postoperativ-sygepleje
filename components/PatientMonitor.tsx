
import React from 'react';
import { VitalSigns } from '../types';

interface PatientMonitorProps {
    vitals: VitalSigns;
    isAlarmActive?: boolean;
    onSilenceAlarm?: () => void;
}

const VitalSign: React.FC<{ label: string; value: string; unit: string; className?: string }> = ({ label, value, unit, className = '' }) => (
    <div className={`p-3 rounded-lg ${className}`}>
        <div className="text-xs text-slate-300 font-semibold">{label}</div>
        <div className="flex items-baseline">
            <span className="text-4xl font-mono font-bold tracking-tight">{value}</span>
            <span className="text-sm text-slate-300 ml-1 font-semibold">{unit}</span>
        </div>
    </div>
);

const PatientMonitor: React.FC<PatientMonitorProps> = ({ vitals, isAlarmActive = false, onSilenceAlarm }) => {
    const isCritical = vitals.status === 'Kritisk';
    
    return (
        <div className="bg-slate-800 text-cyan-300 rounded-lg p-4 shadow-2xl border-4 border-slate-700 font-sans relative overflow-hidden">
            {/* Alarm overlay effect */}
            {isAlarmActive && (
                <div className="absolute inset-0 border-4 border-red-500 pointer-events-none animate-pulse z-10 rounded-lg"></div>
            )}

            <div className="flex justify-between items-center border-b-2 border-slate-700 pb-2 mb-3">
                <h3 className="text-lg font-bold text-white">Patientmonitor: Hr. Svendsen</h3>
                <div className="flex items-center space-x-4">
                    {isAlarmActive && onSilenceAlarm && (
                        <button 
                            onClick={onSilenceAlarm}
                            className="bg-yellow-500 hover:bg-yellow-400 text-black text-xs font-bold py-1 px-3 rounded shadow-md animate-pulse flex items-center"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" />
                            </svg>
                            AFSTIL ALARM
                        </button>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3 relative z-0">
                <div className="col-span-2 flex items-center bg-black/30 p-2 rounded-lg">
                    <div className="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${isCritical ? 'text-red-500' : 'text-green-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </div>
                    <div className="flex-grow text-center">
                        <div className="text-lg font-semibold text-white">PULS</div>
                         <div className={`text-6xl font-mono font-bold ${isCritical ? 'text-red-500' : 'text-green-400'}`}>
                           <span className={isCritical ? 'animate-pulse-strong' : 'animate-pulse-normal'}>{vitals.pulse}</span>
                         </div>
                    </div>
                </div>

                <VitalSign label="SpO2" value={vitals.spO2} unit="%" className={`bg-black/30 ${parseInt(vitals.spO2) < 92 ? 'text-red-500' : 'text-cyan-300'}`} />
                <VitalSign label="RF" value={vitals.rf} unit="min" className="bg-black/30" />
                <VitalSign label="NIBP" value={vitals.bt} unit="mmHg" className="bg-black/30 col-span-2" />
                <VitalSign label="TEMP" value={vitals.temp} unit="°C" className="bg-black/30 col-span-2" />
            </div>
            <style>{`
                @keyframes pulse-normal {
                    50% { opacity: .7; }
                }
                .animate-pulse-normal {
                    animation: pulse-normal 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                @keyframes pulse-strong {
                    0%, 100% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.05); opacity: .8; }
                }
                .animate-pulse-strong {
                    animation: pulse-strong 0.8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
            `}</style>
        </div>
    );
};

export default PatientMonitor;
