export const redoxMediumExercises = [
  {
    id: 'redox-mittel-001',
    level: 'mittel',
    type: 'gesamtreaktion',
    title: 'Gesamtreaktion mit Eisen(II) und Chlor',
    givenForms: [
      { element: 'Eisen', reducedForm: 'Fe²⁺', oxidizedForm: 'Fe³⁺' },
      { element: 'Chlor', reducedForm: 'Cl⁻', oxidizedForm: 'Cl₂' },
    ],
    prompt: 'Stelle die Gesamtreaktion auf.',
    answer: '2 Fe²⁺ + Cl₂ → 2 Fe³⁺ + 2 Cl⁻',
    acceptedAnswers: ['2 Fe2+ + Cl2 -> 2 Fe3+ + 2 Cl-', '2Fe2+ + Cl2 -> 2Fe3+ + 2Cl-'],
    explanation:
      'Fe²⁺ gibt je ein Elektron ab. Cl₂ nimmt insgesamt zwei Elektronen auf. Deshalb werden zwei Fe²⁺-Ionen oxidiert.',
  },
  {
    id: 'redox-mittel-002',
    level: 'mittel',
    type: 'gesamtreaktion',
    title: 'Gesamtreaktion mit Iodid und Eisen(III)',
    givenForms: [
      { element: 'Iod', reducedForm: 'I⁻', oxidizedForm: 'I₂' },
      { element: 'Eisen', reducedForm: 'Fe²⁺', oxidizedForm: 'Fe³⁺' },
    ],
    prompt: 'Stelle die Gesamtreaktion auf.',
    answer: '2 Fe³⁺ + 2 I⁻ → 2 Fe²⁺ + I₂',
    acceptedAnswers: ['2 Fe3+ + 2 I- -> 2 Fe2+ + I2', '2Fe3+ + 2I- -> 2Fe2+ + I2'],
    explanation:
      'Zwei I⁻-Ionen geben zusammen zwei Elektronen ab. Zwei Fe³⁺-Ionen nehmen diese zwei Elektronen auf.',
  },
  {
    id: 'redox-mittel-003',
    level: 'mittel',
    type: 'oxidation',
    title: 'Oxidation von Bromid zu Brom',
    givenForms: [{ element: 'Brom', reducedForm: 'Br⁻', oxidizedForm: 'Br₂' }],
    prompt: 'Formuliere die Oxidation.',
    answer: '2 Br⁻ → Br₂ + 2 e⁻',
    acceptedAnswers: ['2 Br- -> Br2 + 2 e-', '2Br- -> Br2 + 2e-'],
    explanation:
      'Zwei Bromid-Ionen geben zusammen zwei Elektronen ab und bilden Br₂.',
  },
  {
    id: 'redox-mittel-004',
    level: 'mittel',
    type: 'reduktion',
    title: 'Reduktion von Chlor zu Chlorid',
    givenForms: [{ element: 'Chlor', reducedForm: 'Cl⁻', oxidizedForm: 'Cl₂' }],
    prompt: 'Formuliere die Reduktion.',
    answer: 'Cl₂ + 2 e⁻ → 2 Cl⁻',
    acceptedAnswers: ['Cl2 + 2 e- -> 2 Cl-', 'Cl2 + 2e- -> 2Cl-'],
    explanation:
      'Ein Chlor-Molekül nimmt zwei Elektronen auf. Daraus entstehen zwei Chlorid-Ionen.',
  },
  {
    id: 'redox-mittel-005',
    level: 'mittel',
    type: 'gesamtreaktion',
    title: 'Gesamtreaktion Chlor und Bromid',
    givenForms: [
      { element: 'Chlor', reducedForm: 'Cl⁻', oxidizedForm: 'Cl₂' },
      { element: 'Brom', reducedForm: 'Br⁻', oxidizedForm: 'Br₂' },
    ],
    prompt: 'Stelle die Gesamtreaktion auf.',
    answer: 'Cl₂ + 2 Br⁻ → 2 Cl⁻ + Br₂',
    acceptedAnswers: ['Cl2 + 2 Br- -> 2 Cl- + Br2', 'Cl2 + 2Br- -> 2Cl- + Br2'],
    explanation:
      'Bromid gibt Elektronen ab und wird zu Br₂. Cl₂ nimmt Elektronen auf und wird zu Cl⁻.',
  },
  {
    id: 'redox-mittel-006',
    level: 'mittel',
    type: 'gesamtreaktion',
    title: 'Gesamtreaktion Brom und Iodid',
    givenForms: [
      { element: 'Brom', reducedForm: 'Br⁻', oxidizedForm: 'Br₂' },
      { element: 'Iod', reducedForm: 'I⁻', oxidizedForm: 'I₂' },
    ],
    prompt: 'Stelle die Gesamtreaktion auf.',
    answer: 'Br₂ + 2 I⁻ → 2 Br⁻ + I₂',
    acceptedAnswers: ['Br2 + 2 I- -> 2 Br- + I2', 'Br2 + 2I- -> 2Br- + I2'],
    explanation:
      'I⁻ gibt Elektronen ab. Br₂ nimmt zwei Elektronen auf. Formal ergibt sich nach dem Elektronenausgleich diese Gesamtreaktion.',
  },
  {
    id: 'redox-mittel-007',
    level: 'mittel',
    type: 'elektronenanzahl',
    title: 'Elektronenanzahl bestimmen',
    givenForms: [
      { element: 'Eisen', reducedForm: 'Fe²⁺', oxidizedForm: 'Fe³⁺' },
      { element: 'Chlor', reducedForm: 'Cl⁻', oxidizedForm: 'Cl₂' },
    ],
    prompt: 'Wie viele Elektronen werden in der ausgeglichenen Gesamtreaktion übertragen?',
    answer: '2',
    acceptedAnswers: ['2', 'zwei'],
    options: ['1', '2', '3', '4'],
    explanation:
      'Ein Fe²⁺-Ion gibt ein Elektron ab. Da Cl₂ zwei Elektronen aufnimmt, müssen zwei Fe²⁺-Ionen oxidiert werden.',
  },
  {
    id: 'redox-mittel-008',
    level: 'mittel',
    type: 'zuordnung',
    title: 'Oxidation und Reduktion zuordnen',
    givenForms: [
      { element: 'Iod', reducedForm: 'I⁻', oxidizedForm: 'I₂' },
      { element: 'Chlor', reducedForm: 'Cl⁻', oxidizedForm: 'Cl₂' },
    ],
    prompt: 'Ordne jede Teilgleichung zu.',
    pairs: [
      { equation: '2 I⁻ → I₂ + 2 e⁻', correctType: 'Oxidation' },
      { equation: 'Cl₂ + 2 e⁻ → 2 Cl⁻', correctType: 'Reduktion' },
    ],
    answer:
      '2 I⁻ → I₂ + 2 e⁻ ist Oxidation. Cl₂ + 2 e⁻ → 2 Cl⁻ ist Reduktion.',
    acceptedAnswers: ['Oxidation, Reduktion'],
    explanation:
      'Bei der Oxidation stehen Elektronen auf der Produktseite. Bei der Reduktion stehen Elektronen auf der Eduktseite.',
  },
  {
    id: 'redox-mittel-009',
    level: 'mittel',
    type: 'koeffizienten',
    title: 'Fehlende Koeffizienten ergänzen',
    givenForms: [
      { element: 'Eisen', reducedForm: 'Fe²⁺', oxidizedForm: 'Fe³⁺' },
      { element: 'Iod', reducedForm: 'I⁻', oxidizedForm: 'I₂' },
    ],
    prompt: 'Ergänze die Koeffizienten.',
    template: '__ Fe³⁺ + __ I⁻ → __ Fe²⁺ + __ I₂',
    blanks: ['Fe³⁺', 'I⁻', 'Fe²⁺', 'I₂'],
    correctBlanks: ['2', '2', '2', '1'],
    answer: '2 Fe³⁺ + 2 I⁻ → 2 Fe²⁺ + I₂',
    acceptedAnswers: ['2, 2, 2, 1', '2 Fe3+ + 2 I- -> 2 Fe2+ + I2'],
    explanation:
      'Zwei Fe³⁺-Ionen nehmen zwei Elektronen auf. Zwei I⁻-Ionen geben zusammen zwei Elektronen ab.',
  },
  {
    id: 'redox-mittel-010',
    level: 'mittel',
    type: 'gesamtreaktion',
    title: 'Gesamtreaktion mit Wasserstoff und Kupfer(II)',
    givenForms: [
      { element: 'Wasserstoff', reducedForm: 'H₂', oxidizedForm: 'H⁺' },
      { element: 'Kupfer', reducedForm: 'Cu', oxidizedForm: 'Cu²⁺' },
    ],
    prompt: 'Stelle die Gesamtreaktion auf.',
    answer: 'H₂ + Cu²⁺ → 2 H⁺ + Cu',
    acceptedAnswers: ['H2 + Cu2+ -> 2 H+ + Cu', 'H2 + Cu2+ -> 2H+ + Cu'],
    explanation:
      'H₂ gibt zwei Elektronen ab und wirkt hier als Reduktionsmittel. Cu²⁺ nimmt zwei Elektronen auf.',
  },
  {
    id: 'redox-mittel-011',
    level: 'mittel',
    type: 'oxidation',
    title: 'Oxidation von Wasserstoff',
    givenForms: [{ element: 'Wasserstoff', reducedForm: 'H₂', oxidizedForm: 'H⁺' }],
    prompt: 'Formuliere die Oxidation.',
    answer: 'H₂ → 2 H⁺ + 2 e⁻',
    acceptedAnswers: ['H2 -> 2 H+ + 2 e-', 'H2 -> 2H+ + 2e-'],
    explanation:
      'Wasserstoff gibt zwei Elektronen ab. Deshalb stehen 2 e⁻ auf der Produktseite.',
  },
  {
    id: 'redox-mittel-012',
    level: 'mittel',
    type: 'teilreaktionen-gesamt',
    title: 'Aus Teilreaktionen die Gesamtreaktion bilden',
    givenForms: [
      { element: 'Chlor', reducedForm: 'Cl⁻', oxidizedForm: 'Cl₂' },
      { element: 'Brom', reducedForm: 'Br⁻', oxidizedForm: 'Br₂' },
    ],
    prompt: 'Bilde aus den Teilreaktionen die Gesamtreaktion.',
    partialReactions: {
      oxidation: '2 Cl⁻ → Cl₂ + 2 e⁻',
      reduction: 'Br₂ + 2 e⁻ → 2 Br⁻',
    },
    answer: '2 Cl⁻ + Br₂ → Cl₂ + 2 Br⁻',
    acceptedAnswers: ['2 Cl- + Br2 -> Cl2 + 2 Br-', '2Cl- + Br2 -> Cl2 + 2Br-'],
    explanation:
      'Formal ergibt sich nach dem Elektronenausgleich diese Gesamtreaktion. Ob die Reaktion freiwillig abläuft, hängt von den Redoxpotenzialen ab.',
  },
];
