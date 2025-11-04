
import { Question } from '../types';

export const preoperativeQuiz: Question[] = [
  {
    id: 1,
    question: "Hvad er det primære formål med at give en patient 200 ml sukkerholdig væske 2 timer før en elektiv operation?",
    options: [
      "At slukke patientens tørst.",
      "At reducere postoperativ kvalme og insulinresistens.",
      "At give patienten ekstra energi til operationen.",
      "At teste om patienten har overholdt fastereglerne."
    ],
    correctAnswer: 1,
    feedback: "Korrekt! Indtag af sukkerholdig væske før operation modvirker kroppens stressrespons, reducerer insulinresistens og kan mindske postoperativ kvalme."
  },
  {
    id: 2,
    question: "Under hvilken omstændighed kan et informeret samtykke tilsidesættes?",
    options: [
      "Hvis patienten er meget nervøs.",
      "Hvis kirurgen mener, det er bedst.",
      "Ved vital indikation, hvor operation er akut nødvendig.",
      "Hvis patientens familie giver samtykke."
    ],
    correctAnswer: 2,
    feedback: "Helt rigtigt. Ved en livstruende tilstand (vital indikation), hvor der ikke er tid til at indhente samtykke, kan man handle for at redde patientens liv."
  },
  {
    id: 3,
    question: "Hvad står 'A' for i den præoperative ABCDE-vurdering?",
    options: [
      "Anæstesi",
      "Allergi",
      "Airway (Luftveje)",
      "Antibiotika"
    ],
    correctAnswer: 2,
    feedback: "Korrekt! 'A' står for Airway. En fri luftvej er den mest akutte prioritet. Vurderingen inkluderer bl.a. Mallampati-score for at forudse eventuelle intubationsvanskeligheder."
  },
  {
    id: 4,
    question: "Hvor længe skal en patient faste fra fast føde før en elektiv operation?",
    options: [
      "2 timer",
      "4 timer",
      "6 timer",
      "12 timer"
    ],
    correctAnswer: 2,
    feedback: "Ja, det er korrekt. Mavesækken skal være tom for fast føde i mindst 6 timer før bedøvelse for at minimere risikoen for aspiration."
  },
  {
    id: 5,
    question: "Hvilken af følgende patienter har den højeste anæstesiologiske risiko ifølge ASA-klassifikationen?",
    options: [
      "ASA I: En rask, ikke-ryger patient.",
      "ASA II: En patient med velreguleret diabetes.",
      "ASA III: En patient med tidligere hjerteanfald for over 3 måneder siden.",
      "ASA IV: En patient med sepsis og påvirket organfunktion."
    ],
    correctAnswer: 3,
    feedback: "Korrekt! ASA IV beskriver en patient med en alvorlig systemisk sygdom, som er en konstant trussel mod livet. Dette udgør den højeste risiko blandt valgmulighederne."
  },
  {
    id: 6,
    question: "Hvad er et vigtigt formål med den præoperative information til patienten?",
    options: [
        "At give patienten en detaljeret lektion i kirurgisk anatomi.",
        "At reducere angst og give patienten handlekompetence.",
        "At få patienten til at underskrive samtykke så hurtigt som muligt.",
        "At overbevise patienten om at vælge den dyreste behandling."
    ],
    correctAnswer: 1,
    feedback: "Korrekt! God information reducerer angst, øger patientens tryghed og giver dem en følelse af kontrol og medansvar for forløbet."
  },
  {
    id: 7,
    question: "Hvorfor er præoperativ helkropsvask med desinficerende sæbe vigtig?",
    options: [
        "For at patienten dufter godt på operationsstuen.",
        "For at reducere hudens normale bakterieflora og nedsætte infektionsrisikoen.",
        "Det er kun nødvendigt for patienter med kendte hudproblemer.",
        "For at fjerne hår på kroppen."
    ],
    correctAnswer: 1,
    feedback: "Præcis! Formålet er at minimere antallet af mikroorganismer på huden for at reducere risikoen for postoperativ sårinfektion (SSI)."
  },
  {
    id: 8,
    question: "Hvilken type medicin skal en patient typisk pausere før en operation på grund af øget blødningsrisiko?",
    options: [
        "Paracetamol.",
        "Antihypertensiva (blodtryksnedsættende).",
        "Antikoagulantia (blodfortyndende medicin).",
        "Antibiotika."
    ],
    correctAnswer: 2,
    feedback: "Korrekt. Blodfortyndende medicin (f.eks. Marevan, Eliquis, Xarelto, Hjertemagnyl) pauseres ofte i en periode op til operation for at mindske blødningsrisikoen."
  },
  {
    id: 9,
    question: "Hvilket forebyggende tiltag anvendes ofte præoperativt for at mindske risikoen for dyb venetrombose (DVT)?",
    options: [
        "At patienten ligger helt stille i sengen.",
        "At give patienten en stor dosis væske.",
        "At give patienten TED-strømper (støttestrømper) og evt. blodfortyndende medicin.",
        "At hæve fodenden af sengen."
    ],
    correctAnswer: 2,
    feedback: "Ja, støttestrømper og/eller lavmolekylært heparin gives ofte for at forbedre blodcirkulationen i benene og forebygge blodpropper."
  },
  {
    id: 10,
    question: "Hvad kan være en effektiv sygeplejeintervention til en meget angst patient præoperativt?",
    options: [
        "At fortælle patienten, at der ikke er noget at være bange for.",
        "At undgå at tale om operationen.",
        "Aktiv lytning, anerkendelse af følelser og eventuelt beroligende medicin (præmedicin) efter ordination.",
        "At lade patienten være alene med sine tanker."
    ],
    correctAnswer: 2,
    feedback: "Helt rigtigt. At anerkende patientens angst, lytte aktivt og tilbyde information og eventuelt ordineret præmedicin er centrale sygeplejehandlinger for at skabe tryghed."
  }
];

