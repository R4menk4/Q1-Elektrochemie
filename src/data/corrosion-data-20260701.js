(function () {
  const imageBasePath = './public/assets/images/';

  function field(correct, accepted) {
    return { correct, accepted: accepted || [correct] };
  }

  function emptyField() {
    return field('', ['', '1']);
  }

  function particle(coefficient, formulaParts) {
    return {
      type: 'particle',
      coefficient: coefficient || emptyField(),
      formula: formulaParts,
    };
  }

  function formulaPart(element, index, charge) {
    return {
      element: field(element, [element]),
      index: field(index || '', index ? [index] : ['', '1']),
      charge: field(charge || '', charge ? [charge] : ['']),
    };
  }

  function electron(coefficient) {
    return {
      type: 'electron',
      coefficient: coefficient || emptyField(),
      charge: field('-', ['-', '−']),
    };
  }

  const corrosionData = {
    corrosionMeta: {
      title: 'Korrosion und Korrosionsschutz',
      subtitle: 'Verstehe, warum Eisen rostet und wie man Metalle schützen kann.',
      homeCard: {
        id: 'korrosion',
        title: 'Korrosion und Korrosionsschutz',
        description: 'Untersuche Korrosion als elektrochemischen Prozess und leite Schutzmaßnahmen ab.',
        target: 'corrosionOverview',
        status: 'active',
      },
    },

    corrosionOverviewCards: [
      {
        id: 'oxygen-corrosion',
        title: 'Sauerstoffkorrosion – wenn Eisen rostet',
        description: 'Erarbeite die Sauerstoffkorrosion als Lokalelement: Anode, Kathode, Elektronenfluss, Hydroxid-Ionen und Rostbildung.',
        target: 'oxygenCorrosion',
        level: 'AFB I–II',
        badge: 'Grundlagen',
        status: 'active',
      },
      {
        id: 'acid-corrosion',
        title: 'Säurekorrosion',
        description: 'Vergleiche später die Sauerstoffkorrosion mit der Säurekorrosion.',
        target: 'acidCorrosion',
        level: 'Ausblick',
        badge: 'folgt',
        status: 'coming-soon',
      },
      {
        id: 'corrosion-protection',
        title: 'Korrosionsschutz',
        description: 'Erkläre später Lackieren, Verzinken, Opferanode und Passivierung fachlich.',
        target: 'corrosionProtection',
        level: 'Ausblick',
        badge: 'folgt',
        status: 'coming-soon',
      },
    ],

    oxygenCorrosionPage: {
      title: 'Sauerstoffkorrosion – wenn Eisen rostet',
      subtitle: 'Selbstständiges Lernmodul zur Sauerstoffkorrosion als Lokalelement',
      level: 'Chemie GK Q1 · AFB I–II',
      imageMatching: {
        image: `${imageBasePath}eisen_rostet_zahlen.png`,
        fallbackImage: './eisen_rostet_zahlen.png',
        alt: 'Schema der Sauerstoffkorrosion mit nummerierten Bereichen 1 bis 5',
      },
      learningGoals: [
        'Ich kann die Bedingungen für das Rosten von Eisen nennen.',
        'Ich kann erklären, warum die Sauerstoffkorrosion ein Lokalelement ist.',
        'Ich kann Anode, Kathode, Oxidation und Reduktion beim Rosten zuordnen.',
        'Ich kann die wichtigsten Teilgleichungen der Sauerstoffkorrosion formulieren.',
        'Ich kann die Bildung von Eisen(II)-hydroxid als Zwischenschritt zur Rostbildung erklären.',
      ],
      infoCards: [
        {
          id: 'conditions',
          title: '1. Voraussetzungen des Rostens',
          text: 'Eisen rostet besonders gut, wenn Eisen, Wasser bzw. Feuchtigkeit und Sauerstoff gemeinsam vorliegen. Der Wasserfilm auf der Oberfläche ermöglicht die Bewegung von Ionen.',
          focus: ['Eisen', 'Wasserfilm', 'Sauerstoff'],
        },
        {
          id: 'local-element',
          title: '2. Lokalelement',
          text: 'Auf einer Eisenoberfläche können kleine anodische und kathodische Bereiche entstehen. Diese Bereiche wirken zusammen wie ein sehr kleines galvanisches Element.',
          focus: ['Anode', 'Kathode', 'Elektronenfluss'],
        },
        {
          id: 'anode',
          title: '3. Anode: Oxidation des Eisens',
          text: 'An der Anode geben Eisenatome Elektronen ab und gehen als Eisen(II)-Ionen in Lösung.',
          formula: 'Fe → Fe²⁺ + 2 e⁻',
        },
        {
          id: 'cathode',
          title: '4. Kathode: Reduktion von Sauerstoff',
          text: 'An der Kathode nimmt gelöster Sauerstoff Elektronen auf. Zusammen mit Wasser entstehen Hydroxid-Ionen.',
          formula: 'O₂ + 2 H₂O + 4 e⁻ → 4 OH⁻',
        },
        {
          id: 'rust-products',
          title: '5. Bildung von Rostprodukten',
          text: 'Eisen(II)-Ionen reagieren mit Hydroxid-Ionen zunächst zu Eisen(II)-hydroxid. Dieses wird weiter oxidiert und bildet mit weiteren Eisenoxid- und Eisenhydroxid-Verbindungen Rost.',
          formula: '2 Fe²⁺ + 4 OH⁻ → 2 Fe(OH)₂',
        },
      ],
      keyTerms: [
        { term: 'Anode', explanation: 'Bereich, an dem die Oxidation stattfindet.' },
        { term: 'Kathode', explanation: 'Bereich, an dem die Reduktion stattfindet.' },
        { term: 'Oxidation', explanation: 'Abgabe von Elektronen.' },
        { term: 'Reduktion', explanation: 'Aufnahme von Elektronen.' },
        { term: 'Elektrolyt', explanation: 'Flüssigkeit, in der Ionen beweglich sind.' },
        { term: 'Lokalelement', explanation: 'Kleines galvanisches Element auf einer Metalloberfläche.' },
      ],
    },

    oxygenCorrosionExercises: [
      {
        id: 'oc-01-conditions',
        type: 'shortAnswer',
        afb: 'AFB I',
        title: 'Voraussetzungen des Rostens',
        prompt: 'Nenne die Stoffe bzw. Bedingungen, die für das Rosten von Eisen notwendig sind.',
        expectedKeywords: ['Eisen', 'Wasser', 'Feuchtigkeit', 'Sauerstoff'],
        modelAnswer: 'Für das Rosten von Eisen sind Eisen, Wasser bzw. Feuchtigkeit und Sauerstoff notwendig. Der Wasserfilm ermöglicht zusätzlich die Bewegung von Ionen.',
        feedback: 'Achte darauf, dass sowohl Wasser als auch Sauerstoff genannt werden.',
      },
      {
        id: 'oc-02-dry-air',
        type: 'freeTextCriteria',
        afb: 'AFB II',
        title: 'Warum rostet Eisen in trockener Luft kaum?',
        prompt: 'Erläutere, warum Eisen in trockener Luft kaum rostet.',
        criteria: [
          'Wasser bzw. Feuchtigkeit fehlt.',
          'Ohne Wasserfilm können Ionen nicht ausreichend beweglich sein.',
          'Der elektrochemische Korrosionsprozess wird stark verlangsamt.',
        ],
        modelAnswer: 'In trockener Luft fehlt der Wasserfilm auf der Eisenoberfläche. Ohne diesen Wasserfilm können sich Ionen kaum bewegen, sodass kein geschlossener elektrochemischer Vorgang ablaufen kann. Deshalb rostet Eisen in trockener Luft kaum.',
      },
      {
        id: 'oc-03-local-element',
        type: 'structuredFields',
        afb: 'AFB I–II',
        title: 'Das Lokalelement beschreiben',
        prompt: 'Ergänze die zentralen Begriffe zur Sauerstoffkorrosion als Lokalelement.',
        fields: [
          { id: 'oxidationArea', label: 'Bereich der Oxidation', correctValues: ['Anode', 'anodischer Bereich', 'anodische Bereiche'] },
          { id: 'reductionArea', label: 'Bereich der Reduktion', correctValues: ['Kathode', 'kathodischer Bereich', 'kathodische Bereiche'] },
          { id: 'electronPath', label: 'Weg der Elektronen', correctValues: ['durch das Eisen', 'im Eisen', 'durch das Metall', 'im Metall'] },
          { id: 'ionPath', label: 'Ort der Ionenbewegung', correctValues: ['im Wasserfilm', 'im Elektrolyten', 'im Wasser'] },
        ],
        modelAnswer: 'Oxidation: Anode. Reduktion: Kathode. Elektronen fließen durch das Eisen bzw. Metall. Ionen bewegen sich im Wasserfilm, der als Elektrolyt wirkt.',
      },
      {
        id: 'oc-04-image-matching',
        type: 'imageMatching',
        afb: 'AFB I',
        title: 'Bild-Zuordnung: Was ist was?',
        prompt: 'Ordne die Zahlen im Bild den richtigen Begriffen zu.',
        image: `${imageBasePath}eisen_rostet_zahlen.png`,
        fallbackImage: './eisen_rostet_zahlen.png',
        options: ['Sauerstoff', 'Eisen-Ionen', 'Wasser', 'Hydroxid-Ionen', 'Rost'],
        fields: [
          { number: '1', correct: 'Sauerstoff' },
          { number: '2', correct: 'Eisen-Ionen' },
          { number: '3', correct: 'Wasser' },
          { number: '4', correct: 'Hydroxid-Ionen' },
          { number: '5', correct: 'Rost' },
        ],
        modelAnswer: '1 = Sauerstoff, 2 = Eisen-Ionen, 3 = Wasser, 4 = Hydroxid-Ionen, 5 = Rost.',
      },
      {
        id: 'oc-05-oxidation-equation',
        type: 'redoxEquationScaffold',
        afb: 'AFB I–II',
        title: 'Oxidation des Eisens',
        prompt: 'Trage die Oxidationsgleichung des Eisens ein. Nutze die beschreibbaren Felder für Koeffizienten, Indizes und Ladungen.',
        scaffold: {
          instruction: 'Pluszeichen und Pfeil werden im Lernprogramm vorgegeben. Leere Koeffizienten können wie 1 gelesen werden.',
          equations: [
            {
              label: 'Oxidation an der Anode',
              expectedDisplay: 'Fe → Fe²⁺ + 2 e⁻',
              parts: [
                particle(emptyField(), [formulaPart('Fe')]),
                { type: 'arrow' },
                particle(emptyField(), [formulaPart('Fe', '', '2+')]),
                { type: 'plus' },
                electron(field('2', ['2'])),
              ],
            },
          ],
        },
        modelAnswer: 'An der Anode wird Eisen oxidiert: Fe → Fe²⁺ + 2 e⁻. Eisenatome geben zwei Elektronen ab und gehen als Eisen(II)-Ionen in Lösung.',
      },
      {
        id: 'oc-06-reduction-equation',
        type: 'redoxEquationScaffold',
        afb: 'AFB I–II',
        title: 'Reduktion von Sauerstoff',
        prompt: 'Trage die Reduktionsgleichung von Sauerstoff ein.',
        scaffold: {
          instruction: 'Achte darauf, dass Sauerstoff, Wasser, Elektronen und Hydroxid-Ionen vorkommen.',
          equations: [
            {
              label: 'Reduktion an der Kathode',
              expectedDisplay: 'O₂ + 2 H₂O + 4 e⁻ → 4 OH⁻',
              parts: [
                particle(emptyField(), [formulaPart('O', '2')]),
                { type: 'plus' },
                particle(field('2', ['2']), [formulaPart('H', '2'), formulaPart('O')]),
                { type: 'plus' },
                electron(field('4', ['4'])),
                { type: 'arrow' },
                particle(field('4', ['4']), [formulaPart('OH', '', '-')]),
              ],
            },
          ],
        },
        modelAnswer: 'An der Kathode wird Sauerstoff reduziert: O₂ + 2 H₂O + 4 e⁻ → 4 OH⁻. Sauerstoff nimmt Elektronen auf; dabei entstehen Hydroxid-Ionen.',
      },
      {
        id: 'oc-07-total-reaction',
        type: 'redoxEquationScaffold',
        afb: 'AFB II',
        title: 'Gesamtreaktion mit Elektronenausgleich',
        prompt: 'Bilde die Gesamtreaktion aus Eisenoxidation und Sauerstoffreduktion.',
        scaffold: {
          instruction: 'Die Eisenoxidation muss verdoppelt werden, weil bei der Sauerstoffreduktion vier Elektronen aufgenommen werden.',
          equations: [
            {
              label: 'Gesamtreaktion',
              expectedDisplay: '2 Fe + O₂ + 2 H₂O → 2 Fe²⁺ + 4 OH⁻',
              parts: [
                particle(field('2', ['2']), [formulaPart('Fe')]),
                { type: 'plus' },
                particle(emptyField(), [formulaPart('O', '2')]),
                { type: 'plus' },
                particle(field('2', ['2']), [formulaPart('H', '2'), formulaPart('O')]),
                { type: 'arrow' },
                particle(field('2', ['2']), [formulaPart('Fe', '', '2+')]),
                { type: 'plus' },
                particle(field('4', ['4']), [formulaPart('OH', '', '-')]),
              ],
            },
          ],
        },
        modelAnswer: 'Die Oxidation des Eisens wird verdoppelt: 2 Fe → 2 Fe²⁺ + 4 e⁻. Danach können die vier Elektronen mit der Sauerstoffreduktion gekürzt werden. Gesamt: 2 Fe + O₂ + 2 H₂O → 2 Fe²⁺ + 4 OH⁻.',
      },
      {
        id: 'oc-08-iron-hydroxide',
        type: 'redoxEquationScaffold',
        afb: 'AFB I–II',
        title: 'Bildung von Eisen(II)-hydroxid',
        prompt: 'Trage die Reaktionsgleichung zur Bildung von Eisen(II)-hydroxid ein.',
        scaffold: {
          instruction: 'Eisen(II)-Ionen reagieren mit Hydroxid-Ionen zu Eisen(II)-hydroxid.',
          equations: [
            {
              label: 'Folgereaktion',
              expectedDisplay: '2 Fe²⁺ + 4 OH⁻ → 2 Fe(OH)₂',
              parts: [
                particle(field('2', ['2']), [formulaPart('Fe', '', '2+')]),
                { type: 'plus' },
                particle(field('4', ['4']), [formulaPart('OH', '', '-')]),
                { type: 'arrow' },
                particle(field('2', ['2']), [formulaPart('Fe(OH)', '2')]),
              ],
            },
          ],
        },
        modelAnswer: 'Die gebildeten Eisen(II)-Ionen reagieren mit Hydroxid-Ionen: 2 Fe²⁺ + 4 OH⁻ → 2 Fe(OH)₂. Eisen(II)-hydroxid ist ein Zwischenprodukt auf dem Weg zu Rost.',
      },
      {
        id: 'oc-09-terms-matching',
        type: 'matching',
        afb: 'AFB I',
        title: 'Fachbegriffe sichern',
        prompt: 'Ordne die Fachbegriffe den passenden Erklärungen zu.',
        rightOptions: [
          'Abgabe von Elektronen',
          'Aufnahme von Elektronen',
          'Bereich, an dem Oxidation stattfindet',
          'Bereich, an dem Reduktion stattfindet',
          'Flüssigkeit, in der Ionen beweglich sind',
          'kleines galvanisches Element auf einer Metalloberfläche',
        ],
        pairs: [
          { left: 'Oxidation', correctRight: 'Abgabe von Elektronen' },
          { left: 'Reduktion', correctRight: 'Aufnahme von Elektronen' },
          { left: 'Anode', correctRight: 'Bereich, an dem Oxidation stattfindet' },
          { left: 'Kathode', correctRight: 'Bereich, an dem Reduktion stattfindet' },
          { left: 'Elektrolyt', correctRight: 'Flüssigkeit, in der Ionen beweglich sind' },
          { left: 'Lokalelement', correctRight: 'kleines galvanisches Element auf einer Metalloberfläche' },
        ],
        modelAnswer: 'Oxidation = Elektronenabgabe; Reduktion = Elektronenaufnahme; Anode = Oxidationsbereich; Kathode = Reduktionsbereich; Elektrolyt = ionenleitende Flüssigkeit; Lokalelement = kleines galvanisches Element auf der Oberfläche.',
      },
      {
        id: 'oc-10-everyday-application',
        type: 'freeTextCriteria',
        afb: 'AFB II',
        title: 'Anwendung: Rost am Fahrrad',
        prompt: 'Ein Fahrrad steht längere Zeit draußen im Regen. Besonders an Kratzern im Lack beginnt der Rahmen zu rosten. Erkläre dies mithilfe des Modells des Lokalelements.',
        criteria: [
          'Am Kratzer liegt Eisen frei.',
          'Wasser bildet einen leitfähigen Wasserfilm bzw. Elektrolyten.',
          'Sauerstoff wird an kathodischen Bereichen reduziert.',
          'Eisen wird an anodischen Bereichen zu Fe²⁺ oxidiert.',
          'Eine Schutzmaßnahme wird chemisch passend begründet.',
        ],
        modelAnswer: 'An einem Kratzer ist das Eisen nicht mehr durch Lack geschützt. Regenwasser bildet einen Wasserfilm, in dem Ionen beweglich sind. Auf der Oberfläche entstehen anodische und kathodische Bereiche: Eisen wird zu Fe²⁺ oxidiert, Sauerstoff wird reduziert. Dadurch entstehen Hydroxid-Ionen und später Rostprodukte. Eine Schutzmaßnahme wäre z. B. erneutes Lackieren, weil Wasser und Sauerstoff dann nicht mehr direkt an das Eisen gelangen.',
      },
      {
        id: 'oc-11-summary',
        type: 'summaryText',
        afb: 'AFB II',
        title: 'Zusammenfassung',
        prompt: 'Formuliere einen kurzen zusammenhängenden Text mit maximal 8 Sätzen zur Sauerstoffkorrosion von Eisen. Verwende die Begriffe: Eisen, Wasserfilm, Sauerstoff, Anode, Kathode, Elektronen, Hydroxid-Ionen, Rost.',
        requiredTerms: ['Eisen', 'Wasserfilm', 'Sauerstoff', 'Anode', 'Kathode', 'Elektronen', 'Hydroxid-Ionen', 'Rost'],
        modelAnswer: 'Beim Rosten von Eisen bildet sich auf der Oberfläche ein Wasserfilm. In diesem Wasserfilm können Ionen wandern. An der Anode wird Eisen oxidiert und geht als Eisen(II)-Ion in Lösung. Die dabei abgegebenen Elektronen fließen durch das Metall zur Kathode. Dort wird Sauerstoff mit Wasser und Elektronen zu Hydroxid-Ionen reduziert. Eisen(II)-Ionen und Hydroxid-Ionen bilden zunächst Eisen(II)-hydroxid. Durch weitere Reaktionen entstehen verschiedene Eisenoxide und Eisenhydroxide, die man als Rost bezeichnet.',
      },
    ],

    oxygenCorrosionSelfCheck: [
      'Ich kann erklären, warum Wasser und Sauerstoff für das Rosten notwendig sind.',
      'Ich kann das Rosten von Eisen als elektrochemischen Vorgang beschreiben.',
      'Ich kann Anode und Kathode bei der Sauerstoffkorrosion zuordnen.',
      'Ich kann die Oxidation von Eisen formulieren.',
      'Ich kann die Reduktion von Sauerstoff formulieren.',
      'Ich kann erklären, wie aus Fe²⁺-Ionen und OH⁻-Ionen Rostprodukte entstehen.',
    ],
  };

  window.corrosionData = corrosionData;
})();