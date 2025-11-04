import React, { useState, useEffect, useCallback } from 'react';
import { checklistTasks as initialTasks } from '../data/checklistData';
import { ChecklistTask } from '../types';
import { CheckCircleIcon } from './IconComponents';

// Helper to shuffle array
const shuffleArray = (array: any[]) => {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
};

const columnDefs = [
  { id: 'tjek-ind', title: '1. TJEK IND', subtitle: 'Før anæstesi', bgColor: 'bg-blue-50', titleColor: 'text-blue-800', borderColor: 'border-blue-300', dropBg: 'bg-blue-100' },
  { id: 'time-out', title: '2. TIME OUT', subtitle: 'Før incision', bgColor: 'bg-yellow-50', titleColor: 'text-yellow-800', borderColor: 'border-yellow-300', dropBg: 'bg-yellow-100' },
  { id: 'tjek-ud', title: '3. TJEK UD', subtitle: 'Før patienten forlader stuen', bgColor: 'bg-green-50', titleColor: 'text-green-800', borderColor: 'border-green-300', dropBg: 'bg-green-100' },
];

const DragAndDropChecklist: React.FC = () => {
    const [tasks, setTasks] = useState<ChecklistTask[]>([]);
    const [columns, setColumns] = useState<Record<string, ChecklistTask[]>>({
        'tjek-ind': [],
        'time-out': [],
        'tjek-ud': [],
    });
    const [draggedItem, setDraggedItem] = useState<ChecklistTask | null>(null);
    const [isComplete, setIsComplete] = useState(false);
    const [incorrectDrop, setIncorrectDrop] = useState<string | null>(null);
    const [isDraggingOver, setIsDraggingOver] = useState<string | null>(null);

    const resetState = useCallback(() => {
        setTasks(shuffleArray([...initialTasks]));
        setColumns({ 'tjek-ind': [], 'time-out': [], 'tjek-ud': [] });
        setIsComplete(false);
        setIncorrectDrop(null);
    }, []);

    useEffect(() => {
        resetState();
    }, [resetState]);
    
    useEffect(() => {
        if (tasks.length === 0 && initialTasks.length > 0) {
            setIsComplete(true);
        }
    }, [tasks]);

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, task: ChecklistTask) => {
        e.dataTransfer.setData('taskId', task.id);
        setDraggedItem(task);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };
    
    const handleDragEnter = (columnId: string) => {
        setIsDraggingOver(columnId);
    };
    
    const handleDragLeave = () => {
        setIsDraggingOver(null);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, columnId: string) => {
        e.preventDefault();
        setIsDraggingOver(null);
        if (!draggedItem) return;

        if (draggedItem.targetColumn === columnId) {
            setTasks(prev => prev.filter(t => t.id !== draggedItem.id));
            setColumns(prev => ({
                ...prev,
                [columnId]: [...prev[columnId], draggedItem],
            }));
        } else {
            setIncorrectDrop(draggedItem.id);
            setTimeout(() => setIncorrectDrop(null), 500);
        }
        setDraggedItem(null);
    };

    if (isComplete) {
        return (
            <div className="mt-4 text-center p-6 bg-green-50 rounded-lg border-2 border-green-200 flex flex-col items-center">
                <CheckCircleIcon />
                <h3 className="text-xl font-bold text-green-800 mt-2">Godt klaret!</h3>
                <p className="text-green-700">Du har placeret alle punkterne korrekt i Sikker Kirurgi tjeklisten.</p>
                 <button 
                  onClick={resetState}
                  className="mt-4 bg-teal-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-teal-700 transition-colors duration-300"
                >
                  Prøv Igen
                </button>
            </div>
        )
    }

    return (
        <div className="mt-4 flex flex-col lg:flex-row gap-4">
            <div className="lg:w-1/3 bg-slate-100 p-3 rounded-lg border-2 border-dashed border-slate-300 min-h-[200px]">
                <h4 className="font-bold text-slate-700 mb-2 text-center">Opgaver</h4>
                <div className="space-y-2">
                    {tasks.map(task => (
                        <div
                            key={task.id}
                            draggable
                            onDragStart={(e) => handleDragStart(e, task)}
                            className={`p-2.5 bg-white rounded-lg shadow-sm cursor-grab border border-slate-200 transition-all duration-300 ${incorrectDrop === task.id ? 'animate-shake bg-red-100 border-red-400' : 'hover:shadow-md hover:border-teal-400'}`}
                        >
                            <p className="text-sm text-slate-800">{task.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-3">
                {columnDefs.map(col => (
                    <div
                        key={col.id}
                        onDrop={(e) => handleDrop(e, col.id)}
                        onDragOver={handleDragOver}
                        onDragEnter={() => handleDragEnter(col.id)}
                        onDragLeave={handleDragLeave}
                        className={`p-3 rounded-lg flex flex-col min-h-[200px] transition-colors duration-200 ${col.bgColor}`}
                    >
                        <div className={`p-2 rounded`}>
                          <h4 className={`font-bold text-center text-sm ${col.titleColor}`}>{col.title}</h4>
                          <p className={`text-xs text-center font-medium ${col.titleColor}`}>{col.subtitle}</p>
                        </div>
                        <div className={`flex-grow mt-2 space-y-2 p-1 rounded-md border-2 border-dashed transition-colors duration-200 ${isDraggingOver === col.id ? col.borderColor : 'border-transparent'}`}>
                             {columns[col.id].map(task => (
                                <div key={task.id} className="p-2.5 bg-white/80 rounded-lg border border-slate-200 animate-fade-in">
                                    <p className="text-sm font-medium text-slate-700">{task.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
             <style>{`
                .animate-shake { animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both; } 
                @keyframes shake { 10%, 90% { transform: translate3d(-1px, 0, 0); } 20%, 80% { transform: translate3d(2px, 0, 0); } 30%, 50%, 70% { transform: translate3d(-4px, 0, 0); } 40%, 60% { transform: translate3d(4px, 0, 0); } }
                .animate-fade-in { animation: fadeIn 0.3s ease-in-out; }
                @keyframes fadeIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
            `}</style>
        </div>
    );
};

export default DragAndDropChecklist;