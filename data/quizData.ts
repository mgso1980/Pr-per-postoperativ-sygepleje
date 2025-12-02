
import { Question } from '../types';

export const preoperativeQuiz: Question[] = [
  {
    id: 1,
    question: "Du modtager en 72-årig kvinde til elektiv tarmkirurgi. Hun har fastet fra midnat, men drak et glas æblejuice kl. 06.00. Anæstesien er planlagt til kl. 08.00. Hvordan forholder du dig til fastereglerne?",
    options: [
      "Operationen må aflyses, da hun ikke har overholdt 6-timers reglen for faste.",
      "Det er acceptabelt. Klare væsker (som æblejuice) er tilladt indtil 2 timer før anæstesi.",
      "Du skal straks give hende aktivt kul for at absorbere væsken.",
      "Du bør sætte en ventrikelsonde for at tømme maven før hun køres ned."
    ],
    correctAnswer: 1,
    feedback: "Korrekt. Moderne fasteregler tillader klare væsker indtil 2 timer før operation for at undgå dehydrering og øge velbefindende, uden at øge aspirationsrisikoen signifikant."
  },
  {
    id: 2,
    question: "En patient skal opereres akut for et bristet aortaaneurisme (livstruende). Han er bevidstløs, og der er ingen pårørende til stede. Hvordan sikres det juridiske samtykke til operationen?",
    options: [
      "Kirurgen må ikke operere uden samtykke fra en værge eller politiet.",
      "Sygeplejersken kan underskrive samtykket på patientens vegne.",
      "Ved øjeblikkeligt livstruende behov (vital indikation) kræves ikke informeret samtykke for at handle.",
      "Man skal vente til patienten vågner op og selv kan tage stilling."
    ],
    correctAnswer: 2,
    feedback: "Præcis. Jf. Sundhedsloven kan kravet om informeret samtykke fraviges ved øjeblikkeligt behandlingsbehov, hvor patienten varigt eller midlertidigt (fx bevidstløshed) ikke kan samtykke."
  },
  {
    id: 3,
    question: "Du vurderer en præoperativ patient og bemærker, at han har en Mallampati-score på 4. Hvilken klinisk betydning har dette fund for det videre forløb?",
    options: [
      "Det indikerer, at patienten er i høj risiko for postoperativ kvalme (PONV).",
      "Det betyder, at intubation kan være meget vanskelig, og anæstesilægen skal være forberedt på 'vanskelig luftvej'.",
      "Det er et tegn på dårlig ernæringstilstand.",
      "Det har ingen betydning for anæstesien, kun for tandlægen."
    ],
    correctAnswer: 1,
    feedback: "Korrekt. Mallampati-score (I-IV) vurderer synligheden af svælgstrukturer. En score på 4 betyder, at man kun ser den hårde gane, hvilket varsler potentielt svær intubation."
  },
  {
    id: 4,
    question: "En patient med Type 2 diabetes er fastende til operation. Han spørger, om han skal tage sin morgenmedicin (antidiabetika/insulin). Hvad er det generelle princip?",
    options: [
      "Han skal tage dobbelt dosis for at modvirke stress-responset.",
      "Han skal tage sin medicin som normalt med lidt vand.",
      "Peroral antidiabetika og hurtigtvirkende insulin pauseres oftest under faste for at undgå hypoglykæmi (lavt blodsukker).",
      "Det er ligegyldigt, da anæstesien styrer det hele."
    ],
    correctAnswer: 2,
    feedback: "Rigtigt. Da patienten ikke spiser (faster), falder insulinbehovet. At tage normal medicin vil medføre stor risiko for alvorlig hypoglykæmi under operationen."
  },
  {
    id: 5,
    question: "Du skal ASA-klassificere en 68-årig mand. Han har stabil angina pectoris (hjertekrampe ved anstrengelse) og velreguleret diabetes. Han bliver forpustet, når han går op til 1. sal. Hvilken gruppe tilhører han?",
    options: [
      "ASA I (Rask patient)",
      "ASA II (Let systemisk sygdom uden funktionsbegrænsning)",
      "ASA III (Alvorlig systemisk sygdom med funktionsbegrænsning)",
      "ASA IV (Livstruende systemisk sygdom)"
    ],
    correctAnswer: 2,
    feedback: "Korrekt. Han har alvorlig sygdom (Angina+Diabetes), der begrænser hans aktivitet (forpustet ved trappegang), men som ikke er akut livstruende i hvile."
  },
  {
    id: 6,
    question: "Hvorfor anbefales præoperativ 'kulhydrat-loading' (en sukkerholdig drik) til ikke-diabetikere 2 timer før operationen?",
    options: [
      "For at patienten ikke skal være tørstig.",
      "For at dæmpe patientens angst.",
      "For at skifte kroppens stofskifte fra en nedbrydende (katabol) til en opbyggende (anabol) tilstand og mindske postoperativ insulinresistens.",
      "For at øge mavesækkens indhold, så den er nemmere at operere på."
    ],
    correctAnswer: 2,
    feedback: "Meget flot. Det reducerer det kirurgiske stress-respons, mindsker muskeltab og bedrer restitutionen efter operationen."
  },
  {
    id: 7,
    question: "En patient er i behandling med blodfortyndende medicin (Marevan). INR er 3,2 på operationsdagen. Hvilken konsekvens har dette typisk for en planlagt større operation?",
    options: [
      "Ingen, man opererer bare forsigtigt.",
      "Operationen må oftest udsættes eller INR skal korrigeres akut, da risikoen for ukontrollabel blødning er for stor.",
      "Man giver bare mere blod undervejs.",
      "Det er godt, for så får patienten ikke blodpropper."
    ],
    correctAnswer: 1,
    feedback: "Korrekt. En INR på 3,2 betyder, at blodet størkner meget langsomt. Ved større kirurgi tilstræbes ofte en INR < 1,5-2,0 afhængigt af indgrebet."
  },
  {
    id: 8,
    question: "Hvad er det vigtigste formål med at undervise patienten i mobiliseringsteknik og smertebehandling ALLEREDE før operationen (præoperativt)?",
    options: [
      "At få tiden til at gå.",
      "At patienten er mere motiveret og lærer bedre, når de er smertefrie og kognitivt friske, hvilket forbedrer det postoperative forløb.",
      "At skræmme patienten til at makke ret.",
      "Det er et lovkrav uden klinisk betydning."
    ],
    correctAnswer: 1,
    feedback: "Præcis. Postoperativt er patienten ofte træt, smertepåvirket eller påvirket af medicin, hvilket gør indlæring svær. Forberedelse skaber tryghed og 'empowerment'."
  },
  {
    id: 9,
    question: "Hvorfor er det vigtigt, at patienten fjerner neglelak og makeup før operationen?",
    options: [
      "For at undgå, at det smitter af på det sterile udstyr.",
      "Det er udelukkende et hygiejnisk princip for at undgå bakterier.",
      "For at personalet kan observere patientens naturlige hudfarve og tegn på cyanose (iltmangel).",
      "For at patienten ser neutral ud under operationen."
    ],
    correctAnswer: 2,
    feedback: "Korrekt. Observation af hud og slimhinder er en vigtig del af den kliniske overvågning (ABCDE - Circulation/Breathing), selvom vi har elektronisk overvågning."
  },
  {
    id: 10,
    question: "Under den præoperative identifikation opdager du, at patienten siger, han skal opereres i højre knæ, men i journalen står der venstre knæ. Hvad gør du?",
    options: [
      "Stoler på patienten, da det er hans krop.",
      "Stoler på journalen, da patienten sikkert er nervøs.",
      "Stopper processen øjeblikkeligt. Operationen må ikke gå i gang, før uoverensstemmelsen er afklaret med kirurgen.",
      "Vælger det knæ, der ser mest hævet ud."
    ],
    correctAnswer: 2,
    feedback: "Helt rigtigt. Dette er et 'Stop'-moment. Uoverensstemmelser om side/organ skal altid afklares før anæstesi for at forhindre operation på forkert sted."
  }
];

