(function () {
  const modules = [
    {
      id: 'redox',
      title: 'Redoxreaktionen aufstellen',
      description: 'Oxidation, Reduktion, Elektronenanzahl und Gesamtreaktion üben.',
      status: 'active',
      target: 'redoxOverview',
    },
    {
      id: 'galvanische-zellen',
      title: 'Galvanische Zelle – Daniell-Element Simulation',
      description: 'Erkunde den Elektronenfluss, die Oxidation an der Zink-Elektrode, die Reduktion an der Kupfer-Elektrode und den Ladungsausgleich durch die Ionenbrücke.',
      status: 'active',
      href: window.location.protocol === 'file:' ? './public/Simulationen/Galvanische_Zelle/index.html' : './Simulationen/Galvanische_Zelle/index.html',
    },
    { id: 'elektrolyse', title: 'Elektrolyse', description: 'Kommt später', status: 'coming-soon' },
    { id: 'spannungsreihe', title: 'Spannungsreihe', description: 'Kommt später', status: 'coming-soon' },
    { id: 'korrosion', title: 'Korrosion', description: 'Kommt später', status: 'coming-soon' },
    { id: 'batterien', title: 'Batterien und Akkumulatoren', description: 'Kommt später', status: 'coming-soon' },
  ];

  const klausurTaskData = window.klausurTaskData || { klausurTasks: [], klausurTaskMeta: {} };
  const klausurTasks = klausurTaskData.klausurTasks || [];
  const klausurTaskMeta = klausurTaskData.klausurTaskMeta || {
    title: 'Klausurähnliche Aufgaben',
    subtitle: 'Bearbeite materialgestützte Aufgaben im Stil einer Klausur.',
    note: 'Der Kriteriencheck ersetzt keine fachliche Korrektur durch eine Lehrkraft.',
    printButtonLabel: 'Aufgabe drucken / als PDF speichern',
    overviewButtonLabel: 'Zurück zur Aufgabenübersicht',
  };

  const selfCheckData = {
    title: 'Selbstcheck Elektrochemie',
    subtitle: 'Hake an, welche Kompetenzen du bereits sicher beherrschst. Nutze den Selbstcheck zur Vorbereitung auf die Unterrichtsreihe, Klausur oder Wiederholung.',
    sections: [
      {
        id: 'oxidationszahlen-redoxreaktionen',
        title: 'Oxidationszahlen und Redoxreaktionen',
        items: [
          'Ich kann Oxidationszahlen bestimmen.',
          'Ich kann Oxidation und Reduktion erklären.',
          'Ich kann bei einer Redoxreaktion erkennen, welches Teilchen oxidiert und welches reduziert wird.',
          'Ich kann Oxidationsmittel und Reduktionsmittel unterscheiden.',
          'Ich kann einfache Redoxreaktionen mithilfe von Teilgleichungen beschreiben.',
          'Ich kann anhand von Teilgleichungen die Gesamtreaktion einer Redoxreaktion herleiten.',
        ],
      },
      {
        id: 'redoxreihe-metalle',
        title: 'Redoxreihe der Metalle',
        items: [
          'Ich kann die Begriffe „edel“ und „unedel“ erklären.',
          'Ich kann die Redoxreihe der Metalle zur Vorhersage von Reaktionen nutzen.',
          'Ich kann Versuchsergebnisse zur Redoxreihe fachlich auswerten.',
        ],
      },
      {
        id: 'galvanische-zelle',
        title: 'Galvanische Zelle',
        items: [
          'Ich kann den Aufbau einer galvanischen Zelle beschreiben.',
          'Ich kann die Funktion der Halbzellen erklären.',
          'Ich kann Anode und Kathode einer galvanischen Zelle zuordnen.',
          'Ich kann den Elektronenfluss und den Ionenfluss in einer galvanischen Zelle beschreiben.',
          'Ich kann die Funktion einer Salzbrücke oder eines Diaphragmas erklären.',
          'Ich kann die Vorgänge in der Daniell-Zelle beschreiben.',
          'Ich kann die Teilgleichungen und die Gesamtreaktion einer galvanischen Zelle aufstellen.',
        ],
      },
      {
        id: 'elektrodenpotenziale',
        title: 'Elektrodenpotenziale',
        items: [
          'Ich kann erklären, was ein Elektrodenpotenzial ist.',
          'Ich kann Standardelektrodenpotenziale aus einer Tabelle nutzen.',
          'Ich kann mithilfe von Elektrodenpotenzialen Donator- und Akzeptorhalbzelle bestimmen.',
          'Ich kann die Zellspannung einer galvanischen Zelle berechnen.',
          'Ich kann mithilfe der Zellspannung beurteilen, ob eine Redoxreaktion freiwillig abläuft.',
        ],
      },
      {
        id: 'lithium-ionen-akku',
        title: 'Lithium-Ionen-Akku',
        items: [
          'Ich kann den grundlegenden Aufbau eines Lithium-Ionen-Akkus beschreiben.',
          'Ich kann die Funktion von Anode, Kathode, Elektrolyt und Separator erklären.',
          'Ich kann die Vorgänge beim Laden und Entladen unterscheiden.',
          'Ich kann erklären, warum Lithium-Ionen-Akkus als wiederaufladbare Energiequellen genutzt werden.',
        ],
      },
      {
        id: 'elektrolyse',
        title: 'Elektrolyse',
        items: [
          'Ich kann den Aufbau einer Elektrolysezelle beschreiben.',
          'Ich kann erklären, warum für eine Elektrolyse elektrische Energie benötigt wird.',
          'Ich kann Anode und Kathode bei der Elektrolyse zuordnen.',
          'Ich kann Oxidation und Reduktion bei einer Elektrolyse erkennen.',
          'Ich kann einfache Elektrodenreaktionen bei einer Elektrolyse formulieren.',
          'Ich kann die Elektrolyse mit der galvanischen Zelle vergleichen.',
        ],
      },
    ],
  };

  const easyExercises = [
    exercise('redox-einfach-001', 'einfach', 'gesamtreaktion', 'Gesamtreaktion aufstellen', [['Zn', 'Zn', 'Zn²⁺'], ['Cu', 'Cu', 'Cu²⁺']], 'Stelle die Gesamtreaktion auf.', 'Zn + Cu²⁺ → Zn²⁺ + Cu', ['Zn + Cu2+ -> Zn2+ + Cu'], 'Zink gibt zwei Elektronen ab und wird zu Zn²⁺ oxidiert. Cu²⁺ nimmt zwei Elektronen auf und wird zu Cu reduziert.'),
    exercise('redox-einfach-002', 'einfach', 'gesamtreaktion', 'Gesamtreaktion aufstellen', [['Mg', 'Mg', 'Mg²⁺'], ['Ag', 'Ag', 'Ag⁺']], 'Stelle die Gesamtreaktion auf.', 'Mg + 2 Ag⁺ → Mg²⁺ + 2 Ag', ['Mg + 2 Ag+ -> Mg2+ + 2 Ag'], 'Magnesium gibt zwei Elektronen ab. Zwei Silber-Ionen nehmen zusammen zwei Elektronen auf.'),
    exercise('redox-einfach-003', 'einfach', 'oxidation', 'Oxidation formulieren', [['Al', 'Al', 'Al³⁺'], ['Cu', 'Cu', 'Cu²⁺']], 'Formuliere die Oxidation.', 'Al → Al³⁺ + 3 e⁻', ['Al -> Al3+ + 3 e-'], 'Aluminium gibt drei Elektronen ab. Deshalb steht 3 e⁻ auf der Produktseite.'),
    exercise('redox-einfach-004', 'einfach', 'reduktion', 'Reduktion formulieren', [['Ag', 'Ag', 'Ag⁺'], ['Zn', 'Zn', 'Zn²⁺']], 'Formuliere die Reduktion.', 'Ag⁺ + e⁻ → Ag', ['Ag+ + e- -> Ag'], 'Ein Silber-Ion nimmt ein Elektron auf und wird zu einem Silber-Atom.'),
    { ...exercise('redox-einfach-005', 'einfach', 'elektronenanzahl', 'Elektronenanzahl bestimmen', [['Zn', 'Zn', 'Zn²⁺'], ['Cu', 'Cu', 'Cu²⁺']], 'Wie viele Elektronen werden insgesamt übertragen?', '2', ['zwei'], 'Zn gibt zwei Elektronen ab. Cu²⁺ nimmt zwei Elektronen auf. Insgesamt werden zwei Elektronen übertragen.'), options: ['1', '2', '3', '4'] },
    exercise('redox-einfach-006', 'einfach', 'gesamtreaktion', 'Gesamtreaktion aufstellen', [['Fe', 'Fe', 'Fe²⁺'], ['Cu', 'Cu', 'Cu²⁺']], 'Stelle die Gesamtreaktion auf.', 'Fe + Cu²⁺ → Fe²⁺ + Cu', ['Fe + Cu2+ -> Fe2+ + Cu'], 'Eisen gibt zwei Elektronen ab. Cu²⁺ nimmt zwei Elektronen auf.'),
    exercise('redox-einfach-007', 'einfach', 'gesamtreaktion', 'Gesamtreaktion aufstellen', [['Cu', 'Cu', 'Cu²⁺'], ['Ag', 'Ag', 'Ag⁺']], 'Stelle die Gesamtreaktion auf.', 'Cu + 2 Ag⁺ → Cu²⁺ + 2 Ag', ['Cu + 2 Ag+ -> Cu2+ + 2 Ag'], 'Kupfer gibt zwei Elektronen ab. Darum werden zwei Ag⁺-Ionen reduziert.'),
    exercise('redox-einfach-008', 'einfach', 'gesamtreaktion', 'Gesamtreaktion aufstellen', [['Mg', 'Mg', 'Mg²⁺'], ['Cu', 'Cu', 'Cu²⁺']], 'Stelle die Gesamtreaktion auf.', 'Mg + Cu²⁺ → Mg²⁺ + Cu', ['Mg + Cu2+ -> Mg2+ + Cu'], 'Magnesium gibt zwei Elektronen ab. Cu²⁺ nimmt zwei Elektronen auf.'),
    exercise('redox-einfach-009', 'einfach', 'gesamtreaktion', 'Gesamtreaktion aufstellen', [['Zn', 'Zn', 'Zn²⁺'], ['Ag', 'Ag', 'Ag⁺']], 'Stelle die Gesamtreaktion auf.', 'Zn + 2 Ag⁺ → Zn²⁺ + 2 Ag', ['Zn + 2 Ag+ -> Zn2+ + 2 Ag'], 'Zink gibt zwei Elektronen ab. Zwei Ag⁺-Ionen nehmen je ein Elektron auf.'),
    exercise('redox-einfach-010', 'einfach', 'oxidation', 'Oxidation formulieren', [['Fe', 'Fe', 'Fe³⁺'], ['Ag', 'Ag', 'Ag⁺']], 'Formuliere die Oxidation.', 'Fe → Fe³⁺ + 3 e⁻', ['Fe -> Fe3+ + 3 e-'], 'Eisen gibt drei Elektronen ab und wird zu Fe³⁺ oxidiert.'),
    exercise('redox-einfach-011', 'einfach', 'reduktion', 'Reduktion formulieren', [['Fe', 'Fe', 'Fe³⁺'], ['Mg', 'Mg', 'Mg²⁺']], 'Formuliere die Reduktion.', 'Fe³⁺ + 3 e⁻ → Fe', ['Fe3+ + 3 e- -> Fe'], 'Fe³⁺ nimmt drei Elektronen auf und wird zu Fe reduziert.'),
    { ...exercise('redox-einfach-012', 'einfach', 'teilreaktionen-gesamt', 'Aus Teilreaktionen die Gesamtreaktion bilden', [['Al', 'Al', 'Al³⁺'], ['Ag', 'Ag', 'Ag⁺']], 'Bilde aus den Teilreaktionen die Gesamtreaktion.', 'Al + 3 Ag⁺ → Al³⁺ + 3 Ag', ['Al + 3 Ag+ -> Al3+ + 3 Ag'], 'Die drei Elektronen werden in der Gesamtreaktion gekürzt.'), partialReactions: { oxidation: 'Al → Al³⁺ + 3 e⁻', reduction: '3 Ag⁺ + 3 e⁻ → 3 Ag' } },
    { ...exercise('redox-einfach-013', 'einfach', 'zuordnung', 'Oxidation und Reduktion zuordnen', [['Fe', 'Fe', 'Fe²⁺'], ['Cu', 'Cu', 'Cu²⁺']], 'Ordne jede Teilgleichung zu.', 'Fe → Fe²⁺ + 2 e⁻ ist Oxidation. Cu²⁺ + 2 e⁻ → Cu ist Reduktion.', ['Oxidation, Reduktion'], 'Bei der Oxidation werden Elektronen abgegeben. Bei der Reduktion werden Elektronen aufgenommen.'), pairs: [{ equation: 'Fe → Fe²⁺ + 2 e⁻', correctType: 'Oxidation' }, { equation: 'Cu²⁺ + 2 e⁻ → Cu', correctType: 'Reduktion' }] },
  ];

  const mediumExercises = [
    exercise('redox-mittel-001', 'mittel', 'gesamtreaktion', 'Gesamtreaktion mit Eisen(II) und Chlor', [['Eisen', 'Fe²⁺', 'Fe³⁺'], ['Chlor', 'Cl⁻', 'Cl₂']], 'Stelle die Gesamtreaktion auf.', '2 Fe²⁺ + Cl₂ → 2 Fe³⁺ + 2 Cl⁻', ['2 Fe2+ + Cl2 -> 2 Fe3+ + 2 Cl-', '2Fe2+ + Cl2 -> 2Fe3+ + 2Cl-'], 'Fe²⁺ gibt je ein Elektron ab. Cl₂ nimmt insgesamt zwei Elektronen auf. Deshalb werden zwei Fe²⁺-Ionen oxidiert.'),
    exercise('redox-mittel-002', 'mittel', 'gesamtreaktion', 'Gesamtreaktion mit Iodid und Eisen(III)', [['Iod', 'I⁻', 'I₂'], ['Eisen', 'Fe²⁺', 'Fe³⁺']], 'Stelle die Gesamtreaktion auf.', '2 Fe³⁺ + 2 I⁻ → 2 Fe²⁺ + I₂', ['2 Fe3+ + 2 I- -> 2 Fe2+ + I2', '2Fe3+ + 2I- -> 2Fe2+ + I2'], 'Zwei I⁻-Ionen geben zusammen zwei Elektronen ab. Zwei Fe³⁺-Ionen nehmen diese zwei Elektronen auf.'),
    exercise('redox-mittel-003', 'mittel', 'oxidation', 'Oxidation von Bromid zu Brom', [['Brom', 'Br⁻', 'Br₂']], 'Formuliere die Oxidation.', '2 Br⁻ → Br₂ + 2 e⁻', ['2 Br- -> Br2 + 2 e-', '2Br- -> Br2 + 2e-'], 'Zwei Bromid-Ionen geben zusammen zwei Elektronen ab und bilden Br₂.'),
    exercise('redox-mittel-004', 'mittel', 'reduktion', 'Reduktion von Chlor zu Chlorid', [['Chlor', 'Cl⁻', 'Cl₂']], 'Formuliere die Reduktion.', 'Cl₂ + 2 e⁻ → 2 Cl⁻', ['Cl2 + 2 e- -> 2 Cl-', 'Cl2 + 2e- -> 2Cl-'], 'Ein Chlor-Molekül nimmt zwei Elektronen auf. Daraus entstehen zwei Chlorid-Ionen.'),
    exercise('redox-mittel-005', 'mittel', 'gesamtreaktion', 'Gesamtreaktion Chlor und Bromid', [['Chlor', 'Cl⁻', 'Cl₂'], ['Brom', 'Br⁻', 'Br₂']], 'Stelle die Gesamtreaktion auf.', 'Cl₂ + 2 Br⁻ → 2 Cl⁻ + Br₂', ['Cl2 + 2 Br- -> 2 Cl- + Br2', 'Cl2 + 2Br- -> 2Cl- + Br2'], 'Bromid gibt Elektronen ab und wird zu Br₂. Cl₂ nimmt Elektronen auf und wird zu Cl⁻.'),
    exercise('redox-mittel-006', 'mittel', 'gesamtreaktion', 'Gesamtreaktion Brom und Iodid', [['Brom', 'Br⁻', 'Br₂'], ['Iod', 'I⁻', 'I₂']], 'Stelle die Gesamtreaktion auf.', 'Br₂ + 2 I⁻ → 2 Br⁻ + I₂', ['Br2 + 2 I- -> 2 Br- + I2', 'Br2 + 2I- -> 2Br- + I2'], 'I⁻ gibt Elektronen ab. Br₂ nimmt zwei Elektronen auf. Formal ergibt sich nach dem Elektronenausgleich diese Gesamtreaktion.'),
    { ...exercise('redox-mittel-007', 'mittel', 'elektronenanzahl', 'Elektronenanzahl bestimmen', [['Eisen', 'Fe²⁺', 'Fe³⁺'], ['Chlor', 'Cl⁻', 'Cl₂']], 'Wie viele Elektronen werden in der ausgeglichenen Gesamtreaktion übertragen?', '2', ['zwei'], 'Ein Fe²⁺-Ion gibt ein Elektron ab. Da Cl₂ zwei Elektronen aufnimmt, müssen zwei Fe²⁺-Ionen oxidiert werden.'), options: ['1', '2', '3', '4'] },
    { ...exercise('redox-mittel-008', 'mittel', 'zuordnung', 'Oxidation und Reduktion zuordnen', [['Iod', 'I⁻', 'I₂'], ['Chlor', 'Cl⁻', 'Cl₂']], 'Ordne jede Teilgleichung zu.', '2 I⁻ → I₂ + 2 e⁻ ist Oxidation. Cl₂ + 2 e⁻ → 2 Cl⁻ ist Reduktion.', ['Oxidation, Reduktion'], 'Bei der Oxidation stehen Elektronen auf der Produktseite. Bei der Reduktion stehen Elektronen auf der Eduktseite.'), pairs: [{ equation: '2 I⁻ → I₂ + 2 e⁻', correctType: 'Oxidation' }, { equation: 'Cl₂ + 2 e⁻ → 2 Cl⁻', correctType: 'Reduktion' }] },
    { ...exercise('redox-mittel-009', 'mittel', 'koeffizienten', 'Fehlende Koeffizienten ergänzen', [['Eisen', 'Fe²⁺', 'Fe³⁺'], ['Iod', 'I⁻', 'I₂']], 'Ergänze die Koeffizienten.', '2 Fe³⁺ + 2 I⁻ → 2 Fe²⁺ + I₂', ['2, 2, 2, 1', '2 Fe3+ + 2 I- -> 2 Fe2+ + I2'], 'Zwei Fe³⁺-Ionen nehmen zwei Elektronen auf. Zwei I⁻-Ionen geben zusammen zwei Elektronen ab.'), template: '__ Fe³⁺ + __ I⁻ → __ Fe²⁺ + __ I₂', blanks: ['Fe³⁺', 'I⁻', 'Fe²⁺', 'I₂'], correctBlanks: ['2', '2', '2', '1'] },
    exercise('redox-mittel-010', 'mittel', 'gesamtreaktion', 'Gesamtreaktion mit Wasserstoff und Kupfer(II)', [['Wasserstoff', 'H₂', 'H⁺'], ['Kupfer', 'Cu', 'Cu²⁺']], 'Stelle die Gesamtreaktion auf.', 'H₂ + Cu²⁺ → 2 H⁺ + Cu', ['H2 + Cu2+ -> 2 H+ + Cu', 'H2 + Cu2+ -> 2H+ + Cu'], 'H₂ gibt zwei Elektronen ab und wirkt hier als Reduktionsmittel. Cu²⁺ nimmt zwei Elektronen auf.'),
    exercise('redox-mittel-011', 'mittel', 'oxidation', 'Oxidation von Wasserstoff', [['Wasserstoff', 'H₂', 'H⁺']], 'Formuliere die Oxidation.', 'H₂ → 2 H⁺ + 2 e⁻', ['H2 -> 2 H+ + 2 e-', 'H2 -> 2H+ + 2e-'], 'Wasserstoff gibt zwei Elektronen ab. Deshalb stehen 2 e⁻ auf der Produktseite.'),
    { ...exercise('redox-mittel-012', 'mittel', 'teilreaktionen-gesamt', 'Aus Teilreaktionen die Gesamtreaktion bilden', [['Chlor', 'Cl⁻', 'Cl₂'], ['Brom', 'Br⁻', 'Br₂']], 'Bilde aus den Teilreaktionen die Gesamtreaktion.', '2 Cl⁻ + Br₂ → Cl₂ + 2 Br⁻', ['2 Cl- + Br2 -> Cl2 + 2 Br-', '2Cl- + Br2 -> Cl2 + 2Br-'], 'Formal ergibt sich nach dem Elektronenausgleich diese Gesamtreaktion. Ob die Reaktion freiwillig abläuft, hängt von den Redoxpotenzialen ab.'), partialReactions: { oxidation: '2 Cl⁻ → Cl₂ + 2 e⁻', reduction: 'Br₂ + 2 e⁻ → 2 Br⁻' } },
  ];

  const acid = { medium: 'sauer', helperSpecies: ['H⁺', 'H₂O'], helperHint: 'In saurer Lösung darfst du O-Atome mit H₂O ausgleichen und H-Atome mit H⁺. Anschließend gleichst du die Ladungen mit Elektronen aus.' };

  const hardExercises = [
    { ...exercise('redox-schwer-001', 'schwer', 'gesamtreaktion', 'Permanganat und Eisen(II) in saurer Lösung', [['Mangan', 'Mn²⁺', 'MnO₄⁻'], ['Eisen', 'Fe²⁺', 'Fe³⁺']], 'Stelle die Gesamtreaktion in saurer Lösung auf.', 'MnO₄⁻ + 8 H⁺ + 5 Fe²⁺ → Mn²⁺ + 4 H₂O + 5 Fe³⁺', ['MnO4- + 8 H+ + 5 Fe2+ -> Mn2+ + 4 H2O + 5 Fe3+'], 'Permanganat wird in saurer Lösung zu Mn²⁺ reduziert. Fe²⁺ gibt jeweils ein Elektron ab und wird zu Fe³⁺ oxidiert. Daher müssen fünf Fe²⁺-Ionen reagieren.'), ...acid },
    { ...exercise('redox-schwer-002', 'schwer', 'reduktion', 'Reduktion von Permanganat', [['Mangan', 'Mn²⁺', 'MnO₄⁻']], 'Formuliere die Reduktion von Permanganat zu Mn²⁺ in saurer Lösung.', 'MnO₄⁻ + 8 H⁺ + 5 e⁻ → Mn²⁺ + 4 H₂O', ['MnO4- + 8 H+ + 5 e- -> Mn2+ + 4 H2O'], 'MnO₄⁻ nimmt in saurer Lösung fünf Elektronen auf. H⁺ und H₂O gleichen Wasserstoff und Sauerstoff aus.'), ...acid },
    exercise('redox-schwer-003', 'schwer', 'oxidation', 'Oxidation von Eisen(II)', [['Eisen', 'Fe²⁺', 'Fe³⁺']], 'Formuliere die Oxidation.', 'Fe²⁺ → Fe³⁺ + e⁻', ['Fe2+ -> Fe3+ + e-'], 'Fe²⁺ gibt ein Elektron ab und wird zu Fe³⁺ oxidiert.'),
    { ...exercise('redox-schwer-004', 'schwer', 'gesamtreaktion', 'Dichromat und Eisen(II) in saurer Lösung', [['Chrom', 'Cr³⁺', 'Cr₂O₇²⁻'], ['Eisen', 'Fe²⁺', 'Fe³⁺']], 'Stelle die Gesamtreaktion in saurer Lösung auf.', 'Cr₂O₇²⁻ + 14 H⁺ + 6 Fe²⁺ → 2 Cr³⁺ + 7 H₂O + 6 Fe³⁺', ['Cr2O7 2- + 14 H+ + 6 Fe2+ -> 2 Cr3+ + 7 H2O + 6 Fe3+'], 'Dichromat nimmt in saurer Lösung sechs Elektronen auf. Sechs Fe²⁺-Ionen liefern diese Elektronen.'), ...acid },
    { ...exercise('redox-schwer-005', 'schwer', 'reduktion', 'Reduktion von Dichromat', [['Chrom', 'Cr³⁺', 'Cr₂O₇²⁻']], 'Formuliere die Reduktion von Dichromat zu Cr³⁺ in saurer Lösung.', 'Cr₂O₇²⁻ + 14 H⁺ + 6 e⁻ → 2 Cr³⁺ + 7 H₂O', ['Cr2O7 2- + 14 H+ + 6 e- -> 2 Cr3+ + 7 H2O'], 'Cr₂O₇²⁻ wird in saurer Lösung zu Cr³⁺ reduziert. Dazu werden sechs Elektronen aufgenommen.'), ...acid },
    { ...exercise('redox-schwer-006', 'schwer', 'gesamtreaktion', 'Oxalat und Permanganat in saurer Lösung', [['Kohlenstoff/Oxalat', 'C₂O₄²⁻', 'CO₂'], ['Mangan', 'Mn²⁺', 'MnO₄⁻']], 'Stelle die Gesamtreaktion in saurer Lösung auf.', '2 MnO₄⁻ + 16 H⁺ + 5 C₂O₄²⁻ → 2 Mn²⁺ + 8 H₂O + 10 CO₂', ['2 MnO4- + 16 H+ + 5 C2O4 2- -> 2 Mn2+ + 8 H2O + 10 CO2'], 'Oxalat gibt pro Ion zwei Elektronen ab. Permanganat nimmt fünf Elektronen auf. Das kleinste gemeinsame Vielfache ist 10.'), ...acid },
    exercise('redox-schwer-007', 'schwer', 'oxidation', 'Oxidation von Oxalat', [['Kohlenstoff/Oxalat', 'C₂O₄²⁻', 'CO₂']], 'Formuliere die Oxidation von Oxalat zu Kohlenstoffdioxid.', 'C₂O₄²⁻ → 2 CO₂ + 2 e⁻', ['C2O4 2- -> 2 CO2 + 2 e-'], 'C₂O₄²⁻ gibt zwei Elektronen ab und wird zu zwei CO₂-Molekülen oxidiert.'),
    { ...exercise('redox-schwer-008', 'schwer', 'gesamtreaktion', 'Sulfit und Permanganat in saurer Lösung', [['Schwefel', 'SO₃²⁻', 'SO₄²⁻'], ['Mangan', 'Mn²⁺', 'MnO₄⁻']], 'Stelle die Gesamtreaktion in saurer Lösung auf.', '2 MnO₄⁻ + 6 H⁺ + 5 SO₃²⁻ → 2 Mn²⁺ + 3 H₂O + 5 SO₄²⁻', ['2 MnO4- + 6 H+ + 5 SO3 2- -> 2 Mn2+ + 3 H2O + 5 SO4 2-'], 'Sulfit gibt Elektronen ab und wird zu Sulfat. Nach dem Elektronenausgleich werden H⁺ und H₂O gekürzt.'), ...acid },
    { ...exercise('redox-schwer-009', 'schwer', 'oxidation', 'Oxidation von Sulfit', [['Schwefel', 'SO₃²⁻', 'SO₄²⁻']], 'Formuliere die Oxidation von Sulfit zu Sulfat in saurer Lösung.', 'SO₃²⁻ + H₂O → SO₄²⁻ + 2 H⁺ + 2 e⁻', ['SO3 2- + H2O -> SO4 2- + 2 H+ + 2 e-'], 'Ein O-Atom wird mit H₂O ergänzt. Danach werden H-Atome mit H⁺ und die Ladung mit Elektronen ausgeglichen.'), ...acid },
    { ...exercise('redox-schwer-010', 'schwer', 'gesamtreaktion', 'Iodid und Permanganat in saurer Lösung', [['Iod', 'I⁻', 'I₂'], ['Mangan', 'Mn²⁺', 'MnO₄⁻']], 'Stelle die Gesamtreaktion in saurer Lösung auf.', '2 MnO₄⁻ + 16 H⁺ + 10 I⁻ → 2 Mn²⁺ + 8 H₂O + 5 I₂', ['2 MnO4- + 16 H+ + 10 I- -> 2 Mn2+ + 8 H2O + 5 I2'], 'Formal ergibt sich nach dem Elektronenausgleich diese Gesamtreaktion. Ob die Reaktion freiwillig abläuft, hängt von den Redoxpotenzialen ab.'), ...acid },
    { ...exercise('redox-schwer-011', 'schwer', 'gesamtreaktion', 'Wasserstoffperoxid als Reduktionsmittel', [['Sauerstoff/Wasserstoffperoxid', 'H₂O₂', 'O₂'], ['Mangan', 'Mn²⁺', 'MnO₄⁻']], 'Stelle die Gesamtreaktion in saurer Lösung auf.', '2 MnO₄⁻ + 6 H⁺ + 5 H₂O₂ → 2 Mn²⁺ + 8 H₂O + 5 O₂', ['2 MnO4- + 6 H+ + 5 H2O2 -> 2 Mn2+ + 8 H2O + 5 O2'], 'H₂O₂ gibt Elektronen ab und wird zu O₂ oxidiert. Permanganat nimmt Elektronen auf und wird zu Mn²⁺ reduziert.'), ...acid },
    { ...exercise('redox-schwer-012', 'schwer', 'gesamtreaktion', 'Wasserstoffperoxid als Oxidationsmittel', [['Iod', 'I⁻', 'I₂'], ['Sauerstoff/Wasserstoffperoxid', 'H₂O', 'H₂O₂']], 'Stelle die Gesamtreaktion in saurer Lösung auf.', 'H₂O₂ + 2 H⁺ + 2 I⁻ → I₂ + 2 H₂O', ['H2O2 + 2 H+ + 2 I- -> I2 + 2 H2O'], 'Iodid wird oxidiert. H₂O₂ nimmt Elektronen auf und wird in saurer Lösung zu H₂O reduziert.'), ...acid },
    { ...exercise('redox-schwer-013', 'schwer', 'koeffizienten', 'Koeffizienten bei Permanganat und Eisen(II)', [['Mangan', 'Mn²⁺', 'MnO₄⁻'], ['Eisen', 'Fe²⁺', 'Fe³⁺']], 'Ergänze die Koeffizienten.', 'MnO₄⁻ + 8 H⁺ + 5 Fe²⁺ → Mn²⁺ + 4 H₂O + 5 Fe³⁺', ['MnO4- + 8 H+ + 5 Fe2+ -> Mn2+ + 4 H2O + 5 Fe3+'], 'Die Koeffizienten sind 1, 8, 5, 1, 4, 5. Leere Koeffizienten werden wie 1 behandelt.'), ...acid, template: '__ MnO₄⁻ + __ H⁺ + __ Fe²⁺ → __ Mn²⁺ + __ H₂O + __ Fe³⁺' },
    { ...exercise('redox-schwer-014', 'schwer', 'teilreaktionen-gesamt', 'Aus Teilreaktionen die Gesamtreaktion bilden', [['Kohlenstoff/Oxalat', 'C₂O₄²⁻', 'CO₂'], ['Mangan', 'Mn²⁺', 'MnO₄⁻']], 'Bilde aus den Teilreaktionen die Gesamtreaktion.', '2 MnO₄⁻ + 16 H⁺ + 5 C₂O₄²⁻ → 2 Mn²⁺ + 8 H₂O + 10 CO₂', ['2 MnO4- + 16 H+ + 5 C2O4 2- -> 2 Mn2+ + 8 H2O + 10 CO2'], 'Das kleinste gemeinsame Vielfache von 2 und 5 ist 10. Die Oxidation wird mit 5 und die Reduktion mit 2 multipliziert.'), ...acid, partialReactions: { oxidation: 'C₂O₄²⁻ → 2 CO₂ + 2 e⁻', reduction: 'MnO₄⁻ + 8 H⁺ + 5 e⁻ → Mn²⁺ + 4 H₂O' } },
    { ...exercise('redox-schwer-015', 'schwer', 'koeffizienten', 'Koeffizienten bei Dichromat und Eisen(II)', [['Chrom', 'Cr³⁺', 'Cr₂O₇²⁻'], ['Eisen', 'Fe²⁺', 'Fe³⁺']], 'Ergänze die Koeffizienten.', 'Cr₂O₇²⁻ + 14 H⁺ + 6 Fe²⁺ → 2 Cr³⁺ + 7 H₂O + 6 Fe³⁺', ['Cr2O7 2- + 14 H+ + 6 Fe2+ -> 2 Cr3+ + 7 H2O + 6 Fe3+'], 'Die Koeffizienten sind 1, 14, 6, 2, 7, 6. Leere Koeffizienten werden wie 1 behandelt.'), ...acid, template: '__ Cr₂O₇²⁻ + __ H⁺ + __ Fe²⁺ → __ Cr³⁺ + __ H₂O + __ Fe³⁺' },
    { ...exercise('redox-schwer-016', 'schwer', 'teilreaktionen-gesamt', 'Gesamtreaktion aus Teilreaktionen mit Iodid', [['Iod', 'I⁻', 'I₂'], ['Sauerstoff/Wasserstoffperoxid', 'H₂O', 'H₂O₂']], 'Bilde aus den Teilreaktionen die Gesamtreaktion.', 'H₂O₂ + 2 H⁺ + 2 I⁻ → I₂ + 2 H₂O', ['H2O2 + 2 H+ + 2 I- -> I2 + 2 H2O'], 'Beide Teilreaktionen enthalten bereits zwei Elektronen. Die Elektronen werden gekürzt.'), ...acid, partialReactions: { oxidation: '2 I⁻ → I₂ + 2 e⁻', reduction: 'H₂O₂ + 2 H⁺ + 2 e⁻ → 2 H₂O' } },
  ];

  const state = {
    view: 'home',
    notice: '',
    selectedKlausurTaskId: '',
    explanationStep: 0,
    selfCheck: loadSelfCheck(),
    practices: {
      einfach: emptyPracticeState(),
      mittel: emptyPracticeState(),
      schwer: emptyPracticeState(),
    },
  };

  const explanationSteps = [
    ['Schritt 1: Gegebene Formen betrachten', 'Schau dir zuerst die Formen an. Zn ist die reduzierte Form und Zn²⁺ die oxidierte Form. Cu ist die reduzierte Form und Cu²⁺ die oxidierte Form.'],
    ['Schritt 2: Oxidation erkennen', 'Bei der Oxidation werden Elektronen abgegeben. Zink wird von Zn zu Zn²⁺.', 'Zn → Zn²⁺ + 2 e⁻'],
    ['Schritt 3: Reduktion erkennen', 'Bei der Reduktion werden Elektronen aufgenommen. Kupfer-Ionen werden von Cu²⁺ zu Cu.', 'Cu²⁺ + 2 e⁻ → Cu'],
    ['Schritt 4: Elektronenanzahl prüfen', 'Oxidation und Reduktion müssen gleich viele Elektronen enthalten. Hier werden 2 Elektronen abgegeben und 2 Elektronen aufgenommen.'],
    ['Schritt 5: Gesamtreaktion bilden', 'Die Elektronen werden gekürzt. In der Gesamtreaktion tauchen sie nicht mehr auf.', 'Zn + Cu²⁺ → Zn²⁺ + Cu'],
    ['Schritt 6: Fachliche Deutung', 'Zink ist Elektronendonator und Reduktionsmittel. Cu²⁺ ist Elektronenakzeptor und Oxidationsmittel.'],
  ];

  function emptyPracticeState() {
    return {
      index: 0,
      answer: '',
      blankAnswers: [],
      pairAnswers: {},
      structuredAnswers: {},
      feedback: null,
      showSolution: false,
      correctIds: [],
      finished: false,
    };
  }

  function exercise(id, level, type, title, forms, prompt, answer, acceptedAnswers, explanation) {
    return {
      id,
      level,
      type,
      title,
      givenForms: forms.map(([element, reducedForm, oxidizedForm]) => ({ element, reducedForm, oxidizedForm })),
      prompt,
      answer,
      acceptedAnswers: [answer, ...acceptedAnswers],
      explanation,
    };
  }

  function normalize(value) {
    const superMap = { '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9', '⁺': '+', '⁻': '-' };
    const subMap = { '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4', '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9' };
    return String(value || '')
      .trim()
      .replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻]/g, (char) => superMap[char] || char)
      .replace(/[₀₁₂₃₄₅₆₇₈₉]/g, (char) => subMap[char] || char)
      .replace(/\^/g, '')
      .replace(/e\s*-/gi, 'electron')
      .replace(/=>|->|→/g, '>')
      .replace(/\s+/g, '')
      .replace(/([A-Za-z][A-Za-z0-9]*)([+-])([23])(?=$|[+>])/g, '$1$3$2')
      .replace(/([A-Za-z][A-Za-z0-9]*)1([+-])(?=$|[+>])/g, '$1$2')
      .toLowerCase();
  }

  function check(exerciseItem, practice) {
    if (exerciseItem.type === 'zuordnung') {
      const correct = exerciseItem.pairs.filter((pair) => practice.pairAnswers[pair.equation] === pair.correctType).length;
      if (correct === exerciseItem.pairs.length) return { status: 'correct', message: 'Richtig! Du hast Elektronenabgabe und Elektronenaufnahme richtig zugeordnet.' };
      if (correct > 0) return { status: 'partial', message: 'Teilweise richtig. Elektronen rechts bedeutet Oxidation, Elektronen links bedeutet Reduktion.' };
      return { status: 'wrong', message: 'Noch nicht richtig. Prüfe, wo die Elektronen stehen.' };
    }

    const normalizedUser = normalize(getPracticeAnswer(exerciseItem, practice));
    if (exerciseItem.acceptedAnswers.some((answer) => normalize(answer) === normalizedUser)) {
      return { status: 'correct', message: 'Richtig! Die Elektronen sind vollständig ausgeglichen.' };
    }

    const importantParts = normalize(exerciseItem.answer).split(/[>+]/).filter((part) => part && part !== 'electron');
    const matches = importantParts.filter((part) => normalizedUser.includes(part)).length;
    if (matches >= Math.ceil(importantParts.length / 2)) {
      return { status: 'partial', message: 'Fast richtig. Prüfe noch einmal die Anzahl der Elektronen, Koeffizienten oder den Pfeil.' };
    }

    if (exerciseItem.type === 'reduktion') return { status: 'wrong', message: 'Noch nicht richtig. Achte darauf, dass bei der Reduktion Elektronen aufgenommen werden.' };
    if (exerciseItem.type === 'oxidation') return { status: 'wrong', message: 'Noch nicht richtig. Achte darauf, dass bei der Oxidation Elektronen abgegeben werden.' };
    return { status: 'wrong', message: 'Noch nicht richtig. Prüfe die Teilchen auf beiden Seiten und achte auf die Elektronenbilanz.' };
  }

  function navigate(view) {
    state.view = view;
    state.notice = '';
    render();
  }

  function practiceKey(level) {
    if (level === 'schwer') return 'redox-hard-practice-progress';
    return level === 'mittel' ? 'redox-medium-practice-progress' : 'redox-easy-practice-progress';
  }

  function getExercises(level) {
    if (level === 'schwer') return hardExercises;
    return level === 'mittel' ? mediumExercises : easyExercises;
  }

  function savePractice(level) {
    const practice = state.practices[level];
    localStorage.setItem(practiceKey(level), JSON.stringify({
      index: practice.index,
      correctIds: practice.correctIds,
      finished: practice.finished,
    }));
  }

  function loadPractice(level) {
    const exercises = getExercises(level);
    try {
      const saved = JSON.parse(localStorage.getItem(practiceKey(level)) || '{}');
      state.practices[level].index = Math.min(saved.index || saved.practiceIndex || 0, exercises.length - 1);
      state.practices[level].correctIds = saved.correctIds || [];
      state.practices[level].finished = saved.finished || saved.isFinished || false;
    } catch {
      localStorage.removeItem(practiceKey(level));
    }
  }

  function pageHeader(title, subtitle) {
    return `<header class="page-header"><p class="eyebrow">Elektrochemie</p><h1>${title}</h1>${subtitle ? `<p class="lead">${subtitle}</p>` : ''}</header>`;
  }

  function backButton(label, view) {
    return `<button type="button" class="back-button" data-nav="${view}">← ${label}</button>`;
  }

  function formula(value, block = false) {
    return `<${block ? 'div' : 'span'} class="formula${block ? ' formula--block' : ''}">${value}</${block ? 'div' : 'span'}>`;
  }

  function givenForms(forms) {
    return `<section class="given-card"><h2>Gegebene Formen</h2><div class="forms-grid">${forms.map((form) => `
      <article class="form-row">
        <h3>${form.element}</h3>
        <p>reduzierte Form: ${formula(form.reducedForm)}</p>
        <p>oxidierte Form: ${formula(form.oxidizedForm)}</p>
      </article>`).join('')}</div></section>`;
  }

  function renderHome() {
    return `${pageHeader('Elektrochemie Lernprogramm', 'Interaktive Übungen und Erklärungen zur Elektrochemie')}
      ${state.notice ? `<div class="notice" role="status">${state.notice}</div>` : ''}
      <div class="tile-grid">
        <button type="button" class="tile-card tile-card--featured" data-nav="selfCheck">
          <span class="tile-card__title">Selbstcheck</span>
          <span class="tile-card__description">Hake ab, welche Kompetenzen du schon sicher beherrschst, und drucke deinen Stand als PDF.</span>
        </button>
        <button type="button" class="tile-card" data-nav="klausurOverview">
          <span class="tile-card__title">Klausurähnliche Aufgaben</span>
          <span class="tile-card__description">Übe materialgestützte Aufgaben mit Alltagsbezug im Stil einer Klausur.</span>
        </button>
        ${modules.map((module) => `
        <button type="button" class="tile-card ${module.status !== 'active' ? 'is-disabled' : ''}" data-module="${module.id}">
          <span class="tile-card__title">${module.title}</span>
          <span class="tile-card__description">${module.description}</span>
          ${module.status !== 'active' ? '<span class="tile-card__badge">Kommt später</span>' : ''}
        </button>`).join('')}</div>`;
  }

  function loadSelfCheck() {
    try {
      return JSON.parse(localStorage.getItem('elektrochemie-self-check') || '{}');
    } catch {
      localStorage.removeItem('elektrochemie-self-check');
      return {};
    }
  }

  function saveSelfCheck() {
    localStorage.setItem('elektrochemie-self-check', JSON.stringify(state.selfCheck));
  }

  function renderSelfCheck() {
    return `<div class="print-hidden">${backButton('Zurück zur Startseite', 'home')}</div>
      ${pageHeader(selfCheckData.title, selfCheckData.subtitle)}
      <div class="button-row print-hidden">
        <button type="button" class="primary-button" data-print-self-check="true">Selbstcheck drucken / als PDF speichern</button>
        <button type="button" class="secondary-button" data-nav="home">Zurück zur Startseite</button>
      </div>
      <div class="self-check-list">${selfCheckData.sections.map((section) => `
        <section class="self-check-section">
          <h2>${section.title}</h2>
          <div class="self-check-items">${section.items.map((item, index) => {
            const itemId = `${section.id}-${index}`;
            return `<label class="self-check-item">
              <input type="checkbox" data-self-check-id="${itemId}" ${state.selfCheck[itemId] ? 'checked' : ''} />
              <span>${item}</span>
            </label>`;
          }).join('')}</div>
        </section>`).join('')}</div>`;
  }

  function esc(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function klausurAnswerKey(taskId, subtaskId) {
    return `klausurTaskAnswer:v2:${taskId}:${subtaskId}`;
  }

  function readKlausurAnswer(taskId, subtask, fallback) {
    try {
      const saved = localStorage.getItem(klausurAnswerKey(taskId, subtask.id));
      return saved ? JSON.parse(saved) : fallback;
    } catch {
      return fallback;
    }
  }

  function writeKlausurAnswer(taskId, subtaskId, value) {
    localStorage.setItem(klausurAnswerKey(taskId, subtaskId), JSON.stringify(value));
  }

  function normalizeCriteriaText(value) {
    const superMap = { '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9', '⁺': '+', '⁻': '-' };
    const subMap = { '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4', '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9' };
    return String(value || '')
      .toLowerCase()
      .replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻]/g, (char) => superMap[char] || char)
      .replace(/[₀₁₂₃₄₅₆₇₈₉]/g, (char) => subMap[char] || char)
      .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
      .replace(/[−–—]/g, '-')
      .replace(/=>|->|→|⇒/g, ' ')
      .replace(/\b(kupfer|eisen|zink|silber|lithium)\s*-\s*ionen?\b/g, '$1ionen')
      .replace(/\b(kupfer|eisen|zink|silber|lithium)\s+ionen?\b/g, '$1ionen')
      .replace(/\b([a-z]{1,3})\((\d)([+-])\)/g, '$1$2$3')
      .replace(/[^a-z0-9+\-/ ]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function criterionIsMet(normalizedAnswer, criterion) {
    function keywordMatches(keyword) {
      const normalizedKeyword = normalizeCriteriaText(keyword);
      if (normalizedAnswer.includes(normalizedKeyword)) return true;
      const parts = normalizedKeyword.split(' ').filter((part) => part.length > 2);
      return parts.length > 1 && parts.every((part) => normalizedAnswer.includes(part));
    }
    if (criterion.matchMode === 'allGroups') {
      return (criterion.keywordGroups || []).every((group) => group.some((keyword) => keywordMatches(keyword)));
    }
    if (criterion.matchMode === 'atLeastGroups') {
      const hits = (criterion.keywordGroups || []).filter((group) => group.some((keyword) => keywordMatches(keyword))).length;
      return hits >= (criterion.requiredGroups || 1);
    }
    const matches = (criterion.keywords || []).map((keyword) => keywordMatches(keyword));
    return criterion.matchMode === 'all' ? matches.every(Boolean) : matches.some(Boolean);
  }

  function criteriaHtml(subtask, answerText) {
    if (!subtask.criteria || !subtask.criteria.length) return '';
    const normalizedAnswer = normalizeCriteriaText(answerText);
    return `<section class="criteria-card" aria-label="Kriteriencheck">
      <h4>Deine Antwort enthält:</h4>
      <div class="criteria-list">${subtask.criteria.map((criterion) => {
        const checked = criterionIsMet(normalizedAnswer, criterion);
        return `<label class="criteria-item"><input type="checkbox" ${checked ? 'checked' : ''} readonly /><span>${esc(criterion.label)}</span></label>`;
      }).join('')}</div>
      <p class="criteria-note">${esc(klausurTaskMeta.note)}</p>
    </section>`;
  }

  function imageHtml(image) {
    return image ? `<img src="${esc(assetSrc(image))}" alt="" onerror="this.hidden=true" />` : '';
  }

  function assetSrc(src) {
    if (!src || src.startsWith('public/') || src.startsWith('./public/') || /^(https?:|data:)/.test(src)) return src;
    if (src.startsWith('assets/')) return `public/${src}`;
    return src;
  }

  function renderKlausurOverview() {
    return `${backButton('Zur Startseite', 'home')}
      ${pageHeader(klausurTaskMeta.title, klausurTaskMeta.subtitle)}
      <div class="klausur-grid">${klausurTasks.map((task) => `
        <article class="klausur-card">
          ${task.image ? `<img class="klausur-card__image" src="${esc(assetSrc(task.image))}" alt="" onerror="this.hidden=true" />` : ''}
          <div class="klausur-card__body">
            <h2>${esc(task.shortTitle || task.title)}</h2>
            <p>${esc(task.description)}</p>
            <button type="button" class="primary-button" data-klausur-task="${esc(task.id)}">Aufgabe öffnen</button>
          </div>
        </article>`).join('')}</div>`;
  }

  function renderMaterial(material) {
    const contentItems = Array.isArray(material.content) ? material.content : (material.content ? [material.content] : []);
    if (material.type === 'table') {
      return `<section class="material-block"><h2>${esc(material.title)}</h2><div class="table-scroll"><table class="material-table">
        <thead><tr>${material.columns.map((column) => `<th>${esc(column)}</th>`).join('')}</tr></thead>
        <tbody>${material.rows.map((row) => `<tr>${row.map((cell) => `<td>${esc(cell)}</td>`).join('')}</tr>`).join('')}</tbody>
      </table></div></section>`;
    }
    if (material.type === 'text-list') {
      return `<section class="material-block"><h2>${esc(material.title)}</h2><ul class="material-list">${contentItems.map((item) => `<li>${esc(item)}</li>`).join('')}</ul></section>`;
    }
    if (material.type === 'sequence') {
      return `<section class="material-block"><h2>${esc(material.title)}</h2>${formula(esc(material.content), true)}</section>`;
    }
    if (material.type === 'quote') {
      return `<section class="material-block"><h2>${esc(material.title)}</h2><blockquote class="material-quote">${esc(material.content)}</blockquote></section>`;
    }
    if (material.type === 'text') {
      return `<section class="material-block"><h2>${esc(material.title)}</h2><p>${esc(material.content)}</p></section>`;
    }
    if (material.type === 'image') {
      return `<section class="material-block"><h2>${esc(material.title)}</h2>${material.image ? `<figure class="material-image-only"><img src="${esc(assetSrc(material.image))}" alt="${esc(material.alt || material.title)}" /></figure>` : ''}</section>`;
    }
    if (material.type === 'image-and-text') {
      return `<section class="material-block"><h2>${esc(material.title)}</h2><div class="material-image-text">${material.image ? imageHtml(material.image) : ''}<div class="material-list">${contentItems.map((item) => `<p>${esc(item)}</p>`).join('')}</div></div></section>`;
    }
    return `<section class="material-block"><h2>${esc(material.title)}</h2><div class="material-list">${contentItems.map((item) => `<p>${esc(item)}</p>`).join('')}</div></section>`;
  }

  function answerText(answer) {
    if (typeof answer === 'string') return answer;
    if (Array.isArray(answer)) return answer.join(' ');
    return Object.entries(answer || {}).map(([key, value]) => `${key} ${value}`).join(' ');
  }

  function getTextAnswer(value) {
    if (typeof value === 'string') return value;
    if (value && typeof value.text === 'string') return value.text;
    return '';
  }

  function numberValue(value) {
    return Number(String(value || '').replace(',', '.').replace(/[^\d.+-]/g, ''));
  }

  function normalizeDirect(value) {
    return normalizeCriteriaText(value).replace(/\s+/g, '');
  }

  function normalizeOxNumber(value) {
    return normalizeDirect(value)
      .replace(/-iii/g, '-3')
      .replace(/-ii/g, '-2')
      .replace(/-i/g, '-1')
      .replace(/\+?iii/g, '+3')
      .replace(/\+?ii/g, '+2')
      .replace(/\+?i/g, '+1');
  }

  function directValueMatches(value, accepted) {
    const normalized = normalizeDirect(value);
    const chemical = normalize(value);
    return (accepted || []).some((candidate) =>
      normalized === normalizeDirect(candidate) ||
      normalizeOxNumber(value) === normalizeOxNumber(candidate) ||
      chemical === normalize(candidate)
    );
  }

  function directState(value, accepted) {
    if (String(value || '').trim() === '') return 'empty';
    return directValueMatches(value, accepted) ? 'correct' : 'wrong';
  }

  function stateClass(show, state) {
    if (!show || state === 'empty') return '';
    return state === 'correct' ? 'is-correct' : 'is-wrong';
  }

  function directTaskCorrect(subtask, answer) {
    if (subtask.type === 'choiceGroup') {
      return Object.entries(subtask.correctValues || {}).every(([key, value]) => answer && answer[key] === value);
    }
    if (subtask.type === 'multiSelect') {
      return [...(answer || [])].sort().join('|') === [...(subtask.correctAnswers || [])].sort().join('|');
    }
    if (subtask.type === 'calculation') {
      return (subtask.fields || []).every((field) => Math.abs(numberValue(answer && answer[field.id]) - field.correctValue) <= (subtask.tolerance ?? 0.01));
    }
    if (subtask.type === 'structuredFields' || subtask.type === 'structuredElectrodeAssignment') {
      return (subtask.fields || []).every((field) => directValueMatches(answer && answer[field.id], field.correctValues || []));
    }
    if (subtask.type === 'oxidationNumberTable' || subtask.type === 'oxidationNumberEquation') {
      return (subtask.inputConfig?.rows || []).every((row, rowIndex) =>
        Object.entries(row.accepted || {}).every(([element, accepted]) => directValueMatches(answer && answer[`${rowIndex}:${element}`], accepted))
      );
    }
    if (subtask.type === 'structuredEquation') {
      return (subtask.scaffold?.equations || []).every((equation, index) =>
        directValueMatches(answer && answer[index], [equation.expected, ...(equation.accepted || [])])
      );
    }
    return false;
  }

  function directResult(subtask, answer) {
    if (subtask.checking?.type !== 'direct') return '';
    return directTaskCorrect(subtask, answer) ? 'Richtig.' : 'Noch nicht ganz richtig. Prüfe die rot markierten Felder.';
  }

  function oldDirectResult(subtask, answer) {
    if (subtask.type === 'choiceGroup') {
      const pairs = Object.entries(subtask.correctValues || {});
      if (!pairs.length) return '';
      return pairs.every(([key, value]) => answer && answer[key] === value) ? 'Richtig.' : 'Prüfe deine Auswahl noch einmal.';
    }
    if (subtask.type === 'multiSelect') {
      const selected = [...(answer || [])].sort().join('|');
      const correct = [...(subtask.correctAnswers || [])].sort().join('|');
      return selected === correct ? 'Richtig.' : 'Prüfe deine Auswahl noch einmal.';
    }
    if (subtask.type === 'ordering') {
      return (answer || []).join('|') === (subtask.correctOrder || []).join('|') ? 'Richtig.' : 'Prüfe die Reihenfolge noch einmal.';
    }
    if (subtask.type === 'calculation') {
      const ok = (subtask.fields || []).every((field) => Math.abs(numberValue(answer && answer[field.id]) - field.correctValue) <= (subtask.tolerance ?? 0.01));
      return ok ? 'Richtig.' : 'Prüfe deine Rechnung noch einmal.';
    }
    return '';
  }

  function directCheckedKey(taskId, subtaskId) {
    return `klausurDirectChecked:v2:${taskId}:${subtaskId}`;
  }

  function oxidationParticle(task, subtask, answer, showDirect, rowIndex, formulaLabel, elements) {
    const row = (subtask.inputConfig?.rows || [])[rowIndex] || {};
    return `<span class="oxidation-particle ${elements.length > 1 ? 'oxidation-particle--compound' : ''}">
      ${elements.map((element) => {
        const key = `${rowIndex}:${element}`;
        const state = directState(answer[key] || '', row.accepted?.[element] || []);
        return `<span class="oxidation-slot">
          <input class="oxidation-number-input ${stateClass(showDirect, state)}" data-klausur-object-input data-task-id="${task.id}" data-subtask-id="${subtask.id}" data-field-key="${esc(key)}" value="${esc(answer[key] || '')}" aria-label="${esc(formulaLabel)} ${esc(element)}" />
          <span class="oxidation-formula-part">${esc(oxidationFormulaPart(formulaLabel, element))}</span>
        </span>`;
      }).join('')}
    </span>`;
  }

  function oxidationFormulaPart(formulaLabel, element) {
    if (formulaLabel === 'O₂') return 'O₂';
    if (formulaLabel === 'Cu₂O' && element === 'Cu') return 'Cu₂';
    if (formulaLabel === 'Cu₂O' && element === 'O') return 'O';
    if (formulaLabel === 'CuO' && element === 'Cu') return 'Cu';
    if (formulaLabel === 'CuO' && element === 'O') return 'O';
    return formulaLabel;
  }

  function structuredBucketKey(equationIndex) {
    return `__structured:${equationIndex}`;
  }

  function initialParticlesFromTemplate(template) {
    const particles = {};
    template.forEach((token, index) => {
      if (token.type === 'particle') particles[index] = initialStructuredParticle(token);
    });
    return particles;
  }

  function klausurStructuredParticles(answer, equationIndex, equation) {
    const template = structuredTemplate(equation.expected, 'gesamtreaktion');
    const particles = answer[structuredBucketKey(equationIndex)] || initialParticlesFromTemplate(template);
    return { template, particles };
  }

  function klausurBuildStructuredAnswer(template, particles) {
    const pieces = template.map((token, index) => {
      if (token.type === 'operator') return '+';
      if (token.type === 'arrow') return '->';
      return particleToAnswer(particles[index] || {});
    });
    const hasParticle = pieces.some((piece) => piece && piece !== '+' && piece !== '->');
    return hasParticle ? pieces.filter(Boolean).join(' ') : '';
  }

  function klausurStructuredEquationControl(task, subtask, equation, equationIndex, answer) {
    const { template, particles } = klausurStructuredParticles(answer, equationIndex, equation);
    const currentAnswer = answer[equationIndex] || klausurBuildStructuredAnswer(template, particles);
    return `<section class="structured-equation" aria-label="Strukturierte chemische Eingabe">
      <p class="structured-equation__hint">Trage die Gleichung in die Felder ein. Pluszeichen und Pfeil sind vorgegeben.</p>
      <div class="structured-equation__row">${template.map((token, tokenIndex) => {
        if (token.type === 'operator' || token.type === 'arrow') return `<span class="equation-fixed">${token.value}</span>`;
        const particle = particles[tokenIndex] || initialStructuredParticle(token);
        return `<span class="particle-input">
          ${klausurParticleField(token, particle, task.id, subtask.id, equationIndex, tokenIndex, 'coefficient', 'Koeffizient', 'particle-field--coefficient', 'numeric', '1')}
          ${klausurParticleField(token, particle, task.id, subtask.id, equationIndex, tokenIndex, 'formula', 'Formel oder Symbol', 'particle-field--formula')}
          ${klausurParticleField(token, particle, task.id, subtask.id, equationIndex, tokenIndex, 'index', 'Index', 'particle-field--index', 'numeric', 'Index')}
          ${klausurParticleField(token, particle, task.id, subtask.id, equationIndex, tokenIndex, 'charge', 'Ladung', 'particle-field--charge', '', 'Ladung')}
        </span>`;
      }).join('')}</div>
      <div class="chemical-preview" aria-live="polite">Vorschau: <strong data-klausur-structured-preview="${task.id}:${subtask.id}:${equationIndex}">${displayEquation(currentAnswer) || '—'}</strong></div>
    </section>`;
  }

  function klausurParticleField(token, particle, taskId, subtaskId, equationIndex, tokenIndex, field, label, className, inputMode = '', placeholder = '') {
    if (token.lockedFields && token.lockedFields.includes(field)) {
      return `<span class="particle-fixed-field ${className}" aria-label="${label}">${formatFieldValue(field, particle[field]) || ' '}</span>`;
    }

    return `<label class="particle-field ${className}"><span class="sr-only">${label}</span><input ${inputMode ? `inputmode="${inputMode}"` : ''} ${placeholder ? `placeholder="${placeholder}"` : ''} value="${esc(particle[field] || '')}" data-klausur-structured data-task-id="${taskId}" data-subtask-id="${subtaskId}" data-equation-index="${equationIndex}" data-token-index="${tokenIndex}" data-structured-field="${field}" /></label>`;
  }

  function renderSubtask(task, subtask) {
    const fallback = subtask.type === 'freeText' ? '' : subtask.type === 'multiSelect' ? [] : {};
    const answer = readKlausurAnswer(task.id, subtask, fallback);
    const text = subtask.type === 'freeText' ? getTextAnswer(answer) : answerText(answer);
    const isDirect = subtask.checking?.type === 'direct';
    const showDirect = localStorage.getItem(directCheckedKey(task.id, subtask.id)) === 'true';
    const result = showDirect ? directResult(subtask, answer) : '';
    let control = '';

    if (subtask.type === 'freeText') {
      control = `<textarea class="klausur-textarea" data-klausur-input data-task-id="${task.id}" data-subtask-id="${subtask.id}" aria-label="${esc(subtask.label)} Antwort">${esc(getTextAnswer(answer))}</textarea>`;
    } else if (subtask.type === 'oxidationNumberTable' || subtask.type === 'oxidationNumberEquation') {
      control = `<div class="oxidation-number-equations">${subtask.inputConfig?.instruction ? `<p class="klausur-instruction">${esc(subtask.inputConfig.instruction)}</p>` : ''}
        <div class="oxidation-reaction-row" aria-label="Reaktion 1">
          <span class="reaction-coefficient">4</span>
          ${oxidationParticle(task, subtask, answer, showDirect, 0, 'Cu', ['Cu'])}
          <span class="reaction-symbol">+</span>
          ${oxidationParticle(task, subtask, answer, showDirect, 1, 'O₂', ['O'])}
          <span class="reaction-symbol">→</span>
          <span class="reaction-coefficient">2</span>
          ${oxidationParticle(task, subtask, answer, showDirect, 2, 'Cu₂O', ['Cu', 'O'])}
        </div>
        <div class="oxidation-reaction-row" aria-label="Reaktion 2">
          <span class="reaction-coefficient">2</span>
          ${oxidationParticle(task, subtask, answer, showDirect, 2, 'Cu₂O', ['Cu', 'O'])}
          <span class="reaction-symbol">+</span>
          ${oxidationParticle(task, subtask, answer, showDirect, 1, 'O₂', ['O'])}
          <span class="reaction-symbol">→</span>
          <span class="reaction-coefficient">4</span>
          ${oxidationParticle(task, subtask, answer, showDirect, 3, 'CuO', ['Cu', 'O'])}
        </div>
      </div>`;
    } else if (subtask.type === 'tableInput') {
      control = `<div class="table-scroll"><table class="answer-table"><thead><tr>${subtask.inputConfig.columns.map((column) => `<th>${esc(column)}</th>`).join('')}</tr></thead><tbody>${subtask.inputConfig.rows.map((row) => `
        <tr><th>${esc(row)}</th>${subtask.inputConfig.columns.slice(1).map((column) => {
          const key = `${row}:${column}`;
          return `<td><input data-klausur-object-input data-task-id="${task.id}" data-subtask-id="${subtask.id}" data-field-key="${esc(key)}" value="${esc(answer[key] || '')}" aria-label="${esc(row)} ${esc(column)}" /></td>`;
        }).join('')}</tr>`).join('')}</tbody></table></div>`;
    } else if (subtask.type === 'choiceGroup') {
      control = `<div class="choice-group-grid">${Object.entries(subtask.choices || {}).map(([key, options]) => `
        <label class="klausur-select"><span>${esc(key)}</span><select class="${stateClass(showDirect, answer[key] === subtask.correctValues?.[key] ? 'correct' : 'wrong')}" data-klausur-object-input data-task-id="${task.id}" data-subtask-id="${subtask.id}" data-field-key="${esc(key)}"><option value="">Bitte auswählen</option>${options.map((option) => `<option value="${esc(option)}" ${answer[key] === option ? 'selected' : ''}>${esc(option)}</option>`).join('')}</select></label>`).join('')}</div>`;
    } else if (subtask.type === 'multiSelect') {
      control = `<div class="option-grid">${subtask.options.map((option) => {
        const selected = (answer || []).includes(option);
        const state = selected === (subtask.correctAnswers || []).includes(option) ? 'correct' : 'wrong';
        return `<button type="button" class="choice-button ${selected ? 'is-selected' : ''} ${stateClass(showDirect, state)}" data-klausur-multi data-task-id="${task.id}" data-subtask-id="${subtask.id}" data-option="${esc(option)}">${esc(option)}</button>`;
      }).join('')}</div>`;
    } else if (subtask.type === 'ordering') {
      control = `<div class="ordering-box"><p>${esc(subtask.orderDirectionLabel || '')}</p>${(subtask.correctOrder || subtask.items).map((_, index) => `
        <label class="klausur-select"><span>Position ${index + 1}</span><select data-klausur-order data-order-index="${index}" data-task-id="${task.id}" data-subtask-id="${subtask.id}"><option value="">Bitte auswählen</option>${subtask.items.map((item) => `<option value="${esc(item)}" ${answer[index] === item ? 'selected' : ''}>${esc(item)}</option>`).join('')}</select></label>`).join('')}</div>`;
    } else if (['calculation', 'structuredFields', 'structuredElectrodeAssignment'].includes(subtask.type)) {
      control = `<div class="choice-group-grid">${subtask.fields.map((field) => {
        const accepted = field.correctValues || [String(field.correctValue ?? '')];
        const state = subtask.type === 'calculation'
          ? (Math.abs(numberValue(answer[field.id]) - field.correctValue) <= (subtask.tolerance ?? 0.01) ? 'correct' : 'wrong')
          : directState(answer[field.id] || '', accepted);
        return `<label class="klausur-select"><span>${esc(field.label)}</span><input class="${stateClass(showDirect, state)}" ${subtask.type === 'calculation' ? 'inputmode="decimal"' : ''} data-klausur-object-input data-task-id="${task.id}" data-subtask-id="${subtask.id}" data-field-key="${esc(field.id)}" value="${esc(answer[field.id] || '')}" /></label>`;
      }).join('')}</div>`;
    } else if (subtask.type === 'structuredEquation') {
      control = `<div class="equation-scaffold">${subtask.scaffold?.instruction ? `<p class="klausur-instruction">${esc(subtask.scaffold.instruction)}</p>` : ''}${(subtask.scaffold?.equations || []).map((equation, index) => {
        const state = directState(answer[index] || '', [equation.expected, ...(equation.accepted || [])]);
        return `<section class="klausur-structured-equation ${stateClass(showDirect, state)}"><h4>${esc(equation.label)}</h4>${klausurStructuredEquationControl(task, subtask, equation, index, answer)}</section>`;
      }).join('')}</div>`;
    }

    return `<article class="subtask-card">
      <h3>${esc(subtask.label)} ${esc(subtask.prompt)}</h3>
      ${control}
      ${isDirect ? `<button type="button" class="check-answer-button" data-check-direct="${task.id}:${subtask.id}">Antwort prüfen</button>` : ''}
      ${result ? `<p class="${result === 'Richtig.' ? 'direct-feedback direct-feedback--correct' : 'direct-feedback direct-feedback--wrong'}">${result}</p>` : ''}
      ${subtask.checking?.type === 'criteria' && subtask.criteria && subtask.criteria.length ? `<button type="button" class="check-answer-button" data-check-criteria="${task.id}:${subtask.id}">Antwort überprüfen</button><div data-criteria-for="${task.id}:${subtask.id}" data-criteria-visible="false"></div>` : ''}
      <button type="button" class="secondary-button" data-model-toggle="${task.id}:${subtask.id}">Musterlösung anzeigen</button>
      <section class="solution-card solution-card--compact" data-model-box="${task.id}:${subtask.id}" hidden><h4>Musterlösung</h4><p>${esc(subtask.modelAnswer)}</p></section>
    </article>`;
  }

  function renderKlausurDetail() {
    const task = klausurTasks.find((item) => item.id === state.selectedKlausurTaskId) || klausurTasks[0];
    if (!task) return `${backButton('Zur Startseite', 'home')}${pageHeader('Klausurähnliche Aufgaben', 'Keine Aufgaben gefunden.')}`;

    return `<div class="button-row print-hidden">
        ${backButton('Zur Aufgabenübersicht', 'klausurOverview')}
        <button type="button" class="secondary-button" data-nav="home">Zurück zur Startseite</button>
        <button type="button" class="primary-button" data-print-klausur="true">${esc(klausurTaskMeta.printButtonLabel)}</button>
      </div>
      ${pageHeader(task.title, task.context)}
      <div class="klausur-image-row">${imageHtml(task.image)}${imageHtml(task.secondaryImage)}</div>
      <div class="material-stack">${(task.materials || []).map(renderMaterial).join('')}</div>
      <section class="subtask-stack">${(task.subtasks || []).map((subtask) => renderSubtask(task, subtask)).join('')}</section>
      <div class="button-row print-hidden">
        <button type="button" class="primary-button" data-print-klausur="true">${esc(klausurTaskMeta.printButtonLabel)}</button>
        <button type="button" class="secondary-button" data-nav="klausurOverview">${esc(klausurTaskMeta.overviewButtonLabel)}</button>
        <button type="button" class="secondary-button" data-nav="home">Zurück zur Startseite</button>
      </div>`;
  }

  function findKlausurSubtask(taskId, subtaskId) {
    const task = klausurTasks.find((item) => item.id === taskId);
    return task ? task.subtasks.find((item) => item.id === subtaskId) : null;
  }

  function renderOverview() {
    return `${backButton('Zur Startseite', 'home')}
      ${pageHeader('Redoxreaktionen aufstellen', 'In diesem Modul lernst du, Redoxreaktionen aus reduzierten und oxidierten Formen aufzustellen. Du übst Oxidation, Reduktion, Elektronenanzahl und Gesamtreaktion.')}
      <div class="tile-grid">
        <button type="button" class="tile-card" data-nav="redoxExplanation"><span class="tile-card__title">Redoxreaktionen aufstellen – Erläuterung</span><span class="tile-card__description">Schritt für Schritt am Beispiel Zink und Kupfer-Ionen.</span></button>
        <button type="button" class="tile-card" data-nav="redoxPractice"><span class="tile-card__title">Redoxreaktionen aufstellen – einfach</span><span class="tile-card__description">Übe mit einfachen Metallatomen und Metallionen.</span></button>
        <button type="button" class="tile-card" data-nav="redoxMediumPractice"><span class="tile-card__title">Redoxreaktionen aufstellen – mittel</span><span class="tile-card__description">Übe mit Ionen, Nichtmetallen, Molekülen und Elektronenausgleich.</span></button>
        <button type="button" class="tile-card" data-nav="redoxHardPractice"><span class="tile-card__title">Redoxreaktionen aufstellen – schwer</span><span class="tile-card__description">Übe anspruchsvolle Redoxgleichungen in saurer Lösung.</span></button>
      </div>`;
  }

  function renderExplanation() {
    const step = explanationSteps[state.explanationStep];
    return `${backButton('Zur Modulübersicht', 'redoxOverview')}
      ${pageHeader('Redoxreaktionen aufstellen – Erläuterung', 'Ein Beispiel mit Zink und Kupfer-Ionen.')}
      ${givenForms([{ element: 'Zink', reducedForm: 'Zn', oxidizedForm: 'Zn²⁺' }, { element: 'Kupfer', reducedForm: 'Cu', oxidizedForm: 'Cu²⁺' }])}
      <section class="step-card"><p class="step-count">Schritt ${state.explanationStep + 1} von ${explanationSteps.length}</p><h2>${step[0]}</h2><p>${step[1]}</p>${step[2] ? formula(step[2], true) : ''}
        <div class="button-row"><button type="button" class="secondary-button" data-step="-1" ${state.explanationStep === 0 ? 'disabled' : ''}>Zurück</button><button type="button" class="primary-button" data-step="1" ${state.explanationStep === explanationSteps.length - 1 ? 'disabled' : ''}>Weiter</button></div>
      </section>
      <section class="solution-card"><h2>Fertige Lösung</h2><p>Oxidation:</p>${formula('Zn → Zn²⁺ + 2 e⁻', true)}<p>Reduktion:</p>${formula('Cu²⁺ + 2 e⁻ → Cu', true)}<p>Gesamtreaktion:</p>${formula('Zn + Cu²⁺ → Zn²⁺ + Cu', true)}</section>
      <aside class="memory-card"><h2>Merke</h2><p>Oxidation: Elektronen stehen auf der Produktseite.</p><p>Reduktion: Elektronen stehen auf der Eduktseite.</p><p>In der Gesamtreaktion dürfen keine Elektronen mehr vorkommen.</p></aside>`;
  }

  function renderPractice(level) {
    const exercises = getExercises(level);
    const practice = state.practices[level];
    const restartLabel = level === 'schwer' ? 'Schwere Aufgaben noch einmal üben' : level === 'mittel' ? 'Mittel-Aufgaben noch einmal üben' : 'Noch einmal üben';
    const title = level === 'schwer' ? 'Redoxreaktionen aufstellen – schwer' : level === 'mittel' ? 'Redoxreaktionen aufstellen – mittel' : 'Redoxreaktionen aufstellen – einfach';
    const subtitle = level === 'schwer'
      ? 'In diesen Aufgaben übst du anspruchsvollere Redoxreaktionen. Einige Reaktionen laufen in saurer Lösung ab. Dann dürfen H⁺ und H₂O zum Ausgleichen verwendet werden. Achte darauf, zuerst die Teilreaktionen korrekt aufzustellen und anschließend die Elektronen auszugleichen.'
      : level === 'mittel'
        ? 'In diesen Aufgaben übst du Redoxreaktionen mit etwas komplexeren Teilchen. Es können auch Ionen, Nichtmetalle oder Moleküle vorkommen. Achte besonders darauf, welche Form Elektronen abgibt und welche Form Elektronen aufnimmt.'
        : 'Bearbeite die Aufgaben der Reihe nach. Die gegebenen Formen helfen dir beim Aufstellen der Reaktion.';

    if (practice.finished) {
      return `${backButton('Zur Modulübersicht', 'redoxOverview')}<section class="finish-card"><p class="eyebrow">Geschafft</p><h1>Übungsreihe beendet</h1><p>Du hast ${practice.correctIds.length} von ${exercises.length} Aufgaben richtig gelöst.</p><div class="button-row"><button type="button" class="primary-button" data-action="restart" data-level="${level}">${restartLabel}</button><button type="button" class="secondary-button" data-nav="redoxOverview">Zurück zur Übersicht</button></div></section>`;
    }

    const current = exercises[practice.index];
    const percent = Math.round(((practice.index + 1) / exercises.length) * 100);
    return `${backButton('Zur Modulübersicht', 'redoxOverview')}
      ${pageHeader(title, subtitle)}
      <div class="progress"><div class="progress__label"><span>Aufgabe ${practice.index + 1} von ${exercises.length}</span><span>${percent}%</span></div><div class="progress__track"><div class="progress__bar" style="width:${percent}%"></div></div></div>
      <article class="practice-card"><div class="practice-card__head"><p class="eyebrow">${current.title}</p><h2>${current.prompt}</h2></div>
      ${givenForms(current.givenForms)}
      ${helperCard(current)}
      ${current.partialReactions ? `<section class="partial-reactions"><h3>Vorgegebene Teilreaktionen</h3><p>Oxidation:</p>${formula(current.partialReactions.oxidation, true)}<p>Reduktion:</p>${formula(current.partialReactions.reduction, true)}</section>` : ''}
      ${answerControl(current, practice)}
      <div class="button-row"><button type="button" class="primary-button" data-action="check" data-level="${level}">Antwort prüfen</button><button type="button" class="secondary-button" data-action="solution" data-level="${level}">Musterlösung anzeigen</button><button type="button" class="secondary-button" data-action="retry" data-level="${level}">Neuer Versuch</button><button type="button" class="secondary-button" data-action="next" data-level="${level}">Nächste Aufgabe</button></div>
      ${practice.feedback ? `<div class="feedback feedback--${practice.feedback.status}" role="status"><strong>${practice.feedback.status === 'correct' ? 'Richtig' : practice.feedback.status === 'partial' ? 'Teilweise richtig' : 'Noch nicht richtig'}</strong><p>${practice.feedback.message}</p></div>` : ''}
      ${practice.showSolution ? `<section class="solution-card solution-card--compact"><h3>Musterlösung</h3>${formula(current.answer, true)}<p>${current.explanation}</p></section>` : ''}
      </article>`;
  }

  function helperCard(current) {
    if (!current.medium && !current.helperSpecies) return '';
    return `<section class="helper-card" aria-label="Hilfsstoffe und Reaktionsmedium">
      ${current.medium ? '<p><strong>Reaktionsmedium:</strong> saure Lösung</p>' : ''}
      ${current.helperSpecies ? `<p><strong>Hilfsstoffe zum Ausgleichen:</strong> ${current.helperSpecies.map((item) => formula(item)).join(' ')}</p>` : ''}
      ${current.helperHint ? `<p>${current.helperHint}</p>` : ''}
    </section>`;
  }

  function supportsStructured(exerciseItem) {
    return ['gesamtreaktion', 'oxidation', 'reduktion', 'teilreaktionen-gesamt', 'koeffizienten'].includes(exerciseItem.type);
  }

  function getPracticeAnswer(exerciseItem, practice) {
    if (supportsStructured(exerciseItem)) return buildStructuredAnswer(exerciseItem, practice);
    return practice.answer;
  }

  function structuredTemplate(answer, exerciseType) {
    const rawTokens = answer.replace(/→|->|=>/g, ' → ').split(/\s+/).filter(Boolean);
    const template = [];

    for (let index = 0; index < rawTokens.length; index += 1) {
      const token = rawTokens[index];
      if (token === '+') {
        template.push({ type: 'operator', value: '+' });
      } else if (token === '→') {
        template.push({ type: 'arrow', value: '→' });
      } else if (/^\d+$/.test(token) && rawTokens[index + 1] && !['+', '→'].includes(rawTokens[index + 1])) {
        template.push(createParticleToken({ ...parseParticle(rawTokens[index + 1]), coefficient: token }, exerciseType));
        index += 1;
      } else {
        template.push(createParticleToken(parseParticle(token), exerciseType));
      }
    }

    return template;
  }

  function createParticleToken(particle, exerciseType) {
    const coefficientTask = exerciseType === 'koeffizienten';

    return {
      ...particle,
      prefillFormula: coefficientTask,
      prefillIndex: coefficientTask,
      prefillCharge: coefficientTask,
      lockedFields: coefficientTask ? ['formula', 'index', 'charge'] : [],
    };
  }

  function parseParticle(value) {
    const normal = String(value)
      .replace(/[⁺⁻¹²³⁴⁵⁶⁷]/g, (char) => ({ '⁺': '+', '⁻': '-', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7' })[char] || char)
      .replace(/[₁₂₃₄₅₆₇]/g, (char) => ({ '₁': '1', '₂': '2', '₃': '3', '₄': '4', '₅': '5', '₆': '6', '₇': '7' })[char] || char);
    const chargeMatch = normal.match(/(\d?[+-])$/);
    const charge = chargeMatch ? chargeMatch[1] : '';
    const withoutCharge = charge ? normal.slice(0, -charge.length) : normal;
    const indexMatch = withoutCharge.match(/(\d+)$/);
    const particleIndex = indexMatch ? indexMatch[1] : '';
    const formulaText = particleIndex ? withoutCharge.slice(0, -particleIndex.length) : withoutCharge;

    return {
      type: 'particle',
      coefficient: '',
      formula: formulaText,
      index: particleIndex,
      charge,
    };
  }

  function initialStructuredParticle(token) {
    return {
      coefficient: '',
      formula: token.prefillFormula ? token.formula : '',
      index: token.prefillIndex ? token.index : '',
      charge: token.prefillCharge ? token.charge : '',
    };
  }

  function getStructuredParticles(exerciseItem, practice) {
    if (!practice.structuredAnswers[exerciseItem.id]) {
      practice.structuredAnswers[exerciseItem.id] = {};
      structuredTemplate(exerciseItem.answer, exerciseItem.type).forEach((token, index) => {
        if (token.type === 'particle') {
          practice.structuredAnswers[exerciseItem.id][index] = initialStructuredParticle(token);
        }
      });
    }

    return practice.structuredAnswers[exerciseItem.id];
  }

  function buildStructuredAnswer(exerciseItem, practice) {
    const template = structuredTemplate(exerciseItem.answer, exerciseItem.type);
    const particles = getStructuredParticles(exerciseItem, practice);

    return template
      .map((token, index) => {
        if (token.type === 'operator') return '+';
        if (token.type === 'arrow') return '->';
        return particleToAnswer(particles[index] || {});
      })
      .filter(Boolean)
      .join(' ');
  }

  function particleToAnswer(particle) {
    const coefficient = clean(particle.coefficient);
    const formulaText = clean(particle.formula);
    const particleIndex = clean(particle.index);
    const charge = clean(particle.charge);

    if (!formulaText) return '';

    return `${coefficient && coefficient !== '1' ? `${coefficient} ` : ''}${formulaText}${particleIndex}${charge}`;
  }

  function clean(value) {
    return String(value || '').trim();
  }

  function displayEquation(answer) {
    return answer
      .replace(/->/g, '→')
      .split(' ')
      .map((part) => {
        if (part === '+' || part === '→' || /^\d+$/.test(part)) return part;
        return part
          .replace(/([A-Za-z]+)(\d+)(?![+-])/g, (_, symbol, number) => `${symbol}${number.replace(/[1234567]/g, (char) => ({ 1: '₁', 2: '₂', 3: '₃', 4: '₄', 5: '₅', 6: '₆', 7: '₇' })[char] || char)}`)
          .replace(/(\d?)([+-])$/g, (_, number, sign) => `${number ? ({ 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷' })[number] || number : ''}${({ '+': '⁺', '-': '⁻' })[sign] || sign}`);
      })
      .join(' ');
  }

  function structuredEquationControl(current, practice) {
    const template = structuredTemplate(current.answer, current.type);
    const particles = getStructuredParticles(current, practice);

    return `<section class="structured-equation" aria-label="Strukturierte chemische Eingabe">
      <p class="structured-equation__hint">Trage die Gleichung in die Felder ein. Pluszeichen und Pfeil sind vorgegeben.</p>
      <div class="structured-equation__row">${template.map((token, index) => {
        if (token.type === 'operator' || token.type === 'arrow') return `<span class="equation-fixed">${token.value}</span>`;
        const particle = particles[index] || initialStructuredParticle(token);
        return `<span class="particle-input">
          ${particleField(token, particle, index, 'coefficient', 'Koeffizient', 'particle-field--coefficient', 'numeric', '1')}
          ${particleField(token, particle, index, 'formula', 'Formel oder Symbol', 'particle-field--formula')}
          ${particleField(token, particle, index, 'index', 'Index', 'particle-field--index', 'numeric', 'Index')}
          ${particleField(token, particle, index, 'charge', 'Ladung', 'particle-field--charge', '', 'Ladung')}
        </span>`;
      }).join('')}</div>
      <div class="chemical-preview" aria-live="polite">Vorschau: <strong id="structured-preview">${displayEquation(buildStructuredAnswer(current, practice)) || '—'}</strong></div>
    </section>`;
  }

  function particleField(token, particle, index, field, label, className, inputMode = '', placeholder = '') {
    if (token.lockedFields && token.lockedFields.includes(field)) {
      return `<span class="particle-fixed-field ${className}" aria-label="${label}">${formatFieldValue(field, particle[field]) || ' '}</span>`;
    }

    return `<label class="particle-field ${className}"><span class="sr-only">${label}</span><input ${inputMode ? `inputmode="${inputMode}"` : ''} ${placeholder ? `placeholder="${placeholder}"` : ''} value="${particle[field] || ''}" data-structured-index="${index}" data-structured-field="${field}" /></label>`;
  }

  function formatFieldValue(field, value) {
    if (field === 'formula') return String(value || '').replace(/[1234567]/g, (char) => ({ 1: '₁', 2: '₂', 3: '₃', 4: '₄', 5: '₅', 6: '₆', 7: '₇' })[char] || char);
    if (field === 'index') return String(value || '').replace(/[1234567]/g, (char) => ({ 1: '₁', 2: '₂', 3: '₃', 4: '₄', 5: '₅', 6: '₆', 7: '₇' })[char] || char);
    if (field === 'charge') return String(value || '').replace(/[1234567+-]/g, (char) => ({ 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', '+': '⁺', '-': '⁻' })[char] || char);
    return value || '';
  }

  function answerControl(current, practice) {
    if (current.type === 'elektronenanzahl') {
      return `<fieldset class="answer-options"><legend>Wähle die Elektronenanzahl aus.</legend><div class="option-grid">${current.options.map((option) => `<button type="button" class="choice-button ${practice.answer === option ? 'is-selected' : ''}" data-answer-option="${option}">${option}</button>`).join('')}</div></fieldset>`;
    }

    if (supportsStructured(current)) {
      return structuredEquationControl(current, practice);
    }

    if (current.type === 'koeffizienten') {
      return `<fieldset class="coefficient-task"><legend>Trage die Koeffizienten in der richtigen Reihenfolge ein.</legend>${formula(current.template, true)}<div class="coefficient-grid">${current.blanks.map((blank, index) => `<label class="coefficient-field"><span>vor ${blank}</span><input inputmode="numeric" value="${practice.blankAnswers[index] || ''}" data-blank-index="${index}" /></label>`).join('')}</div></fieldset>`;
    }

    if (current.type === 'zuordnung') {
      return `<fieldset class="pair-task"><legend>Tippe für jede Teilgleichung die passende Zuordnung an.</legend>${current.pairs.map((pair) => `<div class="pair-row">${formula(pair.equation, true)}<div class="segmented-control">${['Oxidation', 'Reduktion'].map((type) => `<button type="button" class="choice-button ${practice.pairAnswers[pair.equation] === type ? 'is-selected' : ''}" data-pair="${pair.equation}" data-pair-type="${type}">${type}</button>`).join('')}</div></div>`).join('')}</fieldset>`;
    }

    return '';
  }

  function clearAnswer(level) {
    const practice = state.practices[level];
    const current = getExercises(level)[practice.index];
    practice.answer = '';
    practice.blankAnswers = [];
    practice.pairAnswers = {};
    delete practice.structuredAnswers[current.id];
    practice.feedback = null;
    practice.showSolution = false;
  }

  function bindEvents() {
    document.querySelectorAll('[data-nav]').forEach((button) => button.addEventListener('click', () => navigate(button.dataset.nav)));
    document.querySelectorAll('[data-klausur-task]').forEach((button) => button.addEventListener('click', () => {
      state.selectedKlausurTaskId = button.dataset.klausurTask;
      navigate('klausurDetail');
    }));
    document.querySelectorAll('[data-print-klausur]').forEach((button) => button.addEventListener('click', () => window.print()));
    document.querySelectorAll('[data-model-toggle]').forEach((button) => button.addEventListener('click', () => {
      const box = document.querySelector(`[data-model-box="${button.dataset.modelToggle}"]`);
      if (box) box.hidden = !box.hidden;
    }));
    document.querySelectorAll('[data-check-direct]').forEach((button) => button.addEventListener('click', () => {
      const [taskId, subtaskId] = button.dataset.checkDirect.split(':');
      localStorage.setItem(directCheckedKey(taskId, subtaskId), 'true');
      render();
    }));
    document.querySelectorAll('[data-check-criteria]').forEach((button) => button.addEventListener('click', () => {
      const [taskId, subtaskId] = button.dataset.checkCriteria.split(':');
      const subtask = findKlausurSubtask(taskId, subtaskId);
      const criteria = document.querySelector(`[data-criteria-for="${taskId}:${subtaskId}"]`);
      const fallback = ['choiceGroup', 'tableInput', 'calculation'].includes(subtask.type) ? {} : ['multiSelect', 'ordering'].includes(subtask.type) ? [] : '';
      const answer = subtask.type === 'freeText'
        ? (document.querySelector(`[data-klausur-input][data-task-id="${taskId}"][data-subtask-id="${subtaskId}"]`)?.value || '')
        : readKlausurAnswer(taskId, subtask, fallback);
      if (subtask && criteria) {
        criteria.innerHTML = criteriaHtml(subtask, answerText(answer));
        criteria.dataset.criteriaVisible = 'true';
        button.textContent = 'Antwort erneut überprüfen';
      }
    }));
    document.querySelectorAll('[data-klausur-input]').forEach((input) => input.addEventListener('input', (event) => {
      writeKlausurAnswer(input.dataset.taskId, input.dataset.subtaskId, event.target.value);
      const subtask = findKlausurSubtask(input.dataset.taskId, input.dataset.subtaskId);
      const criteria = document.querySelector(`[data-criteria-for="${input.dataset.taskId}:${input.dataset.subtaskId}"]`);
      if (subtask && criteria && criteria.dataset.criteriaVisible === 'true') criteria.innerHTML = criteriaHtml(subtask, event.target.value);
    }));
    document.querySelectorAll('[data-klausur-object-input]').forEach((input) => input.addEventListener('input', (event) => {
      const subtask = findKlausurSubtask(input.dataset.taskId, input.dataset.subtaskId);
      const current = readKlausurAnswer(input.dataset.taskId, subtask, {});
      const next = { ...current, [input.dataset.fieldKey]: event.target.value };
      writeKlausurAnswer(input.dataset.taskId, input.dataset.subtaskId, next);
      const criteria = document.querySelector(`[data-criteria-for="${input.dataset.taskId}:${input.dataset.subtaskId}"]`);
      if (subtask && criteria && criteria.dataset.criteriaVisible === 'true') criteria.innerHTML = criteriaHtml(subtask, answerText(next));
    }));
    document.querySelectorAll('[data-klausur-object-input]').forEach((input) => input.addEventListener('change', (event) => {
      const subtask = findKlausurSubtask(input.dataset.taskId, input.dataset.subtaskId);
      const current = readKlausurAnswer(input.dataset.taskId, subtask, {});
      writeKlausurAnswer(input.dataset.taskId, input.dataset.subtaskId, { ...current, [input.dataset.fieldKey]: event.target.value });
      render();
    }));
    document.querySelectorAll('[data-klausur-structured]').forEach((input) => input.addEventListener('input', (event) => {
      const subtask = findKlausurSubtask(input.dataset.taskId, input.dataset.subtaskId);
      const equationIndex = Number(input.dataset.equationIndex);
      const tokenIndex = Number(input.dataset.tokenIndex);
      const equation = subtask?.scaffold?.equations?.[equationIndex];
      if (!subtask || !equation) return;
      const current = readKlausurAnswer(input.dataset.taskId, subtask, {});
      const { template, particles } = klausurStructuredParticles(current, equationIndex, equation);
      const nextParticles = {
        ...particles,
        [tokenIndex]: {
          ...(particles[tokenIndex] || {}),
          [input.dataset.structuredField]: event.target.value,
        },
      };
      const nextAnswer = klausurBuildStructuredAnswer(template, nextParticles);
      const next = {
        ...current,
        [structuredBucketKey(equationIndex)]: nextParticles,
        [equationIndex]: nextAnswer,
      };
      writeKlausurAnswer(input.dataset.taskId, input.dataset.subtaskId, next);
      const preview = document.querySelector(`[data-klausur-structured-preview="${input.dataset.taskId}:${input.dataset.subtaskId}:${equationIndex}"]`);
      if (preview) preview.textContent = displayEquation(nextAnswer) || '—';
    }));
    document.querySelectorAll('[data-klausur-multi]').forEach((button) => button.addEventListener('click', () => {
      const subtask = findKlausurSubtask(button.dataset.taskId, button.dataset.subtaskId);
      const current = readKlausurAnswer(button.dataset.taskId, subtask, []);
      const selected = current.includes(button.dataset.option)
        ? current.filter((item) => item !== button.dataset.option)
        : [...current, button.dataset.option];
      writeKlausurAnswer(button.dataset.taskId, button.dataset.subtaskId, selected);
      render();
    }));
    document.querySelectorAll('[data-klausur-order]').forEach((select) => select.addEventListener('change', (event) => {
      const subtask = findKlausurSubtask(select.dataset.taskId, select.dataset.subtaskId);
      const current = readKlausurAnswer(select.dataset.taskId, subtask, []);
      current[Number(select.dataset.orderIndex)] = event.target.value;
      writeKlausurAnswer(select.dataset.taskId, select.dataset.subtaskId, current);
      render();
    }));
    document.querySelectorAll('[data-module]').forEach((button) => button.addEventListener('click', () => {
      const module = modules.find((item) => item.id === button.dataset.module);
      if (module.href) window.location.href = module.href;
      else if (module.status === 'active') navigate(module.target);
      else {
        state.notice = 'Dieses Modul wird später ergänzt.';
        render();
      }
    }));
    document.querySelectorAll('[data-step]').forEach((button) => button.addEventListener('click', () => {
      state.explanationStep = Math.max(0, Math.min(explanationSteps.length - 1, state.explanationStep + Number(button.dataset.step)));
      render();
    }));
    document.querySelectorAll('[data-self-check-id]').forEach((checkbox) => checkbox.addEventListener('change', () => {
      state.selfCheck[checkbox.dataset.selfCheckId] = checkbox.checked;
      saveSelfCheck();
    }));
    document.querySelectorAll('[data-print-self-check]').forEach((button) => button.addEventListener('click', () => window.print()));
    const level = state.view === 'redoxHardPractice' ? 'schwer' : state.view === 'redoxMediumPractice' ? 'mittel' : 'einfach';
    const practice = state.practices[level];
    const answerInput = document.getElementById('answer-input');
    if (answerInput) answerInput.addEventListener('input', (event) => { practice.answer = event.target.value; });
    document.querySelectorAll('[data-answer-option]').forEach((button) => button.addEventListener('click', () => { practice.answer = button.dataset.answerOption; render(); }));
    document.querySelectorAll('[data-blank-index]').forEach((input) => input.addEventListener('input', (event) => { practice.blankAnswers[Number(input.dataset.blankIndex)] = event.target.value; }));
    document.querySelectorAll('[data-structured-index]').forEach((input) => input.addEventListener('input', (event) => {
      const exercises = getExercises(level);
      const current = exercises[practice.index];
      const particles = getStructuredParticles(current, practice);
      const particleIndex = Number(input.dataset.structuredIndex);
      particles[particleIndex] = {
        ...(particles[particleIndex] || {}),
        [input.dataset.structuredField]: event.target.value,
      };
      const preview = document.getElementById('structured-preview');
      if (preview) preview.textContent = displayEquation(buildStructuredAnswer(current, practice)) || '—';
    }));
    document.querySelectorAll('[data-pair]').forEach((button) => button.addEventListener('click', () => {
      practice.pairAnswers[button.dataset.pair] = button.dataset.pairType;
      render();
    }));
    document.querySelectorAll('[data-action]').forEach((button) => button.addEventListener('click', () => handleAction(button.dataset.action, button.dataset.level || level)));
  }

  function handleAction(action, level) {
    const exercises = getExercises(level);
    const practice = state.practices[level];
    const current = exercises[practice.index];
    if (action === 'check') {
      practice.feedback = check(current, practice);
      if (practice.feedback.status === 'correct' && !practice.correctIds.includes(current.id)) practice.correctIds.push(current.id);
    }
    if (action === 'solution') practice.showSolution = true;
    if (action === 'retry') clearAnswer(level);
    if (action === 'next') {
      if (practice.index === exercises.length - 1) practice.finished = true;
      else {
        practice.index += 1;
        clearAnswer(level);
      }
    }
    if (action === 'restart') {
      localStorage.removeItem(practiceKey(level));
      state.practices[level] = emptyPracticeState();
    }
    savePractice(level);
    render();
  }

  function render() {
    const root = document.getElementById('root');
    root.className = 'app-shell';
    const page = state.view === 'redoxOverview'
      ? renderOverview()
      : state.view === 'selfCheck'
        ? renderSelfCheck()
        : state.view === 'klausurOverview'
          ? renderKlausurOverview()
          : state.view === 'klausurDetail'
            ? renderKlausurDetail()
            : state.view === 'redoxExplanation'
              ? renderExplanation()
              : state.view === 'redoxHardPractice'
                ? renderPractice('schwer')
                : state.view === 'redoxMediumPractice'
                  ? renderPractice('mittel')
                  : state.view === 'redoxPractice'
                    ? renderPractice('einfach')
                    : renderHome();
    root.innerHTML = `<main class="page-wrap">${page}</main>`;
    bindEvents();
  }

  loadPractice('einfach');
  loadPractice('mittel');
  loadPractice('schwer');
  render();
})();
