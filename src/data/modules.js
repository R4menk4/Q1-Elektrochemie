export const modules = [
  {
    id: 'redox',
    title: 'Redoxreaktionen aufstellen',
    description: 'Oxidation, Reduktion, Elektronenanzahl und Gesamtreaktion ueben.',
    status: 'active',
    target: 'redoxOverview',
  },
  {
    id: 'electrode-potentials',
    title: 'Elektrodenpotenziale',
    description:
      'Verstehe, wie Elektrodenpotenziale entstehen, warum man die Standardwasserstoffelektrode braucht und wie Zellspannungen berechnet werden.',
    status: 'active',
    target: 'electrodePotentials',
  },
  {
    id: 'galvanische-zellen',
    title: 'Galvanische Zelle – Daniell-Element Simulation',
    description:
      'Erkunde den Elektronenfluss, die Oxidation an der Zink-Elektrode, die Reduktion an der Kupfer-Elektrode und den Ladungsausgleich durch die Ionenbrücke.',
    status: 'active',
    href: `${import.meta.env.BASE_URL}Simulationen/Galvanische_Zelle/index.html`,
  },
  {
    id: 'elektrolyse',
    title: 'Elektrolyse',
    description: 'Kommt spaeter',
    status: 'coming-soon',
  },
  {
    id: 'spannungsreihe',
    title: 'Spannungsreihe',
    description: 'Kommt spaeter',
    status: 'coming-soon',
  },
  {
    id: 'korrosion',
    title: 'Korrosion',
    description: 'Kommt spaeter',
    status: 'coming-soon',
  },
  {
    id: 'batterien',
    title: 'Batterien und Akkumulatoren',
    description: 'Kommt spaeter',
    status: 'coming-soon',
  },
];
