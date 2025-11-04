export enum Phase {
  PRE,
  PER,
  POST,
  CASE,
  TOOLS,
  SIMULATION,
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // index of the correct option
  feedback: string;
}

// Fix: Add and export the JournalEntry interface to resolve the import error in InteractiveJournal.tsx.
export interface JournalEntry {
  id: number;
  time: string;
  bt: string;
  pulse: string;
  rf: string;
  spO2: string;
  temp: string;
  vas: string;
  notes: string;
}

export interface ChecklistTask {
  id: string;
  text: string;
  targetColumn: 'tjek-ind' | 'time-out' | 'tjek-ud';
}