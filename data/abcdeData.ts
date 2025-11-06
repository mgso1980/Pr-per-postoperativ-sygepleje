
export interface AbcdeSection {
  id: string;
  letter: string;
  title: string;
  assessment: string[];
  criticalFindings: string[];
  actions: string[];
}

export const abcdeData: AbcdeSection[] = [
  {
    id: 'a',
    letter: 'A',
    title: 'Airway (Luftveje)',
    assessment: [
      'Er luftvejen fri? Se, lyt og føl.',
      'Kan patienten tale i hele sætninger?',
      'Vurder Mallampati-score, tandstatus, og nakkebevægelighed.',
    ],
    criticalFindings: [
      'Stridor (hvæsende vejrtrækning)',
      'Ufrie luftveje (fx pga. sekret, hævelse)',
      'Cyanose (blåfarvning af læber/hud)',
    ],
    actions: [
      'Skab frie luftveje (fx kæbeløft, hagevip)',
      'Sugning ved behov',
      'Overvej anæstesi-assistance',
    ],
  },
  {
    id: 'b',
    letter: 'B',
    title: 'Breathing (Respiration)',
    assessment: [
      'Tæl respirationsfrekvens (RF).',
      'Mål iltsaturation (SpO2).',
      'Observer vejrtrækningsbevægelser (symmetri, brug af hjælpemuskler).',
      'Stetoskoper lungerne.',
    ],
    criticalFindings: [
      'Høj eller lav RF (<8 eller >25)',
      'Faldende SpO2 (<94%)',
      'Asymmetrisk thoraxbevægelse',
      'Brug af hjælpemuskler',
    ],
    actions: [
      'Lejr patienten optimalt (fx eleveret hovedgærde)',
      'Giv ilt efter ordination',
      'Overvej lungefysioterapi',
      'Tilkald hjælp ved forværring',
    ],
  },
  {
    id: 'c',
    letter: 'C',
    title: 'Circulation (Cirkulation)',
    assessment: [
      'Mål puls (frekvens, rytme, fylde).',
      'Mål blodtryk (BT).',
      'Vurder kapillærrespons (<2 sekunder).',
      'Observer hudfarve og temperatur.',
      'Tjek for blødning eller ødemer.',
    ],
    criticalFindings: [
      'Taky- eller bradykardi (høj/lav puls)',
      'Hypo- eller hypertension (lavt/højt BT)',
      'Forlænget kapillærrespons',
      'Bleg, kold og klam hud',
    ],
    actions: [
      'Anlæg i.v.-adgang',
      'Giv væske efter ordination',
      'Stands eventuel synlig blødning',
      'Tag EKG ved mistanke om hjerteproblemer',
    ],
  },
  {
    id: 'd',
    letter: 'D',
    title: 'Disability (Bevidsthed)',
    assessment: [
      'Vurder bevidsthedsniveau (AVPU eller GCS).',
      'Tjek pupiller (størrelse, reaktion på lys).',
      'Mål blodsukker (BS).',
      'Vurder patientens orientering i tid, sted og egne data.',
    ],
    criticalFindings: [
      'Faldende bevidsthedsniveau',
      'Nye neurologiske udfald (fx lammelser)',
      'Kramper',
      'Hypo- eller hyperglykæmi',
    ],
    actions: [
      'Sikre luftveje ved bevidstløshed',
      'Korriger blodsukker efter ordination',
      'Tilkald læge ved neurologiske ændringer',
    ],
  },
  {
    id: 'e',
    letter: 'E',
    title: 'Exposure (Eksponering/Omgivelser)',
    assessment: [
      'Mål temperatur.',
      'Vurder smerter (fx VAS-score).',
      'Undersøg hele kroppen for udslæt, sår, tegn på traumer.',
      'Gennemgå blodprøver og journal.',
    ],
    criticalFindings: [
      'Hypo- eller hypertermi',
      'Stærke, ukontrollerede smerter',
      'Tegn på infektion (rødme, varme, hævelse)',
      'Kritiske blodprøvesvar',
    ],
    actions: [
      'Giv smertestillende efter ordination',
      'Reguler temperatur (tæpper, varme væsker)',
      'Sørg for patientens blufærdighed',
      'Reager på unormale prøvesvar',
    ],
  },
];