export const peroperativeQuiz: Question[] = [
  {
    id: 1,
    question: "Hvad er formålet med 'Time Out' i 'Sikker Kirurgi'-tjeklisten?",
    options: [
      "At give kirurgen en kort pause.",
      "At hele teamet bekræfter korrekt patient, indgreb og operationssted lige før incision.",
      "At tjekke om patienten er faldet i søvn.",
      "At dokumentere de anvendte instrumenter."
    ],
    correctAnswer: 1,
    feedback: "Korrekt! 'Time Out' er en kritisk sikkerhedsprocedure, hvor hele teamet pauser for verbalt at bekræfte de vigtigste detaljer og sikre, at alle er enige."
  },
  {
    id: 2,
    question: "Hvilken type anæstesi injiceres direkte i subarachnoidalrummet?",
    options: [
      "Generel anæstesi",
      "Epidural anæstesi",
      "Lokal anæstesi",
      "Spinal anæstesi"
    ],
    correctAnswer: 3,
    feedback: "Ja, det er rigtigt. Ved spinal anæstesi injiceres lokalanæstetika i cerebrospinalvæsken i subarachnoidalrummet, hvilket giver en hurtig og effektiv blokade."
  },
  {
    id: 3,
    question: "Hvem er IKKE en standard del af det peroperative team på en operationsstue?",
    options: [
      "Anæstesisygeplejerske",
      "Kirurg",
      "Patientens praktiserende læge",
      "Operationssygeplejerske"
    ],
    correctAnswer: 2,
    feedback: "Korrekt. Den praktiserende læge er typisk ikke til stede på operationsstuen. Teamet består af specialiseret personale som kirurger og anæstesi- og operationssygeplejersker."
  },
  {
    id: 4,
    question: "Hvilken fase af 'Sikker Kirurgi'-tjeklisten fokuserer på opsummering af indgrebet og optælling af instrumenter?",
    options: [
      "Tjek Ind",
      "Time Out",
      "Tjek Ud",
      "Pre-op"
    ],
    correctAnswer: 2,
    feedback: "Helt rigtigt. 'Tjek Ud' sker, før patienten forlader operationsstuen, og sikrer, at alt er redegjort for, og at den postoperative plan er klar."
  },
  {
    id: 5,
    question: "Hvad er den primære fordel ved at bruge epidural anæstesi postoperativt?",
    options: [
      "Det sikrer, at patienten sover tungt.",
      "Det giver effektiv og kontinuerlig smertebehandling.",
      "Det er den billigste form for smertelindring.",
      "Det fjerner behovet for mobilisering."
    ],
    correctAnswer: 1,
    feedback: "Ja, det er korrekt. Et epiduralkateter kan blive liggende efter operationen og bruges til at administrere smertestillende medicin, hvilket giver en fremragende postoperativ smertekontrol."
  },
  {
    id: 6,
    question: "Hvad er et grundlæggende princip for at opretholde sterilitet på en operationsstue?",
    options: [
        "Alle overflader i rummet er sterile.",
        "Sterilt udstyr må kun berøres af sterile hænder eller instrumenter.",
        "Det er okay at vende ryggen til det sterile felt kortvarigt.",
        "Man må gerne række en usteril genstand henover et sterilt felt."
    ],
    correctAnswer: 1,
    feedback: "Korrekt! Princippet 'steril til steril' er altafgørende. Alt, der kommer i kontakt med det sterile felt, skal selv være sterilt for at forhindre kontaminering."
  },
  {
    id: 7,
    question: "Hvorfor er det vigtigt at forebygge hypotermi (lav kropstemperatur) hos patienten under operationen?",
    options: [
        "Det er primært for patientens komfort.",
        "Hypotermi øger risikoen for blødning, infektion og forsinket sårheling.",
        "Det får patienten til at sove dybere.",
        "Det har ingen betydning for operationsresultatet."
    ],
    correctAnswer: 1,
    feedback: "Ja, det er rigtigt. At holde patienten normoterm (normal temperatur) er vigtigt, da hypotermi kan føre til alvorlige komplikationer som øget blødningstendens og nedsat immunforsvar."
  },
  {
    id: 8,
    question: "Hvad er en potentiel komplikation ved forkert lejring af patienten på operationslejet?",
    options: [
        "Patienten sover dårligere.",
        "Nerve- og trykskader.",
        "Kirurgen kan ikke se ordentligt.",
        "Anæstesien virker ikke korrekt."
    ],
    correctAnswer: 1,
    feedback: "Korrekt! Forkert eller langvarig lejring kan føre til tryk på nerver og væv, hvilket kan resultere i permanente skader og tryksår. Korrekt lejring er en essentiel sygeplejeopgave."
  },
  {
    id: 9,
    question: "Hvilken parameter overvåges IKKE rutinemæssigt under generel anæstesi?",
    options: [
        "Blodtryk og puls.",
        "Iltmætning (SpO2).",
        "Blodsukker.",
        "End-tidal CO2 (kapnografi)."
    ],
    correctAnswer: 2,
    feedback: "Helt rigtigt. Mens blodsukker kan måles ved specifik indikation (f.eks. hos diabetikere), er det ikke en standard, kontinuerlig overvågning for alle patienter, modsat de andre vitale parametre."
  },
  {
    id: 10,
    question: "Hvad er en primær opgave for den usterile (koordinerende) operationssygeplejerske?",
    options: [
        "At assistere kirurgen direkte ved operationssåret.",
        "At dokumentere forløbet, hente ekstra udstyr og sikre kommunikation.",
        "At administrere anæstesimidler.",
        "At operere selvstændigt."
    ],
    correctAnswer: 1,
    feedback: "Ja, den usterile sygeplejerske er bindeleddet mellem det sterile felt og resten af verden. De varetager logistik, dokumentation og kommunikation for at sikre et flydende og sikkert forløb."
  }
];

