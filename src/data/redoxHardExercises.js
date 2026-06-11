const acidHelp =
  'In saurer Lösung darfst du O-Atome mit H₂O ausgleichen und H-Atome mit H⁺. Anschließend gleichst du die Ladungen mit Elektronen aus.';

const acid = {
  medium: 'sauer',
  helperSpecies: ['H⁺', 'H₂O'],
  helperHint: acidHelp,
};

export const redoxHardExercises = [
  {
    id: 'redox-schwer-001',
    level: 'schwer',
    type: 'gesamtreaktion',
    title: 'Permanganat und Eisen(II) in saurer Lösung',
    givenForms: [
      { element: 'Mangan', reducedForm: 'Mn²⁺', oxidizedForm: 'MnO₄⁻' },
      { element: 'Eisen', reducedForm: 'Fe²⁺', oxidizedForm: 'Fe³⁺' },
    ],
    ...acid,
    prompt: 'Stelle die Gesamtreaktion in saurer Lösung auf.',
    answer: 'MnO₄⁻ + 8 H⁺ + 5 Fe²⁺ → Mn²⁺ + 4 H₂O + 5 Fe³⁺',
    acceptedAnswers: [
      'MnO4- + 8 H+ + 5 Fe2+ -> Mn2+ + 4 H2O + 5 Fe3+',
      'MnO4^- + 8 H+ + 5 Fe2+ -> Mn2+ + 4 H2O + 5 Fe3+',
    ],
    solutionSteps: {
      oxidation: '5 Fe²⁺ → 5 Fe³⁺ + 5 e⁻',
      reduction: 'MnO₄⁻ + 8 H⁺ + 5 e⁻ → Mn²⁺ + 4 H₂O',
      electronBalance: 'Die Oxidation wird mit 5 multipliziert.',
      overall: 'MnO₄⁻ + 8 H⁺ + 5 Fe²⁺ → Mn²⁺ + 4 H₂O + 5 Fe³⁺',
      interpretation:
        'Fe²⁺ gibt Elektronen ab und wird oxidiert. MnO₄⁻ nimmt Elektronen auf und wird reduziert.',
    },
    explanation:
      'Permanganat wird in saurer Lösung zu Mn²⁺ reduziert. Fe²⁺ gibt jeweils ein Elektron ab und wird zu Fe³⁺ oxidiert. Daher müssen fünf Fe²⁺-Ionen reagieren.',
  },
  {
    id: 'redox-schwer-002',
    level: 'schwer',
    type: 'reduktion',
    title: 'Reduktion von Permanganat',
    givenForms: [{ element: 'Mangan', reducedForm: 'Mn²⁺', oxidizedForm: 'MnO₄⁻' }],
    ...acid,
    prompt: 'Formuliere die Reduktion von Permanganat zu Mn²⁺ in saurer Lösung.',
    answer: 'MnO₄⁻ + 8 H⁺ + 5 e⁻ → Mn²⁺ + 4 H₂O',
    acceptedAnswers: ['MnO4- + 8 H+ + 5 e- -> Mn2+ + 4 H2O'],
    explanation:
      'MnO₄⁻ nimmt in saurer Lösung fünf Elektronen auf. H⁺ und H₂O gleichen Wasserstoff und Sauerstoff aus.',
  },
  {
    id: 'redox-schwer-003',
    level: 'schwer',
    type: 'oxidation',
    title: 'Oxidation von Eisen(II)',
    givenForms: [{ element: 'Eisen', reducedForm: 'Fe²⁺', oxidizedForm: 'Fe³⁺' }],
    prompt: 'Formuliere die Oxidation.',
    answer: 'Fe²⁺ → Fe³⁺ + e⁻',
    acceptedAnswers: ['Fe2+ -> Fe3+ + e-'],
    explanation: 'Fe²⁺ gibt ein Elektron ab und wird zu Fe³⁺ oxidiert.',
  },
  {
    id: 'redox-schwer-004',
    level: 'schwer',
    type: 'gesamtreaktion',
    title: 'Dichromat und Eisen(II) in saurer Lösung',
    givenForms: [
      { element: 'Chrom', reducedForm: 'Cr³⁺', oxidizedForm: 'Cr₂O₇²⁻' },
      { element: 'Eisen', reducedForm: 'Fe²⁺', oxidizedForm: 'Fe³⁺' },
    ],
    ...acid,
    prompt: 'Stelle die Gesamtreaktion in saurer Lösung auf.',
    answer: 'Cr₂O₇²⁻ + 14 H⁺ + 6 Fe²⁺ → 2 Cr³⁺ + 7 H₂O + 6 Fe³⁺',
    acceptedAnswers: [
      'Cr2O7 2- + 14 H+ + 6 Fe2+ -> 2 Cr3+ + 7 H2O + 6 Fe3+',
      'Cr2O7^2- + 14 H+ + 6 Fe2+ -> 2 Cr3+ + 7 H2O + 6 Fe3+',
    ],
    solutionSteps: {
      oxidation: '6 Fe²⁺ → 6 Fe³⁺ + 6 e⁻',
      reduction: 'Cr₂O₇²⁻ + 14 H⁺ + 6 e⁻ → 2 Cr³⁺ + 7 H₂O',
      electronBalance: 'Die Oxidation wird mit 6 multipliziert.',
      overall: 'Cr₂O₇²⁻ + 14 H⁺ + 6 Fe²⁺ → 2 Cr³⁺ + 7 H₂O + 6 Fe³⁺',
      interpretation:
        'Fe²⁺ wird oxidiert. Dichromat nimmt Elektronen auf und wird zu Cr³⁺ reduziert.',
    },
    explanation:
      'Dichromat nimmt in saurer Lösung sechs Elektronen auf. Sechs Fe²⁺-Ionen liefern diese Elektronen.',
  },
  {
    id: 'redox-schwer-005',
    level: 'schwer',
    type: 'reduktion',
    title: 'Reduktion von Dichromat',
    givenForms: [{ element: 'Chrom', reducedForm: 'Cr³⁺', oxidizedForm: 'Cr₂O₇²⁻' }],
    ...acid,
    prompt: 'Formuliere die Reduktion von Dichromat zu Cr³⁺ in saurer Lösung.',
    answer: 'Cr₂O₇²⁻ + 14 H⁺ + 6 e⁻ → 2 Cr³⁺ + 7 H₂O',
    acceptedAnswers: ['Cr2O7 2- + 14 H+ + 6 e- -> 2 Cr3+ + 7 H2O'],
    explanation:
      'Cr₂O₇²⁻ wird in saurer Lösung zu Cr³⁺ reduziert. Dazu werden sechs Elektronen aufgenommen.',
  },
  {
    id: 'redox-schwer-006',
    level: 'schwer',
    type: 'gesamtreaktion',
    title: 'Oxalat und Permanganat in saurer Lösung',
    givenForms: [
      { element: 'Kohlenstoff/Oxalat', reducedForm: 'C₂O₄²⁻', oxidizedForm: 'CO₂' },
      { element: 'Mangan', reducedForm: 'Mn²⁺', oxidizedForm: 'MnO₄⁻' },
    ],
    ...acid,
    prompt: 'Stelle die Gesamtreaktion in saurer Lösung auf.',
    answer: '2 MnO₄⁻ + 16 H⁺ + 5 C₂O₄²⁻ → 2 Mn²⁺ + 8 H₂O + 10 CO₂',
    acceptedAnswers: ['2 MnO4- + 16 H+ + 5 C2O4 2- -> 2 Mn2+ + 8 H2O + 10 CO2'],
    solutionSteps: {
      oxidation: '5 C₂O₄²⁻ → 10 CO₂ + 10 e⁻',
      reduction: '2 MnO₄⁻ + 16 H⁺ + 10 e⁻ → 2 Mn²⁺ + 8 H₂O',
      electronBalance: 'Oxidation mal 5, Reduktion mal 2.',
      overall: '2 MnO₄⁻ + 16 H⁺ + 5 C₂O₄²⁻ → 2 Mn²⁺ + 8 H₂O + 10 CO₂',
      interpretation:
        'Oxalat gibt Elektronen ab. Permanganat nimmt Elektronen auf.',
    },
    explanation:
      'Oxalat gibt pro Ion zwei Elektronen ab. Permanganat nimmt fünf Elektronen auf. Das kleinste gemeinsame Vielfache ist 10.',
  },
  {
    id: 'redox-schwer-007',
    level: 'schwer',
    type: 'oxidation',
    title: 'Oxidation von Oxalat',
    givenForms: [{ element: 'Kohlenstoff/Oxalat', reducedForm: 'C₂O₄²⁻', oxidizedForm: 'CO₂' }],
    prompt: 'Formuliere die Oxidation von Oxalat zu Kohlenstoffdioxid.',
    answer: 'C₂O₄²⁻ → 2 CO₂ + 2 e⁻',
    acceptedAnswers: ['C2O4 2- -> 2 CO2 + 2 e-'],
    explanation: 'C₂O₄²⁻ gibt zwei Elektronen ab und wird zu zwei CO₂-Molekülen oxidiert.',
  },
  {
    id: 'redox-schwer-008',
    level: 'schwer',
    type: 'gesamtreaktion',
    title: 'Sulfit und Permanganat in saurer Lösung',
    givenForms: [
      { element: 'Schwefel', reducedForm: 'SO₃²⁻', oxidizedForm: 'SO₄²⁻' },
      { element: 'Mangan', reducedForm: 'Mn²⁺', oxidizedForm: 'MnO₄⁻' },
    ],
    ...acid,
    prompt: 'Stelle die Gesamtreaktion in saurer Lösung auf.',
    answer: '2 MnO₄⁻ + 6 H⁺ + 5 SO₃²⁻ → 2 Mn²⁺ + 3 H₂O + 5 SO₄²⁻',
    acceptedAnswers: ['2 MnO4- + 6 H+ + 5 SO3 2- -> 2 Mn2+ + 3 H2O + 5 SO4 2-'],
    solutionSteps: {
      oxidation: '5 SO₃²⁻ + 5 H₂O → 5 SO₄²⁻ + 10 H⁺ + 10 e⁻',
      reduction: '2 MnO₄⁻ + 16 H⁺ + 10 e⁻ → 2 Mn²⁺ + 8 H₂O',
      electronBalance: 'Oxidation mal 5, Reduktion mal 2. Danach werden H⁺ und H₂O gekürzt.',
      overall: '2 MnO₄⁻ + 6 H⁺ + 5 SO₃²⁻ → 2 Mn²⁺ + 3 H₂O + 5 SO₄²⁻',
      interpretation:
        'Sulfit wird oxidiert. Permanganat wird reduziert.',
    },
    explanation:
      'Sulfit gibt Elektronen ab und wird zu Sulfat. Nach dem Elektronenausgleich werden H⁺ und H₂O gekürzt.',
  },
  {
    id: 'redox-schwer-009',
    level: 'schwer',
    type: 'oxidation',
    title: 'Oxidation von Sulfit',
    givenForms: [{ element: 'Schwefel', reducedForm: 'SO₃²⁻', oxidizedForm: 'SO₄²⁻' }],
    ...acid,
    prompt: 'Formuliere die Oxidation von Sulfit zu Sulfat in saurer Lösung.',
    answer: 'SO₃²⁻ + H₂O → SO₄²⁻ + 2 H⁺ + 2 e⁻',
    acceptedAnswers: ['SO3 2- + H2O -> SO4 2- + 2 H+ + 2 e-'],
    explanation:
      'Ein O-Atom wird mit H₂O ergänzt. Danach werden H-Atome mit H⁺ und die Ladung mit Elektronen ausgeglichen.',
  },
  {
    id: 'redox-schwer-010',
    level: 'schwer',
    type: 'gesamtreaktion',
    title: 'Iodid und Permanganat in saurer Lösung',
    givenForms: [
      { element: 'Iod', reducedForm: 'I⁻', oxidizedForm: 'I₂' },
      { element: 'Mangan', reducedForm: 'Mn²⁺', oxidizedForm: 'MnO₄⁻' },
    ],
    ...acid,
    prompt: 'Stelle die Gesamtreaktion in saurer Lösung auf.',
    answer: '2 MnO₄⁻ + 16 H⁺ + 10 I⁻ → 2 Mn²⁺ + 8 H₂O + 5 I₂',
    acceptedAnswers: ['2 MnO4- + 16 H+ + 10 I- -> 2 Mn2+ + 8 H2O + 5 I2'],
    solutionSteps: {
      oxidation: '10 I⁻ → 5 I₂ + 10 e⁻',
      reduction: '2 MnO₄⁻ + 16 H⁺ + 10 e⁻ → 2 Mn²⁺ + 8 H₂O',
      electronBalance: 'Oxidation mal 5, Reduktion mal 2.',
      overall: '2 MnO₄⁻ + 16 H⁺ + 10 I⁻ → 2 Mn²⁺ + 8 H₂O + 5 I₂',
      interpretation:
        'I⁻ gibt Elektronen ab und wird oxidiert. MnO₄⁻ nimmt Elektronen auf und wird reduziert.',
    },
    explanation:
      'Formal ergibt sich nach dem Elektronenausgleich diese Gesamtreaktion. Ob die Reaktion freiwillig abläuft, hängt von den Redoxpotenzialen ab.',
  },
  {
    id: 'redox-schwer-011',
    level: 'schwer',
    type: 'gesamtreaktion',
    title: 'Wasserstoffperoxid als Reduktionsmittel',
    givenForms: [
      { element: 'Sauerstoff/Wasserstoffperoxid', reducedForm: 'H₂O₂', oxidizedForm: 'O₂' },
      { element: 'Mangan', reducedForm: 'Mn²⁺', oxidizedForm: 'MnO₄⁻' },
    ],
    ...acid,
    prompt: 'Stelle die Gesamtreaktion in saurer Lösung auf.',
    answer: '2 MnO₄⁻ + 6 H⁺ + 5 H₂O₂ → 2 Mn²⁺ + 8 H₂O + 5 O₂',
    acceptedAnswers: ['2 MnO4- + 6 H+ + 5 H2O2 -> 2 Mn2+ + 8 H2O + 5 O2'],
    solutionSteps: {
      oxidation: '5 H₂O₂ → 5 O₂ + 10 H⁺ + 10 e⁻',
      reduction: '2 MnO₄⁻ + 16 H⁺ + 10 e⁻ → 2 Mn²⁺ + 8 H₂O',
      electronBalance: 'Oxidation mal 5, Reduktion mal 2. Danach werden H⁺ gekürzt.',
      overall: '2 MnO₄⁻ + 6 H⁺ + 5 H₂O₂ → 2 Mn²⁺ + 8 H₂O + 5 O₂',
      interpretation:
        'H₂O₂ gibt Elektronen ab und wirkt hier als Reduktionsmittel.',
    },
    explanation:
      'H₂O₂ gibt Elektronen ab und wird zu O₂ oxidiert. Permanganat nimmt Elektronen auf und wird zu Mn²⁺ reduziert.',
  },
  {
    id: 'redox-schwer-012',
    level: 'schwer',
    type: 'gesamtreaktion',
    title: 'Wasserstoffperoxid als Oxidationsmittel',
    givenForms: [
      { element: 'Iod', reducedForm: 'I⁻', oxidizedForm: 'I₂' },
      { element: 'Sauerstoff/Wasserstoffperoxid', reducedForm: 'H₂O', oxidizedForm: 'H₂O₂' },
    ],
    ...acid,
    prompt: 'Stelle die Gesamtreaktion in saurer Lösung auf.',
    answer: 'H₂O₂ + 2 H⁺ + 2 I⁻ → I₂ + 2 H₂O',
    acceptedAnswers: ['H2O2 + 2 H+ + 2 I- -> I2 + 2 H2O'],
    solutionSteps: {
      oxidation: '2 I⁻ → I₂ + 2 e⁻',
      reduction: 'H₂O₂ + 2 H⁺ + 2 e⁻ → 2 H₂O',
      electronBalance: 'Beide Teilreaktionen enthalten bereits zwei Elektronen.',
      overall: 'H₂O₂ + 2 H⁺ + 2 I⁻ → I₂ + 2 H₂O',
      interpretation:
        'I⁻ wird oxidiert. H₂O₂ nimmt Elektronen auf und wirkt hier als Oxidationsmittel.',
    },
    explanation:
      'Iodid wird oxidiert. H₂O₂ nimmt Elektronen auf und wird in saurer Lösung zu H₂O reduziert.',
  },
  {
    id: 'redox-schwer-013',
    level: 'schwer',
    type: 'koeffizienten',
    title: 'Koeffizienten bei Permanganat und Eisen(II)',
    givenForms: [
      { element: 'Mangan', reducedForm: 'Mn²⁺', oxidizedForm: 'MnO₄⁻' },
      { element: 'Eisen', reducedForm: 'Fe²⁺', oxidizedForm: 'Fe³⁺' },
    ],
    ...acid,
    prompt: 'Ergänze die Koeffizienten.',
    template: '__ MnO₄⁻ + __ H⁺ + __ Fe²⁺ → __ Mn²⁺ + __ H₂O + __ Fe³⁺',
    answer: 'MnO₄⁻ + 8 H⁺ + 5 Fe²⁺ → Mn²⁺ + 4 H₂O + 5 Fe³⁺',
    acceptedAnswers: ['MnO4- + 8 H+ + 5 Fe2+ -> Mn2+ + 4 H2O + 5 Fe3+'],
    explanation:
      'Die Koeffizienten sind 1, 8, 5, 1, 4, 5. Leere Koeffizienten werden wie 1 behandelt.',
  },
  {
    id: 'redox-schwer-014',
    level: 'schwer',
    type: 'teilreaktionen-gesamt',
    title: 'Aus Teilreaktionen die Gesamtreaktion bilden',
    givenForms: [
      { element: 'Kohlenstoff/Oxalat', reducedForm: 'C₂O₄²⁻', oxidizedForm: 'CO₂' },
      { element: 'Mangan', reducedForm: 'Mn²⁺', oxidizedForm: 'MnO₄⁻' },
    ],
    ...acid,
    prompt: 'Bilde aus den Teilreaktionen die Gesamtreaktion.',
    partialReactions: {
      oxidation: 'C₂O₄²⁻ → 2 CO₂ + 2 e⁻',
      reduction: 'MnO₄⁻ + 8 H⁺ + 5 e⁻ → Mn²⁺ + 4 H₂O',
    },
    answer: '2 MnO₄⁻ + 16 H⁺ + 5 C₂O₄²⁻ → 2 Mn²⁺ + 8 H₂O + 10 CO₂',
    acceptedAnswers: ['2 MnO4- + 16 H+ + 5 C2O4 2- -> 2 Mn2+ + 8 H2O + 10 CO2'],
    explanation:
      'Das kleinste gemeinsame Vielfache von 2 und 5 ist 10. Die Oxidation wird mit 5 und die Reduktion mit 2 multipliziert.',
  },
  {
    id: 'redox-schwer-015',
    level: 'schwer',
    type: 'koeffizienten',
    title: 'Koeffizienten bei Dichromat und Eisen(II)',
    givenForms: [
      { element: 'Chrom', reducedForm: 'Cr³⁺', oxidizedForm: 'Cr₂O₇²⁻' },
      { element: 'Eisen', reducedForm: 'Fe²⁺', oxidizedForm: 'Fe³⁺' },
    ],
    ...acid,
    prompt: 'Ergänze die Koeffizienten.',
    template: '__ Cr₂O₇²⁻ + __ H⁺ + __ Fe²⁺ → __ Cr³⁺ + __ H₂O + __ Fe³⁺',
    answer: 'Cr₂O₇²⁻ + 14 H⁺ + 6 Fe²⁺ → 2 Cr³⁺ + 7 H₂O + 6 Fe³⁺',
    acceptedAnswers: ['Cr2O7 2- + 14 H+ + 6 Fe2+ -> 2 Cr3+ + 7 H2O + 6 Fe3+'],
    explanation:
      'Die Koeffizienten sind 1, 14, 6, 2, 7, 6. Leere Koeffizienten werden wie 1 behandelt.',
  },
  {
    id: 'redox-schwer-016',
    level: 'schwer',
    type: 'teilreaktionen-gesamt',
    title: 'Gesamtreaktion aus Teilreaktionen mit Iodid',
    givenForms: [
      { element: 'Iod', reducedForm: 'I⁻', oxidizedForm: 'I₂' },
      { element: 'Sauerstoff/Wasserstoffperoxid', reducedForm: 'H₂O', oxidizedForm: 'H₂O₂' },
    ],
    ...acid,
    prompt: 'Bilde aus den Teilreaktionen die Gesamtreaktion.',
    partialReactions: {
      oxidation: '2 I⁻ → I₂ + 2 e⁻',
      reduction: 'H₂O₂ + 2 H⁺ + 2 e⁻ → 2 H₂O',
    },
    answer: 'H₂O₂ + 2 H⁺ + 2 I⁻ → I₂ + 2 H₂O',
    acceptedAnswers: ['H2O2 + 2 H+ + 2 I- -> I2 + 2 H2O'],
    explanation:
      'Beide Teilreaktionen enthalten bereits zwei Elektronen. Die Elektronen werden gekürzt.',
  },
];
