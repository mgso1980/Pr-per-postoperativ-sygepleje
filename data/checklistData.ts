import { ChecklistTask } from '../types';

export const checklistTasks: ChecklistTask[] = [
  { id: 'task-1', text: 'Patientens identitet, indgreb og operationssted bekræftes', targetColumn: 'tjek-ind' },
  { id: 'task-2', text: 'Allergi, luftveje og aspirationsrisiko tjekkes', targetColumn: 'tjek-ind' },
  { id: 'task-3', text: 'Hele teamet præsenterer sig ved navn og funktion', targetColumn: 'time-out' },
  { id: 'task-4', text: 'Forventet blodtab og kritiske faser gennemgås', targetColumn: 'time-out' },
  { id: 'task-5', text: 'Sterilitet og profylaktisk antibiotika bekræftes', targetColumn: 'time-out' },
  { id: 'task-6', text: 'Instrument- og servietoptælling bekræftes afstemt', targetColumn: 'tjek-ud' },
  { id: 'task-7', text: 'Eventuelle præparater/prøver mærkes korrekt', targetColumn: 'tjek-ud' },
  { id: 'task-8', text: 'Plan for postoperativ håndtering og observationer er klar', targetColumn: 'tjek-ud' },
];
