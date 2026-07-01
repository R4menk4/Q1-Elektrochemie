// src/components/ElectrodePotentialModule.jsx

import { useMemo, useState } from "react";
import {
  electrodePotentialMeta,
  electrodePotentialOverviewCards,
  electrodePotentialIntroPage,
  standardHydrogenElectrodePage,
  electrodePotentialPracticeOverview,
  electrodePotentialPracticeExercises,
  standardPotentials
} from "../data/electrodePotentialModule";

const normalize = (value) =>
  String(value ?? "")
    .toLowerCase()
    .trim()
    .replaceAll("−", "-")
    .replaceAll("→", "->")
    .replaceAll("²⁺", "2+")
    .replaceAll("⁺", "+")
    .replaceAll("⁻", "-")
    .replaceAll("ä", "ae")
    .replaceAll("ö", "oe")
    .replaceAll("ü", "ue")
    .replaceAll("ß", "ss")
    .replace(/\s+/g, " ");

const formatVoltage = (value) =>
  `${value >= 0 ? "+" : "−"}${Math.abs(value).toFixed(2).replace(".", ",")} V`;

const isAccepted = (input, acceptedValues = []) => {
  const normalizedInput = normalize(input);
  return acceptedValues.some((value) => normalize(value) === normalizedInput);
};

const isCloseNumber = (input, correctValue, tolerance = 0.01) => {
  const cleaned = String(input ?? "").replace(",", ".").replace(/[^\d.-]/g, "");
  const number = Number(cleaned);
  if (Number.isNaN(number)) return false;
  return Math.abs(number - correctValue) <= tolerance;
};

const getFieldStatusClass = (isChecked, isCorrect) => {
  if (!isChecked) return "";
  return isCorrect ? "is-correct" : "is-wrong";
};

const afbLabel = (afb) => `AFB ${afb}`;

function OperatorChips({ operators = [] }) {
  if (!operators.length) return null;

  return (
    <div className="operator-chips" aria-label="Operatoren">
      {operators.map((operator) => (
        <span
          key={`${operator.name}-${operator.afb}`}
          className={`operator-chip afb-${String(operator.afb).toLowerCase()}`}
        >
          {operator.name} · {afbLabel(operator.afb)}
        </span>
      ))}
    </div>
  );
}

function BackButton({ children = "Zurück", onClick }) {
  return (
    <button type="button" className="secondary-button back-button" onClick={onClick}>
      ← {children}
    </button>
  );
}

function PageHeader({ title, subtitle, onBack, backLabel }) {
  return (
    <header className="module-page-header">
      {onBack && <BackButton onClick={onBack}>{backLabel}</BackButton>}
      <h1>{title}</h1>
      {subtitle && <p className="module-subtitle">{subtitle}</p>}
    </header>
  );
}

function CardGrid({ children }) {
  return <div className="module-card-grid">{children}</div>;
}

function ModuleCard({ icon, title, description, operators, onClick }) {
  return (
    <button type="button" className="module-card" onClick={onClick}>
      {icon && <span className="module-card-icon">{icon}</span>}
      <h2>{title}</h2>
      <p>{description}</p>
      <OperatorChips operators={operators} />
      <span className="module-card-action">Öffnen →</span>
    </button>
  );
}