export const peroperativeQuiz: Question[] = [
    {
      id: 1,
      question: "Hvad er den primære sikkerhedsmæssige årsag til, at 'Time Out' skal udføres umiddelbart før incision (knivtid), når hele teamet er samlet?",
      options: [
          "For at sikre, at kirurgen har vasket hænder korrekt.",
          "For at skabe et 'Point of No Return', hvor hele teamet irreversibelt bekræfter patient-ID, procedure og sted for at forhindre 'Wrong Site Surgery'.",
          "For at anæstesipersonalet kan nå at give den sidste dosis antibiotika.",
          "Det er primært en social seance for at styrke teamånden."
      ],
      correctAnswer: 1,
      feedback: "Korrekt. Time Out er den sidste barriere, før en uigenkaldelig handling (snittet) foretages. Det sikrer fælles mental model hos hele teamet."
    },
    {
      id: 2,
      question: "Du lejrer en patient i rygleje med armene ud til siden på armborde. Hvilken nerve ved albuen er særligt udsat for tryk, hvis den ikke beskyttes korrekt?",
      options: [
          "N. ischiadicus (Iskias-nerven).",
          "N. opticus (Synsnerven).",
          "N. ulnaris (som giver 'klohånd' og snurren i lillefingeren).",
          "N. olfactorius (Lugtenerven)."
      ],
      correctAnswer: 2,
      feedback: "Rigtigt. N. ulnaris løber meget overfladisk ved albuen ('enkemandsknoen'). Hvis armen ligger hårdt mod underlaget uden polstring, kan det give varige nerveskader."
    },
    {
        id: 3,
        question: "Ufrivillig peroperativ hypotermi (temp < 36°C) er en hyppig komplikation. Hvorfor er dette en alvorlig fysiologisk risiko i forhold til hæmostasen?",
        options: [
            "Kulde får blodkarrene til at trække sig sammen, så kirurgen ikke kan se dem.",
            "Hypotermi påvirker enzymprocesserne i koagulationskaskaden negativt og hæmmer blodpladefunktionen, hvilket øger blødningsrisikoen markant.",
            "Det får patienten til at vågne, da stofskiftet stiger.",
            "Det har ingen betydning for blødning, kun for sårheling."
        ],
        correctAnswer: 1,
        feedback: "Præcis. Selv mild hypotermi nedsætter blodets evne til at koagulere, hvilket øger blodtabet og behovet for transfusioner."
    },
    {
        id: 4,
        question: "Du observerer som cirkulerende sygeplejerske, at kirurgens sterile kittel strejfer lejet, som ikke er sterilt afdækket netop der. Kirurgen bemærker det ikke. Hvad er din pligt?",
        options: [
            "Du noterer det i journalen efter operationen.",
            "Du siger ingenting for ikke at forstyrre kirurgens koncentration.",
            "Du gør straks opmærksom på bruddet på steriliteten ('Surgical Conscience'), og kittel/ærme skal skiftes, uanset hvor i forløbet I er.",
            "Du sprayer området med sprit."
        ],
        correctAnswer: 2,
        feedback: "Korrekt. 'Surgical Conscience' betyder, at man altid reagerer på brud på steriliteten for at beskytte patienten mod infektion, uanset hierarki."
    },
    {
        id: 5,
        question: "Hvad er formålet med den systematiske optælling af instrumenter, servietter og nåle før operationens afslutning (Tjek-ud)?",
        options: [
            "For at sikre, at afdelingen ikke mister dyrt udstyr (økonomi).",
            "For at undgå 'Glemte Sager' (at der efterlades fremmedlegemer i patienten), hvilket er en alvorlig utilsigtet hændelse.",
            "Det er kun nødvendigt, hvis kirurgen beder om det.",
            "For at se om operationssygeplejersken kan tælle."
        ],
        correctAnswer: 1,
        feedback: "Meget vigtigt! Glemte servietter eller instrumenter er en alvorlig patientrisiko. Optælling sikrer, at alt, der kom ind, også kommer ud."
    }
];

