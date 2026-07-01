// src/data/electrodePotentialModule.js
// Modul: Elektrodenpotenziale
// Enthält Übersichtsseiten, Lernseiten und Übungen zu Elektrodenpotenzialen,
// Standardwasserstoffelektrode und Zellspannungen.

export const electrodePotentialMeta = {
  id: "electrode-potentials",
  title: "Elektrodenpotenziale",
  subtitle:
    "Verstehe, wie Elektrodenpotenziale entstehen, warum man die Standardwasserstoffelektrode braucht und wie Zellspannungen berechnet werden.",
  overviewButtonLabel: "Zurück zur Übersicht",
  modulePath: "electrode-potentials"
};

export const standardPotentials = [
  {
    id: "mg",
    redoxPair: "Mg²⁺/Mg",
    oxidizedForm: "Mg²⁺",
    reducedForm: "Mg",
    metal: "Magnesium",
    symbol: "Mg",
    potential: -2.37
  },
  {
    id: "zn",
    redoxPair: "Zn²⁺/Zn",
    oxidizedForm: "Zn²⁺",
    reducedForm: "Zn",
    metal: "Zink",
    symbol: "Zn",
    potential: -0.76
  },
  {
    id: "fe",
    redoxPair: "Fe²⁺/Fe",
    oxidizedForm: "Fe²⁺",
    reducedForm: "Fe",
    metal: "Eisen",
    symbol: "Fe",
    potential: -0.44
  },
  {
    id: "h2",
    redoxPair: "2 H⁺/H₂",
    oxidizedForm: "H⁺",
    reducedForm: "H₂",
    metal: "Standardwasserstoffelektrode",
    symbol: "H₂",
    potential: 0.0
  },
  {
    id: "cu",
    redoxPair: "Cu²⁺/Cu",
    oxidizedForm: "Cu²⁺",
    reducedForm: "Cu",
    metal: "Kupfer",
    symbol: "Cu",
    potential: 0.34
  },
  {
    id: "ag",
    redoxPair: "Ag⁺/Ag",
    oxidizedForm: "Ag⁺",
    reducedForm: "Ag",
    metal: "Silber",
    symbol: "Ag",
    potential: 0.8
  }
];

export const electrodePotentialOverviewCards = [
  {
    id: "electrode-potential-intro",
    title: "Elektrodenpotenziale und Zellspannungen",
    shortTitle: "Grundlagen",
    description:
      "Lerne, was ein Elektrodenpotenzial aussagt, wie Anode und Kathode bestimmt werden und wie man Zellspannungen berechnet.",
    icon: "⚡",
    targetView: "electrodePotentialIntro",
    operators: [
      { name: "beschreiben", afb: "I" },
      { name: "erklären", afb: "II" },
      { name: "berechnen", afb: "II" }
    ]
  },
  {
    id: "standard-hydrogen-electrode",
    title: "Standardwasserstoffelektrode",
    shortTitle: "SHE",
    description:
      "Verstehe, warum man eine Bezugselektrode braucht und warum das Standardpotenzial der Wasserstoffelektrode auf 0,00 V festgelegt ist.",
    icon: "H₂",
    targetView: "standardHydrogenElectrode",
    operators: [
      { name: "beschreiben", afb: "I" },
      { name: "erklären", afb: "II" },
      { name: "deuten", afb: "II" }
    ]
  },
  {
    id: "electrode-potential-practice-overview",
    title: "Übungen",
    shortTitle: "Üben",
    description:
      "Übe gezielt Begriffe, Halbzellen, Zellspannungen, Gesamtreaktionen und die Beurteilung freiwilliger Redoxreaktionen.",
    icon: "✓",
    targetView: "electrodePotentialPracticeOverview",
    operators: [
      { name: "zuordnen", afb: "I" },
      { name: "berechnen", afb: "II" },
      { name: "beurteilen", afb: "III" }
    ]
  }
];

export const electrodePotentialIntroPage = {
  id: "electrode-potential-intro",
  title: "Elektrodenpotenziale und Zellspannungen",
  subtitle:
    "Elektrodenpotenziale helfen dabei vorherzusagen, welche Halbzelle Elektronen aufnimmt und wie groß die Spannung einer galvanischen Zelle ist.",
  sections: [
    {
      id: "what-is-potential",
      title: "Was ist ein Elektrodenpotenzial?",
      content: [
        "Ein Elektrodenpotenzial beschreibt die Neigung eines Redoxpaares zur Elektronenaufnahme.",
        "Je positiver das Standardelektrodenpotenzial ist, desto eher wird die oxidierte Form reduziert.",
        "Je negativer das Standardelektrodenpotenzial ist, desto eher gibt die reduzierte Form Elektronen ab."
      ],
      keyIdea:
        "Ein Elektrodenpotenzial beschreibt keine einzelne sichtbare Spannung, sondern eine Reduktionsneigung im Vergleich zu einer Bezugselektrode."
    },
    {
      id: "why-two-half-cells",
      title: "Warum braucht man zwei Halbzellen?",
      content: [
        "Eine Spannung kann man nur als Potenzialdifferenz zwischen zwei Elektroden messen.",
        "Deshalb besteht eine galvanische Zelle immer aus zwei Halbzellen.",
        "Die Halbzelle mit dem höheren Elektrodenpotenzial wirkt als Kathode. Dort findet die Reduktion statt.",
        "Die Halbzelle mit dem niedrigeren Elektrodenpotenzial wirkt als Anode. Dort findet die Oxidation statt."
      ],
      keyIdea:
        "Höheres Potenzial: Kathode und Reduktion. Niedrigeres Potenzial: Anode und Oxidation."
    },
    {
      id: "cell-voltage",
      title: "Wie berechnet man die Zellspannung?",
      content: [
        "Die Zellspannung ergibt sich aus der Differenz der Elektrodenpotenziale.",
        "Dabei wird das Potenzial der Anode vom Potenzial der Kathode abgezogen.",
        "Ist die Zellspannung positiv, kann die Reaktion freiwillig als galvanische Zelle ablaufen."
      ],
      formula: "U = E(Kathode) − E(Anode)",
      example: {
        title: "Beispiel Daniell-Element",
        given: ["Zn²⁺/Zn: −0,76 V", "Cu²⁺/Cu: +0,34 V"],
        solution: [
          "Kathode: Cu²⁺/Cu, weil +0,34 V höher ist.",
          "Anode: Zn²⁺/Zn, weil −0,76 V niedriger ist.",
          "U = 0,34 V − (−0,76 V) = 1,10 V."
        ]
      }
    }
  ],
  interactiveElement: {
    type: "halfCellSelector",
    title: "Halbzellen vergleichen",
    instruction:
      "Wähle zwei Halbzellen aus. Das Programm bestimmt automatisch Anode, Kathode, Elektronenflussrichtung und Zellspannung.",
    potentials: standardPotentials,
    defaultSelection: {
      halfCellA: "zn",
      halfCellB: "cu"
    },
    resultRules: {
      cathode: "higherPotential",
      anode: "lowerPotential",
      voltageFormula: "U = E(Kathode) − E(Anode)",
      electronFlow: "fromAnodeToCathode"
    }
  }
};

