# Elektrochemie Lernprogramm

Eine lokale Web-App mit interaktiven Übungen und Erklärungen zur Elektrochemie. Die App enthält das Modul **Redoxreaktionen aufstellen** mit drei Übungsniveaus: **einfach**, **mittel** und **schwer**.

## Installation

```bash
npm install
```

## Entwicklungsstart

```bash
npm run dev
```

## Direkt lokal öffnen

Die App kann zusätzlich direkt über `index.html` im Browser geöffnet werden. Dafür lädt die Startdatei `local-app.js`, eine browserfertige Version ohne Entwicklungsserver.

## Build

```bash
npm run build
```

## Vorschau

```bash
npm run preview
```

## Veröffentlichung über GitHub Pages

Die App ist als statische Webseite baubar. In `vite.config.js` ist `base: './'` gesetzt, damit relative Pfade funktionieren. Falls die App in einem GitHub-Repository mit festem Namen liegt, kann alternativ `base: '/repository-name/'` gesetzt werden.

Nach dem Build liegt die fertige Webseite im Ordner `dist/`. Dieser Ordner kann über GitHub Pages veröffentlicht werden, zum Beispiel mit GitHub Actions oder einem passenden Deployment-Workflow.

## Simulationen

Die Daniell-Element-Simulation liegt unter `public/Simulationen/Galvanische_Zelle/`. Die Startseite enthält eine aktive Kachel „Galvanische Zelle – Daniell-Element Simulation“, die auf `Simulationen/Galvanische_Zelle/index.html` verweist. Beim Vite-Build wird der Inhalt aus `public/` in die statische Ausgabe übernommen.

## Neue Aufgaben ergänzen

Einfache Übungen für das Redox-Modul werden in `src/data/redoxExercises.js` ergänzt.

Mittlere Übungen liegen in `src/data/redoxMediumExercises.js`. Neue mittlere Aufgaben können dort mit `level: "mittel"` ergänzt werden. Jede Aufgabe enthält unter anderem `id`, `level`, `type`, `givenForms`, `prompt`, `answer`, `acceptedAnswers` und `explanation`.

Schwere Übungen liegen in `src/data/redoxHardExercises.js`. Sie enthalten auch Redoxreaktionen in saurer Lösung. Bei diesen Aufgaben können `H⁺` und `H₂O` als Hilfsstoffe zum Ausgleichen verwendet werden. Neue schwere Aufgaben werden dort mit `level: "schwer"` ergänzt.

Für besondere Aufgabenformate können zusätzliche Felder verwendet werden, zum Beispiel `options`, `pairs`, `partialReactions`, `template`, `blanks` oder `correctBlanks`.

## Strukturierte chemische Eingabe

Chemische Gleichungen werden in den Übungen nicht als großes Freitextfeld eingegeben. Jedes Teilchen besteht aus einzelnen Feldern für Koeffizient, Formel, Index und Ladung. Pluszeichen und Reaktionspfeile sind vorgegeben und nicht editierbar.

Die Tab-Taste springt von links nach rechts durch die Felder. Mit Shift + Tab kann man zurückspringen.

Neue Aufgaben können optional ein `answerTemplate` erhalten. Ohne eigenes Template wird die Eingabemaske aus dem vorhandenen Feld `answer` abgeleitet.

Auch komplexere Ionen wie `MnO₄⁻`, `Cr₂O₇²⁻`, `C₂O₄²⁻`, `SO₃²⁻` oder `SO₄²⁻` werden über die strukturierte Eingabe erfasst. Das Formel-Feld darf dabei längere Formeln wie `MnO4`, `Cr2O7`, `C2O4`, `SO3` oder `SO4` enthalten; Index und Ladung können getrennt eingetragen werden.

## Neue Kacheln oder Module ergänzen

Neue Themenkacheln werden in `src/data/modules.js` ergänzt. Für vollständig neue Module können anschließend eigene Seiten in `src/pages/` und passende Komponenten in `src/components/` angelegt werden.