export const postoperativeQuiz: Question[] = [
    {
        id: 1,
        question: "Du modtager en patient på opvågningen. Hvad er det absolut første, du tjekker ifølge ABCDE-princippet?",
        options: ["Om patienten har smerter.", "Om blodtrykket er stabilt.", "Om der er frie luftveje.", "Om forbindingen bløder igennem."],
        correctAnswer: 2,
        feedback: "Korrekt. 'A' (Airway) kommer altid først. Uden frie luftveje dør patienten hurtigst, uanset hvordan blodtrykket er."
    },
    {
        id: 2,
        question: "En patient klager over kvalme (PONV) efter operationen. Hvilken handling er mest relevant (udover medicin)?",
        options: ["Tvinge patienten til at spise noget.", "Lejre patienten fladt på ryggen.", "Sikre iltilskud og undgå hurtige bevægelser.", "Give patienten en kold klud på maven."],
        correctAnswer: 2,
        feedback: "Rigtigt. Iltmangel kan forværre kvalme. Desuden hjælper det at undgå hurtige stillingsskift."
    },
    {
        id: 3,
        question: "Hvad er en 'VAS-score', og hvad bruges den til?",
        options: ["Vurdering af søvnkvalitet (1-10).", "Visuel Analog Skala: Patientens egen vurdering af smertens intensitet (0-10).", "Vurdering af appetit.", "En skala for sårheling."],
        correctAnswer: 1,
        feedback: "Korrekt. VAS er guldstandarden for smertevurdering. 0 er ingen smerter, 10 er værst tænkelige smerter."
    },
    {
        id: 4,
        question: "Hvorfor er tidlig mobilisering (at komme ud af sengen) så vigtig postoperativt?",
        options: ["For at sygeplejersken ikke skal skifte sengetøj.", "Det forebygger lungekomplikationer (f.eks. lungebetændelse) og blodpropper (DVT) samt stimulerer tarmfunktionen.", "Det er kun vigtigt for ortopædkirurgiske patienter.", "Det er det ikke, patienten skal hvile sig i 3 dage."],
        correctAnswer: 1,
        feedback: "Meget vigtigt! Sengeleje er farligt. Mobilisering øger lungeventilationen, blodcirkulationen og tarmperistaltikken."
    },
    {
        id: 5,
        question: "Hvornår må en patient typisk udskrives fra opvågningsafsnittet til stamafdelingen?",
        options: ["Når kirurgen er gået hjem.", "Når patienten selv siger, han vil hjem.", "Når patienten er stabil respiratorisk og cirkulatorisk (ABC), smertedækket og vågen (fx scoret via et udskrivningsskema).", "Når der mangler sengepladser på opvågningen."],
        correctAnswer: 2,
        feedback: "Korrekt. Udskrivelse kræver, at patienten opfylder specifikke sikkerhedskriterier for stabilisering."
    }
];