export const standardHydrogenElectrodePage = {
  id: "standard-hydrogen-electrode",
  title: "Standardwasserstoffelektrode",
  subtitle:
    "Die Standardwasserstoffelektrode ist die Bezugselektrode für Standardelektrodenpotenziale.",
  sections: [
    {
      id: "problem",
      title: "Das Problem",
      content: [
        "Ein einzelnes Elektrodenpotenzial kann nicht direkt gemessen werden.",
        "Messbar ist immer nur eine Spannung zwischen zwei Elektroden.",
        "Damit man Elektrodenpotenziale vergleichen kann, braucht man eine festgelegte Bezugselektrode."
      ]
    },
    {
      id: "solution",
      title: "Die Lösung: eine Bezugselektrode",
      content: [
        "Als Bezugselektrode nutzt man die Standardwasserstoffelektrode.",
        "Ihr Standardelektrodenpotenzial wurde per Definition auf 0,00 V festgelegt.",
        "Alle anderen Standardelektrodenpotenziale werden im Vergleich zu dieser Elektrode angegeben."
      ]
    },
    {
      id: "setup",
      title: "Aufbau der Standardwasserstoffelektrode",
      content: [
        "Eine Platinelektrode taucht in eine saure Lösung.",
        "Wasserstoffgas H₂ wird an der Platinelektrode vorbeigeleitet.",
        "In der Lösung befinden sich Wasserstoff-Ionen H⁺ bzw. Oxonium-Ionen H₃O⁺.",
        "Die Platinelektrode dient als leitende Oberfläche, weil Wasserstoff selbst kein Metall ist."
      ],
      labels: [
        "Platinelektrode",
        "Wasserstoffgas H₂",
        "saure Lösung mit H⁺/H₃O⁺",
        "Standardpotenzial E° = 0,00 V"
      ]
    },
    {
      id: "half-reaction",
      title: "Halbreaktion",
      content: [
        "Die Standardwasserstoffelektrode kann je nach Partnerhalbzelle als Anode oder Kathode wirken.",
        "Die zugehörige Halbreaktion ist umkehrbar."
      ],
      formula: "2 H⁺ + 2 e⁻ ⇌ H₂"
    },
    {
      id: "meaning",
      title: "Bedeutung",
      content: [
        "Wird eine Metallhalbzelle gegen die Standardwasserstoffelektrode gemessen, erhält man ihr Standardelektrodenpotenzial.",
        "Ein negatives Standardpotenzial bedeutet: Die Metallhalbzelle gibt im Vergleich zur Wasserstoffelektrode leichter Elektronen ab.",
        "Ein positives Standardpotenzial bedeutet: Die oxidierte Form der Metallhalbzelle nimmt im Vergleich zu H⁺ leichter Elektronen auf."
      ]
    }
  ],
  simulation: {
    type: "standardHydrogenElectrodeSimulation",
    title: "Simulation: Metallhalbzelle gegen Standardwasserstoffelektrode",
    instruction:
      "Wähle eine Metallhalbzelle aus und beobachte, welche Elektrode Anode bzw. Kathode ist.",
    referenceElectrode: {
      id: "h2",
      title: "Standardwasserstoffelektrode",
      potential: 0.0,
      halfReaction: "2 H⁺ + 2 e⁻ ⇌ H₂",
      labels: ["Pt", "H₂", "H⁺/H₃O⁺", "E° = 0,00 V"]
    },
    selectableHalfCells: [
      {
        id: "zn",
        title: "Zink-Halbzelle",
        redoxPair: "Zn²⁺/Zn",
        potential: -0.76,
        explanation: [
          "Zink besitzt ein negativeres Standardelektrodenpotenzial als die Wasserstoffelektrode.",
          "Zink wird oxidiert.",
          "Elektronen fließen von der Zinkelektrode zur Standardwasserstoffelektrode.",
          "Daraus folgt: E°(Zn²⁺/Zn) = −0,76 V."
        ],
        oxidation: "Zn → Zn²⁺ + 2 e⁻",
        reduction: "2 H⁺ + 2 e⁻ → H₂"
      },
      {
        id: "cu",
        title: "Kupfer-Halbzelle",
        redoxPair: "Cu²⁺/Cu",
        potential: 0.34,
        explanation: [
          "Kupfer besitzt ein positiveres Standardelektrodenpotenzial als die Wasserstoffelektrode.",
          "Kupfer-Ionen werden reduziert.",
          "Elektronen fließen von der Standardwasserstoffelektrode zur Kupferhalbzelle.",
          "Daraus folgt: E°(Cu²⁺/Cu) = +0,34 V."
        ],
        oxidation: "H₂ → 2 H⁺ + 2 e⁻",
        reduction: "Cu²⁺ + 2 e⁻ → Cu"
      },
      {
        id: "ag",
        title: "Silber-Halbzelle",
        redoxPair: "Ag⁺/Ag",
        potential: 0.8,
        explanation: [
          "Silber besitzt ein deutlich positiveres Standardelektrodenpotenzial als die Wasserstoffelektrode.",
          "Silber-Ionen werden reduziert.",
          "Elektronen fließen von der Standardwasserstoffelektrode zur Silberhalbzelle.",
          "Daraus folgt: E°(Ag⁺/Ag) = +0,80 V."
        ],
        oxidation: "H₂ → 2 H⁺ + 2 e⁻",
        reduction: "2 Ag⁺ + 2 e⁻ → 2 Ag"
      }
    ],
    visualElements: {
      showGasBubbles: true,
      showElectronFlow: true,
      showIonMovement: true,
      showVoltmeter: true,
      showHalfReactions: true
    }
  }
};