export const postoperativeQuiz: Question[] = [
  {
    id: 1,
    question: "Hvad er den mest almindelige forkortelse for postoperativ kvalme og opkast?",
    options: [
      "POKO",
      "PK&O",
      "PONV",
      "POAV"
    ],
    correctAnswer: 2,
    feedback: "Korrekt! PONV står for 'Post Operative Nausea and Vomiting' og er en meget almindelig komplikation efter anæstesi."
  },
  {
    id: 2,
    question: "Hvilket af følgende kriterier ville kræve, at en læge vurderer patienten før udskrivelse fra opvågningen?",
    options: [
      "Blodtab på 400 ml.",
      "ASA-score II.",
      "En ukompliceret 1-times operation.",
      "Langvarig anæstesi på over 5 timer."
    ],
    correctAnswer: 3,
    feedback: "Helt rigtigt. Langvarig anæstesi (>5 timer) er et kriterium, der kræver en lægelig vurdering, da det øger risikoen for komplikationer."
  },
  {
    id: 3,
    question: "Hvad er det overordnede mål med effektiv postoperativ smertebehandling?",
    options: [
      "At sikre at patienten er helt smertefri.",
      "At patienten kan sove uforstyrret.",
      "At muliggøre hurtig mobilisering og rehabilitering.",
      "At undgå brug af morfin."
    ],
    correctAnswer: 2,
    feedback: "Korrekt. Målet er ikke nødvendigvis total smertefrihed, men at reducere smerterne til et niveau, hvor patienten kan deltage aktivt i sin egen helingsproces, f.eks. ved at trække vejret dybt og komme ud af sengen."
  },
  {
    id: 4,
    question: "Hvad er 'atelektase'?",
    options: [
      "En blodprop i lungen.",
      "Sammenfald af lungevæv.",
      "Uregelmæssig hjerterytme.",
      "Standsning af tarmbevægelse."
    ],
    correctAnswer: 1,
    feedback: "Ja, det er korrekt. Atelektase er, når små dele af lungen klapper sammen. Det er en almindelig postoperativ lungekomplikation, som kan forebygges med dybe vejrtrækninger og mobilisering."
  },
  {
    id: 5,
    question: "En patient har en score på VAS 6 i hvile. Hvad indikerer dette?",
    options: [
      "Ingen smerter.",
      "Lette smerter.",
      "Moderate til stærke smerter.",
      "Patienten er ikke i stand til at score."
    ],
    correctAnswer: 2,
    feedback: "Korrekt. En score på 6 på en Visuel Analog Skala (VAS) fra 0-10 indikerer moderate til stærke smerter, som kræver handling."
  },
  {
    id: 6,
    question: "Hvorfor er tidlig mobilisering efter en operation så vigtig?",
    options: [
        "For at patienten hurtigere kan komme hjem.",
        "Det har ingen reel betydning, men er en gammel vane.",
        "For at forebygge lungekomplikationer, DVT og forstoppelse.",
        "Kun for at træne patientens muskler."
    ],
    correctAnswer: 2,
    feedback: "Korrekt! At komme ud af sengen tidligt fremmer dyb vejrtrækning, stimulerer kredsløbet og tarmfunktionen, hvilket er afgørende for at forebygge mange postoperative komplikationer."
  },
  {
    id: 7,
    question: "En patient har ikke haft vandladning 6 timer efter operation. Hvad kan dette være et tegn på?",
    options: [
        "At patienten er fuldt hydreret.",
        "Postoperativ urinretention.",
        "Et normalt postoperativt fænomen.",
        "At patienten har drukket for lidt kaffe."
    ],
    correctAnswer: 1,
    feedback: "Præcis. Urinretention (manglende evne til at tømme blæren) er en almindelig postoperativ komplikation, ofte pga. anæstesi eller smerter, og det kræver observation og evt. intervention (f.eks. blæreskanning)."
  },
  {
    id: 8,
    question: "Hvilken patientgruppe er i særlig høj risiko for at udvikle postoperativt delirium?",
    options: [
        "Unge, raske atleter.",
        "Patienter der har fået spinal anæstesi.",
        "Ældre patienter, især dem med eksisterende kognitiv svækkelse.",
        "Patienter der er opereret om morgenen."
    ],
    correctAnswer: 2,
    feedback: "Helt rigtigt. Høj alder, demens, infektion, smerter og polyfarmaci er signifikante risikofaktorer for at udvikle postoperativ konfusion eller delirium."
  },
  {
    id: 9,
    question: "Hvad er et tegn på en begyndende sårinfektion?",
    options: [
        "Et sår der er tørt og uden hævelse.",
        "Let ømhed de første par dage.",
        "Tiltagende rødme, varme, hævelse og purulent sekretion fra såret.",
        "At plasteret sidder godt fast."
    ],
    correctAnswer: 2,
    feedback: "Ja, dette er de klassiske inflammationstegn. En infektion vil typisk vise sig ved øget rødme, varme, hævelse, smerte og evt. pus-dannelse et par dage efter operationen."
  },
  {
    id: 10,
    question: "Hvorfor er det vigtigt, at patienten hurtigt genoptager normal kost og væskeindtag postoperativt?",
    options: [
        "For at undgå at hospitalet skal smide mad ud.",
        "Det er kun vigtigt for patientens velbefindende.",
        "Fordi det er afgørende for sårheling, immunforsvar og tarmfunktion.",
        "For at kunne udskrive patienten med det samme."
    ],
    correctAnswer: 2,
    feedback: "Korrekt! Tilstrækkelig ernæring og hydrering er byggestenene for kroppens helingsproces. Det styrker immunforsvaret, fremmer sårheling og hjælper med at genoprette normal tarmfunktion (forebygger ileus)."
  }
];
