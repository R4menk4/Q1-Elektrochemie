export const redoxExercises = [
  {
    id: 'redox-einfach-001',
    level: 'einfach',
    type: 'gesamtreaktion',
    title: 'Gesamtreaktion aufstellen',
    givenForms: [
      { element: 'Zn', reducedForm: 'Zn', oxidizedForm: 'Zn²⁺' },
      { element: 'Cu', reducedForm: 'Cu', oxidizedForm: 'Cu²⁺' },
    ],
    prompt: 'Stelle die Gesamtreaktion auf.',
    answer: 'Zn + Cu²⁺ → Zn²⁺ + Cu',
    acceptedAnswers: ['Zn + Cu2+ -> Zn2+ + Cu', 'Zn + Cu²⁺ → Zn²⁺ + Cu'],
    explanation:
      'Zink gibt zwei Elektronen ab und wird zu Zn²⁺ oxidiert. Cu²⁺ nimmt zwei Elektronen auf und wird zu Cu reduziert.',
  },
  {
    id: 'redox-einfach-002',
    level: 'einfach',
    type: 'gesamtreaktion',
    title: 'Gesamtreaktion aufstellen',
    givenForms: [
      { element: 'Mg', reducedForm: 'Mg', oxidizedForm: 'Mg²⁺' },
      { element: 'Ag', reducedForm: 'Ag', oxidizedForm: 'Ag⁺' },
    ],
    prompt: 'Stelle die Gesamtreaktion auf.',
    answer: 'Mg + 2 Ag⁺ → Mg²⁺ + 2 Ag',
    acceptedAnswers: ['Mg + 2 Ag+ -> Mg2+ + 2 Ag', 'Mg + 2 Ag⁺ → Mg²⁺ + 2 Ag'],
    explanation:
      'Magnesium gibt zwei Elektronen ab. Zwei Silber-Ionen nehmen zusammen zwei Elektronen auf.',
  },
  {
    id: 'redox-einfach-003',
    level: 'einfach',
    type: 'oxidation',
    title: 'Oxidation formulieren',
    givenForms: [
      { element: 'Al', reducedForm: 'Al', oxidizedForm: 'Al³⁺' },
      { element: 'Cu', reducedForm: 'Cu', oxidizedForm: 'Cu²⁺' },
    ],
    prompt: 'Formuliere die Oxidation.',
    answer: 'Al → Al³⁺ + 3 e⁻',
    acceptedAnswers: ['Al -> Al3+ + 3 e-', 'Al → Al³⁺ + 3 e⁻'],
    explanation:
      'Aluminium gibt drei Elektronen ab. Deshalb steht 3 e⁻ auf der Produktseite.',
  },
  {
    id: 'redox-einfach-004',
    level: 'einfach',
    type: 'reduktion',
    title: 'Reduktion formulieren',
    givenForms: [
      { element: 'Ag', reducedForm: 'Ag', oxidizedForm: 'Ag⁺' },
      { element: 'Zn', reducedForm: 'Zn', oxidizedForm: 'Zn²⁺' },
    ],
    prompt: 'Formuliere die Reduktion.',
    answer: 'Ag⁺ + e⁻ → Ag',
    acceptedAnswers: ['Ag+ + e- -> Ag', 'Ag⁺ + e⁻ → Ag'],
    explanation:
      'Ein Silber-Ion nimmt ein Elektron auf und wird zu einem Silber-Atom.',
  },
  {
    id: 'redox-einfach-005',
    level: 'einfach',
    type: 'elektronenanzahl',
    title: 'Elektronenanzahl bestimmen',
    givenForms: [
      { element: 'Zn', reducedForm: 'Zn', oxidizedForm: 'Zn²⁺' },
      { element: 'Cu', reducedForm: 'Cu', oxidizedForm: 'Cu²⁺' },
    ],
    prompt: 'Wie viele Elektronen werden insgesamt übertragen?',
    answer: '2',
    acceptedAnswers: ['2', 'zwei'],
    options: ['1', '2', '3', '4'],
    explanation:
      'Zn gibt zwei Elektronen ab. Cu²⁺ nimmt zwei Elektronen auf. Insgesamt werden zwei Elektronen übertragen.',
  },
  {
    id: 'redox-einfach-006',
    level: 'einfach',
    type: 'gesamtreaktion',
    title: 'Gesamtreaktion aufstellen',
    givenForms: [
      { element: 'Fe', reducedForm: 'Fe', oxidizedForm: 'Fe²⁺' },
      { element: 'Cu', reducedForm: 'Cu', oxidizedForm: 'Cu²⁺' },
    ],
    prompt: 'Stelle die Gesamtreaktion auf.',
    answer: 'Fe + Cu²⁺ → Fe²⁺ + Cu',
    acceptedAnswers: ['Fe + Cu2+ -> Fe2+ + Cu', 'Fe + Cu²⁺ → Fe²⁺ + Cu'],
    explanation:
      'Eisen gibt zwei Elektronen ab. Cu²⁺ nimmt zwei Elektronen auf. Die Elektronenanzahl passt direkt.',
  },
  {
    id: 'redox-einfach-007',
    level: 'einfach',
    type: 'gesamtreaktion',
    title: 'Gesamtreaktion aufstellen',
    givenForms: [
      { element: 'Cu', reducedForm: 'Cu', oxidizedForm: 'Cu²⁺' },
      { element: 'Ag', reducedForm: 'Ag', oxidizedForm: 'Ag⁺' },
    ],
    prompt: 'Stelle die Gesamtreaktion auf.',
    answer: 'Cu + 2 Ag⁺ → Cu²⁺ + 2 Ag',
    acceptedAnswers: ['Cu + 2 Ag+ -> Cu2+ + 2 Ag', 'Cu + 2 Ag⁺ → Cu²⁺ + 2 Ag'],
    explanation:
      'Kupfer gibt zwei Elektronen ab. Darum werden zwei Ag⁺-Ionen reduziert.',
  },
  {
    id: 'redox-einfach-008',
    level: 'einfach',
    type: 'gesamtreaktion',
    title: 'Gesamtreaktion aufstellen',
    givenForms: [
      { element: 'Mg', reducedForm: 'Mg', oxidizedForm: 'Mg²⁺' },
      { element: 'Cu', reducedForm: 'Cu', oxidizedForm: 'Cu²⁺' },
    ],
    prompt: 'Stelle die Gesamtreaktion auf.',
    answer: 'Mg + Cu²⁺ → Mg²⁺ + Cu',
    acceptedAnswers: ['Mg + Cu2+ -> Mg2+ + Cu', 'Mg + Cu²⁺ → Mg²⁺ + Cu'],
    explanation:
      'Magnesium gibt zwei Elektronen ab. Cu²⁺ nimmt zwei Elektronen auf.',
  },
  {
    id: 'redox-einfach-009',
    level: 'einfach',
    type: 'gesamtreaktion',
    title: 'Gesamtreaktion aufstellen',
    givenForms: [
      { element: 'Zn', reducedForm: 'Zn', oxidizedForm: 'Zn²⁺' },
      { element: 'Ag', reducedForm: 'Ag', oxidizedForm: 'Ag⁺' },
    ],
    prompt: 'Stelle die Gesamtreaktion auf.',
    answer: 'Zn + 2 Ag⁺ → Zn²⁺ + 2 Ag',
    acceptedAnswers: ['Zn + 2 Ag+ -> Zn2+ + 2 Ag', 'Zn + 2 Ag⁺ → Zn²⁺ + 2 Ag'],
    explanation:
      'Zink gibt zwei Elektronen ab. Zwei Ag⁺-Ionen nehmen je ein Elektron auf.',
  },
  {
    id: 'redox-einfach-010',
    level: 'einfach',
    type: 'oxidation',
    title: 'Oxidation formulieren',
    givenForms: [
      { element: 'Fe', reducedForm: 'Fe', oxidizedForm: 'Fe³⁺' },
      { element: 'Ag', reducedForm: 'Ag', oxidizedForm: 'Ag⁺' },
    ],
    prompt: 'Formuliere die Oxidation.',
    answer: 'Fe → Fe³⁺ + 3 e⁻',
    acceptedAnswers: ['Fe -> Fe3+ + 3 e-', 'Fe → Fe³⁺ + 3 e⁻'],
    explanation:
      'Eisen gibt drei Elektronen ab und wird zu Fe³⁺ oxidiert.',
  },
  {
    id: 'redox-einfach-011',
    level: 'einfach',
    type: 'reduktion',
    title: 'Reduktion formulieren',
    givenForms: [
      { element: 'Fe', reducedForm: 'Fe', oxidizedForm: 'Fe³⁺' },
      { element: 'Mg', reducedForm: 'Mg', oxidizedForm: 'Mg²⁺' },
    ],
    prompt: 'Formuliere die Reduktion.',
    answer: 'Fe³⁺ + 3 e⁻ → Fe',
    acceptedAnswers: ['Fe3+ + 3 e- -> Fe', 'Fe³⁺ + 3 e⁻ → Fe'],
    explanation:
      'Fe³⁺ nimmt drei Elektronen auf und wird zu Fe reduziert.',
  },
  {
    id: 'redox-einfach-012',
    level: 'einfach',
    type: 'teilreaktionen-gesamt',
    title: 'Aus Teilreaktionen die Gesamtreaktion bilden',
    givenForms: [
      { element: 'Al', reducedForm: 'Al', oxidizedForm: 'Al³⁺' },
      { element: 'Ag', reducedForm: 'Ag', oxidizedForm: 'Ag⁺' },
    ],
    prompt: 'Bilde aus den Teilreaktionen die Gesamtreaktion.',
    partialReactions: {
      oxidation: 'Al → Al³⁺ + 3 e⁻',
      reduction: '3 Ag⁺ + 3 e⁻ → 3 Ag',
    },
    answer: 'Al + 3 Ag⁺ → Al³⁺ + 3 Ag',
    acceptedAnswers: ['Al + 3 Ag+ -> Al3+ + 3 Ag', 'Al + 3 Ag⁺ → Al³⁺ + 3 Ag'],
    explanation:
      'Die drei Elektronen kommen in Oxidation und Reduktion vor und werden in der Gesamtreaktion gekürzt.',
  },
  {
    id: 'redox-einfach-013',
    level: 'einfach',
    type: 'zuordnung',
    title: 'Oxidation und Reduktion zuordnen',
    givenForms: [
      { element: 'Fe', reducedForm: 'Fe', oxidizedForm: 'Fe²⁺' },
      { element: 'Cu', reducedForm: 'Cu', oxidizedForm: 'Cu²⁺' },
    ],
    prompt: 'Ordne jede Teilgleichung zu.',
    pairs: [
      { equation: 'Fe → Fe²⁺ + 2 e⁻', correctType: 'Oxidation' },
      { equation: 'Cu²⁺ + 2 e⁻ → Cu', correctType: 'Reduktion' },
    ],
    answer:
      'Fe → Fe²⁺ + 2 e⁻ ist Oxidation. Cu²⁺ + 2 e⁻ → Cu ist Reduktion.',
    acceptedAnswers: ['Oxidation, Reduktion'],
    explanation:
      'Bei der Oxidation werden Elektronen abgegeben. Bei der Reduktion werden Elektronen aufgenommen.',
  },
];
