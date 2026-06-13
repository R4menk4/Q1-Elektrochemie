window.klausurTaskData = {
  "klausurTasks": [
    {
      "id": "kupferdach-patina",
      "title": "Warum verfärbt sich ein Kupferdach?",
      "shortTitle": "Kupferdach",
      "description": "Oxidationszahlen, Oxidation und Reduktion an einem Alltagsphänomen üben.",
      "image": "assets/images/Grünspan.png",
      "context": "Viele ältere Gebäude besitzen Dächer oder Regenrinnen aus Kupfer. Frisches Kupfer glänzt rötlich, mit der Zeit bildet sich jedoch eine grünliche Patina.",
      "materials": [
        {
          "title": "Material 1: Vereinfachte Reaktionen bei der Patinabildung",
          "type": "reaction-list",
          "content": [
            "1. Kupfer reagiert mit Sauerstoff zu einem Kupferoxid:",
            "4 Cu + O₂ → 2 Cu₂O",
            "2. Dieses Kupferoxid kann weiter zu einem anderen Kupferoxid reagieren:",
            "2 Cu₂O + O₂ → 4 CuO",
            "3. In feuchter Luft mit Kohlenstoffdioxid entstehen grünliche Kupfercarbonate."
          ]
        }
      ],
      "subtasks": [
        {
          "id": "kupferdach-a",
          "label": "a)",
          "type": "oxidationNumberEquation",
          "checking": {
            "type": "direct",
            "feedback": "color"
          },
          "prompt": "Bestimme die Oxidationszahlen von Kupfer und Sauerstoff in den Reaktionen 1 und 2.",
          "equations": [
            {
              "label": "Reaktion 1",
              "display": "4 Cu + O₂ → 2 Cu₂O",
              "fields": [
                {
                  "id": "r1-cu-elementar",
                  "target": "Cu in Cu",
                  "element": "Cu",
                  "correct": [
                    "0"
                  ]
                },
                {
                  "id": "r1-o2",
                  "target": "O in O₂",
                  "element": "O",
                  "correct": [
                    "0"
                  ]
                },
                {
                  "id": "r1-cu-cu2o",
                  "target": "Cu in Cu₂O",
                  "element": "Cu",
                  "correct": [
                    "+I",
                    "+1",
                    "1"
                  ]
                },
                {
                  "id": "r1-o-cu2o",
                  "target": "O in Cu₂O",
                  "element": "O",
                  "correct": [
                    "−II",
                    "-II",
                    "−2",
                    "-2"
                  ]
                }
              ]
            },
            {
              "label": "Reaktion 2",
              "display": "2 Cu₂O + O₂ → 4 CuO",
              "fields": [
                {
                  "id": "r2-cu-cu2o",
                  "target": "Cu in Cu₂O",
                  "element": "Cu",
                  "correct": [
                    "+I",
                    "+1",
                    "1"
                  ]
                },
                {
                  "id": "r2-o-cu2o",
                  "target": "O in Cu₂O",
                  "element": "O",
                  "correct": [
                    "−II",
                    "-II",
                    "−2",
                    "-2"
                  ]
                },
                {
                  "id": "r2-o2",
                  "target": "O in O₂",
                  "element": "O",
                  "correct": [
                    "0"
                  ]
                },
                {
                  "id": "r2-cu-cuo",
                  "target": "Cu in CuO",
                  "element": "Cu",
                  "correct": [
                    "+II",
                    "+2",
                    "2"
                  ]
                },
                {
                  "id": "r2-o-cuo",
                  "target": "O in CuO",
                  "element": "O",
                  "correct": [
                    "−II",
                    "-II",
                    "−2",
                    "-2"
                  ]
                }
              ]
            }
          ],
          "modelAnswer": "Reaktion 1: Cu: 0; O₂: 0; in Cu₂O: Cu +I und O −II. Reaktion 2: in Cu₂O: Cu +I und O −II; O₂: 0; in CuO: Cu +II und O −II."
        },
        {
          "id": "kupferdach-b",
          "label": "b)",
          "type": "freeText",
          "checking": {
            "type": "criteria"
          },
          "prompt": "Erkläre an Reaktion 1 mit Hilfe der Oxidationszahlen, welches Teilchen oxidiert und welches reduziert wird.",
          "modelAnswer": "In Reaktion 1 wird Kupfer oxidiert, da die Oxidationszahl von 0 auf +I steigt. Sauerstoff wird reduziert, da die Oxidationszahl von 0 auf −II sinkt.",
          "criteria": [
            {
              "label": "Kupfer wird als oxidiertes Teilchen genannt.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "kupfer",
                  "cu"
                ],
                [
                  "elektronen abgeben",
                  "gibt elektronen ab",
                  "geben elektronen ab",
                  "elektronenabgabe",
                  "wird oxidiert",
                  "werden oxidiert",
                  "oxidation",
                  "oxidiert"
                ]
              ]
            },
            {
              "label": "Sauerstoff wird als reduziertes Teilchen genannt.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "sauerstoff",
                  "o2",
                  "o₂"
                ],
                [
                  "elektronen aufnehmen",
                  "nimmt elektronen auf",
                  "nehmen elektronen auf",
                  "elektronenaufnahme",
                  "wird reduziert",
                  "werden reduziert",
                  "reduktion",
                  "reduziert"
                ]
              ]
            },
            {
              "label": "Die Erhöhung der Oxidationszahl bei Kupfer wird beschrieben.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "kupfer",
                  "cu"
                ],
                [
                  "0 auf +i",
                  "0 auf +1",
                  "steigt",
                  "erhöhung",
                  "erhoeung",
                  "erhöht",
                  "erhoeht"
                ]
              ]
            },
            {
              "label": "Die Erniedrigung der Oxidationszahl bei Sauerstoff wird beschrieben.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "sauerstoff",
                  "o2",
                  "o₂"
                ],
                [
                  "0 auf -ii",
                  "0 auf −ii",
                  "0 auf -2",
                  "0 auf −2",
                  "sinkt",
                  "erniedrigung",
                  "verringert"
                ]
              ]
            }
          ]
        },
        {
          "id": "kupferdach-c",
          "label": "c)",
          "type": "choiceGroup",
          "checking": {
            "type": "direct",
            "feedback": "color"
          },
          "prompt": "Gib Oxidationsmittel und Reduktionsmittel der Reaktion 1 an.",
          "choices": {
            "oxidationsmittel": [
              "Kupfer",
              "Sauerstoff",
              "Kupferoxid"
            ],
            "reduktionsmittel": [
              "Kupfer",
              "Sauerstoff",
              "Kupferoxid"
            ]
          },
          "correctValues": {
            "oxidationsmittel": "Sauerstoff",
            "reduktionsmittel": "Kupfer"
          },
          "modelAnswer": "Sauerstoff ist das Oxidationsmittel, da Sauerstoff reduziert wird. Kupfer ist das Reduktionsmittel, da Kupfer oxidiert wird."
        },
        {
          "id": "kupferdach-d",
          "label": "d)",
          "type": "structuredEquation",
          "checking": {
            "type": "direct",
            "feedback": "color"
          },
          "prompt": "Formuliere für Reaktion 1 die Oxidations- und Reduktionsteilgleichung.",
          "scaffold": {
            "instruction": "Trage die Gleichungen in die Felder ein. Pluszeichen und Pfeile sind vorgegeben.",
            "equations": [
              {
                "label": "Oxidation",
                "expected": "4 Cu → 4 Cu⁺ + 4 e⁻",
                "accepted": [
                  "4 Cu -> 4 Cu+ + 4 e-",
                  "4 Cu → 4 Cu⁺ + 4 e⁻",
                  "Cu -> Cu+ + e-",
                  "Cu → Cu⁺ + e⁻"
                ]
              },
              {
                "label": "Reduktion",
                "expected": "O₂ + 4 e⁻ → 2 O²⁻",
                "accepted": [
                  "O2 + 4 e- -> 2 O2-",
                  "O₂ + 4 e⁻ → 2 O²⁻"
                ]
              }
            ]
          },
          "modelAnswer": "Formale Teilgleichungen zur Elektronenbilanz: Oxidation: 4 Cu → 4 Cu⁺ + 4 e⁻. Reduktion: O₂ + 4 e⁻ → 2 O²⁻. Anschließend verbinden sich die Teilchen formal zu Cu₂O."
        },
        {
          "id": "kupferdach-e",
          "label": "e)",
          "type": "freeText",
          "checking": {
            "type": "criteria"
          },
          "prompt": "Erkläre mit Fachbegriffen, warum die Patinabildung eine Redoxreaktion ist.",
          "modelAnswer": "Die Patinabildung umfasst Redoxreaktionen, weil Elektronen übertragen werden. Kupfer wird oxidiert und Sauerstoff wird reduziert. Oxidation und Reduktion laufen dabei gekoppelt ab.",
          "criteria": [
            {
              "label": "Der Begriff Redoxreaktion wird verwendet.",
              "matchMode": "any",
              "keywords": [
                "redoxreaktion",
                "redox"
              ]
            },
            {
              "label": "Elektronenübertragung wird genannt.",
              "matchMode": "any",
              "keywords": [
                "elektronenübertragung",
                "elektronenuebertragung",
                "elektronen werden übertragen",
                "elektronen werden uebertragen",
                "elektronen übertragen",
                "elektronen uebertragen"
              ]
            },
            {
              "label": "Oxidation wird genannt.",
              "matchMode": "any",
              "keywords": [
                "elektronen abgeben",
                "gibt elektronen ab",
                "geben elektronen ab",
                "elektronenabgabe",
                "wird oxidiert",
                "werden oxidiert",
                "oxidation",
                "oxidiert"
              ]
            },
            {
              "label": "Reduktion wird genannt.",
              "matchMode": "any",
              "keywords": [
                "elektronen aufnehmen",
                "nimmt elektronen auf",
                "nehmen elektronen auf",
                "elektronenaufnahme",
                "wird reduziert",
                "werden reduziert",
                "reduktion",
                "reduziert"
              ]
            },
            {
              "label": "Oxidation und Reduktion werden als gekoppelte Vorgänge beschrieben.",
              "matchMode": "any",
              "keywords": [
                "gleichzeitig",
                "gekoppelt",
                "zusammen",
                "beide vorgänge",
                "beide vorgaenge"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "eisen-zink-kupfersulfat",
      "title": "Eisen oder Zink – welches Metall entfärbt eine Kupfer(II)-sulfat-Lösung stärker?",
      "shortTitle": "Eisen, Zink und Kupfersulfat",
      "description": "Redoxreihe, Metallabscheidung, Teilgleichungen und fachliche Auswertung von Versuchsergebnissen.",
      "image": "assets/images/Eisennagel in Kupfersulfat.png",
      "context": "Im Labor werden verschiedene Metallbleche in Metallsalzlösungen gelegt. Besonders untersucht wird, wie Eisen und Zink mit blauer Kupfer(II)-sulfat-Lösung reagieren.",
      "materials": [
        {
          "title": "Material 1: Beobachtung",
          "type": "table",
          "columns": [
            "Versuch",
            "Metall",
            "Lösung",
            "Beobachtung"
          ],
          "rows": [
            [
              "A",
              "Eisen",
              "Kupfer(II)-sulfat-Lösung",
              "rötlicher Belag auf dem Eisen, Lösung wird heller"
            ],
            [
              "B",
              "Kupfer",
              "Eisen(II)-sulfat-Lösung",
              "keine sichtbare Veränderung"
            ],
            [
              "C",
              "Zink",
              "Kupfer(II)-sulfat-Lösung",
              "dunkler/rötlicher Belag auf dem Zink, Lösung wird deutlich heller"
            ],
            [
              "D",
              "Silber",
              "Kupfer(II)-sulfat-Lösung",
              "keine sichtbare Veränderung"
            ]
          ]
        },
        {
          "title": "Material 2: Ausschnitt aus der Redoxreihe",
          "type": "sequence",
          "content": "Unedler → edler: Zn | Fe | Cu | Ag"
        }
      ],
      "subtasks": [
        {
          "id": "eisen-zink-a",
          "label": "a)",
          "type": "freeText",
          "checking": {
            "type": "criteria"
          },
          "prompt": "Beschreibe die Beobachtungen in Versuch A und C fachsprachlich.",
          "modelAnswer": "In Versuch A wird Cu²⁺ zu metallischem Kupfer reduziert, das sich als rötlicher Belag auf dem Eisen abscheidet. In Versuch C wird Cu²⁺ ebenfalls zu Kupfer reduziert und auf dem Zink abgeschieden. Die blaue Farbe wird schwächer bzw. deutlich heller, weil Cu²⁺-Ionen verbraucht werden.",
          "criteria": [
            {
              "label": "Versuch A wird als Kupferabscheidung oder Kupferbildung beschrieben.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "versuch a",
                  "eisen"
                ],
                [
                  "kupferabscheidung",
                  "kupfer abgeschieden",
                  "kupfer scheidet sich ab",
                  "kupfer bildet sich",
                  "rötlicher belag",
                  "roetlicher belag",
                  "kupfer"
                ]
              ]
            },
            {
              "label": "Versuch C wird als Kupferabscheidung oder Kupferbildung beschrieben.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "versuch c",
                  "zink"
                ],
                [
                  "kupferabscheidung",
                  "kupfer abgeschieden",
                  "kupfer scheidet sich ab",
                  "kupfer bildet sich",
                  "rötlicher belag",
                  "roetlicher belag",
                  "kupfer"
                ]
              ]
            },
            {
              "label": "Cu²⁺-Ionen bzw. Kupfer-Ionen werden als Teilchen der Lösung genannt.",
              "matchMode": "any",
              "keywords": [
                "cu2+",
                "cu²⁺",
                "cu(2+)",
                "kupfer-ion",
                "kupfer-ionen",
                "kupferion",
                "kupferionen",
                "kupfer ion",
                "kupfer ionen",
                "kupfer(ii)-ion",
                "kupfer(ii)-ionen"
              ]
            },
            {
              "label": "Die Aufhellung der blauen Lösung wird mit dem Verbrauch von Cu²⁺-Ionen erklärt.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "cu2+",
                  "cu²⁺",
                  "cu(2+)",
                  "kupfer-ion",
                  "kupfer-ionen",
                  "kupferion",
                  "kupferionen",
                  "kupfer ion",
                  "kupfer ionen",
                  "kupfer(ii)-ion",
                  "kupfer(ii)-ionen"
                ],
                [
                  "verbraucht",
                  "entfernt",
                  "werden weniger",
                  "wird weniger",
                  "weniger",
                  "nimmt ab",
                  "nehmen ab",
                  "verschwindet",
                  "verschwinden",
                  "aus der lösung entfernt",
                  "aus loesung entfernt"
                ],
                [
                  "lösung wird heller",
                  "loesung wird heller",
                  "heller",
                  "deutlich heller",
                  "entfärbt",
                  "entfaerbt",
                  "entfärbung",
                  "entfaerbung",
                  "farbe wird schwächer",
                  "farbe wird schwaecher",
                  "blaue farbe wird schwächer",
                  "blaue farbe wird schwaecher",
                  "blau wird schwächer",
                  "blau wird schwaecher"
                ]
              ]
            },
            {
              "label": "Der stärkere bzw. schnellere Effekt bei Zink wird aufgegriffen.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "zink",
                  "zn"
                ],
                [
                  "stärker",
                  "staerker",
                  "schneller",
                  "deutlicher",
                  "deutlich heller",
                  "heftiger"
                ]
              ]
            }
          ]
        },
        {
          "id": "eisen-zink-b",
          "label": "b)",
          "type": "freeText",
          "checking": {
            "type": "criteria"
          },
          "prompt": "Erkläre mithilfe der Redoxreihe, warum sowohl Eisen als auch Zink mit Kupfer-Ionen reagieren.",
          "modelAnswer": "Eisen und Zink stehen in der Redoxreihe links von Kupfer und sind damit unedler. Beide geben leichter Elektronen ab als Kupfer und können Cu²⁺-Ionen zu Kupfer reduzieren. Eisen wird dabei zu Fe²⁺ oxidiert, Zink zu Zn²⁺.",
          "criteria": [
            {
              "label": "Eisen wird als unedler als Kupfer beschrieben.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "eisen",
                  "fe"
                ],
                [
                  "unedler",
                  "steht links",
                  "links von kupfer"
                ]
              ]
            },
            {
              "label": "Zink wird als unedler als Kupfer beschrieben.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "zink",
                  "zn"
                ],
                [
                  "unedler",
                  "steht links",
                  "links von kupfer"
                ]
              ]
            },
            {
              "label": "Die Redoxreihe wird zur Begründung genutzt.",
              "matchMode": "any",
              "keywords": [
                "redoxreihe",
                "unedler",
                "edler",
                "steht links",
                "links von kupfer"
              ]
            },
            {
              "label": "Elektronenabgabe durch Eisen bzw. Zink wird genannt.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "eisen",
                  "fe",
                  "zink",
                  "zn"
                ],
                [
                  "elektronen abgeben",
                  "gibt elektronen ab",
                  "geben elektronen ab",
                  "elektronenabgabe",
                  "wird oxidiert",
                  "werden oxidiert",
                  "oxidation",
                  "oxidiert"
                ]
              ]
            },
            {
              "label": "Cu²⁺-Ionen bzw. Kupfer-Ionen werden als reduzierte Teilchen erkannt.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "cu2+",
                  "cu²⁺",
                  "cu(2+)",
                  "kupfer-ion",
                  "kupfer-ionen",
                  "kupferion",
                  "kupferionen",
                  "kupfer ion",
                  "kupfer ionen",
                  "kupfer(ii)-ion",
                  "kupfer(ii)-ionen"
                ],
                [
                  "elektronen aufnehmen",
                  "nimmt elektronen auf",
                  "nehmen elektronen auf",
                  "elektronenaufnahme",
                  "wird reduziert",
                  "werden reduziert",
                  "reduktion",
                  "reduziert"
                ]
              ]
            }
          ]
        },
        {
          "id": "eisen-zink-c",
          "label": "c)",
          "type": "freeText",
          "checking": {
            "type": "criteria"
          },
          "prompt": "Begründe, warum Zink stärker bzw. schneller mit Kupfer-Ionen reagiert als Eisen.",
          "modelAnswer": "Zink steht in der Redoxreihe weiter links als Eisen und ist daher unedler. Zink besitzt eine größere Bereitschaft zur Elektronenabgabe. Deshalb reagiert es mit Cu²⁺-Ionen stärker bzw. schneller als Eisen.",
          "criteria": [
            {
              "label": "Zink wird als unedler als Eisen beschrieben.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "zink",
                  "zn"
                ],
                [
                  "eisen",
                  "fe"
                ],
                [
                  "unedler",
                  "weiter links"
                ]
              ]
            },
            {
              "label": "Die Position in der Redoxreihe wird als Begründung genutzt.",
              "matchMode": "any",
              "keywords": [
                "redoxreihe",
                "weiter links",
                "steht links",
                "position"
              ]
            },
            {
              "label": "Größere Bereitschaft zur Elektronenabgabe wird genannt.",
              "matchMode": "any",
              "keywords": [
                "größere bereitschaft zur elektronenabgabe",
                "groessere bereitschaft zur elektronenabgabe",
                "gibt leichter elektronen ab",
                "elektronenabgabe",
                "donator stärker",
                "donator staerker"
              ]
            },
            {
              "label": "Der stärkere bzw. schnellere Reaktionsverlauf wird erklärt.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "stärker",
                  "staerker",
                  "schneller",
                  "deutlicher",
                  "heftiger"
                ],
                [
                  "cu2+",
                  "cu²⁺",
                  "cu(2+)",
                  "kupfer-ion",
                  "kupfer-ionen",
                  "kupferion",
                  "kupferionen",
                  "kupfer ion",
                  "kupfer ionen",
                  "kupfer(ii)-ion",
                  "kupfer(ii)-ionen"
                ]
              ]
            }
          ]
        },
        {
          "id": "eisen-zink-d",
          "label": "d)",
          "type": "structuredEquation",
          "checking": {
            "type": "direct",
            "feedback": "color"
          },
          "prompt": "Formuliere die Teilgleichungen und die Gesamtgleichung für Versuch A.",
          "scaffold": {
            "instruction": "Trage die Gleichungen in die Felder ein. Pluszeichen und Pfeile sind vorgegeben.",
            "equations": [
              {
                "label": "Oxidation",
                "expected": "Fe → Fe²⁺ + 2 e⁻",
                "accepted": [
                  "Fe -> Fe2+ + 2 e-",
                  "Fe → Fe²⁺ + 2 e⁻"
                ]
              },
              {
                "label": "Reduktion",
                "expected": "Cu²⁺ + 2 e⁻ → Cu",
                "accepted": [
                  "Cu2+ + 2 e- -> Cu",
                  "Cu²⁺ + 2 e⁻ → Cu"
                ]
              },
              {
                "label": "Gesamtgleichung",
                "expected": "Fe + Cu²⁺ → Fe²⁺ + Cu",
                "accepted": [
                  "Fe + Cu2+ -> Fe2+ + Cu",
                  "Fe + Cu²⁺ → Fe²⁺ + Cu"
                ]
              }
            ]
          },
          "modelAnswer": "Oxidation: Fe → Fe²⁺ + 2 e⁻. Reduktion: Cu²⁺ + 2 e⁻ → Cu. Gesamtgleichung: Fe + Cu²⁺ → Fe²⁺ + Cu."
        },
        {
          "id": "eisen-zink-e",
          "label": "e)",
          "type": "structuredEquation",
          "checking": {
            "type": "direct",
            "feedback": "color"
          },
          "prompt": "Formuliere die Gesamtgleichung für Versuch C.",
          "scaffold": {
            "instruction": "Trage die Gleichung in die Felder ein. Pluszeichen und Pfeile sind vorgegeben.",
            "equations": [
              {
                "label": "Gesamtgleichung",
                "expected": "Zn + Cu²⁺ → Zn²⁺ + Cu",
                "accepted": [
                  "Zn + Cu2+ -> Zn2+ + Cu",
                  "Zn + Cu²⁺ → Zn²⁺ + Cu"
                ]
              }
            ]
          },
          "modelAnswer": "Gesamtgleichung: Zn + Cu²⁺ → Zn²⁺ + Cu. Zink wird oxidiert, Cu²⁺ wird reduziert."
        },
        {
          "id": "eisen-zink-f",
          "label": "f)",
          "type": "freeText",
          "checking": {
            "type": "criteria"
          },
          "prompt": "Begründe, warum in Versuch B und D keine Reaktion zu erwarten ist.",
          "modelAnswer": "In Versuch B ist Kupfer edler als Eisen und gibt daher nicht freiwillig Elektronen an Fe²⁺-Ionen ab. In Versuch D ist Silber edler als Kupfer und gibt ebenfalls nicht freiwillig Elektronen an Cu²⁺-Ionen ab. Deshalb sind keine sichtbaren Reaktionen zu erwarten.",
          "criteria": [
            {
              "label": "Kupfer wird als edler als Eisen beschrieben.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "kupfer",
                  "cu"
                ],
                [
                  "eisen",
                  "fe"
                ],
                [
                  "edler",
                  "unedler"
                ]
              ]
            },
            {
              "label": "Silber wird als edler als Kupfer beschrieben.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "silber",
                  "ag"
                ],
                [
                  "kupfer",
                  "cu"
                ],
                [
                  "edler",
                  "unedler"
                ]
              ]
            },
            {
              "label": "Fe²⁺-Ionen werden in Versuch B nicht zu Eisen reduziert.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "fe2+",
                  "fe²⁺",
                  "fe(2+)",
                  "eisen-ion",
                  "eisen-ionen",
                  "eisenion",
                  "eisenionen",
                  "eisen ion",
                  "eisen ionen",
                  "eisen(ii)-ion",
                  "eisen(ii)-ionen"
                ],
                [
                  "nicht reduziert",
                  "keine reduktion",
                  "kein eisen entsteht",
                  "nicht zu eisen",
                  "nicht zu fe"
                ]
              ]
            },
            {
              "label": "Cu²⁺-Ionen werden in Versuch D nicht zu Kupfer reduziert.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "cu2+",
                  "cu²⁺",
                  "cu(2+)",
                  "kupfer-ion",
                  "kupfer-ionen",
                  "kupferion",
                  "kupferionen",
                  "kupfer ion",
                  "kupfer ionen",
                  "kupfer(ii)-ion",
                  "kupfer(ii)-ionen"
                ],
                [
                  "nicht reduziert",
                  "keine reduktion",
                  "kein kupfer entsteht",
                  "nicht zu kupfer",
                  "nicht zu cu"
                ]
              ]
            },
            {
              "label": "Die fehlende freiwillige Elektronenabgabe wird als Grund genannt.",
              "matchMode": "any",
              "keywords": [
                "gibt nicht freiwillig elektronen ab",
                "geben nicht freiwillig elektronen ab",
                "keine elektronenabgabe",
                "nicht oxidiert",
                "nicht freiwillig"
              ]
            }
          ]
        },
        {
          "id": "eisen-zink-g",
          "label": "g)",
          "type": "freeText",
          "checking": {
            "type": "criteria"
          },
          "prompt": "Eine Schülerin behauptet: „Kupfer ist reaktiver als Eisen und Zink, weil es sich sichtbar abscheidet.“ Beurteile diese Aussage fachlich.",
          "modelAnswer": "Die Aussage ist fachlich falsch. Dass Kupfer sichtbar abgeschieden wird, bedeutet nicht, dass Kupfer reaktiver ist. Die Cu²⁺-Ionen werden reduziert. Reaktiver bzw. unedler sind die Metalle, die Elektronen abgeben: hier Zink und Eisen. Zink ist dabei unedler als Eisen.",
          "criteria": [
            {
              "label": "Die Aussage wird als falsch oder nicht fachgerecht beurteilt.",
              "matchMode": "any",
              "keywords": [
                "falsch",
                "nicht richtig",
                "nicht fachgerecht",
                "stimmt nicht",
                "nicht korrekt"
              ]
            },
            {
              "label": "Die Kupferabscheidung wird als Reduktion von Cu²⁺-Ionen erklärt.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "cu2+",
                  "cu²⁺",
                  "cu(2+)",
                  "kupfer-ion",
                  "kupfer-ionen",
                  "kupferion",
                  "kupferionen",
                  "kupfer ion",
                  "kupfer ionen",
                  "kupfer(ii)-ion",
                  "kupfer(ii)-ionen"
                ],
                [
                  "elektronen aufnehmen",
                  "nimmt elektronen auf",
                  "nehmen elektronen auf",
                  "elektronenaufnahme",
                  "wird reduziert",
                  "werden reduziert",
                  "reduktion",
                  "reduziert"
                ]
              ]
            },
            {
              "label": "Eisen und Zink werden als Elektronendonatoren beschrieben.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "eisen",
                  "fe"
                ],
                [
                  "zink",
                  "zn"
                ],
                [
                  "elektronendonator",
                  "geben elektronen ab",
                  "elektronenabgabe",
                  "werden oxidiert"
                ]
              ]
            },
            {
              "label": "Zink wird als unedler bzw. reaktiver als Eisen eingeordnet.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "zink",
                  "zn"
                ],
                [
                  "eisen",
                  "fe"
                ],
                [
                  "unedler",
                  "reaktiver",
                  "weiter links"
                ]
              ]
            },
            {
              "label": "Sichtbare Abscheidung wird nicht mit Reaktivität des Kupfers verwechselt.",
              "matchMode": "any",
              "keywords": [
                "abscheidung bedeutet nicht reaktiver",
                "sichtbar heißt nicht reaktiver",
                "sichtbar heisst nicht reaktiver",
                "kupferionen werden reduziert",
                "kupfer wird abgeschieden"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "groesste-zellspannung",
      "title": "Welche Metallkombination liefert die größte Spannung?",
      "shortTitle": "Größte Zellspannung",
      "description": "Standardelektrodenpotenziale auswerten, Zellspannung berechnen und eine galvanische Zelle beschreiben.",
      "image": "assets/images/Metallbleche.png",
      "context": "Eine Schülergruppe möchte eine einfache galvanische Zelle mit möglichst hoher Zellspannung bauen. Zur Auswahl stehen Zink, Eisen, Kupfer und Silber.",
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
      "subtasks": [
        {
          "id": "spannung-a",
          "label": "a)",
          "type": "freeText",
          "checking": {
            "type": "criteria"
          },
          "prompt": "Erkläre, was ein Standardelektrodenpotenzial aussagt.",
          "modelAnswer": "Das Standardelektrodenpotenzial beschreibt, wie stark ein Redoxpaar zur Reduktion neigt. Je positiver der Wert ist, desto eher nimmt die oxidierte Form Elektronen auf.",
          "criteria": [
            {
              "label": "Die Neigung zur Elektronenaufnahme bzw. Reduktion wird beschrieben.",
              "matchMode": "any",
              "keywords": [
                "elektronenaufnahme",
                "elektronen aufnehmen",
                "nimmt elektronen auf",
                "reduktion",
                "reduziert"
              ]
            },
            {
              "label": "Ein positiveres Potenzial wird mit stärkerer Reduktionsneigung verbunden.",
              "matchMode": "any",
              "keywords": [
                "je positiver",
                "positiver",
                "höheres potenzial",
                "hoeheres potenzial",
                "eher reduziert"
              ]
            },
            {
              "label": "Der Bezug zu einem Redoxpaar wird hergestellt.",
              "matchMode": "any",
              "keywords": [
                "redoxpaar",
                "halbzelle",
                "metall-ion",
                "metallion"
              ]
            }
          ]
        },
        {
          "id": "spannung-b",
          "label": "b)",
          "type": "multiSelect",
          "checking": {
            "type": "direct",
            "feedback": "color"
          },
          "prompt": "Wähle die Metallkombination aus, die die größte Zellspannung liefert. Begründe deine Auswahl mithilfe der Standardelektrodenpotenziale.",
          "options": [
            "Zn/Fe",
            "Zn/Cu",
            "Zn/Ag",
            "Fe/Cu",
            "Fe/Ag",
            "Cu/Ag"
          ],
          "correctAnswers": [
            "Zn/Ag"
          ],
          "modelAnswer": "Die größte Zellspannung liefert die Kombination Zn/Ag, weil Zn²⁺/Zn das kleinste Potenzial und Ag⁺/Ag das größte Potenzial besitzt. Dadurch ist die Potenzialdifferenz maximal."
        },
        {
          "id": "spannung-c",
          "label": "c)",
          "type": "calculation",
          "checking": {
            "type": "direct",
            "feedback": "color"
          },
          "prompt": "Berechne die Zellspannung dieser galvanischen Zelle.",
          "fields": [
            {
              "id": "eKathode",
              "label": "E(Kathode) in V",
              "correctValue": 0.8
            },
            {
              "id": "eAnode",
              "label": "E(Anode) in V",
              "correctValue": -0.76
            },
            {
              "id": "spannung",
              "label": "U in V",
              "correctValue": 1.56
            }
          ],
          "tolerance": 0.01,
          "modelAnswer": "U = E(Kathode) − E(Anode) = 0,80 V − (−0,76 V) = 1,56 V."
        },
        {
          "id": "spannung-d",
          "label": "d)",
          "type": "structuredFields",
          "checking": {
            "type": "direct",
            "feedback": "color"
          },
          "prompt": "Gib Anode, Kathode, Elektronenflussrichtung und Gesamtreaktion an.",
          "fields": [
            {
              "id": "anode",
              "label": "Anode",
              "correctValues": [
                "Zink",
                "Zn"
              ]
            },
            {
              "id": "kathode",
              "label": "Kathode",
              "correctValues": [
                "Silber",
                "Ag"
              ]
            },
            {
              "id": "electronFlow",
              "label": "Elektronenfluss",
              "correctValues": [
                "von Zink zu Silber",
                "von Zn zu Ag",
                "Zinkelektrode zur Silberelektrode"
              ]
            },
            {
              "id": "overallReaction",
              "label": "Gesamtreaktion",
              "correctValues": [
                "Zn + 2 Ag+ -> Zn2+ + 2 Ag",
                "Zn + 2 Ag⁺ → Zn²⁺ + 2 Ag"
              ]
            }
          ],
          "modelAnswer": "Anode: Zink/Zn. Kathode: Silber/Ag. Elektronen fließen außen von der Zinkelektrode zur Silberelektrode. Gesamtreaktion: Zn + 2 Ag⁺ → Zn²⁺ + 2 Ag."
        },
        {
          "id": "spannung-e",
          "label": "e)",
          "type": "freeText",
          "checking": {
            "type": "criteria"
          },
          "prompt": "Eine andere Gruppe schlägt die Kombination Fe/Cu vor. Vergleiche diese Zelle mit deiner Auswahl hinsichtlich Zellspannung und Eignung.",
          "modelAnswer": "Die Fe/Cu-Zelle liefert U = 0,34 V − (−0,44 V) = 0,78 V. Die Zn/Ag-Zelle liefert mit 1,56 V eine größere Zellspannung und ist daher für eine möglichst hohe Zellspannung besser geeignet.",
          "criteria": [
            {
              "label": "Die Zellspannung der Fe/Cu-Zelle wird berechnet oder genannt.",
              "matchMode": "any",
              "keywords": [
                "0,78",
                "0.78",
                "fe/cu",
                "eisen-kupfer-zelle",
                "eisen kupfer zelle"
              ]
            },
            {
              "label": "Die Zn/Ag-Zelle wird als spannungsstärker beschrieben.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "zn/ag",
                  "zink-silber",
                  "zink silber",
                  "zink/silber"
                ],
                [
                  "größer",
                  "groesser",
                  "höher",
                  "hoeher",
                  "spannungsstärker",
                  "spannungsstaerker",
                  "1,56",
                  "1.56"
                ]
              ]
            },
            {
              "label": "Die Eignung wird anhand der Zellspannung beurteilt.",
              "matchMode": "any",
              "keywords": [
                "besser geeignet",
                "geeigneter",
                "höhere zellspannung",
                "hoeherer zellspannung",
                "größere zellspannung"
              ]
            },
            {
              "label": "Der Vergleich ist fachlich begründet.",
              "matchMode": "any",
              "keywords": [
                "weil",
                "da",
                "aufgrund",
                "potenzialdifferenz",
                "zellspannung"
              ]
            }
          ]
        },
        {
          "id": "spannung-f",
          "label": "f)",
          "type": "freeText",
          "checking": {
            "type": "criteria"
          },
          "prompt": "Beurteile, ob eine Kombination aus Kupfer und Silber ebenfalls freiwillig elektrische Energie liefern kann.",
          "modelAnswer": "Ja, eine Cu/Ag-Zelle kann freiwillig elektrische Energie liefern, weil Ag⁺/Ag das höhere Potenzial besitzt und als Kathode wirkt. Kupfer wird oxidiert. Die Zellspannung beträgt U = 0,80 V − 0,34 V = 0,46 V.",
          "criteria": [
            {
              "label": "Es wird beurteilt, dass Cu/Ag freiwillig elektrische Energie liefern kann.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "ja",
                  "kann",
                  "freiwillig",
                  "liefert"
                ],
                [
                  "cu/ag",
                  "kupfer silber",
                  "kupfer/silber"
                ]
              ]
            },
            {
              "label": "Silber wird als Kathode bzw. Reduktion erkannt.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "silber",
                  "ag",
                  "ag+"
                ],
                [
                  "kathode",
                  "reduziert",
                  "reduktion",
                  "elektronenaufnahme"
                ]
              ]
            },
            {
              "label": "Kupfer wird als Anode bzw. Oxidation erkannt.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "kupfer",
                  "cu"
                ],
                [
                  "anode",
                  "oxidiert",
                  "oxidation",
                  "elektronenabgabe"
                ]
              ]
            },
            {
              "label": "Die Zellspannung 0,46 V wird angegeben.",
              "matchMode": "any",
              "keywords": [
                "0,46",
                "0.46"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "smartphone-akku-separator",
      "title": "Warum braucht ein Smartphone-Akku einen Separator?",
      "shortTitle": "Smartphone-Akku",
      "description": "Aufbau, Funktion und Sicherheit eines Lithium-Ionen-Akkus materialgestützt erklären.",
      "image": "assets/images/Handy-Akku.png",
      "secondaryImage": "assets/images/lithium-Ionen-Akku.png",
      "context": "Lithium-Ionen-Akkus werden in Smartphones, Tablets, Laptops und E-Bikes eingesetzt. Sie sind wiederaufladbar, können aber bei Beschädigung gefährlich werden.",
      "materials": [
        {
          "title": "Material 1: Vereinfachter Aufbau eines Lithium-Ionen-Akkus",
          "type": "image",
          "image": "assets/images/lithium-Ionen-Akku.png",
          "alt": "Schematische Darstellung eines Lithium-Ionen-Akkus mit negativer Elektrode, positiver Elektrode, Separator, Elektrolyt, Lithium-Ionen-Wanderung und Elektronenfluss beim Entladen."
        },
        {
          "title": "Material 2: Alltagssituation",
          "type": "quote",
          "content": "Ein Smartphone fällt herunter. Der Akku wird beschädigt. Warnhinweis: „Beschädigte Lithium-Ionen-Akkus nicht weiterverwenden, nicht öffnen und nicht über den Hausmüll entsorgen.“"
        }
      ],
      "subtasks": [
        {
          "id": "akku-a",
          "label": "a)",
          "type": "freeText",
          "checking": {
            "type": "criteria"
          },
          "prompt": "Beschreibe den grundlegenden Aufbau eines Lithium-Ionen-Akkus mithilfe von Material 1.",
          "modelAnswer": "Ein Lithium-Ionen-Akku besteht aus einer negativen Elektrode, einer positiven Elektrode, einem Elektrolyten und einem Separator. Der Elektrolyt ermöglicht die Bewegung von Lithium-Ionen, der Separator trennt die Elektroden.",
          "criteria": [
            {
              "label": "Negative Elektrode wird genannt.",
              "matchMode": "any",
              "keywords": [
                "negative elektrode",
                "minuspol",
                "negativen elektrode"
              ]
            },
            {
              "label": "Positive Elektrode wird genannt.",
              "matchMode": "any",
              "keywords": [
                "positive elektrode",
                "pluspol",
                "positiven elektrode"
              ]
            },
            {
              "label": "Elektrolyt wird genannt.",
              "matchMode": "any",
              "keywords": [
                "elektrolyt"
              ]
            },
            {
              "label": "Separator wird genannt.",
              "matchMode": "any",
              "keywords": [
                "separator"
              ]
            },
            {
              "label": "Materialbezug wird hergestellt.",
              "matchMode": "any",
              "keywords": [
                "material 1",
                "abbildung",
                "bild",
                "laut material",
                "im material"
              ]
            }
          ]
        },
        {
          "id": "akku-b",
          "label": "b)",
          "type": "freeText",
          "checking": {
            "type": "criteria"
          },
          "prompt": "Erkläre die Funktion von Anode, Kathode, Elektrolyt und Separator beim Entladen.",
          "modelAnswer": "Beim Entladen ist die negative Elektrode die Anode, an der Oxidation stattfindet. Die bei der Oxidation freiwerdenden Elektronen gelangen über das Kabel zur Kathode. Die positive Elektrode ist die Kathode, an der Reduktion stattfindet. Bei der Reduktion werden die Elektronen aufgenommen. Der Elektrolyt leitet Lithium-Ionen. Der Separator trennt die Elektroden räumlich und verhindert einen Kurzschluss, lässt aber Lithium-Ionen passieren.",
          "criteria": [
            {
              "label": "Beim Entladen wird die negative Elektrode mit Oxidation/Anode verbunden.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "entladen",
                  "beim entladen"
                ],
                [
                  "negative elektrode",
                  "anode"
                ],
                [
                  "oxidation",
                  "oxidiert"
                ]
              ]
            },
            {
              "label": "Beim Entladen wird die positive Elektrode mit Reduktion/Kathode verbunden.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "entladen",
                  "beim entladen"
                ],
                [
                  "positive elektrode",
                  "kathode"
                ],
                [
                  "reduktion",
                  "reduziert"
                ]
              ]
            },
            {
              "label": "Elektrolyt wird als Ionenleiter beschrieben.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "elektrolyt"
                ],
                [
                  "leitet",
                  "transportiert",
                  "ermöglicht bewegung"
                ],
                [
                  "li+",
                  "li⁺",
                  "lithium-ion",
                  "lithium-ionen",
                  "lithiumion",
                  "lithiumionen",
                  "lithium ion",
                  "lithium ionen"
                ]
              ]
            },
            {
              "label": "Separator trennt die Elektroden.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "separator"
                ],
                [
                  "trennt",
                  "räumlich getrennt",
                  "raeumlich getrennt"
                ]
              ]
            },
            {
              "label": "Separator verhindert einen Kurzschluss und lässt Lithium-Ionen passieren.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "separator"
                ],
                [
                  "kurzschluss"
                ],
                [
                  "lässt passieren",
                  "laesst passieren",
                  "durchlässig",
                  "durchlaessig",
                  "passieren"
                ],
                [
                  "li+",
                  "li⁺",
                  "lithium-ion",
                  "lithium-ionen",
                  "lithiumion",
                  "lithiumionen",
                  "lithium ion",
                  "lithium ionen"
                ]
              ]
            }
          ]
        },
        {
          "id": "akku-c",
          "label": "c)",
          "type": "freeText",
          "checking": {
            "type": "criteria"
          },
          "prompt": "Beschreibe die Vorgänge beim Entladen auf Stoff- und Teilchenebene.",
          "modelAnswer": "Beim Entladen werden an der negativen Elektrode Lithium-Atome bzw. eingelagerte Lithium-Teilchen oxidiert. Dabei entstehen Lithium-Ionen, die durch den Elektrolyten zur positiven Elektrode wandern. Die Elektronen fließen über den äußeren Stromkreis zur positiven Elektrode und liefern elektrische Energie. An der positiven Elektrode findet die Reduktion statt: Die Elektronen werden wieder aufgenommen; die Lithium-Ionen werden in das Elektrodenmaterial eingelagert.",
          "criteria": [
            {
              "label": "Wanderung der Lithium-Ionen wird beschrieben.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "li+",
                  "li⁺",
                  "lithium-ion",
                  "lithium-ionen",
                  "lithiumion",
                  "lithiumionen",
                  "lithium ion",
                  "lithium ionen"
                ],
                [
                  "wandern",
                  "bewegen sich",
                  "gehen",
                  "diffundieren"
                ]
              ]
            },
            {
              "label": "Richtung der Lithium-Ionen beim Entladen wird genannt.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "li+",
                  "li⁺",
                  "lithium-ion",
                  "lithium-ionen",
                  "lithiumion",
                  "lithiumionen",
                  "lithium ion",
                  "lithium ionen"
                ],
                [
                  "negativen zur positiven",
                  "negative zur positive",
                  "zur positiven elektrode"
                ]
              ]
            },
            {
              "label": "Elektronenfluss über den äußeren Stromkreis wird beschrieben.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "elektronen"
                ],
                [
                  "äußerer stromkreis",
                  "aeusserer stromkreis",
                  "kabel",
                  "leiter",
                  "stromkreis"
                ]
              ]
            },
            {
              "label": "Energieabgabe an das Gerät wird erwähnt.",
              "matchMode": "any",
              "keywords": [
                "liefert elektrische energie",
                "energie an das gerät",
                "energie an das geraet",
                "betreibt das smartphone",
                "smartphone",
                "verbraucher"
              ]
            },
            {
              "label": "Oxidation und Reduktion werden beim Entladen zugeordnet.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "oxidation",
                  "oxidiert"
                ],
                [
                  "reduktion",
                  "reduziert"
                ],
                [
                  "entladen",
                  "beim entladen"
                ]
              ]
            }
          ]
        },
        {
          "id": "akku-d",
          "label": "d)",
          "type": "freeText",
          "checking": {
            "type": "criteria"
          },
          "prompt": "Erkläre, warum der Akku wiederaufladbar ist.",
          "modelAnswer": "Ein Lithium-Ionen-Akku ist wiederaufladbar, weil die beim Entladen ablaufenden elektrochemischen Vorgänge durch Zufuhr elektrischer Energie weitgehend umgekehrt werden können. Beim Laden wird elektrische Energie in chemische Energie umgewandelt.",
          "criteria": [
            {
              "label": "Die Umkehrbarkeit der Vorgänge wird genannt.",
              "matchMode": "any",
              "keywords": [
                "umkehrbar",
                "umgekehrt",
                "rückgängig",
                "rueckgaengig",
                "umkehrung"
              ]
            },
            {
              "label": "Elektrische Energie wird beim Laden zugeführt.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "laden",
                  "beim laden"
                ],
                [
                  "elektrische energie",
                  "strom",
                  "energiezufuhr"
                ]
              ]
            },
            {
              "label": "Chemische Energie wird gespeichert.",
              "matchMode": "any",
              "keywords": [
                "chemische energie",
                "gespeichert",
                "speichert energie"
              ]
            },
            {
              "label": "Der Bezug zum Lithium-Ionen-Akku wird hergestellt.",
              "matchMode": "any",
              "keywords": [
                "lithium-ionen-akku",
                "lithiumionenakku",
                "akku"
              ]
            }
          ]
        },
        {
          "id": "akku-e",
          "label": "e)",
          "type": "freeText",
          "checking": {
            "type": "criteria"
          },
          "prompt": "Vergleiche Laden und Entladen hinsichtlich Energieumwandlung und Richtung der Teilchen-/Elektronenbewegung.",
          "modelAnswer": "Beim Entladen wird chemische Energie in elektrische Energie umgewandelt. Lithium-Ionen wandern von der negativen zur positiven Elektrode, Elektronen fließen außen zur positiven Seite. Beim Laden wird elektrische Energie in chemische Energie umgewandelt; die Bewegungsrichtungen werden umgekehrt.",
          "criteria": [
            {
              "label": "Energieumwandlung beim Entladen wird genannt.",
              "matchMode": "any",
              "keywords": [
                "chemische energie in elektrische energie",
                "chemisch zu elektrisch",
                "beim entladen elektrische energie"
              ]
            },
            {
              "label": "Energieumwandlung beim Laden wird genannt.",
              "matchMode": "any",
              "keywords": [
                "elektrische energie in chemische energie",
                "elektrisch zu chemisch",
                "beim laden chemische energie"
              ]
            },
            {
              "label": "Bewegungsrichtung beim Entladen wird beschrieben.",
              "matchMode": "any",
              "keywords": [
                "negative zur positiven",
                "von der negativen zur positiven",
                "zur positiven elektrode"
              ]
            },
            {
              "label": "Umkehr der Bewegungsrichtung beim Laden wird beschrieben.",
              "matchMode": "any",
              "keywords": [
                "umgekehrt",
                "entgegengesetzt",
                "andere richtung",
                "rückwärts",
                "rueckwaerts"
              ]
            },
            {
              "label": "Teilchenbewegung und Elektronenbewegung werden unterschieden.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "li+",
                  "li⁺",
                  "lithium-ion",
                  "lithium-ionen",
                  "lithiumion",
                  "lithiumionen",
                  "lithium ion",
                  "lithium ionen"
                ],
                [
                  "elektronen"
                ]
              ]
            }
          ]
        },
        {
          "id": "akku-f",
          "label": "f)",
          "type": "freeText",
          "checking": {
            "type": "criteria"
          },
          "prompt": "Beurteile den Warnhinweis aus Material 2 aus chemischer Sicht.",
          "modelAnswer": "Der Warnhinweis ist chemisch sinnvoll. Bei einem beschädigten Lithium-Ionen-Akku können Separator oder Elektroden beschädigt sein. Dadurch kann es zu Kurzschlüssen, starker Wärmeentwicklung oder gefährlichen Reaktionen kommen. Deshalb sollen solche Akkus nicht weiterverwendet, nicht geöffnet und fachgerecht entsorgt werden.",
          "criteria": [
            {
              "label": "Der Warnhinweis wird als sinnvoll beurteilt.",
              "matchMode": "any",
              "keywords": [
                "sinnvoll",
                "berechtigt",
                "richtig",
                "nachvollziehbar",
                "wichtig"
              ]
            },
            {
              "label": "Beschädigung des Separators oder der Elektroden wird erwähnt.",
              "matchMode": "any",
              "keywords": [
                "separator beschädigt",
                "separator beschaedigt",
                "elektroden beschädigt",
                "elektroden beschaedigt",
                "beschädigter separator"
              ]
            },
            {
              "label": "Kurzschluss wird als Gefahr genannt.",
              "matchMode": "any",
              "keywords": [
                "kurzschluss"
              ]
            },
            {
              "label": "Wärmeentwicklung oder Brandgefahr wird genannt.",
              "matchMode": "any",
              "keywords": [
                "wärmeentwicklung",
                "waermeentwicklung",
                "brand",
                "brandgefahr",
                "überhitzen",
                "ueberhitzen"
              ]
            },
            {
              "label": "Fachgerechte Entsorgung wird genannt.",
              "matchMode": "any",
              "keywords": [
                "fachgerecht entsorgen",
                "sammelstelle",
                "nicht hausmüll",
                "nicht hausmuell",
                "recyclinghof"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "aluminium-elektrolyse",
      "title": "Aluminium aus Erz — warum ist Elektrolyse energieaufwendig?",
      "shortTitle": "Aluminium aus Erz",
      "description": "Elektrolyse, Elektrodenreaktionen, Gesamtgleichung und Bewertung von Recycling.",
      "image": "assets/images/Aluminiumerz.png",
      "context": "Aluminium wird in großen Mengen für Getränkedosen, Fahrräder, Flugzeuge und Verpackungen genutzt. In der Natur kommt Aluminium nicht elementar vor, sondern in Verbindungen. Zur Gewinnung von Aluminium wird elektrische Energie benötigt.",
      "materials": [
        {
          "title": "Material 1: Vereinfachte Elektrolyse von Aluminiumoxid",
          "type": "reaction-list",
          "content": [
            "Aluminiumoxid enthält Aluminium-Ionen und Oxid-Ionen.",
            "Bei der Elektrolyse entstehen Aluminium und Sauerstoff.",
            "Kathode: Al³⁺ + 3 e⁻ → Al",
            "Anode: 2 O²⁻ → O₂ + 4 e⁻"
          ]
        },
        {
          "title": "Material 2: Information",
          "type": "text",
          "content": "Aluminiumrecycling benötigt deutlich weniger Energie als die Gewinnung von Aluminium aus Erz. Deshalb werden Getränkedosen und andere Aluminiumprodukte gesammelt und wiederverwertet."
        }
      ],
      "subtasks": [
        {
          "id": "alu-a",
          "label": "a)",
          "type": "freeText",
          "checking": {
            "type": "criteria"
          },
          "prompt": "Beschreibe den Aufbau einer Elektrolysezelle allgemein.",
          "modelAnswer": "Eine Elektrolysezelle besteht aus einem Elektrolyten, zwei Elektroden und einer äußeren Spannungsquelle. Die Spannungsquelle erzwingt eine nicht freiwillig ablaufende Redoxreaktion. An der Kathode findet Reduktion statt, an der Anode Oxidation.",
          "criteria": [
            {
              "label": "Elektrolyt wird genannt.",
              "matchMode": "any",
              "keywords": [
                "elektrolyt",
                "schmelze",
                "lösung",
                "loesung"
              ]
            },
            {
              "label": "Zwei Elektroden werden genannt.",
              "matchMode": "any",
              "keywords": [
                "zwei elektroden",
                "anode",
                "kathode"
              ]
            },
            {
              "label": "Spannungsquelle wird genannt.",
              "matchMode": "any",
              "keywords": [
                "spannungsquelle",
                "stromquelle",
                "elektrische energie"
              ]
            },
            {
              "label": "Oxidation und Reduktion werden den Elektroden zugeordnet.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "oxidation",
                  "oxidiert"
                ],
                [
                  "reduktion",
                  "reduziert"
                ],
                [
                  "anode",
                  "kathode"
                ]
              ]
            },
            {
              "label": "Nicht freiwillige Reaktion wird angedeutet.",
              "matchMode": "any",
              "keywords": [
                "nicht freiwillig",
                "nicht spontan",
                "erzwungen"
              ]
            }
          ]
        },
        {
          "id": "alu-b",
          "label": "b)",
          "type": "freeText",
          "checking": {
            "type": "criteria"
          },
          "prompt": "Erkläre, warum für die Elektrolyse elektrische Energie benötigt wird.",
          "modelAnswer": "Die elektrische Energie erzwingt die Elektronenübertragung. Dadurch können die Aluminium-Ionen an der Kathode reduziert und die Oxid-Ionen an der Anode oxidiert werden.",
          "criteria": [
            {
              "label": "Elektrische Energie wird als Antrieb beschrieben.",
              "matchMode": "any",
              "keywords": [
                "elektrische energie",
                "strom",
                "energie",
                "energiezufuhr"
              ]
            },
            {
              "label": "Elektronenübertragung wird erzwungen.",
              "matchMode": "any",
              "keywords": [
                "erzwingt die elektronenübertragung",
                "erzwingt die elektronenuebertragung",
                "erzwungen",
                "elektronenübertragung",
                "elektronenuebertragung"
              ]
            },
            {
              "label": "Aluminium-Ionen werden an der Kathode reduziert.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "aluminium-ionen",
                  "aluminiumionen",
                  "al3+",
                  "al³⁺"
                ],
                [
                  "kathode"
                ],
                [
                  "reduziert",
                  "reduktion"
                ]
              ]
            },
            {
              "label": "Oxid-Ionen werden an der Anode oxidiert.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "oxid-ionen",
                  "oxidionen",
                  "o2-",
                  "o²⁻"
                ],
                [
                  "anode"
                ],
                [
                  "oxidiert",
                  "oxidation"
                ]
              ]
            }
          ]
        },
        {
          "id": "alu-c",
          "label": "c)",
          "type": "structuredElectrodeAssignment",
          "checking": {
            "type": "direct",
            "feedback": "color"
          },
          "prompt": "Ordne Anode und Kathode bei der Elektrolyse zu und gib jeweils Oxidation bzw. Reduktion an.",
          "fields": [
            {
              "id": "kathodeProcess",
              "label": "Kathode",
              "correctValues": [
                "Reduktion",
                "Al³⁺ + 3 e⁻ → Al",
                "Al3+ + 3 e- -> Al"
              ]
            },
            {
              "id": "anodeProcess",
              "label": "Anode",
              "correctValues": [
                "Oxidation",
                "2 O²⁻ → O₂ + 4 e⁻",
                "2 O2- -> O2 + 4 e-"
              ]
            }
          ],
          "modelAnswer": "Bei der Elektrolyse findet an der Kathode die Reduktion statt: Al³⁺ + 3 e⁻ → Al. An der Anode findet die Oxidation statt: 2 O²⁻ → O₂ + 4 e⁻."
        },
        {
          "id": "alu-d",
          "label": "d)",
          "type": "structuredEquation",
          "checking": {
            "type": "direct",
            "feedback": "color"
          },
          "prompt": "Formuliere aus den Teilgleichungen in Material 1 eine ausgeglichene Gesamtgleichung.",
          "scaffold": {
            "instruction": "Trage die Gleichung in die Felder ein. Pluszeichen und Pfeil sind vorgegeben.",
            "equations": [
              {
                "label": "Vereinfachte Gesamtgleichung",
                "expected": "2 Al₂O₃ → 4 Al + 3 O₂",
                "accepted": [
                  "2 Al2O3 -> 4 Al + 3 O2",
                  "2 Al₂O₃ → 4 Al + 3 O₂"
                ]
              },
              {
                "label": "Ionische Gesamtgleichung",
                "expected": "4 Al³⁺ + 6 O²⁻ → 4 Al + 3 O₂",
                "accepted": [
                  "4 Al3+ + 6 O2- -> 4 Al + 3 O2",
                  "4 Al³⁺ + 6 O²⁻ → 4 Al + 3 O₂"
                ]
              }
            ]
          },
          "modelAnswer": "Die Kathodenreaktion wird mit 4 multipliziert und die Anodenreaktion mit 3. Vereinfachte Gesamtgleichung: 2 Al₂O₃ → 4 Al + 3 O₂. Alternativ ionisch: 4 Al³⁺ + 6 O²⁻ → 4 Al + 3 O₂."
        },
        {
          "id": "alu-e",
          "label": "e)",
          "type": "freeText",
          "checking": {
            "type": "criteria"
          },
          "prompt": "Vergleiche die Elektrolyse mit einer galvanischen Zelle hinsichtlich Energieumwandlung, Freiwilligkeit der Reaktion und Elektrodenreaktionen.",
          "modelAnswer": "In einer galvanischen Zelle läuft eine Redoxreaktion freiwillig ab und chemische Energie wird in elektrische Energie umgewandelt. Bei der Elektrolyse wird elektrische Energie zugeführt, um eine nicht freiwillige Redoxreaktion zu erzwingen. In beiden Fällen gilt: Anode = Oxidation und Kathode = Reduktion.",
          "criteria": [
            {
              "label": "Galvanische Zelle: chemische Energie → elektrische Energie.",
              "matchMode": "any",
              "keywords": [
                "chemische energie in elektrische energie",
                "chemisch zu elektrisch",
                "liefert elektrische energie"
              ]
            },
            {
              "label": "Elektrolyse: elektrische Energie wird benötigt.",
              "matchMode": "any",
              "keywords": [
                "elektrische energie wird benötigt",
                "elektrische energie wird benoetigt",
                "energiezufuhr",
                "spannungsquelle",
                "strom"
              ]
            },
            {
              "label": "Freiwilligkeit wird verglichen.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "freiwillig"
                ],
                [
                  "nicht freiwillig",
                  "erzwungen"
                ]
              ]
            },
            {
              "label": "Anode = Oxidation und Kathode = Reduktion wird genannt.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "anode",
                  "oxidation"
                ],
                [
                  "kathode",
                  "reduktion"
                ]
              ]
            },
            {
              "label": "Der Vergleich ist strukturiert.",
              "matchMode": "any",
              "keywords": [
                "galvanische zelle",
                "elektrolyse",
                "im gegensatz",
                "während",
                "waehrend",
                "vergleich"
              ]
            }
          ]
        },
        {
          "id": "alu-f",
          "label": "f)",
          "type": "freeText",
          "checking": {
            "type": "criteria"
          },
          "prompt": "Beurteile aus chemischer und ökologischer Sicht, warum Aluminiumrecycling sinnvoll ist.",
          "modelAnswer": "Aluminiumrecycling ist sinnvoll, weil die Gewinnung von Aluminium aus Erz durch Elektrolyse sehr energieaufwendig ist. Beim Recycling wird deutlich weniger Energie benötigt. Dadurch werden Ressourcen geschont und Umweltbelastungen verringert.",
          "criteria": [
            {
              "label": "Hoher Energiebedarf der Aluminiumgewinnung wird genannt.",
              "matchMode": "any",
              "keywords": [
                "energieaufwendig",
                "viel energie",
                "hoher energiebedarf",
                "elektrolyse benötigt viel energie"
              ]
            },
            {
              "label": "Recycling benötigt weniger Energie.",
              "matchMode": "any",
              "keywords": [
                "weniger energie",
                "deutlich weniger energie",
                "spart energie",
                "energie sparen"
              ]
            },
            {
              "label": "Ressourcenschonung wird genannt.",
              "matchMode": "any",
              "keywords": [
                "ressourcen",
                "rohstoffe",
                "erz",
                "ressourcenschonung",
                "rohstoffe schonen"
              ]
            },
            {
              "label": "Ökologische Entlastung wird genannt.",
              "matchMode": "any",
              "keywords": [
                "umwelt",
                "ökologisch",
                "oekologisch",
                "co2",
                "nachhaltig",
                "umweltbelastung"
              ]
            },
            {
              "label": "Die Bewertung nutzt chemische und ökologische Aspekte.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "chemisch",
                  "elektrolyse",
                  "energie"
                ],
                [
                  "ökologisch",
                  "oekologisch",
                  "umwelt",
                  "nachhaltig"
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "galvanische-zelle-oder-elektrolyse",
      "title": "Galvanische Zelle oder Elektrolyse? — Eine Diagnoseaufgabe",
      "shortTitle": "Galvanische Zelle oder Elektrolyse?",
      "description": "Galvanische Zelle und Elektrolyse vergleichen und sicher unterscheiden.",
      "image": null,
      "context": "Zwei elektrochemische Versuche werden beschrieben. Die Schülerinnen und Schüler entscheiden, welches System freiwillig elektrische Energie liefert und welches elektrische Energie benötigt.",
      "materials": [
        {
          "title": "Material 1: Versuchsbeschreibungen",
          "type": "text-list",
          "content": [
            "Versuch A: Ein Zinkblech in Zinksalzlösung und ein Kupferblech in Kupfersalzlösung werden über eine Salzbrücke verbunden. Zwischen den Elektroden wird eine Spannung gemessen.",
            "Versuch B: Eine wässrige Kupfer(II)-chlorid-Lösung wird mit zwei Graphitelektroden verbunden. Erst nach Anschluss einer Spannungsquelle bilden sich Stoffe an den Elektroden."
          ]
        },
        {
          "title": "Material 2: Hinweise",
          "type": "text-list",
          "content": [
            "In galvanischen Zellen laufen Redoxreaktionen freiwillig ab.",
            "Bei der Elektrolyse werden nicht freiwillig ablaufende Redoxreaktionen durch elektrische Energie erzwungen."
          ]
        }
      ],
      "subtasks": [
        {
          "id": "diagnose-a",
          "label": "a)",
          "type": "choiceGroup",
          "checking": {
            "type": "direct",
            "feedback": "color"
          },
          "prompt": "Ordne Versuch A und Versuch B jeweils einem elektrochemischen Zelltyp zu.",
          "choices": {
            "versuchA": [
              "galvanische Zelle",
              "Elektrolyse"
            ],
            "versuchB": [
              "galvanische Zelle",
              "Elektrolyse"
            ]
          },
          "correctValues": {
            "versuchA": "galvanische Zelle",
            "versuchB": "Elektrolyse"
          },
          "modelAnswer": "Versuch A ist eine galvanische Zelle. Versuch B ist eine Elektrolyse."
        },
        {
          "id": "diagnose-b",
          "label": "b)",
          "type": "freeText",
          "checking": {
            "type": "criteria"
          },
          "prompt": "Begründe deine Entscheidung mit Blick auf Energieumwandlung und Freiwilligkeit.",
          "modelAnswer": "In Versuch A läuft eine freiwillige Redoxreaktion ab, bei der chemische Energie in elektrische Energie umgewandelt wird. In Versuch B wird eine Spannungsquelle benötigt, um eine nicht freiwillige Redoxreaktion zu erzwingen.",
          "criteria": [
            {
              "label": "Versuch A wird mit freiwilliger Reaktion verbunden.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "versuch a",
                  "a"
                ],
                [
                  "freiwillig",
                  "spontan"
                ]
              ]
            },
            {
              "label": "Galvanische Zelle: chemische Energie wird zu elektrischer Energie.",
              "matchMode": "any",
              "keywords": [
                "chemische energie in elektrische energie",
                "chemisch zu elektrisch",
                "liefert elektrische energie"
              ]
            },
            {
              "label": "Versuch B wird mit nicht freiwilliger Reaktion verbunden.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "versuch b",
                  "b"
                ],
                [
                  "nicht freiwillig",
                  "nicht spontan",
                  "erzwungen"
                ]
              ]
            },
            {
              "label": "Spannungsquelle wird bei der Elektrolyse genannt.",
              "matchMode": "any",
              "keywords": [
                "spannungsquelle",
                "stromquelle",
                "elektrische energie",
                "strom"
              ]
            }
          ]
        },
        {
          "id": "diagnose-c",
          "label": "c)",
          "type": "freeText",
          "checking": {
            "type": "criteria"
          },
          "prompt": "Beschreibe für Versuch A Elektronenfluss und Ionenfluss.",
          "modelAnswer": "In der Zn/Cu-Zelle fließen Elektronen außen vom Zink zur Kupferelektrode. Ionen bewegen sich durch die Salzbrücke, um den Ladungsausgleich zwischen den Halbzellen zu ermöglichen.",
          "criteria": [
            {
              "label": "Elektronenfluss von Zink zu Kupfer wird genannt.",
              "matchMode": "any",
              "keywords": [
                "von zink zu kupfer",
                "von zn zu cu",
                "zink zur kupferelektrode",
                "zink zu kupfer"
              ]
            },
            {
              "label": "Elektronenfluss über den äußeren Stromkreis wird beschrieben.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "elektronen"
                ],
                [
                  "äußerer stromkreis",
                  "aeusserer stromkreis",
                  "außen",
                  "aussen",
                  "leiter",
                  "kabel"
                ]
              ]
            },
            {
              "label": "Ionenfluss durch die Salzbrücke wird genannt.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "ionen"
                ],
                [
                  "salzbrücke",
                  "salzbruecke",
                  "ionenbrücke",
                  "ionenbruecke"
                ]
              ]
            },
            {
              "label": "Ladungsausgleich wird als Funktion des Ionenflusses genannt.",
              "matchMode": "any",
              "keywords": [
                "ladungsausgleich",
                "ladungen ausgleichen",
                "ausgleich der ladung",
                "ladungen werden ausgeglichen"
              ]
            }
          ]
        },
        {
          "id": "diagnose-d",
          "label": "d)",
          "type": "freeText",
          "checking": {
            "type": "criteria"
          },
          "prompt": "Erkläre für Versuch B, warum eine Spannungsquelle benötigt wird.",
          "modelAnswer": "Die Spannungsquelle liefert elektrische Energie und erzwingt den Elektronenfluss bzw. die Elektronenübertragung.",
          "criteria": [
            {
              "label": "Spannungsquelle liefert elektrische Energie.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "spannungsquelle",
                  "stromquelle"
                ],
                [
                  "elektrische energie",
                  "energie",
                  "strom"
                ]
              ]
            },
            {
              "label": "Elektronenfluss bzw. Elektronenübertragung wird erzwungen.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "erzwingt",
                  "erzwungen",
                  "antreibt"
                ],
                [
                  "elektronenfluss",
                  "elektronenübertragung",
                  "elektronenuebertragung",
                  "elektronen"
                ]
              ]
            },
            {
              "label": "Nicht freiwillige Reaktion wird genannt.",
              "matchMode": "any",
              "keywords": [
                "nicht freiwillig",
                "nicht spontan",
                "erzwungen"
              ]
            }
          ]
        },
        {
          "id": "diagnose-e",
          "label": "e)",
          "type": "freeText",
          "checking": {
            "type": "criteria"
          },
          "prompt": "Vergleiche die Begriffe Anode und Kathode in galvanischer Zelle und Elektrolyse.",
          "modelAnswer": "In beiden Systemen gilt: Anode ist der Ort der Oxidation, Kathode ist der Ort der Reduktion. Die Polung unterscheidet sich: In der galvanischen Zelle ist die Anode der Minuspol und die Kathode der Pluspol. Bei der Elektrolyse ist die Anode der Pluspol und die Kathode der Minuspol.",
          "criteria": [
            {
              "label": "Anode wird als Ort der Oxidation erklärt.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "anode"
                ],
                [
                  "oxidation",
                  "oxidiert"
                ]
              ]
            },
            {
              "label": "Kathode wird als Ort der Reduktion erklärt.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "kathode"
                ],
                [
                  "reduktion",
                  "reduziert"
                ]
              ]
            },
            {
              "label": "Polung der galvanischen Zelle wird genannt.",
              "matchMode": "any",
              "keywords": [
                "anode minuspol",
                "kathode pluspol",
                "minuspol anode",
                "pluspol kathode"
              ]
            },
            {
              "label": "Polung der Elektrolyse wird genannt.",
              "matchMode": "any",
              "keywords": [
                "anode pluspol",
                "kathode minuspol",
                "pluspol anode",
                "minuspol kathode"
              ]
            },
            {
              "label": "Gemeinsamkeit und Unterschied werden herausgestellt.",
              "matchMode": "any",
              "keywords": [
                "in beiden",
                "gemeinsam",
                "unterschied",
                "unterscheidet sich",
                "polung"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "e-scooter-akku-batterie",
      "title": "E-Scooter-Akku oder Einwegbatterie?",
      "shortTitle": "Akku oder Batterie?",
      "description": "Batterien und Akkus elektrochemisch vergleichen und eine alltagsnahe Entscheidung begründen.",
      "image": "assets/images/E-Scooter.png",
      "context": "Eine Familie diskutiert, ob für ein Gerät besser Einwegbatterien oder wiederaufladbare Akkus verwendet werden sollen. Ein Schüler argumentiert: „Akkus sind immer besser, weil man sie wieder aufladen kann.“",
      "materials": [
        {
          "title": "Material 1: Vergleich",
          "type": "table",
          "columns": [
            "Merkmal",
            "Einwegbatterie",
            "Lithium-Ionen-Akku"
          ],
          "rows": [
            [
              "Wiederaufladbar",
              "nein",
              "ja"
            ],
            [
              "Energieumwandlung beim Betrieb",
              "chemische Energie → elektrische Energie",
              "chemische Energie → elektrische Energie"
            ],
            [
              "Laden möglich",
              "nein",
              "ja, elektrische Energie → chemische Energie"
            ],
            [
              "Typische Anwendungen",
              "Fernbedienung, Uhr",
              "Smartphone, Laptop, E-Bike"
            ],
            [
              "Entsorgung",
              "Sammelstelle",
              "Sammelstelle, besonders sorgfältig"
            ]
          ]
        }
      ],
      "subtasks": [
        {
          "id": "scooter-a",
          "label": "a)",
          "type": "freeText",
          "checking": {
            "type": "criteria"
          },
          "prompt": "Beschreibe die Energieumwandlung beim Betrieb einer Batterie bzw. eines Akkus.",
          "modelAnswer": "Beim Betrieb einer Batterie oder eines Akkus wird chemische Energie in elektrische Energie umgewandelt. Die elektrische Energie kann dann ein Gerät betreiben.",
          "criteria": [
            {
              "label": "Chemische Energie wird genannt.",
              "matchMode": "any",
              "keywords": [
                "chemische energie"
              ]
            },
            {
              "label": "Elektrische Energie wird genannt.",
              "matchMode": "any",
              "keywords": [
                "elektrische energie",
                "strom"
              ]
            },
            {
              "label": "Die Umwandlung chemische Energie → elektrische Energie wird korrekt beschrieben.",
              "matchMode": "any",
              "keywords": [
                "chemische energie in elektrische energie",
                "chemisch zu elektrisch"
              ]
            }
          ]
        },
        {
          "id": "scooter-b",
          "label": "b)",
          "type": "freeText",
          "checking": {
            "type": "criteria"
          },
          "prompt": "Erkläre, warum ein Lithium-Ionen-Akku wiederaufladbar ist, eine Einwegbatterie aber nicht sinnvoll wiederaufgeladen wird.",
          "modelAnswer": "Ein Lithium-Ionen-Akku ist so aufgebaut, dass die elektrochemischen Vorgänge beim Laden weitgehend umkehrbar sind. Dabei wird elektrische Energie in chemische Energie umgewandelt. Eine Einwegbatterie ist nicht für diese Umkehrreaktion ausgelegt und kann deshalb nicht sinnvoll wiederaufgeladen werden.",
          "criteria": [
            {
              "label": "Umkehrbarkeit der Akku-Reaktion wird genannt.",
              "matchMode": "any",
              "keywords": [
                "umkehrbar",
                "umkehrreaktion",
                "umgekehrt",
                "rückgängig",
                "rueckgaengig"
              ]
            },
            {
              "label": "Beim Laden wird elektrische Energie in chemische Energie umgewandelt.",
              "matchMode": "any",
              "keywords": [
                "elektrische energie in chemische energie",
                "elektrisch zu chemisch",
                "laden",
                "aufladen"
              ]
            },
            {
              "label": "Einwegbatterie ist nicht zum Wiederaufladen ausgelegt.",
              "matchMode": "any",
              "keywords": [
                "nicht ausgelegt",
                "nicht wiederaufladbar",
                "nicht sinnvoll wiederaufgeladen",
                "einwegbatterie"
              ]
            },
            {
              "label": "Der Unterschied wird elektrochemisch begründet.",
              "matchMode": "any",
              "keywords": [
                "elektrochemisch",
                "redox",
                "reaktion",
                "umkehrbar",
                "umkehrreaktion"
              ]
            }
          ]
        },
        {
          "id": "scooter-c",
          "label": "c)",
          "type": "freeText",
          "checking": {
            "type": "criteria"
          },
          "prompt": "Vergleiche Batterie und Akku aus elektrochemischer Sicht.",
          "modelAnswer": "Beide liefern beim Betrieb elektrische Energie durch eine Redoxreaktion. Bei einer Einwegbatterie ist die Reaktion praktisch nicht sinnvoll umkehrbar. Bei einem Akku können die Vorgänge durch Zufuhr elektrischer Energie weitgehend umgekehrt werden, sodass chemische Energie erneut gespeichert wird.",
          "criteria": [
            {
              "label": "Beide Systeme werden als elektrochemische Energiequellen beschrieben.",
              "matchMode": "any",
              "keywords": [
                "elektrochemisch",
                "redoxreaktion",
                "energiequelle",
                "spannungsquelle"
              ]
            },
            {
              "label": "Beide wandeln beim Betrieb chemische in elektrische Energie um.",
              "matchMode": "any",
              "keywords": [
                "chemische energie in elektrische energie",
                "chemisch zu elektrisch"
              ]
            },
            {
              "label": "Akku wird als wiederaufladbar bzw. umkehrbar beschrieben.",
              "matchMode": "any",
              "keywords": [
                "akku wiederaufladbar",
                "wiederaufladbar",
                "umkehrbar",
                "aufladen"
              ]
            },
            {
              "label": "Einwegbatterie wird als nicht sinnvoll wiederaufladbar beschrieben.",
              "matchMode": "any",
              "keywords": [
                "einwegbatterie nicht wiederaufladbar",
                "nicht sinnvoll wiederaufgeladen",
                "nicht wiederaufladbar"
              ]
            }
          ]
        },
        {
          "id": "scooter-d",
          "label": "d)",
          "type": "freeText",
          "checking": {
            "type": "criteria"
          },
          "prompt": "Beurteile die Aussage: „Akkus sind immer besser.“ Nutze mindestens drei Kriterien, z. B. Nutzungshäufigkeit, Energiebedarf, Sicherheit, Entsorgung oder Nachhaltigkeit.",
          "modelAnswer": "Die Aussage ist zu pauschal. Akkus sind bei häufig genutzten Geräten mit hohem Energiebedarf sinnvoll, z. B. Smartphone oder E-Bike. Bei selten genutzten Geräten mit geringem Energiebedarf kann eine Einwegbatterie praktisch sinnvoll sein. Außerdem müssen Sicherheit, fachgerechte Entsorgung, Herstellung und Nachhaltigkeit berücksichtigt werden.",
          "criteria": [
            {
              "label": "Die Aussage wird differenziert beurteilt.",
              "matchMode": "any",
              "keywords": [
                "zu pauschal",
                "nicht immer",
                "kommt darauf an",
                "differenziert",
                "abhängig"
              ]
            },
            {
              "label": "Nutzungshäufigkeit wird als Kriterium genutzt.",
              "matchMode": "any",
              "keywords": [
                "nutzungshäufigkeit",
                "nutzungshaeufigkeit",
                "häufig genutzt",
                "haeufig genutzt",
                "selten genutzt"
              ]
            },
            {
              "label": "Energiebedarf wird als Kriterium genutzt.",
              "matchMode": "any",
              "keywords": [
                "energiebedarf",
                "viel energie",
                "wenig energie",
                "hoher energiebedarf",
                "geringer energiebedarf"
              ]
            },
            {
              "label": "Sicherheit wird als Kriterium genutzt.",
              "matchMode": "any",
              "keywords": [
                "sicherheit",
                "brandgefahr",
                "beschädigung",
                "beschaedigung",
                "kurzschluss",
                "gefährlich",
                "gefaehrlich"
              ]
            },
            {
              "label": "Entsorgung oder Nachhaltigkeit wird als Kriterium genutzt.",
              "matchMode": "any",
              "keywords": [
                "entsorgung",
                "nachhaltigkeit",
                "sammelstelle",
                "ressourcen",
                "umwelt",
                "recycling"
              ]
            },
            {
              "label": "Mindestens drei Kriterien werden erkennbar genutzt.",
              "matchMode": "atLeastGroups",
              "requiredGroups": 3,
              "keywordGroups": [
                [
                  "nutzungshäufigkeit",
                  "nutzungshaeufigkeit",
                  "häufig",
                  "haeufig",
                  "selten"
                ],
                [
                  "energiebedarf",
                  "energie",
                  "strombedarf"
                ],
                [
                  "sicherheit",
                  "brandgefahr",
                  "kurzschluss",
                  "beschädigung",
                  "beschaedigung"
                ],
                [
                  "entsorgung",
                  "sammelstelle",
                  "recycling"
                ],
                [
                  "nachhaltigkeit",
                  "ressourcen",
                  "umwelt"
                ],
                [
                  "kosten",
                  "preis",
                  "teuer",
                  "billig"
                ]
              ]
            }
          ]
        },
        {
          "id": "scooter-e",
          "label": "e)",
          "type": "freeText",
          "checking": {
            "type": "criteria"
          },
          "prompt": "Formuliere eine begründete Empfehlung hinsichtlich Batterie oder Akku für zwei unterschiedliche Alltagssituationen: 1. Fernbedienung 2. E-Bike.",
          "modelAnswer": "Für eine Fernbedienung kann eine Einwegbatterie sinnvoll sein, weil sie wenig Energie benötigt, selten gewechselt werden muss und lange hält. Für ein E-Bike ist ein wiederaufladbarer Akku sinnvoll bzw. notwendig, weil es häufig genutzt wird, einen hohen Energiebedarf hat und wieder aufgeladen werden muss.",
          "criteria": [
            {
              "label": "Für die Fernbedienung wird eine begründete Empfehlung formuliert.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "fernbedienung"
                ],
                [
                  "batterie",
                  "einwegbatterie"
                ],
                [
                  "weil",
                  "da",
                  "gering",
                  "wenig",
                  "lange"
                ]
              ]
            },
            {
              "label": "Der geringe Energiebedarf der Fernbedienung wird berücksichtigt.",
              "matchMode": "any",
              "keywords": [
                "wenig energie",
                "geringer energiebedarf",
                "lange hält",
                "lange haelt",
                "selten gewechselt"
              ]
            },
            {
              "label": "Für das E-Bike wird ein Akku empfohlen.",
              "matchMode": "allGroups",
              "keywordGroups": [
                [
                  "e-bike",
                  "ebike",
                  "e bike"
                ],
                [
                  "akku"
                ]
              ]
            },
            {
              "label": "Der hohe Energiebedarf oder die Wiederaufladbarkeit beim E-Bike wird begründet.",
              "matchMode": "any",
              "keywords": [
                "hoher energiebedarf",
                "viel energie",
                "wiederaufladbar",
                "aufladen",
                "häufig genutzt",
                "haeufig genutzt"
              ]
            },
            {
              "label": "Die Empfehlungen sind alltagsbezogen und differenziert.",
              "matchMode": "any",
              "keywords": [
                "fernbedienung",
                "e-bike",
                "e bike",
                "alltag",
                "kommt darauf an",
                "je nach"
              ]
            }
          ]
        }
      ]
    }
  ],
  "klausurTaskMeta": {
    "title": "Klausurähnliche Aufgaben",
    "subtitle": "Bearbeite materialgestützte Aufgaben im Stil einer Klausur. Du kannst deine Antworten formulieren, mit Kriterien prüfen und anschließend mit einer Musterlösung vergleichen.",
    "note": "Der Kriteriencheck prüft, ob bestimmte Fachbegriffe, Synonyme oder zentrale Aussagen in deiner Antwort vorkommen. Er ersetzt keine fachliche Korrektur durch eine Lehrkraft.",
    "printButtonLabel": "Aufgabe drucken / als PDF speichern",
    "overviewButtonLabel": "Zurück zur Aufgabenübersicht"
  }
};
