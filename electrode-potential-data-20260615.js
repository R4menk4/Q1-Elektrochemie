window.electrodePotentialData = {
  "electrodePotentialIntroPage": {
    "id": "electrode-potential-intro",
    "title": "Elektrodenpotenziale und Zellspannungen",
    "subtitle": "Elektrodenpotenziale helfen dabei vorherzusagen, welche Halbzelle Elektronen aufnimmt und wie groß die Spannung einer galvanischen Zelle ist.",
    "sections": [
      {
        "id": "what-is-potential",
        "title": "Was ist ein Elektrodenpotenzial?",
        "content": [
          "Ein Elektrodenpotenzial beschreibt die Neigung eines Redoxpaares zur Elektronenaufnahme.",
          "Je positiver das Standardelektrodenpotenzial ist, desto eher wird die oxidierte Form reduziert.",
          "Je negativer das Standardelektrodenpotenzial ist, desto eher gibt die reduzierte Form Elektronen ab."
        ],
        "keyIdea": "Ein Elektrodenpotenzial beschreibt keine einzelne sichtbare Spannung, sondern eine Reduktionsneigung im Vergleich zu einer Bezugselektrode."
      },
      {
        "id": "why-two-half-cells",
        "title": "Warum braucht man zwei Halbzellen?",
        "content": [
          "Eine Spannung kann man nur als Potenzialdifferenz zwischen zwei Elektroden messen.",
          "Deshalb besteht eine galvanische Zelle immer aus zwei Halbzellen.",
          "Die Halbzelle mit dem höheren Elektrodenpotenzial wirkt als Kathode. Dort findet die Reduktion statt.",
          "Die Halbzelle mit dem niedrigeren Elektrodenpotenzial wirkt als Anode. Dort findet die Oxidation statt."
        ],
        "keyIdea": "Höheres Potenzial: Kathode und Reduktion. Niedrigeres Potenzial: Anode und Oxidation."
      },
      {
        "id": "cell-voltage",
        "title": "Wie berechnet man die Zellspannung?",
        "content": [
          "Die Zellspannung ergibt sich aus der Differenz der Elektrodenpotenziale.",
          "Dabei wird das Potenzial der Anode vom Potenzial der Kathode abgezogen.",
          "Ist die Zellspannung positiv, kann die Reaktion freiwillig als galvanische Zelle ablaufen."
        ],
        "formula": "U = E(Kathode) − E(Anode)",
        "example": {
          "title": "Beispiel Daniell-Element",
          "given": [
            "Zn²⁺/Zn: −0,76 V",
            "Cu²⁺/Cu: +0,34 V"
          ],
          "solution": [
            "Kathode: Cu²⁺/Cu, weil +0,34 V höher ist.",
            "Anode: Zn²⁺/Zn, weil −0,76 V niedriger ist.",
            "U = 0,34 V − (−0,76 V) = 1,10 V."
          ]
        }
      }
    ],
    "interactiveElement": {
      "type": "halfCellSelector",
      "title": "Halbzellen vergleichen",
      "instruction": "Wähle zwei Halbzellen aus. Das Programm bestimmt automatisch Anode, Kathode, Elektronenflussrichtung und Zellspannung.",
      "potentials": [
        {
          "id": "mg",
          "redoxPair": "Mg²⁺/Mg",
          "oxidizedForm": "Mg²⁺",
          "reducedForm": "Mg",
          "metal": "Magnesium",
          "symbol": "Mg",
          "potential": -2.37
        },
        {
          "id": "zn",
          "redoxPair": "Zn²⁺/Zn",
          "oxidizedForm": "Zn²⁺",
          "reducedForm": "Zn",
          "metal": "Zink",
          "symbol": "Zn",
          "potential": -0.76
        },
        {
          "id": "fe",
          "redoxPair": "Fe²⁺/Fe",
          "oxidizedForm": "Fe²⁺",
          "reducedForm": "Fe",
          "metal": "Eisen",
          "symbol": "Fe",
          "potential": -0.44
        },
        {
          "id": "h2",
          "redoxPair": "2 H⁺/H₂",
          "oxidizedForm": "H⁺",
          "reducedForm": "H₂",
          "metal": "Standardwasserstoffelektrode",
          "symbol": "H₂",
          "potential": 0
        },
        {
          "id": "cu",
          "redoxPair": "Cu²⁺/Cu",
          "oxidizedForm": "Cu²⁺",
          "reducedForm": "Cu",
          "metal": "Kupfer",
          "symbol": "Cu",
          "potential": 0.34
        },
        {
          "id": "ag",
          "redoxPair": "Ag⁺/Ag",
          "oxidizedForm": "Ag⁺",
          "reducedForm": "Ag",
          "metal": "Silber",
          "symbol": "Ag",
          "potential": 0.8
        }
      ],
      "defaultSelection": {
        "halfCellA": "zn",
        "halfCellB": "cu"
      },
      "resultRules": {
        "cathode": "higherPotential",
        "anode": "lowerPotential",
        "voltageFormula": "U = E(Kathode) − E(Anode)",
        "electronFlow": "fromAnodeToCathode"
      }
    }
  },
  "electrodePotentialMeta": {
    "id": "electrode-potentials",
    "title": "Elektrodenpotenziale",
    "subtitle": "Verstehe, wie Elektrodenpotenziale entstehen, warum man die Standardwasserstoffelektrode braucht und wie Zellspannungen berechnet werden.",
    "overviewButtonLabel": "Zurück zur Übersicht",
    "modulePath": "electrode-potentials"
  },
  "electrodePotentialOverviewCards": [
    {
      "id": "electrode-potential-intro",
      "title": "Elektrodenpotenziale und Zellspannungen",
      "shortTitle": "Grundlagen",
      "description": "Lerne, was ein Elektrodenpotenzial aussagt, wie Anode und Kathode bestimmt werden und wie man Zellspannungen berechnet.",
      "icon": "⚡",
      "targetView": "electrodePotentialIntro",
      "operators": [
        {
          "name": "beschreiben",
          "afb": "I"
        },
        {
          "name": "erklären",
          "afb": "II"
        },
        {
          "name": "berechnen",
          "afb": "II"
        }
      ]
    },
    {
      "id": "standard-hydrogen-electrode",
      "title": "Standardwasserstoffelektrode",
      "shortTitle": "SHE",
      "description": "Verstehe, warum man eine Bezugselektrode braucht und warum das Standardpotenzial der Wasserstoffelektrode auf 0,00 V festgelegt ist.",
      "icon": "H₂",
      "targetView": "standardHydrogenElectrode",
      "operators": [
        {
          "name": "beschreiben",
          "afb": "I"
        },
        {
          "name": "erklären",
          "afb": "II"
        },
        {
          "name": "deuten",
          "afb": "II"
        }
      ]
    },
    {
      "id": "electrode-potential-practice-overview",
      "title": "Übungen",
      "shortTitle": "Üben",
      "description": "Übe gezielt Begriffe, Halbzellen, Zellspannungen, Gesamtreaktionen und die Beurteilung freiwilliger Redoxreaktionen.",
      "icon": "✓",
      "targetView": "electrodePotentialPracticeOverview",
      "operators": [
        {
          "name": "zuordnen",
          "afb": "I"
        },
        {
          "name": "berechnen",
          "afb": "II"
        },
        {
          "name": "beurteilen",
          "afb": "III"
        }
      ]
    }
  ],
  "electrodePotentialPracticeExercises": [
    {
      "id": "practice-terms",
      "title": "Übung 1: Begriffe zuordnen",
      "shortTitle": "Begriffe",
      "description": "Ordne zentrale Begriffe rund um Elektrodenpotenziale, Anode, Kathode und Elektronenfluss zu.",
      "type": "matchingExercise",
      "checking": {
        "type": "direct",
        "feedback": "color"
      },
      "materials": [
        {
          "title": "Merksatz",
          "type": "text",
          "content": "In einer freiwillig ablaufenden galvanischen Zelle findet an der Anode die Oxidation und an der Kathode die Reduktion statt. Elektronen fließen außen von der Anode zur Kathode."
        }
      ],
      "tasks": [
        {
          "id": "terms-a",
          "prompt": "Ordne die Begriffe richtig zu.",
          "pairs": [
            {
              "left": "höheres Elektrodenpotenzial",
              "correctRight": "Kathode / Reduktion"
            },
            {
              "left": "niedrigeres Elektrodenpotenzial",
              "correctRight": "Anode / Oxidation"
            },
            {
              "left": "Elektronenfluss",
              "correctRight": "von Anode zu Kathode"
            },
            {
              "left": "positive Zellspannung",
              "correctRight": "freiwillige Reaktion möglich"
            }
          ],
          "rightOptions": [
            "Kathode / Reduktion",
            "Anode / Oxidation",
            "von Anode zu Kathode",
            "freiwillige Reaktion möglich"
          ]
        }
      ],
      "modelAnswer": "Höheres Elektrodenpotenzial: Kathode/Reduktion. Niedrigeres Elektrodenpotenzial: Anode/Oxidation. Elektronen fließen von der Anode zur Kathode. Eine positive Zellspannung zeigt an, dass die Reaktion freiwillig ablaufen kann."
    },
    {
      "id": "practice-half-cells",
      "title": "Übung 2: Halbzellen auswählen",
      "shortTitle": "Halbzellen",
      "description": "Bestimme Anode und Kathode anhand von Standardelektrodenpotenzialen.",
      "type": "halfCellChoiceExercise",
      "checking": {
        "type": "direct",
        "feedback": "color"
      },
      "materials": [
        {
          "title": "Material 1: Standardelektrodenpotenziale",
          "type": "table",
          "columns": [
            "Redoxpaar",
            "E° in V"
          ],
          "rows": [
            [
              "Zn²⁺/Zn",
              "−0,76"
            ],
            [
              "Cu²⁺/Cu",
              "+0,34"
            ],
            [
              "Ag⁺/Ag",
              "+0,80"
            ]
          ]
        }
      ],
      "tasks": [
        {
          "id": "half-cells-a",
          "prompt": "Gegeben sind die Halbzellen Zn²⁺/Zn und Cu²⁺/Cu. Bestimme Anode und Kathode.",
          "fields": [
            {
              "id": "anode",
              "label": "Anode",
              "correctValues": [
                "Zn²⁺/Zn",
                "Zn/Zn²⁺",
                "Zink",
                "Zn"
              ]
            },
            {
              "id": "kathode",
              "label": "Kathode",
              "correctValues": [
                "Cu²⁺/Cu",
                "Cu/Cu²⁺",
                "Kupfer",
                "Cu"
              ]
            },
            {
              "id": "reason",
              "label": "Begründung",
              "correctValues": [
                "Cu hat das höhere Potenzial",
                "Cu²⁺/Cu hat das höhere Potenzial",
                "Zink hat das niedrigere Potenzial",
                "Zn²⁺/Zn hat das niedrigere Potenzial"
              ]
            }
          ]
        },
        {
          "id": "half-cells-b",
          "prompt": "Gegeben sind die Halbzellen Cu²⁺/Cu und Ag⁺/Ag. Bestimme Anode und Kathode.",
          "fields": [
            {
              "id": "anode",
              "label": "Anode",
              "correctValues": [
                "Cu²⁺/Cu",
                "Cu/Cu²⁺",
                "Kupfer",
                "Cu"
              ]
            },
            {
              "id": "kathode",
              "label": "Kathode",
              "correctValues": [
                "Ag⁺/Ag",
                "Ag/Ag⁺",
                "Silber",
                "Ag"
              ]
            },
            {
              "id": "reason",
              "label": "Begründung",
              "correctValues": [
                "Ag hat das höhere Potenzial",
                "Ag⁺/Ag hat das höhere Potenzial",
                "Kupfer hat das niedrigere Potenzial",
                "Cu²⁺/Cu hat das niedrigere Potenzial"
              ]
            }
          ]
        }
      ],
      "modelAnswer": "Die Halbzelle mit dem höheren Standardelektrodenpotenzial ist die Kathode. Die Halbzelle mit dem niedrigeren Standardelektrodenpotenzial ist die Anode."
    },
    {
      "id": "practice-cell-voltage",
      "title": "Übung 3: Zellspannung berechnen",
      "shortTitle": "Zellspannung",
      "description": "Berechne die Zellspannung galvanischer Zellen mithilfe von Standardelektrodenpotenzialen.",
      "type": "calculationExercise",
      "checking": {
        "type": "direct",
        "feedback": "color"
      },
      "formula": "U = E(Kathode) − E(Anode)",
      "materials": [
        {
          "title": "Material 1: Standardelektrodenpotenziale",
          "type": "table",
          "columns": [
            "Redoxpaar",
            "E° in V"
          ],
          "rows": [
            [
              "Mg²⁺/Mg",
              "−2,37"
            ],
            [
              "Zn²⁺/Zn",
              "−0,76"
            ],
            [
              "Fe²⁺/Fe",
              "−0,44"
            ],
            [
              "Cu²⁺/Cu",
              "+0,34"
            ],
            [
              "Ag⁺/Ag",
              "+0,80"
            ]
          ]
        }
      ],
      "tasks": [
        {
          "id": "voltage-a",
          "prompt": "Berechne die Zellspannung der galvanischen Zelle Zn/Zn²⁺ || Cu²⁺/Cu.",
          "fields": [
            {
              "id": "eKathode",
              "label": "E(Kathode) in V",
              "correctValue": 0.34
            },
            {
              "id": "eAnode",
              "label": "E(Anode) in V",
              "correctValue": -0.76
            },
            {
              "id": "voltage",
              "label": "U in V",
              "correctValue": 1.1
            }
          ],
          "tolerance": 0.01,
          "modelAnswer": "U = 0,34 V − (−0,76 V) = 1,10 V."
        },
        {
          "id": "voltage-b",
          "prompt": "Berechne die Zellspannung der galvanischen Zelle Mg/Mg²⁺ || Ag⁺/Ag.",
          "fields": [
            {
              "id": "eKathode",
              "label": "E(Kathode) in V",
              "correctValue": 0.8
            },
            {
              "id": "eAnode",
              "label": "E(Anode) in V",
              "correctValue": -2.37
            },
            {
              "id": "voltage",
              "label": "U in V",
              "correctValue": 3.17
            }
          ],
          "tolerance": 0.01,
          "modelAnswer": "U = 0,80 V − (−2,37 V) = 3,17 V."
        },
        {
          "id": "voltage-c",
          "prompt": "Berechne die Zellspannung der galvanischen Zelle Fe/Fe²⁺ || Cu²⁺/Cu.",
          "fields": [
            {
              "id": "eKathode",
              "label": "E(Kathode) in V",
              "correctValue": 0.34
            },
            {
              "id": "eAnode",
              "label": "E(Anode) in V",
              "correctValue": -0.44
            },
            {
              "id": "voltage",
              "label": "U in V",
              "correctValue": 0.78
            }
          ],
          "tolerance": 0.01,
          "modelAnswer": "U = 0,34 V − (−0,44 V) = 0,78 V."
        }
      ]
    },
    {
      "id": "practice-overall-reaction",
      "title": "Übung 4: Gesamtreaktion formulieren",
      "shortTitle": "Gesamtreaktion",
      "description": "Formuliere Oxidation, Reduktion und Gesamtreaktion mit Reaktionsgleichungs-Kästchen.",
      "type": "redoxEquationScaffold",
      "checking": {
        "type": "direct",
        "feedback": "color"
      },
      "materials": [
        {
          "title": "Material 1: Gegebene Halbzellen",
          "type": "text-list",
          "content": [
            "Zink-Halbzelle: Zn²⁺/Zn, E° = −0,76 V",
            "Kupfer-Halbzelle: Cu²⁺/Cu, E° = +0,34 V"
          ]
        }
      ],
      "prompt": "Formuliere die Oxidation, die Reduktion und die Gesamtreaktion für die Zn/Cu-Zelle.",
      "scaffold": {
        "instruction": "Fülle die Kästchen für Koeffizienten, Elementsymbole, Indizes, Ladungen und Elektronen aus. Plus-Zeichen und Reaktionspfeile sind vorgegeben.",
        "equations": [
          {
            "label": "Oxidation",
            "expectedDisplay": "Zn → Zn²⁺ + 2 e⁻",
            "parts": [
              {
                "type": "particle",
                "coefficient": {
                  "correct": "",
                  "accepted": [
                    "",
                    "1"
                  ]
                },
                "formula": [
                  {
                    "element": {
                      "correct": "Zn",
                      "accepted": [
                        "Zn",
                        "zn"
                      ]
                    },
                    "index": {
                      "correct": "",
                      "accepted": [
                        "",
                        "1"
                      ]
                    },
                    "charge": {
                      "correct": "",
                      "accepted": [
                        "",
                        "0"
                      ]
                    }
                  }
                ]
              },
              {
                "type": "arrow"
              },
              {
                "type": "particle",
                "coefficient": {
                  "correct": "",
                  "accepted": [
                    "",
                    "1"
                  ]
                },
                "formula": [
                  {
                    "element": {
                      "correct": "Zn",
                      "accepted": [
                        "Zn",
                        "zn"
                      ]
                    },
                    "index": {
                      "correct": "",
                      "accepted": [
                        "",
                        "1"
                      ]
                    },
                    "charge": {
                      "correct": "2+",
                      "accepted": [
                        "2+",
                        "+2",
                        "²⁺"
                      ]
                    }
                  }
                ]
              },
              {
                "type": "plus"
              },
              {
                "type": "electron",
                "coefficient": {
                  "correct": "2",
                  "accepted": [
                    "2"
                  ]
                },
                "symbol": "e",
                "charge": {
                  "correct": "-",
                  "accepted": [
                    "-",
                    "−",
                    "⁻"
                  ]
                }
              }
            ]
          },
          {
            "label": "Reduktion",
            "expectedDisplay": "Cu²⁺ + 2 e⁻ → Cu",
            "parts": [
              {
                "type": "particle",
                "coefficient": {
                  "correct": "",
                  "accepted": [
                    "",
                    "1"
                  ]
                },
                "formula": [
                  {
                    "element": {
                      "correct": "Cu",
                      "accepted": [
                        "Cu",
                        "cu"
                      ]
                    },
                    "index": {
                      "correct": "",
                      "accepted": [
                        "",
                        "1"
                      ]
                    },
                    "charge": {
                      "correct": "2+",
                      "accepted": [
                        "2+",
                        "+2",
                        "²⁺"
                      ]
                    }
                  }
                ]
              },
              {
                "type": "plus"
              },
              {
                "type": "electron",
                "coefficient": {
                  "correct": "2",
                  "accepted": [
                    "2"
                  ]
                },
                "symbol": "e",
                "charge": {
                  "correct": "-",
                  "accepted": [
                    "-",
                    "−",
                    "⁻"
                  ]
                }
              },
              {
                "type": "arrow"
              },
              {
                "type": "particle",
                "coefficient": {
                  "correct": "",
                  "accepted": [
                    "",
                    "1"
                  ]
                },
                "formula": [
                  {
                    "element": {
                      "correct": "Cu",
                      "accepted": [
                        "Cu",
                        "cu"
                      ]
                    },
                    "index": {
                      "correct": "",
                      "accepted": [
                        "",
                        "1"
                      ]
                    },
                    "charge": {
                      "correct": "",
                      "accepted": [
                        "",
                        "0"
                      ]
                    }
                  }
                ]
              }
            ]
          },
          {
            "label": "Gesamtgleichung",
            "expectedDisplay": "Zn + Cu²⁺ → Zn²⁺ + Cu",
            "parts": [
              {
                "type": "particle",
                "coefficient": {
                  "correct": "",
                  "accepted": [
                    "",
                    "1"
                  ]
                },
                "formula": [
                  {
                    "element": {
                      "correct": "Zn",
                      "accepted": [
                        "Zn",
                        "zn"
                      ]
                    },
                    "index": {
                      "correct": "",
                      "accepted": [
                        "",
                        "1"
                      ]
                    },
                    "charge": {
                      "correct": "",
                      "accepted": [
                        "",
                        "0"
                      ]
                    }
                  }
                ]
              },
              {
                "type": "plus"
              },
              {
                "type": "particle",
                "coefficient": {
                  "correct": "",
                  "accepted": [
                    "",
                    "1"
                  ]
                },
                "formula": [
                  {
                    "element": {
                      "correct": "Cu",
                      "accepted": [
                        "Cu",
                        "cu"
                      ]
                    },
                    "index": {
                      "correct": "",
                      "accepted": [
                        "",
                        "1"
                      ]
                    },
                    "charge": {
                      "correct": "2+",
                      "accepted": [
                        "2+",
                        "+2",
                        "²⁺"
                      ]
                    }
                  }
                ]
              },
              {
                "type": "arrow"
              },
              {
                "type": "particle",
                "coefficient": {
                  "correct": "",
                  "accepted": [
                    "",
                    "1"
                  ]
                },
                "formula": [
                  {
                    "element": {
                      "correct": "Zn",
                      "accepted": [
                        "Zn",
                        "zn"
                      ]
                    },
                    "index": {
                      "correct": "",
                      "accepted": [
                        "",
                        "1"
                      ]
                    },
                    "charge": {
                      "correct": "2+",
                      "accepted": [
                        "2+",
                        "+2",
                        "²⁺"
                      ]
                    }
                  }
                ]
              },
              {
                "type": "plus"
              },
              {
                "type": "particle",
                "coefficient": {
                  "correct": "",
                  "accepted": [
                    "",
                    "1"
                  ]
                },
                "formula": [
                  {
                    "element": {
                      "correct": "Cu",
                      "accepted": [
                        "Cu",
                        "cu"
                      ]
                    },
                    "index": {
                      "correct": "",
                      "accepted": [
                        "",
                        "1"
                      ]
                    },
                    "charge": {
                      "correct": "",
                      "accepted": [
                        "",
                        "0"
                      ]
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      "modelAnswer": "Oxidation: Zn → Zn²⁺ + 2 e⁻. Reduktion: Cu²⁺ + 2 e⁻ → Cu. Gesamtreaktion: Zn + Cu²⁺ → Zn²⁺ + Cu."
    },
    {
      "id": "practice-spontaneity",
      "title": "Übung 5: Freiwilligkeit beurteilen",
      "shortTitle": "Freiwilligkeit",
      "description": "Beurteile mithilfe der Zellspannung, ob eine Redoxreaktion freiwillig ablaufen kann.",
      "type": "mixedExercise",
      "checking": {
        "type": "criteria"
      },
      "materials": [
        {
          "title": "Material 1: Mögliche Reaktion",
          "type": "reaction-list",
          "content": [
            "Cu + 2 Ag⁺ → Cu²⁺ + 2 Ag"
          ]
        },
        {
          "title": "Material 2: Standardelektrodenpotenziale",
          "type": "table",
          "columns": [
            "Redoxpaar",
            "E° in V"
          ],
          "rows": [
            [
              "Cu²⁺/Cu",
              "+0,34"
            ],
            [
              "Ag⁺/Ag",
              "+0,80"
            ]
          ]
        }
      ],
      "calculationPart": {
        "type": "calculation",
        "checking": {
          "type": "direct",
          "feedback": "color"
        },
        "prompt": "Berechne zunächst die Zellspannung.",
        "fields": [
          {
            "id": "eKathode",
            "label": "E(Kathode) in V",
            "correctValue": 0.8
          },
          {
            "id": "eAnode",
            "label": "E(Anode) in V",
            "correctValue": 0.34
          },
          {
            "id": "voltage",
            "label": "U in V",
            "correctValue": 0.46
          }
        ],
        "tolerance": 0.01,
        "modelAnswer": "U = E(Kathode) − E(Anode) = 0,80 V − 0,34 V = 0,46 V."
      },
      "freeTextPart": {
        "type": "freeText",
        "checking": {
          "type": "criteria"
        },
        "prompt": "Beurteile, ob die Reaktion freiwillig abläuft. Begründe mithilfe der Zellspannung und der beteiligten Teilreaktionen.",
        "modelAnswer": "Die Reaktion läuft freiwillig ab, weil die Zellspannung mit 0,46 V positiv ist. Kupfer wird oxidiert und gibt Elektronen ab. Silber-Ionen werden reduziert und nehmen Elektronen auf.",
        "criteria": [
          {
            "label": "Die Reaktion wird als freiwillig beurteilt.",
            "matchMode": "any",
            "keywords": [
              "freiwillig",
              "läuft ab",
              "laeuft ab",
              "spontan"
            ]
          },
          {
            "label": "Die positive Zellspannung wird als Begründung genannt.",
            "matchMode": "allGroups",
            "keywordGroups": [
              [
                "positiv",
                "positive",
                "größer 0",
                "groesser 0",
                "0,46",
                "0.46"
              ],
              [
                "zellspannung",
                "spannung",
                "u"
              ]
            ]
          },
          {
            "label": "Silber-Ionen werden als reduzierte Teilchen erkannt.",
            "matchMode": "allGroups",
            "keywordGroups": [
              [
                "silber-ionen",
                "silberionen",
                "ag+",
                "ag⁺"
              ],
              [
                "reduziert",
                "reduktion",
                "elektronenaufnahme",
                "nehmen elektronen auf"
              ]
            ]
          },
          {
            "label": "Kupfer wird als oxidiertes Teilchen erkannt.",
            "matchMode": "allGroups",
            "keywordGroups": [
              [
                "kupfer",
                "cu"
              ],
              [
                "oxidiert",
                "oxidation",
                "elektronenabgabe",
                "gibt elektronen ab"
              ]
            ]
          }
        ]
      }
    }
  ],
  "electrodePotentialPracticeOverview": {
    "id": "electrode-potential-practice-overview",
    "title": "Übungen zu Elektrodenpotenzialen und Zellspannungen",
    "subtitle": "Wähle gezielt aus, was du üben möchtest: Begriffe, Halbzellen, Zellspannungen, Reaktionsgleichungen oder Freiwilligkeit.",
    "cards": [
      {
        "id": "practice-terms",
        "title": "Übung 1: Begriffe zuordnen",
        "description": "Ordne zentrale Begriffe wie Anode, Kathode, Oxidation, Reduktion und Elektronenfluss richtig zu.",
        "operators": [
          {
            "name": "zuordnen",
            "afb": "I"
          },
          {
            "name": "erklären",
            "afb": "II"
          }
        ],
        "targetExerciseId": "practice-terms"
      },
      {
        "id": "practice-half-cells",
        "title": "Übung 2: Halbzellen auswählen",
        "description": "Bestimme mithilfe einer Potenzialtabelle, welche Halbzelle als Kathode und welche als Anode wirkt.",
        "operators": [
          {
            "name": "bestimmen",
            "afb": "I"
          },
          {
            "name": "begründen",
            "afb": "II"
          }
        ],
        "targetExerciseId": "practice-half-cells"
      },
      {
        "id": "practice-cell-voltage",
        "title": "Übung 3: Zellspannung berechnen",
        "description": "Berechne Zellspannungen aus Standardelektrodenpotenzialen und überprüfe deinen Rechenweg.",
        "operators": [
          {
            "name": "berechnen",
            "afb": "II"
          },
          {
            "name": "erläutern",
            "afb": "II"
          }
        ],
        "targetExerciseId": "practice-cell-voltage"
      },
      {
        "id": "practice-overall-reaction",
        "title": "Übung 4: Gesamtreaktion formulieren",
        "description": "Formuliere Oxidation, Reduktion und Gesamtreaktion mit beschreibbaren Reaktionsgleichungs-Kästchen.",
        "operators": [
          {
            "name": "formulieren",
            "afb": "II"
          },
          {
            "name": "aufstellen",
            "afb": "II"
          }
        ],
        "targetExerciseId": "practice-overall-reaction"
      },
      {
        "id": "practice-spontaneity",
        "title": "Übung 5: Freiwilligkeit beurteilen",
        "description": "Entscheide mithilfe der Zellspannung, ob eine Redoxreaktion freiwillig abläuft.",
        "operators": [
          {
            "name": "berechnen",
            "afb": "II"
          },
          {
            "name": "beurteilen",
            "afb": "III"
          }
        ],
        "targetExerciseId": "practice-spontaneity"
      }
    ]
  },
  "standardHydrogenElectrodePage": {
    "id": "standard-hydrogen-electrode",
    "title": "Standardwasserstoffelektrode",
    "subtitle": "Die Standardwasserstoffelektrode ist die Bezugselektrode für Standardelektrodenpotenziale.",
    "sections": [
      {
        "id": "problem",
        "title": "Das Problem",
        "content": [
          "Ein einzelnes Elektrodenpotenzial kann nicht direkt gemessen werden.",
          "Messbar ist immer nur eine Spannung zwischen zwei Elektroden.",
          "Damit man Elektrodenpotenziale vergleichen kann, braucht man eine festgelegte Bezugselektrode."
        ]
      },
      {
        "id": "solution",
        "title": "Die Lösung: eine Bezugselektrode",
        "content": [
          "Als Bezugselektrode nutzt man die Standardwasserstoffelektrode.",
          "Ihr Standardelektrodenpotenzial wurde per Definition auf 0,00 V festgelegt.",
          "Alle anderen Standardelektrodenpotenziale werden im Vergleich zu dieser Elektrode angegeben."
        ]
      },
      {
        "id": "setup",
        "title": "Aufbau der Standardwasserstoffelektrode",
        "content": [
          "Eine Platinelektrode taucht in eine saure Lösung.",
          "Wasserstoffgas H₂ wird an der Platinelektrode vorbeigeleitet.",
          "In der Lösung befinden sich Wasserstoff-Ionen H⁺ bzw. Oxonium-Ionen H₃O⁺.",
          "Die Platinelektrode dient als leitende Oberfläche, weil Wasserstoff selbst kein Metall ist."
        ],
        "labels": [
          "Platinelektrode",
          "Wasserstoffgas H₂",
          "saure Lösung mit H⁺/H₃O⁺",
          "Standardpotenzial E° = 0,00 V"
        ]
      },
      {
        "id": "half-reaction",
        "title": "Halbreaktion",
        "content": [
          "Die Standardwasserstoffelektrode kann je nach Partnerhalbzelle als Anode oder Kathode wirken.",
          "Die zugehörige Halbreaktion ist umkehrbar."
        ],
        "formula": "2 H⁺ + 2 e⁻ ⇌ H₂"
      },
      {
        "id": "meaning",
        "title": "Bedeutung",
        "content": [
          "Wird eine Metallhalbzelle gegen die Standardwasserstoffelektrode gemessen, erhält man ihr Standardelektrodenpotenzial.",
          "Ein negatives Standardpotenzial bedeutet: Die Metallhalbzelle gibt im Vergleich zur Wasserstoffelektrode leichter Elektronen ab.",
          "Ein positives Standardpotenzial bedeutet: Die oxidierte Form der Metallhalbzelle nimmt im Vergleich zu H⁺ leichter Elektronen auf."
        ]
      }
    ],
    "simulation": {
      "type": "standardHydrogenElectrodeSimulation",
      "title": "Simulation: Metallhalbzelle gegen Standardwasserstoffelektrode",
      "instruction": "Wähle eine Metallhalbzelle aus und beobachte, welche Elektrode Anode bzw. Kathode ist.",
      "referenceElectrode": {
        "id": "h2",
        "title": "Standardwasserstoffelektrode",
        "potential": 0,
        "halfReaction": "2 H⁺ + 2 e⁻ ⇌ H₂",
        "labels": [
          "Pt",
          "H₂",
          "H⁺/H₃O⁺",
          "E° = 0,00 V"
        ]
      },
      "selectableHalfCells": [
        {
          "id": "zn",
          "title": "Zink-Halbzelle",
          "redoxPair": "Zn²⁺/Zn",
          "potential": -0.76,
          "explanation": [
            "Zink besitzt ein negativeres Standardelektrodenpotenzial als die Wasserstoffelektrode.",
            "Zink wird oxidiert.",
            "Elektronen fließen von der Zinkelektrode zur Standardwasserstoffelektrode.",
            "Daraus folgt: E°(Zn²⁺/Zn) = −0,76 V."
          ],
          "oxidation": "Zn → Zn²⁺ + 2 e⁻",
          "reduction": "2 H⁺ + 2 e⁻ → H₂"
        },
        {
          "id": "cu",
          "title": "Kupfer-Halbzelle",
          "redoxPair": "Cu²⁺/Cu",
          "potential": 0.34,
          "explanation": [
            "Kupfer besitzt ein positiveres Standardelektrodenpotenzial als die Wasserstoffelektrode.",
            "Kupfer-Ionen werden reduziert.",
            "Elektronen fließen von der Standardwasserstoffelektrode zur Kupferhalbzelle.",
            "Daraus folgt: E°(Cu²⁺/Cu) = +0,34 V."
          ],
          "oxidation": "H₂ → 2 H⁺ + 2 e⁻",
          "reduction": "Cu²⁺ + 2 e⁻ → Cu"
        },
        {
          "id": "ag",
          "title": "Silber-Halbzelle",
          "redoxPair": "Ag⁺/Ag",
          "potential": 0.8,
          "explanation": [
            "Silber besitzt ein deutlich positiveres Standardelektrodenpotenzial als die Wasserstoffelektrode.",
            "Silber-Ionen werden reduziert.",
            "Elektronen fließen von der Standardwasserstoffelektrode zur Silberhalbzelle.",
            "Daraus folgt: E°(Ag⁺/Ag) = +0,80 V."
          ],
          "oxidation": "H₂ → 2 H⁺ + 2 e⁻",
          "reduction": "2 Ag⁺ + 2 e⁻ → 2 Ag"
        }
      ],
      "visualElements": {
        "showGasBubbles": true,
        "showElectronFlow": true,
        "showIonMovement": true,
        "showVoltmeter": true,
        "showHalfReactions": true
      }
    }
  },
  "standardPotentials": [
    {
      "id": "mg",
      "redoxPair": "Mg²⁺/Mg",
      "oxidizedForm": "Mg²⁺",
      "reducedForm": "Mg",
      "metal": "Magnesium",
      "symbol": "Mg",
      "potential": -2.37
    },
    {
      "id": "zn",
      "redoxPair": "Zn²⁺/Zn",
      "oxidizedForm": "Zn²⁺",
      "reducedForm": "Zn",
      "metal": "Zink",
      "symbol": "Zn",
      "potential": -0.76
    },
    {
      "id": "fe",
      "redoxPair": "Fe²⁺/Fe",
      "oxidizedForm": "Fe²⁺",
      "reducedForm": "Fe",
      "metal": "Eisen",
      "symbol": "Fe",
      "potential": -0.44
    },
    {
      "id": "h2",
      "redoxPair": "2 H⁺/H₂",
      "oxidizedForm": "H⁺",
      "reducedForm": "H₂",
      "metal": "Standardwasserstoffelektrode",
      "symbol": "H₂",
      "potential": 0
    },
    {
      "id": "cu",
      "redoxPair": "Cu²⁺/Cu",
      "oxidizedForm": "Cu²⁺",
      "reducedForm": "Cu",
      "metal": "Kupfer",
      "symbol": "Cu",
      "potential": 0.34
    },
    {
      "id": "ag",
      "redoxPair": "Ag⁺/Ag",
      "oxidizedForm": "Ag⁺",
      "reducedForm": "Ag",
      "metal": "Silber",
      "symbol": "Ag",
      "potential": 0.8
    }
  ]
};