export const electrodePotentialPracticeOverview = {
  id: "electrode-potential-practice-overview",
  title: "Übungen zu Elektrodenpotenzialen und Zellspannungen",
  subtitle:
    "Wähle gezielt aus, was du üben möchtest: Begriffe, Halbzellen, Zellspannungen, Reaktionsgleichungen oder Freiwilligkeit.",
  cards: [
    {
      id: "practice-terms",
      title: "Übung 1: Begriffe zuordnen",
      description:
        "Ordne zentrale Begriffe wie Anode, Kathode, Oxidation, Reduktion und Elektronenfluss richtig zu.",
      operators: [
        { name: "zuordnen", afb: "I" },
        { name: "erklären", afb: "II" }
      ],
      targetExerciseId: "practice-terms"
    },
    {
      id: "practice-half-cells",
      title: "Übung 2: Halbzellen auswählen",
      description:
        "Bestimme mithilfe einer Potenzialtabelle, welche Halbzelle als Kathode und welche als Anode wirkt.",
      operators: [
        { name: "bestimmen", afb: "I" },
        { name: "begründen", afb: "II" }
      ],
      targetExerciseId: "practice-half-cells"
    },
    {
      id: "practice-cell-voltage",
      title: "Übung 3: Zellspannung berechnen",
      description:
        "Berechne Zellspannungen aus Standardelektrodenpotenzialen und überprüfe deinen Rechenweg.",
      operators: [
        { name: "berechnen", afb: "II" },
        { name: "erläutern", afb: "II" }
      ],
      targetExerciseId: "practice-cell-voltage"
    },
    {
      id: "practice-overall-reaction",
      title: "Übung 4: Gesamtreaktion formulieren",
      description:
        "Formuliere Oxidation, Reduktion und Gesamtreaktion mit beschreibbaren Reaktionsgleichungs-Kästchen.",
      operators: [
        { name: "formulieren", afb: "II" },
        { name: "aufstellen", afb: "II" }
      ],
      targetExerciseId: "practice-overall-reaction"
    },
    {
      id: "practice-spontaneity",
      title: "Übung 5: Freiwilligkeit beurteilen",
      description:
        "Entscheide mithilfe der Zellspannung, ob eine Redoxreaktion freiwillig abläuft.",
      operators: [
        { name: "berechnen", afb: "II" },
        { name: "beurteilen", afb: "III" }
      ],
      targetExerciseId: "practice-spontaneity"
    }
  ]
};

const neutralCharge = { correct: "", accepted: ["", "0"] };
const emptyIndex = { correct: "", accepted: ["", "1"] };
const oneCoefficient = { correct: "", accepted: ["", "1"] };
const twoCoefficient = { correct: "2", accepted: ["2"] };
const electronCharge = { correct: "-", accepted: ["-", "−", "⁻"] };

const ion2Plus = { correct: "2+", accepted: ["2+", "+2", "²⁺"] };
const ion1Plus = { correct: "+", accepted: ["+", "1+", "+1", "⁺"] };

const createSingleAtomParticle = (element, charge = neutralCharge, coefficient = oneCoefficient) => ({
  type: "particle",
  coefficient,
  formula: [
    {
      element: { correct: element, accepted: [element, element.toLowerCase()] },
      index: emptyIndex,
      charge
    }
  ]
});

const createElectron = (coefficient = twoCoefficient) => ({
  type: "electron",
  coefficient,
  symbol: "e",
  charge: electronCharge
});

const chemistryAliases = {
  cu2: ["cu2+", "cu²⁺", "cu(2+)", "kupfer-ionen", "kupferionen", "kupfer-ion", "kupferion"],
  zn2: ["zn2+", "zn²⁺", "zn(2+)", "zink-ionen", "zinkionen", "zink-ion", "zinkion"],
  fe2: ["fe2+", "fe²⁺", "fe(2+)", "eisen-ionen", "eisenionen", "eisen-ion", "eisenion"],
  mg2: ["mg2+", "mg²⁺", "mg(2+)", "magnesium-ionen", "magnesiumionen", "magnesium-ion", "magnesiumion"],
  agPlus: ["ag+", "ag⁺", "ag(1+)", "silber-ionen", "silberionen", "silber-ion", "silberion"],
  electronLoss: [
    "elektronenabgabe",
    "elektronen abgeben",
    "gibt elektronen ab",
    "geben elektronen ab",
    "oxidation",
    "oxidiert",
    "wird oxidiert"
  ],
  electronGain: [
    "elektronenaufnahme",
    "elektronen aufnehmen",
    "nimmt elektronen auf",
    "nehmen elektronen auf",
    "reduktion",
    "reduziert",
    "wird reduziert"
  ],
  positiveVoltage: [
    "positive zellspannung",
    "positive spannung",
    "zellspannung ist positiv",
    "spannung ist positiv",
    "u ist positiv",
    "u > 0",
    "größer 0",
    "groesser 0"
  ],
  negativeVoltage: [
    "negative zellspannung",
    "negative spannung",
    "zellspannung ist negativ",
    "spannung ist negativ",
    "u ist negativ",
    "u < 0",
    "kleiner 0"
  ]
};

