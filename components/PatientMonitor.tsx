import React from 'react';
import { VitalSigns } from '../types';

interface PatientMonitorProps {
    vitals: VitalSigns;
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

const PatientMonitor: React.FC<PatientMonitorProps> = ({ vitals }) => {
    const isCritical = vitals.status === 'Kritisk';
    
    return (
        <div className="bg-slate-800 text-cyan-300 rounded-lg p-4 shadow-2xl border-4 border-slate-700 font-sans">
            <div className="flex justify-between items-center border-b-2 border-slate-700 pb-2 mb-3">
                <h3 className="text-lg font-bold text-white">Patientmonitor: Hr. Svendsen</h3>
                <div className="flex items-center space-x-2">
                    <span className={`text-xs font-bold ${isCritical ? 'text-red-500' : 'text-green-400'}`}>{vitals.status}</span>
                    <div className={`w-3 h-3 rounded-full ${isCritical ? 'bg-red-500 animate-pulse' : 'bg-green-400'}`}></div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
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
