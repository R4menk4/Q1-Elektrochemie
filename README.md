# Elektrochemie Lernprogramm

Eine lokale Web-App mit interaktiven Uebungen und Erklaerungen zur Elektrochemie. Die App enthaelt unter anderem den Selbstcheck, das Modul **Redoxreaktionen aufstellen** mit den Niveaus **einfach**, **mittel** und **schwer**, die Daniell-Element-Simulation und das Modul **Klausuraehnliche Aufgaben**.

## Installation

```bash
npm install
```

## Entwicklungsstart

```bash
npm run dev
```

## Direkt lokal oeffnen

Die App kann zusaetzlich direkt ueber `index.html` im Browser geoeffnet werden. Diese Startdatei laedt eine browserfertige Version ohne Entwicklungsserver:

- `klausur-data-20260612.js`
- `local-app-klausur-20260612.js`
- `global-klausur-20260612.css`

Fuer GitHub Pages liegen diese browserfertigen Dateien zusaetzlich unter `public/`.

## Build

```bash
npm run build
```

## Vorschau

```bash
npm run preview
```

## Veroeffentlichung ueber GitHub Pages

Die App ist als statische Webseite baubar. In `vite.config.js` ist `base: './'` gesetzt, damit relative Pfade funktionieren. Falls die App in einem GitHub-Repository mit festem Namen liegt, kann alternativ `base: '/repository-name/'` gesetzt werden.

Nach dem Build liegt die fertige Webseite im Ordner `dist/`. Dieser Ordner kann ueber GitHub Pages veroeffentlicht werden, zum Beispiel mit GitHub Actions oder einem passenden Deployment-Workflow.

## Simulationen

Die Daniell-Element-Simulation liegt unter `public/Simulationen/Galvanische_Zelle/`. Die Startseite enthaelt eine aktive Kachel `Galvanische Zelle - Daniell-Element Simulation`, die auf `Simulationen/Galvanische_Zelle/index.html` verweist.

## Selbstcheck

Der Selbstcheck ist auf der Startseite als hervorgehobene Kachel erreichbar. Die Kompetenzen liegen in `src/data/selfCheckData.js`; zusaetzlich gibt es `src/data/selfCheckCompetencies.js` als Import-Alias. Abgehakte Kompetenzen werden lokal im Browser gespeichert und koennen gedruckt oder als PDF gespeichert werden.

## Klausuraehnliche Aufgaben

Das Modul **Klausuraehnliche Aufgaben** ist ueber eine aktive Kachel auf der Startseite erreichbar.

Die Aufgaben liegen in:

```text
src/data/klausurTasks.js
```

Die Bilder werden ueber die in der Datendatei angegebenen Pfade geladen:

```text
assets/images/
```

Freitextantworten und strukturierte Eingaben werden lokal im Browser gespeichert. Der Kriteriencheck prueft Schluesselbegriffe und zentrale Aussagen, ersetzt aber keine Korrektur durch eine Lehrkraft. Jede Aufgabe kann ueber den Druckdialog gedruckt oder als PDF gespeichert werden.

Neue Klausuraufgaben werden in `src/data/klausurTasks.js` ergaenzt. Fuer die direkt anklickbare `index.html` wird zusaetzlich die browserfertige Datendatei `klausur-data-20260612.js` geladen.

`src/data/klausurTasks.js` enthaelt direkte Pruefungen (`checking: { type: "direct" }`) und Kriterienpruefungen (`checking: { type: "criteria" }`). Der Kriterienchecker unterstuetzt `keywordGroups`, `requiredGroups` und Synonyme aus `chemistryAliases`, ersetzt aber weiterhin keine Lehrkraftkorrektur.

## Neue Redox-Aufgaben ergaenzen

Einfache Uebungen fuer das Redox-Modul werden in `src/data/redoxExercises.js` ergaenzt.

Mittlere Uebungen liegen in `src/data/redoxMediumExercises.js`. Neue mittlere Aufgaben koennen dort mit `level: "mittel"` ergaenzt werden.

Schwere Uebungen liegen in `src/data/redoxHardExercises.js`. Sie enthalten auch Redoxreaktionen in saurer Loesung. Bei diesen Aufgaben koennen `H+` und `H2O` als Hilfsstoffe zum Ausgleichen verwendet werden.

## Strukturierte chemische Eingabe

Chemische Gleichungen werden in den Redox-Uebungen nicht als grosses Freitextfeld eingegeben. Jedes Teilchen besteht aus einzelnen Feldern fuer Koeffizient, Formel, Index und Ladung. Pluszeichen und Reaktionspfeile sind vorgegeben und nicht editierbar.

Die Tab-Taste springt von links nach rechts durch die Felder. Mit Shift + Tab kann man zurueckspringen.

Neue Aufgaben koennen optional ein `answerTemplate` erhalten. Ohne eigenes Template wird die Eingabemaske aus dem vorhandenen Feld `answer` abgeleitet.

## Neue Kacheln oder Module ergaenzen

Neue Themenkacheln werden in `src/data/modules.js` oder direkt auf der Startseite ergaenzt. Fuer vollstaendig neue Module koennen eigene Seiten in `src/pages/` und passende Komponenten in `src/components/` angelegt werden.
