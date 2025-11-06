import React, { useState, useEffect } from 'react';
import { JournalEntry } from '../types';

interface InteractiveJournalProps {
    initialEntries?: JournalEntry[];
    initialNewEntry?: Omit<JournalEntry, 'id' | 'time'>;
}

const defaultInitialEntry: JournalEntry = {
    id: 1,
    time: "08:00",
    bt: "130/85",
    pulse: "95",
    rf: "18",
    spO2: "97",
    temp: "38.4",
    vas: "7",
    notes: "Patienten klager over tiltagende smerter. Bugvæg spændt."
};

const defaultNewEntry: Omit<JournalEntry, 'id' | 'time'> = {
    bt: '110/70',
    pulse: '110',
    rf: '22',
    spO2: '94',
    temp: '38.6',
    vas: '8',
    notes: 'Patienten er nu mere smertepåvirket og utilpas.'
};


const InteractiveJournal: React.FC<InteractiveJournalProps> = ({
    initialEntries = [defaultInitialEntry],
    initialNewEntry = defaultNewEntry
}) => {
    const [entries, setEntries] = useState<JournalEntry[]>(initialEntries);
    const [newEntry, setNewEntry] = useState(initialNewEntry);

    useEffect(() => {
        setEntries(initialEntries);
        setNewEntry(initialNewEntry);
    }, [initialEntries, initialNewEntry]);


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewEntry(prev => ({ ...prev, [name]: value }));
    };

    const handleAddEntry = (e: React.FormEvent) => {
        e.preventDefault();
        const currentTime = new Date().toLocaleTimeString('da-DK', { hour: '2-digit', minute: '2-digit' });
        const entryToAdd: JournalEntry = {
            id: Date.now(),
            time: currentTime,
            ...newEntry
        };
        setEntries(prev => [...prev, entryToAdd]);
        // Clear non-pre-filled fields after adding
        setNewEntry(prev => ({...prev, notes: ''}));
    };

    return (
        <div className="mt-6 border border-slate-200 rounded-lg p-4">
            <h3 className="text-lg font-bold text-slate-700 mb-4">Journal</h3>
            
            {/* Journal Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-slate-600">
                    <thead className="text-xs text-slate-700 uppercase bg-slate-100">
                        <tr>
                            <th scope="col" className="px-4 py-3">Tid</th>
                            <th scope="col" className="px-4 py-3">BT</th>
                            <th scope="col" className="px-4 py-3">Puls</th>
                            <th scope="col" className="px-4 py-3">RF</th>
                            <th scope="col" className="px-4 py-3">SpO2 (%)</th>
                            <th scope="col" className="px-4 py-3">Temp (°C)</th>
                            <th scope="col" className="px-4 py-3">VAS</th>
                            <th scope="col" className="px-4 py-3">Bemærkninger</th>
                        </tr>
                    </thead>
                    <tbody>
                        {entries.map((entry) => (
                            <tr key={entry.id} className="bg-white border-b hover:bg-slate-50">
                                <td className="px-4 py-3 font-medium">{entry.time}</td>
                                <td className="px-4 py-3">{entry.bt}</td>
                                <td className="px-4 py-3">{entry.pulse}</td>
                                <td className="px-4 py-3">{entry.rf}</td>
                                <td className="px-4 py-3">{entry.spO2}</td>
                                <td className="px-4 py-3">{entry.temp}</td>
                                <td className="px-4 py-3">{entry.vas}</td>
                                <td className="px-4 py-3">{entry.notes}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Input Form */}
            <form onSubmit={handleAddEntry} className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <h4 className="font-semibold text-slate-800 mb-3">Tilføj ny måling</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
                    <div className="lg:col-span-1">
                        <label htmlFor="bt" className="block text-xs font-medium text-slate-600">BT</label>
                        <input type="text" name="bt" id="bt" value={newEntry.bt} onChange={handleInputChange} className="mt-1 w-full p-2 border border-slate-300 rounded-md text-sm" placeholder="f.eks. 120/80" />
                    </div>
                     <div className="lg:col-span-1">
                        <label htmlFor="pulse" className="block text-xs font-medium text-slate-600">Puls</label>
                        <input type="text" name="pulse" id="pulse" value={newEntry.pulse} onChange={handleInputChange} className="mt-1 w-full p-2 border border-slate-300 rounded-md text-sm" placeholder="f.eks. 80" />
                    </div>
                     <div className="lg:col-span-1">
                        <label htmlFor="rf" className="block text-xs font-medium text-slate-600">RF</label>
                        <input type="text" name="rf" id="rf" value={newEntry.rf} onChange={handleInputChange} className="mt-1 w-full p-2 border border-slate-300 rounded-md text-sm" placeholder="f.eks. 16" />
                    </div>
                     <div className="lg:col-span-1">
                        <label htmlFor="spO2" className="block text-xs font-medium text-slate-600">SpO2</label>
                        <input type="text" name="spO2" id="spO2" value={newEntry.spO2} onChange={handleInputChange} className="mt-1 w-full p-2 border border-slate-300 rounded-md text-sm" placeholder="f.eks. 98" />
                    </div>
                     <div className="lg:col-span-1">
                        <label htmlFor="temp" className="block text-xs font-medium text-slate-600">Temp</label>
                        <input type="text" name="temp" id="temp" value={newEntry.temp} onChange={handleInputChange} className="mt-1 w-full p-2 border border-slate-300 rounded-md text-sm" placeholder="f.eks. 37.1" />
                    </div>
                     <div className="lg:col-span-1">
                        <label htmlFor="vas" className="block text-xs font-medium text-slate-600">VAS</label>
                        <input type="text" name="vas" id="vas" value={newEntry.vas} onChange={handleInputChange} className="mt-1 w-full p-2 border border-slate-300 rounded-md text-sm" placeholder="f.eks. 3" />
                    </div>
                    <div className="col-span-2 sm:col-span-4 lg:col-span-2">
                         <label htmlFor="notes" className="block text-xs font-medium text-slate-600">Bemærkninger</label>
                         <input type="text" name="notes" id="notes" value={newEntry.notes} onChange={handleInputChange} className="mt-1 w-full p-2 border border-slate-300 rounded-md text-sm" placeholder="Korte observationer..." />
                    </div>
                </div>
                 <button type="submit" className="mt-4 bg-teal-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-teal-700 transition-colors duration-300 text-sm">
                    Tilføj Måling
                </button>
            </form>
        </div>
    );
};

export default InteractiveJournal;