export const electrodePotentialPracticeExercises = [
  {
    id: "practice-terms",
    title: "Übung 1: Begriffe zuordnen",
    shortTitle: "Begriffe",
    description:
      "Ordne zentrale Begriffe rund um Elektrodenpotenziale, Anode, Kathode und Elektronenfluss zu.",
    type: "matchingExercise",
    checking: { type: "direct", feedback: "color" },
    materials: [
      {
        title: "Merksatz",
        type: "text",
        content:
          "In einer freiwillig ablaufenden galvanischen Zelle findet an der Anode die Oxidation und an der Kathode die Reduktion statt. Elektronen fließen außen von der Anode zur Kathode."
      }
    ],
    tasks: [
      {
        id: "terms-a",
        title: "Aufgabe A: Grundbegriffe",
        prompt: "Ordne die Grundbegriffe richtig zu.",
        pairs: [
          {
            left: "Anode",
            correctRight: "Ort der Oxidation"
          },
          {
            left: "Kathode",
            correctRight: "Ort der Reduktion"
          },
          {
            left: "Oxidation",
            correctRight: "Elektronenabgabe"
          },
          {
            left: "Reduktion",
            correctRight: "Elektronenaufnahme"
          }
        ],
        rightOptions: [
          "Ort der Oxidation",
          "Ort der Reduktion",
          "Elektronenabgabe",
          "Elektronenaufnahme"
        ]
      },
      {
        id: "terms-b",
        title: "Aufgabe B: Elektrodenpotenziale",
        prompt: "Ordne die Aussagen zu Elektrodenpotenzialen richtig zu.",
        pairs: [
          {
            left: "höheres Elektrodenpotenzial",
            correctRight: "Kathode"
          },
          {
            left: "niedrigeres Elektrodenpotenzial",
            correctRight: "Anode"
          },
          {
            left: "positiveres Standardpotenzial",
            correctRight: "stärkere Reduktionsneigung"
          },
          {
            left: "negativeres Standardpotenzial",
            correctRight: "stärkere Bereitschaft zur Elektronenabgabe"
          }
        ],
        rightOptions: [
          "Kathode",
          "Anode",
          "stärkere Reduktionsneigung",
          "stärkere Bereitschaft zur Elektronenabgabe"
        ]
      },
      {
        id: "terms-c",
        title: "Aufgabe C: Stromkreis der galvanischen Zelle",
        prompt: "Ordne die Bestandteile und Flussrichtungen richtig zu.",
        pairs: [
          {
            left: "Elektronenfluss außen",
            correctRight: "von der Anode zur Kathode"
          },
          {
            left: "Ionenfluss innen",
            correctRight: "über Salzbrücke oder Diaphragma"
          },
          {
            left: "Salzbrücke",
            correctRight: "ermöglicht den Ladungsausgleich"
          },
          {
            left: "Voltmeter",
            correctRight: "misst die Zellspannung"
          }
        ],
        rightOptions: [
          "von der Anode zur Kathode",
          "über Salzbrücke oder Diaphragma",
          "ermöglicht den Ladungsausgleich",
          "misst die Zellspannung"
        ]
      }
    ],
    modelAnswer:
      "Anode: Ort der Oxidation. Kathode: Ort der Reduktion. Oxidation: Elektronenabgabe. Reduktion: Elektronenaufnahme. Die Halbzelle mit dem höheren Elektrodenpotenzial ist die Kathode, die mit dem niedrigeren Elektrodenpotenzial die Anode. Elektronen fließen außen von der Anode zur Kathode."
  },

  {
    id: "practice-half-cells",
    title: "Übung 2: Halbzellen auswählen",
    shortTitle: "Halbzellen",
    description:
      "Bestimme Anode und Kathode anhand von Standardelektrodenpotenzialen.",
    type: "halfCellChoiceExercise",
    checking: { type: "direct", feedback: "color" },
    materials: [
      {
        title: "Material 1: Standardelektrodenpotenziale",
        type: "table",
        columns: ["Redoxpaar", "E° in V"],
        rows: [
          ["Mg²⁺/Mg", "−2,37"],
          ["Zn²⁺/Zn", "−0,76"],
          ["Fe²⁺/Fe", "−0,44"],
          ["Cu²⁺/Cu", "+0,34"],
          ["Ag⁺/Ag", "+0,80"]
        ]
      }
    ],
    tasks: [
      {
        id: "half-cells-a",
        title: "Aufgabe A: Zink/Kupfer",
        prompt:
          "Gegeben sind die Halbzellen Zn²⁺/Zn und Cu²⁺/Cu. Bestimme Anode und Kathode.",
        fields: [
          {
            id: "anode",
            label: "Anode",
            correctValues: ["Zn²⁺/Zn", "Zn/Zn²⁺", "Zink", "Zn"]
          },
          {
            id: "kathode",
            label: "Kathode",
            correctValues: ["Cu²⁺/Cu", "Cu/Cu²⁺", "Kupfer", "Cu"]
          },
          {
            id: "reason",
            label: "Begründung",
            correctValues: [
              "Cu hat das höhere Potenzial",
              "Cu²⁺/Cu hat das höhere Potenzial",
              "Kupfer hat das höhere Potenzial",
              "Zink hat das niedrigere Potenzial",
              "Zn²⁺/Zn hat das niedrigere Potenzial"
            ]
          }
        ],
        modelAnswer:
          "Anode: Zn²⁺/Zn. Kathode: Cu²⁺/Cu. Kupfer besitzt das höhere Elektrodenpotenzial und wird daher reduziert."
      },
      {
        id: "half-cells-b",
        title: "Aufgabe B: Kupfer/Silber",
        prompt:
          "Gegeben sind die Halbzellen Cu²⁺/Cu und Ag⁺/Ag. Bestimme Anode und Kathode.",
        fields: [
          {
            id: "anode",
            label: "Anode",
            correctValues: ["Cu²⁺/Cu", "Cu/Cu²⁺", "Kupfer", "Cu"]
          },
          {
            id: "kathode",
            label: "Kathode",
            correctValues: ["Ag⁺/Ag", "Ag/Ag⁺", "Silber", "Ag"]
          },
          {
            id: "reason",
            label: "Begründung",
            correctValues: [
              "Ag hat das höhere Potenzial",
              "Ag⁺/Ag hat das höhere Potenzial",
              "Silber hat das höhere Potenzial",
              "Kupfer hat das niedrigere Potenzial",
              "Cu²⁺/Cu hat das niedrigere Potenzial"
            ]
          }
        ],
        modelAnswer:
          "Anode: Cu²⁺/Cu. Kathode: Ag⁺/Ag. Silber besitzt das höhere Elektrodenpotenzial und wird daher reduziert."
      },
      {
        id: "half-cells-c",
        title: "Aufgabe C: Eisen/Kupfer",
        prompt:
          "Gegeben sind die Halbzellen Fe²⁺/Fe und Cu²⁺/Cu. Bestimme Anode und Kathode.",
        fields: [
          {
            id: "anode",
            label: "Anode",
            correctValues: ["Fe²⁺/Fe", "Fe/Fe²⁺", "Eisen", "Fe"]
          },
          {
            id: "kathode",
            label: "Kathode",
            correctValues: ["Cu²⁺/Cu", "Cu/Cu²⁺", "Kupfer", "Cu"]
          },
          {
            id: "reason",
            label: "Begründung",
            correctValues: [
              "Cu hat das höhere Potenzial",
              "Cu²⁺/Cu hat das höhere Potenzial",
              "Kupfer hat das höhere Potenzial",
              "Eisen hat das niedrigere Potenzial",
              "Fe²⁺/Fe hat das niedrigere Potenzial"
            ]
          }
        ],
        modelAnswer:
          "Anode: Fe²⁺/Fe. Kathode: Cu²⁺/Cu. Kupfer besitzt das höhere Elektrodenpotenzial."
      },
      {
        id: "half-cells-d",
        title: "Aufgabe D: Magnesium/Zink",
        prompt:
          "Gegeben sind die Halbzellen Mg²⁺/Mg und Zn²⁺/Zn. Bestimme Anode und Kathode.",
        fields: [
          {
            id: "anode",
            label: "Anode",
            correctValues: ["Mg²⁺/Mg", "Mg/Mg²⁺", "Magnesium", "Mg"]
          },
          {
            id: "kathode",
            label: "Kathode",
            correctValues: ["Zn²⁺/Zn", "Zn/Zn²⁺", "Zink", "Zn"]
          },
          {
            id: "reason",
            label: "Begründung",
            correctValues: [
              "Zn hat das höhere Potenzial",
              "Zn²⁺/Zn hat das höhere Potenzial",
              "Zink hat das höhere Potenzial",
              "Magnesium hat das niedrigere Potenzial",
              "Mg²⁺/Mg hat das niedrigere Potenzial"
            ]
          }
        ],
        modelAnswer:
          "Anode: Mg²⁺/Mg. Kathode: Zn²⁺/Zn. Zink besitzt im Vergleich zu Magnesium das höhere Elektrodenpotenzial."
      },
      {
        id: "half-cells-e",
        title: "Aufgabe E: Magnesium/Silber",
        prompt:
          "Gegeben sind die Halbzellen Mg²⁺/Mg und Ag⁺/Ag. Bestimme Anode und Kathode.",
        fields: [
          {
            id: "anode",
            label: "Anode",
            correctValues: ["Mg²⁺/Mg", "Mg/Mg²⁺", "Magnesium", "Mg"]
          },
          {
            id: "kathode",
            label: "Kathode",
            correctValues: ["Ag⁺/Ag", "Ag/Ag⁺", "Silber", "Ag"]
          },
          {
            id: "reason",
            label: "Begründung",
            correctValues: [
              "Ag hat das höhere Potenzial",
              "Ag⁺/Ag hat das höhere Potenzial",
              "Silber hat das höhere Potenzial",
              "Magnesium hat das niedrigere Potenzial",
              "Mg²⁺/Mg hat das niedrigere Potenzial"
            ]
          }
        ],
        modelAnswer:
          "Anode: Mg²⁺/Mg. Kathode: Ag⁺/Ag. Silber besitzt das höhere Elektrodenpotenzial, Magnesium das niedrigere."
      }
    ],
    modelAnswer:
      "Die Halbzelle mit dem höheren Standardelektrodenpotenzial ist die Kathode. Die Halbzelle mit dem niedrigeren Standardelektrodenpotenzial ist die Anode."
  },

  {
    id: "practice-cell-voltage",
    title: "Übung 3: Zellspannung berechnen",
    shortTitle: "Zellspannung",
    description:
      "Berechne die Zellspannung galvanischer Zellen mithilfe von Standardelektrodenpotenzialen.",
    type: "calculationExercise",
    checking: { type: "direct", feedback: "color" },
    formula: "U = E(Kathode) − E(Anode)",
    materials: [
      {
        title: "Material 1: Standardelektrodenpotenziale",
        type: "table",
        columns: ["Redoxpaar", "E° in V"],
        rows: [
          ["Mg²⁺/Mg", "−2,37"],
          ["Zn²⁺/Zn", "−0,76"],
          ["Fe²⁺/Fe", "−0,44"],
          ["Cu²⁺/Cu", "+0,34"],
          ["Ag⁺/Ag", "+0,80"]
        ]
      }
    ],
    tasks: [
      {
        id: "voltage-a",
        title: "Aufgabe A: Zink/Kupfer",
        prompt:
          "Berechne die Zellspannung der galvanischen Zelle Zn/Zn²⁺ || Cu²⁺/Cu.",
        fields: [
          { id: "eKathode", label: "E(Kathode) in V", correctValue: 0.34 },
          { id: "eAnode", label: "E(Anode) in V", correctValue: -0.76 },
          { id: "voltage", label: "U in V", correctValue: 1.1 }
        ],
        tolerance: 0.01,
        modelAnswer:
          "U = 0,34 V − (−0,76 V) = 1,10 V."
      },
      {
        id: "voltage-b",
        title: "Aufgabe B: Magnesium/Silber",
        prompt:
          "Berechne die Zellspannung der galvanischen Zelle Mg/Mg²⁺ || Ag⁺/Ag.",
        fields: [
          { id: "eKathode", label: "E(Kathode) in V", correctValue: 0.8 },
          { id: "eAnode", label: "E(Anode) in V", correctValue: -2.37 },
          { id: "voltage", label: "U in V", correctValue: 3.17 }
        ],
        tolerance: 0.01,
        modelAnswer:
          "U = 0,80 V − (−2,37 V) = 3,17 V."
      },
      {
        id: "voltage-c",
        title: "Aufgabe C: Eisen/Kupfer",
        prompt:
          "Berechne die Zellspannung der galvanischen Zelle Fe/Fe²⁺ || Cu²⁺/Cu.",
        fields: [
          { id: "eKathode", label: "E(Kathode) in V", correctValue: 0.34 },
          { id: "eAnode", label: "E(Anode) in V", correctValue: -0.44 },
          { id: "voltage", label: "U in V", correctValue: 0.78 }
        ],
        tolerance: 0.01,
        modelAnswer:
          "U = 0,34 V − (−0,44 V) = 0,78 V."
      },
      {
        id: "voltage-d",
        title: "Aufgabe D: Zink/Silber",
        prompt:
          "Berechne die Zellspannung der galvanischen Zelle Zn/Zn²⁺ || Ag⁺/Ag.",
        fields: [
          { id: "eKathode", label: "E(Kathode) in V", correctValue: 0.8 },
          { id: "eAnode", label: "E(Anode) in V", correctValue: -0.76 },
          { id: "voltage", label: "U in V", correctValue: 1.56 }
        ],
        tolerance: 0.01,
        modelAnswer:
          "U = 0,80 V − (−0,76 V) = 1,56 V."
      },
      {
        id: "voltage-e",
        title: "Aufgabe E: Magnesium/Kupfer",
        prompt:
          "Berechne die Zellspannung der galvanischen Zelle Mg/Mg²⁺ || Cu²⁺/Cu.",
        fields: [
          { id: "eKathode", label: "E(Kathode) in V", correctValue: 0.34 },
          { id: "eAnode", label: "E(Anode) in V", correctValue: -2.37 },
          { id: "voltage", label: "U in V", correctValue: 2.71 }
        ],
        tolerance: 0.01,
        modelAnswer:
          "U = 0,34 V − (−2,37 V) = 2,71 V."
      }
    ]
  },

  {
    id: "practice-overall-reaction",
    title: "Übung 4: Gesamtreaktion formulieren",
    shortTitle: "Gesamtreaktion",
    description:
      "Formuliere Oxidation, Reduktion und Gesamtreaktion mit Reaktionsgleichungs-Kästchen.",
    type: "redoxEquationScaffold",
    checking: { type: "direct", feedback: "color" },
    materials: [
      {
        title: "Hinweis",
        type: "text-list",
        content: [
          "Die Halbzelle mit dem niedrigeren Elektrodenpotenzial ist die Anode. Dort findet die Oxidation statt.",
          "Die Halbzelle mit dem höheren Elektrodenpotenzial ist die Kathode. Dort findet die Reduktion statt.",
          "Plus-Zeichen und Reaktionspfeile sind vorgegeben."
        ]
      }
    ],
    tasks: [
      {
        id: "reaction-a",
        title: "Aufgabe A: Zn/Cu-Zelle",
        prompt:
          "Formuliere die Oxidation, die Reduktion und die Gesamtreaktion für die Zn/Cu-Zelle.",
        materials: [
          {
            title: "Material",
            type: "text-list",
            content: [
              "Zink-Halbzelle: Zn²⁺/Zn, E° = −0,76 V",
              "Kupfer-Halbzelle: Cu²⁺/Cu, E° = +0,34 V"
            ]
          }
        ],
        scaffold: {
          instruction:
            "Fülle die Kästchen für Koeffizienten, Elementsymbole, Indizes, Ladungen und Elektronen aus.",
          equations: [
            {
              label: "Oxidation",
              expectedDisplay: "Zn → Zn²⁺ + 2 e⁻",
              parts: [
                createSingleAtomParticle("Zn", neutralCharge),
                { type: "arrow" },
                createSingleAtomParticle("Zn", ion2Plus),
                { type: "plus" },
                createElectron(twoCoefficient)
              ]
            },
            {
              label: "Reduktion",
              expectedDisplay: "Cu²⁺ + 2 e⁻ → Cu",
              parts: [
                createSingleAtomParticle("Cu", ion2Plus),
                { type: "plus" },
                createElectron(twoCoefficient),
                { type: "arrow" },
                createSingleAtomParticle("Cu", neutralCharge)
              ]
            },
            {
              label: "Gesamtgleichung",
              expectedDisplay: "Zn + Cu²⁺ → Zn²⁺ + Cu",
              parts: [
                createSingleAtomParticle("Zn", neutralCharge),
                { type: "plus" },
                createSingleAtomParticle("Cu", ion2Plus),
                { type: "arrow" },
                createSingleAtomParticle("Zn", ion2Plus),
                { type: "plus" },
                createSingleAtomParticle("Cu", neutralCharge)
              ]
            }
          ]
        },
        modelAnswer:
          "Oxidation: Zn → Zn²⁺ + 2 e⁻. Reduktion: Cu²⁺ + 2 e⁻ → Cu. Gesamtreaktion: Zn + Cu²⁺ → Zn²⁺ + Cu."
      },
      {
        id: "reaction-b",
        title: "Aufgabe B: Fe/Cu-Zelle",
        prompt:
          "Formuliere die Oxidation, die Reduktion und die Gesamtreaktion für die Fe/Cu-Zelle.",
        materials: [
          {
            title: "Material",
            type: "text-list",
            content: [
              "Eisen-Halbzelle: Fe²⁺/Fe, E° = −0,44 V",
              "Kupfer-Halbzelle: Cu²⁺/Cu, E° = +0,34 V"
            ]
          }
        ],
        scaffold: {
          instruction:
            "Fülle die Kästchen für Koeffizienten, Elementsymbole, Indizes, Ladungen und Elektronen aus.",
          equations: [
            {
              label: "Oxidation",
              expectedDisplay: "Fe → Fe²⁺ + 2 e⁻",
              parts: [
                createSingleAtomParticle("Fe", neutralCharge),
                { type: "arrow" },
                createSingleAtomParticle("Fe", ion2Plus),
                { type: "plus" },
                createElectron(twoCoefficient)
              ]
            },
            {
              label: "Reduktion",
              expectedDisplay: "Cu²⁺ + 2 e⁻ → Cu",
              parts: [
                createSingleAtomParticle("Cu", ion2Plus),
                { type: "plus" },
                createElectron(twoCoefficient),
                { type: "arrow" },
                createSingleAtomParticle("Cu", neutralCharge)
              ]
            },
            {
              label: "Gesamtgleichung",
              expectedDisplay: "Fe + Cu²⁺ → Fe²⁺ + Cu",
              parts: [
                createSingleAtomParticle("Fe", neutralCharge),
                { type: "plus" },
                createSingleAtomParticle("Cu", ion2Plus),
                { type: "arrow" },
                createSingleAtomParticle("Fe", ion2Plus),
                { type: "plus" },
                createSingleAtomParticle("Cu", neutralCharge)
              ]
            }
          ]
        },
        modelAnswer:
          "Oxidation: Fe → Fe²⁺ + 2 e⁻. Reduktion: Cu²⁺ + 2 e⁻ → Cu. Gesamtreaktion: Fe + Cu²⁺ → Fe²⁺ + Cu."
      },
      {
        id: "reaction-c",
        title: "Aufgabe C: Mg/Ag-Zelle",
        prompt:
          "Formuliere die Oxidation, die Reduktion und die Gesamtreaktion für die Mg/Ag-Zelle.",
        materials: [
          {
            title: "Material",
            type: "text-list",
            content: [
              "Magnesium-Halbzelle: Mg²⁺/Mg, E° = −2,37 V",
              "Silber-Halbzelle: Ag⁺/Ag, E° = +0,80 V"
            ]
          }
        ],
        scaffold: {
          instruction:
            "Fülle die Kästchen für Koeffizienten, Elementsymbole, Indizes, Ladungen und Elektronen aus.",
          equations: [
            {
              label: "Oxidation",
              expectedDisplay: "Mg → Mg²⁺ + 2 e⁻",
              parts: [
                createSingleAtomParticle("Mg", neutralCharge),
                { type: "arrow" },
                createSingleAtomParticle("Mg", ion2Plus),
                { type: "plus" },
                createElectron(twoCoefficient)
              ]
            },
            {
              label: "Reduktion",
              expectedDisplay: "2 Ag⁺ + 2 e⁻ → 2 Ag",
              parts: [
                createSingleAtomParticle("Ag", ion1Plus, twoCoefficient),
                { type: "plus" },
                createElectron(twoCoefficient),
                { type: "arrow" },
                createSingleAtomParticle("Ag", neutralCharge, twoCoefficient)
              ]
            },
            {
              label: "Gesamtgleichung",
              expectedDisplay: "Mg + 2 Ag⁺ → Mg²⁺ + 2 Ag",
              parts: [
                createSingleAtomParticle("Mg", neutralCharge),
                { type: "plus" },
                createSingleAtomParticle("Ag", ion1Plus, twoCoefficient),
                { type: "arrow" },
                createSingleAtomParticle("Mg", ion2Plus),
                { type: "plus" },
                createSingleAtomParticle("Ag", neutralCharge, twoCoefficient)
              ]
            }
          ]
        },
        modelAnswer:
          "Oxidation: Mg → Mg²⁺ + 2 e⁻. Reduktion: 2 Ag⁺ + 2 e⁻ → 2 Ag. Gesamtreaktion: Mg + 2 Ag⁺ → Mg²⁺ + 2 Ag."
      }
    ]
  },

  {
    id: "practice-spontaneity",
    title: "Übung 5: Freiwilligkeit beurteilen",
    shortTitle: "Freiwilligkeit",
    description:
      "Beurteile mithilfe der Zellspannung, ob eine Redoxreaktion freiwillig ablaufen kann.",
    type: "mixedExercise",
    checking: { type: "criteria" },
    cases: [
      {
        id: "spontaneity-a",
        title: "Aufgabe A: Kupfer reagiert mit Silber-Ionen",
        materials: [
          {
            title: "Material 1: Mögliche Reaktion",
            type: "reaction-list",
            content: ["Cu + 2 Ag⁺ → Cu²⁺ + 2 Ag"]
          },
          {
            title: "Material 2: Standardelektrodenpotenziale",
            type: "table",
            columns: ["Redoxpaar", "E° in V"],
            rows: [
              ["Cu²⁺/Cu", "+0,34"],
              ["Ag⁺/Ag", "+0,80"]
            ]
          }
        ],
        calculationPart: {
          type: "calculation",
          checking: { type: "direct", feedback: "color" },
          prompt: "Berechne zunächst die Zellspannung.",
          fields: [
            { id: "eKathode", label: "E(Kathode) in V", correctValue: 0.8 },
            { id: "eAnode", label: "E(Anode) in V", correctValue: 0.34 },
            { id: "voltage", label: "U in V", correctValue: 0.46 }
          ],
          tolerance: 0.01,
          modelAnswer:
            "U = E(Kathode) − E(Anode) = 0,80 V − 0,34 V = 0,46 V."
        },
        freeTextPart: {
          type: "freeText",
          checking: { type: "criteria" },
          prompt:
            "Beurteile, ob die Reaktion freiwillig abläuft. Begründe mithilfe der Zellspannung und der beteiligten Teilreaktionen.",
          modelAnswer:
            "Die Reaktion läuft freiwillig ab, weil die Zellspannung mit 0,46 V positiv ist. Kupfer wird oxidiert und gibt Elektronen ab. Silber-Ionen werden reduziert und nehmen Elektronen auf.",
          criteria: [
            {
              label: "Die Reaktion wird als freiwillig beurteilt.",
              matchMode: "any",
              keywords: ["freiwillig", "läuft ab", "laeuft ab", "spontan"]
            },
            {
              label: "Die positive Zellspannung wird als Begründung genannt.",
              matchMode: "allGroups",
              keywordGroups: [
                [...chemistryAliases.positiveVoltage, "0,46", "0.46"],
                ["zellspannung", "spannung", "u"]
              ]
            },
            {
              label: "Silber-Ionen werden als reduzierte Teilchen erkannt.",
              matchMode: "allGroups",
              keywordGroups: [chemistryAliases.agPlus, chemistryAliases.electronGain]
            },
            {
              label: "Kupfer wird als oxidiertes Teilchen erkannt.",
              matchMode: "allGroups",
              keywordGroups: [["kupfer", "cu"], chemistryAliases.electronLoss]
            }
          ]
        }
      },
      {
        id: "spontaneity-b",
        title: "Aufgabe B: Silber reagiert mit Kupfer-Ionen",
        materials: [
          {
            title: "Material 1: Mögliche Reaktion",
            type: "reaction-list",
            content: ["2 Ag + Cu²⁺ → 2 Ag⁺ + Cu"]
          },
          {
            title: "Material 2: Standardelektrodenpotenziale",
            type: "table",
            columns: ["Redoxpaar", "E° in V"],
            rows: [
              ["Cu²⁺/Cu", "+0,34"],
              ["Ag⁺/Ag", "+0,80"]
            ]
          }
        ],
        calculationPart: {
          type: "calculation",
          checking: { type: "direct", feedback: "color" },
          prompt: "Berechne die Zellspannung für die angegebene Reaktionsrichtung.",
          fields: [
            { id: "eKathode", label: "E(Kathode) in V", correctValue: 0.34 },
            { id: "eAnode", label: "E(Anode) in V", correctValue: 0.8 },
            { id: "voltage", label: "U in V", correctValue: -0.46 }
          ],
          tolerance: 0.01,
          modelAnswer:
            "Für die angegebene Richtung gilt: U = 0,34 V − 0,80 V = −0,46 V."
        },
        freeTextPart: {
          type: "freeText",
          checking: { type: "criteria" },
          prompt:
            "Beurteile, ob die angegebene Reaktion freiwillig abläuft.",
          modelAnswer:
            "Die Reaktion läuft nicht freiwillig ab, weil die Zellspannung mit −0,46 V negativ ist. Die freiwillige Richtung wäre die Umkehrreaktion: Cu + 2 Ag⁺ → Cu²⁺ + 2 Ag.",
          criteria: [
            {
              label: "Die Reaktion wird als nicht freiwillig beurteilt.",
              matchMode: "any",
              keywords: ["nicht freiwillig", "läuft nicht", "laeuft nicht", "nicht spontan"]
            },
            {
              label: "Die negative Zellspannung wird als Begründung genannt.",
              matchMode: "allGroups",
              keywordGroups: [
                [...chemistryAliases.negativeVoltage, "-0,46", "-0.46"],
                ["zellspannung", "spannung", "u"]
              ]
            },
            {
              label: "Die Umkehrreaktion wird als freiwillige Richtung erkannt.",
              matchMode: "any",
              keywords: ["umkehrreaktion", "umkehrung", "andere richtung", "gegenteilige richtung"]
            },
            {
              label: "Silber wird als zu edel für die Elektronenabgabe an Kupfer-Ionen erkannt.",
              matchMode: "allGroups",
              keywordGroups: [["silber", "ag"], ["edler", "höheres potenzial", "hoeheres potenzial"]]
            }
          ]
        }
      },
      {
        id: "spontaneity-c",
        title: "Aufgabe C: Zink reagiert mit Kupfer-Ionen",
        materials: [
          {
            title: "Material 1: Mögliche Reaktion",
            type: "reaction-list",
            content: ["Zn + Cu²⁺ → Zn²⁺ + Cu"]
          },
          {
            title: "Material 2: Standardelektrodenpotenziale",
            type: "table",
            columns: ["Redoxpaar", "E° in V"],
            rows: [
              ["Zn²⁺/Zn", "−0,76"],
              ["Cu²⁺/Cu", "+0,34"]
            ]
          }
        ],
        calculationPart: {
          type: "calculation",
          checking: { type: "direct", feedback: "color" },
          prompt: "Berechne zunächst die Zellspannung.",
          fields: [
            { id: "eKathode", label: "E(Kathode) in V", correctValue: 0.34 },
            { id: "eAnode", label: "E(Anode) in V", correctValue: -0.76 },
            { id: "voltage", label: "U in V", correctValue: 1.1 }
          ],
          tolerance: 0.01,
          modelAnswer:
            "U = E(Kathode) − E(Anode) = 0,34 V − (−0,76 V) = 1,10 V."
        },
        freeTextPart: {
          type: "freeText",
          checking: { type: "criteria" },
          prompt:
            "Beurteile, ob die Reaktion freiwillig abläuft.",
          modelAnswer:
            "Die Reaktion läuft freiwillig ab, weil die Zellspannung mit 1,10 V positiv ist. Zink wird oxidiert und gibt Elektronen ab. Kupfer-Ionen werden reduziert.",
          criteria: [
            {
              label: "Die Reaktion wird als freiwillig beurteilt.",
              matchMode: "any",
              keywords: ["freiwillig", "läuft ab", "laeuft ab", "spontan"]
            },
            {
              label: "Die positive Zellspannung wird genannt.",
              matchMode: "allGroups",
              keywordGroups: [
                [...chemistryAliases.positiveVoltage, "1,10", "1.10"],
                ["zellspannung", "spannung", "u"]
              ]
            },
            {
              label: "Zink wird oxidiert.",
              matchMode: "allGroups",
              keywordGroups: [["zink", "zn"], chemistryAliases.electronLoss]
            },
            {
              label: "Kupfer-Ionen werden reduziert.",
              matchMode: "allGroups",
              keywordGroups: [chemistryAliases.cu2, chemistryAliases.electronGain]
            }
          ]
        }
      },
      {
        id: "spontaneity-d",
        title: "Aufgabe D: Kupfer reagiert mit Zink-Ionen",
        materials: [
          {
            title: "Material 1: Mögliche Reaktion",
            type: "reaction-list",
            content: ["Cu + Zn²⁺ → Cu²⁺ + Zn"]
          },
          {
            title: "Material 2: Standardelektrodenpotenziale",
            type: "table",
            columns: ["Redoxpaar", "E° in V"],
            rows: [
              ["Zn²⁺/Zn", "−0,76"],
              ["Cu²⁺/Cu", "+0,34"]
            ]
          }
        ],
        calculationPart: {
          type: "calculation",
          checking: { type: "direct", feedback: "color" },
          prompt: "Berechne die Zellspannung für die angegebene Reaktionsrichtung.",
          fields: [
            { id: "eKathode", label: "E(Kathode) in V", correctValue: -0.76 },
            { id: "eAnode", label: "E(Anode) in V", correctValue: 0.34 },
            { id: "voltage", label: "U in V", correctValue: -1.1 }
          ],
          tolerance: 0.01,
          modelAnswer:
            "Für die angegebene Richtung gilt: U = −0,76 V − 0,34 V = −1,10 V."
        },
        freeTextPart: {
          type: "freeText",
          checking: { type: "criteria" },
          prompt:
            "Beurteile, ob die angegebene Reaktion freiwillig abläuft.",
          modelAnswer:
            "Die Reaktion läuft nicht freiwillig ab, weil die Zellspannung mit −1,10 V negativ ist. Zink ist unedler als Kupfer; freiwillig läuft daher die Reaktion Zn + Cu²⁺ → Zn²⁺ + Cu ab.",
          criteria: [
            {
              label: "Die Reaktion wird als nicht freiwillig beurteilt.",
              matchMode: "any",
              keywords: ["nicht freiwillig", "läuft nicht", "laeuft nicht", "nicht spontan"]
            },
            {
              label: "Die negative Zellspannung wird genannt.",
              matchMode: "allGroups",
              keywordGroups: [
                [...chemistryAliases.negativeVoltage, "-1,10", "-1.10"],
                ["zellspannung", "spannung", "u"]
              ]
            },
            {
              label: "Zink wird als unedler als Kupfer erkannt.",
              matchMode: "allGroups",
              keywordGroups: [["zink", "zn"], ["kupfer", "cu"], ["unedler", "niedrigeres potenzial"]]
            },
            {
              label: "Die freiwillige Umkehrreaktion wird erkannt.",
              matchMode: "any",
              keywords: [
                "zn + cu",
                "zink reagiert mit kupfer",
                "umkehrreaktion",
                "umkehrung",
                "andere richtung"
              ]
            }
          ]
        }
      }
    ]
  }
];