function MaterialBlock({ material }) {
  if (!material) return null;

  if (material.type === "table") {
    return (
      <section className="material-block">
        <h3>{material.title}</h3>
        <div className="table-scroll">
          <table className="material-table">
            <thead>
              <tr>
                {material.columns.map((column) => (
                  <th key={column}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {material.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }

  if (material.type === "text-list" || material.type === "reaction-list") {
    return (
      <section className="material-block">
        <h3>{material.title}</h3>
        <ul>
          {material.content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <section className="material-block">
      <h3>{material.title}</h3>
      <p>{material.content}</p>
    </section>
  );
}

function Materials({ materials = [] }) {
  if (!materials.length) return null;

  return (
    <div className="materials">
      {materials.map((material, index) => (
        <MaterialBlock key={`${material.title}-${index}`} material={material} />
      ))}
    </div>
  );
}

function InfoSections({ sections = [] }) {
  return (
    <div className="info-sections">
      {sections.map((section) => (
        <section key={section.id} className="info-section">
          <h2>{section.title}</h2>
          {section.content?.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          {section.formula && (
            <div className="formula-box" aria-label="Formel">
              {section.formula}
            </div>
          )}

          {section.keyIdea && (
            <div className="key-idea">
              <strong>Merksatz:</strong> {section.keyIdea}
            </div>
          )}

          {section.labels && (
            <div className="label-chip-row">
              {section.labels.map((label) => (
                <span key={label} className="label-chip">
                  {label}
                </span>
              ))}
            </div>
          )}

          {section.example && (
            <div className="example-box">
              <h3>{section.example.title}</h3>
              <ul>
                {section.example.given.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <ol>
                {section.example.solution.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>
          )}
        </section>
      ))}
    </div>
  );
}

function HalfCellSelector({ interactiveElement }) {
  const [halfCellA, setHalfCellA] = useState(interactiveElement.defaultSelection.halfCellA);
  const [halfCellB, setHalfCellB] = useState(interactiveElement.defaultSelection.halfCellB);

  const result = useMemo(() => {
    const a = standardPotentials.find((item) => item.id === halfCellA);
    const b = standardPotentials.find((item) => item.id === halfCellB);

    if (!a || !b || a.id === b.id) return null;

    const cathode = a.potential > b.potential ? a : b;
    const anode = a.potential > b.potential ? b : a;
    const voltage = cathode.potential - anode.potential;

    return {
      anode,
      cathode,
      voltage,
      electronFlow: `${anode.symbol} → ${cathode.symbol}`
    };
  }, [halfCellA, halfCellB]);

  return (
    <section className="interactive-box">
      <h2>{interactiveElement.title}</h2>
      <p>{interactiveElement.instruction}</p>

      <div className="selector-row">
        <label>
          Halbzelle 1
          <select value={halfCellA} onChange={(event) => setHalfCellA(event.target.value)}>
            {interactiveElement.potentials.map((potential) => (
              <option key={potential.id} value={potential.id}>
                {potential.redoxPair} ({formatVoltage(potential.potential)})
              </option>
            ))}
          </select>
        </label>

        <label>
          Halbzelle 2
          <select value={halfCellB} onChange={(event) => setHalfCellB(event.target.value)}>
            {interactiveElement.potentials.map((potential) => (
              <option key={potential.id} value={potential.id}>
                {potential.redoxPair} ({formatVoltage(potential.potential)})
              </option>
            ))}
          </select>
        </label>
      </div>

      {!result && (
        <p className="hint-text">Wähle zwei unterschiedliche Halbzellen aus.</p>
      )}

      {result && (
        <div className="result-box">
          <p>
            <strong>Anode:</strong> {result.anode.redoxPair} — Oxidation
          </p>
          <p>
            <strong>Kathode:</strong> {result.cathode.redoxPair} — Reduktion
          </p>
          <p>
            <strong>Elektronenfluss:</strong> außen von {result.anode.symbol} zu{" "}
            {result.cathode.symbol}
          </p>
          <p>
            <strong>Zellspannung:</strong> U = {formatVoltage(result.cathode.potential)} − (
            {formatVoltage(result.anode.potential)}) ={" "}
            <strong>{result.voltage.toFixed(2).replace(".", ",")} V</strong>
          </p>
          <p>
            <strong>Beurteilung:</strong>{" "}
            {result.voltage > 0
              ? "Die Reaktion kann in dieser Richtung freiwillig ablaufen."
              : "Die Reaktion läuft in dieser Richtung nicht freiwillig ab."}
          </p>
        </div>
      )}
    </section>
  );
}

function StandardHydrogenSimulation({ simulation }) {
  const [selectedId, setSelectedId] = useState(simulation.selectableHalfCells[0].id);
  const selected = simulation.selectableHalfCells.find((cell) => cell.id === selectedId);

  const metalPotential = selected?.potential ?? 0;
  const shePotential = simulation.referenceElectrode.potential;

  const metalIsCathode = metalPotential > shePotential;
  const anode = metalIsCathode ? "Standardwasserstoffelektrode" : selected.title;
  const cathode = metalIsCathode ? selected.title : "Standardwasserstoffelektrode";
  const voltage = Math.abs(metalPotential - shePotential);

  return (
    <section className="interactive-box she-simulation">
      <h2>{simulation.title}</h2>
      <p>{simulation.instruction}</p>

      <label className="single-select">
        Metallhalbzelle auswählen
        <select value={selectedId} onChange={(event) => setSelectedId(event.target.value)}>
          {simulation.selectableHalfCells.map((cell) => (
            <option key={cell.id} value={cell.id}>
              {cell.redoxPair} ({formatVoltage(cell.potential)})
            </option>
          ))}
        </select>
      </label>

      <div className="she-visual" aria-label="Vereinfachte Simulation der Standardwasserstoffelektrode">
        <div className="half-cell-card">
          <h3>{simulation.referenceElectrode.title}</h3>
          <p className="large-symbol">Pt | H₂ | H⁺</p>
          <p>E° = 0,00 V</p>
          <div className="bubble-row">
            <span>H₂</span>
            <span>H₂</span>
            <span>H₂</span>
          </div>
        </div>

        <div className="voltmeter-card">
          <span className="electron-arrow">
            e⁻ {metalIsCathode ? "←" : "→"}
          </span>
          <strong>{voltage.toFixed(2).replace(".", ",")} V</strong>
        </div>

        <div className="half-cell-card">
          <h3>{selected.title}</h3>
          <p className="large-symbol">{selected.redoxPair}</p>
          <p>E° = {formatVoltage(selected.potential)}</p>
        </div>
      </div>

      <div className="result-box">
        <p>
          <strong>Anode:</strong> {anode}
        </p>
        <p>
          <strong>Kathode:</strong> {cathode}
        </p>
        <p>
          <strong>Oxidation:</strong> {selected.oxidation}
        </p>
        <p>
          <strong>Reduktion:</strong> {selected.reduction}
        </p>
      </div>

      <div className="explanation-list">
        {selected.explanation.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </section>
  );
}

function TextInputField({ value, onChange, checked, correct }) {
  return (
    <input
      type="text"
      value={value ?? ""}
      onChange={(event) => onChange(event.target.value)}
      className={`small-answer-input ${getFieldStatusClass(checked, correct)}`}
    />
  );
}

function MatchingExercise({ exercise }) {
  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState(false);
  const task = exercise.tasks[0];

  const updateAnswer = (left, value) => {
    setAnswers((current) => ({ ...current, [left]: value }));
  };

  return (
    <div className="exercise-content">
      <Materials materials={exercise.materials} />

      <section className="task-box">
        <h2>{task.prompt}</h2>

        <div className="matching-grid">
          {task.pairs.map((pair) => {
            const selected = answers[pair.left] ?? "";
            const correct = selected === pair.correctRight;

            return (
              <label key={pair.left} className="matching-row">
                <span>{pair.left}</span>
                <select
                  value={selected}
                  onChange={(event) => updateAnswer(pair.left, event.target.value)}
                  className={getFieldStatusClass(checked, correct)}
                >
                  <option value="">Bitte auswählen</option>
                  {task.rightOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            );
          })}
        </div>

        <button type="button" className="primary-button" onClick={() => setChecked(true)}>
          Antwort prüfen
        </button>

        {checked && <ModelAnswer text={exercise.modelAnswer} />}
      </section>
    </div>
  );
}

function StructuredFieldsExercise({ exercise }) {
  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState(false);

  const updateAnswer = (taskId, fieldId, value) => {
    setAnswers((current) => ({
      ...current,
      [`${taskId}-${fieldId}`]: value
    }));
  };

  return (
    <div className="exercise-content">
      <Materials materials={exercise.materials} />

      {exercise.tasks.map((task) => (
        <section key={task.id} className="task-box">
          <h2>{task.prompt}</h2>

          <div className="structured-field-grid">
            {task.fields.map((field) => {
              const key = `${task.id}-${field.id}`;
              const correct = isAccepted(answers[key], field.correctValues);

              return (
                <label key={key}>
                  {field.label}
                  <input
                    type="text"
                    value={answers[key] ?? ""}
                    onChange={(event) => updateAnswer(task.id, field.id, event.target.value)}
                    className={getFieldStatusClass(checked, correct)}
                  />
                </label>
              );
            })}
          </div>
        </section>
      ))}

      <button type="button" className="primary-button" onClick={() => setChecked(true)}>
        Antwort prüfen
      </button>

      {checked && <ModelAnswer text={exercise.modelAnswer} />}
    </div>
  );
}

function CalculationExercise({ exercise }) {
  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState(false);

  const tasks = exercise.tasks ?? [exercise];

  const updateAnswer = (taskId, fieldId, value) => {
    setAnswers((current) => ({
      ...current,
      [`${taskId}-${fieldId}`]: value
    }));
  };

  return (
    <div className="exercise-content">
      {exercise.formula && <div className="formula-box">{exercise.formula}</div>}
      <Materials materials={exercise.materials} />

      {tasks.map((task) => (
        <section key={task.id} className="task-box">
          <h2>{task.prompt}</h2>

          <div className="calculation-grid">
            {task.fields.map((field) => {
              const key = `${task.id}-${field.id}`;
              const correct = isCloseNumber(
                answers[key],
                field.correctValue,
                task.tolerance ?? exercise.tolerance ?? 0.01
              );

              return (
                <label key={key}>
                  {field.label}
                  <input
                    type="text"
                    inputMode="decimal"
                    value={answers[key] ?? ""}
                    onChange={(event) => updateAnswer(task.id, field.id, event.target.value)}
                    className={getFieldStatusClass(checked, correct)}
                  />
                </label>
              );
            })}
          </div>

          {checked && task.modelAnswer && <ModelAnswer text={task.modelAnswer} />}
        </section>
      ))}

      <button type="button" className="primary-button" onClick={() => setChecked(true)}>
        Antwort prüfen
      </button>
    </div>
  );
}

function EquationField({ config, value, onChange, checked }) {
  const correct = isAccepted(value, config.accepted ?? [config.correct]);

  return (
    <input
      type="text"
      value={value ?? ""}
      onChange={(event) => onChange(event.target.value)}
      className={`equation-input ${getFieldStatusClass(checked, correct)}`}
      aria-label="Gleichungsfeld"
    />
  );
}

function ParticlePart({ part, path, values, setValue, checked }) {
  return (
    <span className="equation-particle">
      <EquationField
        config={part.coefficient}
        value={values[`${path}-coefficient`]}
        onChange={(value) => setValue(`${path}-coefficient`, value)}
        checked={checked}
      />

      {part.formula.map((item, index) => {
        const base = `${path}-formula-${index}`;

        return (
          <span key={base} className="formula-unit">
            <EquationField
              config={item.element}
              value={values[`${base}-element`]}
              onChange={(value) => setValue(`${base}-element`, value)}
              checked={checked}
            />

            <sub>
              <EquationField
                config={item.index}
                value={values[`${base}-index`]}
                onChange={(value) => setValue(`${base}-index`, value)}
                checked={checked}
              />
            </sub>

            <sup>
              <EquationField
                config={item.charge}
                value={values[`${base}-charge`]}
                onChange={(value) => setValue(`${base}-charge`, value)}
                checked={checked}
              />
            </sup>
          </span>
        );
      })}
    </span>
  );
}

function ElectronPart({ part, path, values, setValue, checked }) {
  return (
    <span className="equation-electron">
      <EquationField
        config={part.coefficient}
        value={values[`${path}-coefficient`]}
        onChange={(value) => setValue(`${path}-coefficient`, value)}
        checked={checked}
      />
      <span> e</span>
      <sup>
        <EquationField
          config={part.charge}
          value={values[`${path}-charge`]}
          onChange={(value) => setValue(`${path}-charge`, value)}
          checked={checked}
        />
      </sup>
    </span>
  );
}

function RedoxEquationScaffoldExercise({ exercise }) {
  const [values, setValues] = useState({});
  const [checked, setChecked] = useState(false);

  const setValue = (key, value) => {
    setValues((current) => ({ ...current, [key]: value }));
  };

  return (
    <div className="exercise-content">
      <Materials materials={exercise.materials} />

      <section className="task-box">
        {exercise.prompt && <h2>{exercise.prompt}</h2>}
        {exercise.scaffold?.instruction && <p>{exercise.scaffold.instruction}</p>}

        <div className="equation-scaffold-list">
          {exercise.scaffold.equations.map((equation, equationIndex) => (
            <div key={equation.label} className="equation-row">
              <strong>{equation.label}:</strong>

              <div className="equation-line">
                {equation.parts.map((part, partIndex) => {
                  const path = `${equationIndex}-${partIndex}`;

                  if (part.type === "plus") {
                    return (
                      <span key={path} className="equation-symbol">
                        +
                      </span>
                    );
                  }

                  if (part.type === "arrow") {
                    return (
                      <span key={path} className="equation-symbol">
                        →
                      </span>
                    );
                  }

                  if (part.type === "electron") {
                    return (
                      <ElectronPart
                        key={path}
                        part={part}
                        path={path}
                        values={values}
                        setValue={setValue}
                        checked={checked}
                      />
                    );
                  }

                  return (
                    <ParticlePart
                      key={path}
                      part={part}
                      path={path}
                      values={values}
                      setValue={setValue}
                      checked={checked}
                    />
                  );
                })}
              </div>

              {checked && (
                <p className="expected-display">
                  Lösung: {equation.expectedDisplay}
                </p>
              )}
            </div>
          ))}
        </div>

        <button type="button" className="primary-button" onClick={() => setChecked(true)}>
          Antwort prüfen
        </button>

        {checked && <ModelAnswer text={exercise.modelAnswer} />}
      </section>
    </div>
  );
}

function CriteriaList({ criteria = [], answer }) {
  const normalizedAnswer = normalize(answer);

  const isCriterionMet = (criterion) => {
    if (criterion.matchMode === "allGroups") {
      return criterion.keywordGroups.every((group) =>
        group.some((keyword) => normalizedAnswer.includes(normalize(keyword)))
      );
    }

    if (criterion.matchMode === "atLeastGroups") {
      const hits = criterion.keywordGroups.filter((group) =>
        group.some((keyword) => normalizedAnswer.includes(normalize(keyword)))
      ).length;

      return hits >= criterion.requiredGroups;
    }

    if (criterion.matchMode === "all") {
      return criterion.keywords.every((keyword) =>
        normalizedAnswer.includes(normalize(keyword))
      );
    }

    return criterion.keywords.some((keyword) =>
      normalizedAnswer.includes(normalize(keyword))
    );
  };

  return (
    <div className="criteria-box">
      <h3>Deine Antwort enthält:</h3>
      <ul>
        {criteria.map((criterion) => {
          const met = isCriterionMet(criterion);

          return (
            <li key={criterion.label} className={met ? "criterion-met" : "criterion-open"}>
              {met ? "✓" : "○"} {criterion.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function MixedSpontaneityExercise({ exercise }) {
  const [calculationAnswers, setCalculationAnswers] = useState({});
  const [calculationChecked, setCalculationChecked] = useState(false);
  const [textAnswer, setTextAnswer] = useState("");
  const [criteriaVisible, setCriteriaVisible] = useState(false);

  const calculation = exercise.calculationPart;
  const freeText = exercise.freeTextPart;

  return (
    <div className="exercise-content">
      <Materials materials={exercise.materials} />

      <section className="task-box">
        <h2>{calculation.prompt}</h2>

        <div className="calculation-grid">
          {calculation.fields.map((field) => {
            const correct = isCloseNumber(
              calculationAnswers[field.id],
              field.correctValue,
              calculation.tolerance
            );

            return (
              <label key={field.id}>
                {field.label}
                <input
                  type="text"
                  inputMode="decimal"
                  value={calculationAnswers[field.id] ?? ""}
                  onChange={(event) =>
                    setCalculationAnswers((current) => ({
                      ...current,
                      [field.id]: event.target.value
                    }))
                  }
                  className={getFieldStatusClass(calculationChecked, correct)}
                />
              </label>
            );
          })}
        </div>

        <button
          type="button"
          className="primary-button"
          onClick={() => setCalculationChecked(true)}
        >
          Rechnung prüfen
        </button>

        {calculationChecked && <ModelAnswer text={calculation.modelAnswer} />}
      </section>

      <section className="task-box">
        <h2>{freeText.prompt}</h2>

        <textarea
          value={textAnswer}
          onChange={(event) => setTextAnswer(event.target.value)}
          rows={7}
          className="free-text-area"
          placeholder="Formuliere deine Beurteilung hier..."
        />

        <button
          type="button"
          className="primary-button"
          onClick={() => setCriteriaVisible(true)}
        >
          {criteriaVisible ? "Antwort erneut überprüfen" : "Antwort überprüfen"}
        </button>

        {criteriaVisible && (
          <>
            <CriteriaList criteria={freeText.criteria} answer={textAnswer} />
            <ModelAnswer text={freeText.modelAnswer} />
          </>
        )}
      </section>
    </div>
  );
}

function ModelAnswer({ text }) {
  const [visible, setVisible] = useState(false);

  if (!text) return null;

  return (
    <div className="model-answer-wrapper">
      <button
        type="button"
        className="secondary-button"
        onClick={() => setVisible((current) => !current)}
      >
        {visible ? "Musterlösung ausblenden" : "Musterlösung anzeigen"}
      </button>

      {visible && (
        <div className="model-answer">
          <strong>Musterlösung:</strong>
          <p>{text}</p>
        </div>
      )}
    </div>
  );
}

function ExerciseRenderer({ exercise }) {
  if (exercise.type === "matchingExercise") {
    return <MatchingExercise exercise={exercise} />;
  }

  if (exercise.type === "halfCellChoiceExercise") {
    return <StructuredFieldsExercise exercise={exercise} />;
  }

  if (exercise.type === "calculationExercise") {
    return <CalculationExercise exercise={exercise} />;
  }

  if (exercise.type === "redoxEquationScaffold") {
    return <RedoxEquationScaffoldExercise exercise={exercise} />;
  }

  if (exercise.type === "mixedExercise") {
    return <MixedSpontaneityExercise exercise={exercise} />;
  }

  return (
    <div className="task-box">
      <p>Dieser Übungstyp wird noch nicht unterstützt: {exercise.type}</p>
    </div>
  );
}

export default function ElectrodePotentialModule({ onBackToHome }) {
  const [view, setView] = useState("overview");
  const [selectedExerciseId, setSelectedExerciseId] = useState(null);

  const selectedExercise = electrodePotentialPracticeExercises.find(
    (exercise) => exercise.id === selectedExerciseId
  );

  const openOverviewCard = (targetView) => {
    setSelectedExerciseId(null);
    setView(targetView);
  };

  const openExercise = (exerciseId) => {
    setSelectedExerciseId(exerciseId);
    setView("exercise");
  };

  if (view === "intro") {
    return (
      <main className="module-page electrode-potential-module">
        <PageHeader
          title={electrodePotentialIntroPage.title}
          subtitle={electrodePotentialIntroPage.subtitle}
          onBack={() => setView("overview")}
          backLabel="zur Modulübersicht"
        />

        <InfoSections sections={electrodePotentialIntroPage.sections} />
        <HalfCellSelector interactiveElement={electrodePotentialIntroPage.interactiveElement} />
      </main>
    );
  }

  if (view === "standardHydrogenElectrode") {
    return (
      <main className="module-page electrode-potential-module">
        <PageHeader
          title={standardHydrogenElectrodePage.title}
          subtitle={standardHydrogenElectrodePage.subtitle}
          onBack={() => setView("overview")}
          backLabel="zur Modulübersicht"
        />

        <InfoSections sections={standardHydrogenElectrodePage.sections} />
        <StandardHydrogenSimulation simulation={standardHydrogenElectrodePage.simulation} />
      </main>
    );
  }

  if (view === "electrodePotentialPracticeOverview") {
    return (
      <main className="module-page electrode-potential-module">
        <PageHeader
          title={electrodePotentialPracticeOverview.title}
          subtitle={electrodePotentialPracticeOverview.subtitle}
          onBack={() => setView("overview")}
          backLabel="zur Modulübersicht"
        />

        <CardGrid>
          {electrodePotentialPracticeOverview.cards.map((card) => (
            <ModuleCard
              key={card.id}
              title={card.title}
              description={card.description}
              operators={card.operators}
              onClick={() => openExercise(card.targetExerciseId)}
            />
          ))}
        </CardGrid>
      </main>
    );
  }

  if (view === "exercise" && selectedExercise) {
    return (
      <main className="module-page electrode-potential-module">
        <PageHeader
          title={selectedExercise.title}
          subtitle={selectedExercise.description}
          onBack={() => setView("electrodePotentialPracticeOverview")}
          backLabel="zur Übungsübersicht"
        />

        <ExerciseRenderer exercise={selectedExercise} />
      </main>
    );
  }

  return (
    <main className="module-page electrode-potential-module">
      <PageHeader
        title={electrodePotentialMeta.title}
        subtitle={electrodePotentialMeta.subtitle}
        onBack={onBackToHome}
        backLabel="zur Hauptübersicht"
      />

      <CardGrid>
        {electrodePotentialOverviewCards.map((card) => (
          <ModuleCard
            key={card.id}
            icon={card.icon}
            title={card.title}
            description={card.description}
            operators={card.operators}
            onClick={() => openOverviewCard(card.targetView)}
          />
        ))}
      </CardGrid>
    </main>
  );
}