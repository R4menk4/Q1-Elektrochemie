import { useCallback, useEffect, useMemo, useState } from 'react';
import CriteriaChecker from './CriteriaChecker.jsx';
import StructuredEquationInput from './StructuredEquationInput.jsx';
import { directFieldState, directTaskIsCorrect } from '../utils/checkKlausurDirect.js';

function storageKey(taskId, subtaskId) {
  return `klausurTaskAnswer:v2:${taskId}:${subtaskId}`;
}

function readStoredAnswer(taskId, subtaskId, fallback) {
  try {
    const value = localStorage.getItem(storageKey(taskId, subtaskId));
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function fallbackFor(subtask) {
  if (subtask.type === 'freeText') return '';
  if (subtask.type === 'multiSelect') return [];
  return {};
}

function getTextAnswer(value) {
  if (typeof value === 'string') return value;
  if (value && typeof value.text === 'string') return value.text;
  return '';
}

function answerToText(answer) {
  if (typeof answer === 'string') return answer;
  if (Array.isArray(answer)) return answer.join(' ');
  return Object.entries(answer || {}).map(([key, value]) => `${key} ${value}`).join(' ');
}

function fieldClass(showDirectResult, state) {
  if (!showDirectResult || state === 'empty') return '';
  return state === 'correct' ? 'is-correct' : 'is-wrong';
}

export default function KlausurSubtask({ taskId, subtask, note }) {
  const [answer, setAnswer] = useState(() => readStoredAnswer(taskId, subtask.id, fallbackFor(subtask)));
  const [showModel, setShowModel] = useState(false);
  const [showDirectResult, setShowDirectResult] = useState(false);

  useEffect(() => {
    localStorage.setItem(storageKey(taskId, subtask.id), JSON.stringify(answer));
  }, [answer, taskId, subtask.id]);

  const answerText = useMemo(
    () => (subtask.type === 'freeText' ? getTextAnswer(answer) : answerToText(answer)),
    [answer, subtask.type],
  );
  const isDirect = subtask.checking?.type === 'direct';
  const isCriteria = subtask.checking?.type === 'criteria';
  const directCorrect = isDirect ? directTaskIsCorrect(subtask, answer) : false;

  const updateObject = useCallback((key, value) => {
    setAnswer((current) => ({ ...(current || {}), [key]: value }));
  }, []);

  const handleStructuredEquationChange = useCallback((index, value) => {
    updateObject(index, value);
  }, [updateObject]);

  function renderControl() {
    if (subtask.type === 'freeText') {
      const textValue = getTextAnswer(answer);
      return (
        <textarea
          className="klausur-textarea"
          value={textValue}
          onChange={(event) => setAnswer(event.target.value)}
          aria-label={`${subtask.label} Antwort`}
        />
      );
    }

    if (subtask.type === 'oxidationNumberTable' || subtask.type === 'oxidationNumberEquation') {
      return (
        <div className="oxidation-number-equations">
          {subtask.inputConfig?.instruction && <p className="klausur-instruction">{subtask.inputConfig.instruction}</p>}
          <div className="oxidation-reaction-row" aria-label="Reaktion 1">
            <span className="reaction-coefficient">4</span>
            <OxidationParticle rows={subtask.inputConfig?.rows} answer={answer} showDirectResult={showDirectResult} updateObject={updateObject} rowIndex={0} formulaLabel="Cu" elements={['Cu']} />
            <span className="reaction-symbol">+</span>
            <OxidationParticle rows={subtask.inputConfig?.rows} answer={answer} showDirectResult={showDirectResult} updateObject={updateObject} rowIndex={1} formulaLabel="O₂" elements={['O']} />
            <span className="reaction-symbol">→</span>
            <span className="reaction-coefficient">2</span>
            <OxidationParticle rows={subtask.inputConfig?.rows} answer={answer} showDirectResult={showDirectResult} updateObject={updateObject} rowIndex={2} formulaLabel="Cu₂O" elements={['Cu', 'O']} />
          </div>
          <div className="oxidation-reaction-row" aria-label="Reaktion 2">
            <span className="reaction-coefficient">2</span>
            <OxidationParticle rows={subtask.inputConfig?.rows} answer={answer} showDirectResult={showDirectResult} updateObject={updateObject} rowIndex={2} formulaLabel="Cu₂O" elements={['Cu', 'O']} />
            <span className="reaction-symbol">+</span>
            <OxidationParticle rows={subtask.inputConfig?.rows} answer={answer} showDirectResult={showDirectResult} updateObject={updateObject} rowIndex={1} formulaLabel="O₂" elements={['O']} />
            <span className="reaction-symbol">→</span>
            <span className="reaction-coefficient">4</span>
            <OxidationParticle rows={subtask.inputConfig?.rows} answer={answer} showDirectResult={showDirectResult} updateObject={updateObject} rowIndex={3} formulaLabel="CuO" elements={['Cu', 'O']} />
          </div>
        </div>
      );
    }

    if (subtask.type === 'choiceGroup') {
      return (
        <div className="choice-group-grid">
          {Object.entries(subtask.choices || {}).map(([key, options]) => (
            <label className="klausur-select" key={key}>
              <span>{key}</span>
              <select
                className={fieldClass(showDirectResult, answer?.[key] === subtask.correctValues?.[key] ? 'correct' : 'wrong')}
                value={answer?.[key] || ''}
                onChange={(event) => updateObject(key, event.target.value)}
              >
                <option value="">Bitte auswaehlen</option>
                {options.map((option) => <option key={option} value={option}>{option}</option>)}
              </select>
            </label>
          ))}
        </div>
      );
    }

    if (subtask.type === 'multiSelect') {
      return (
        <div className="option-grid">
          {subtask.options.map((option) => {
            const selected = (answer || []).includes(option);
            const shouldSelect = (subtask.correctAnswers || []).includes(option);
            const state = selected === shouldSelect ? 'correct' : 'wrong';
            return (
              <button
                type="button"
                className={`choice-button ${selected ? 'is-selected' : ''} ${fieldClass(showDirectResult, state)}`}
                key={option}
                onClick={() => setAnswer(selected ? answer.filter((item) => item !== option) : [...(answer || []), option])}
              >
                {option}
              </button>
            );
          })}
        </div>
      );
    }

    if (subtask.type === 'calculation' || subtask.type === 'structuredFields' || subtask.type === 'structuredElectrodeAssignment') {
      return (
        <div className="choice-group-grid">
          {(subtask.fields || []).map((field) => {
            const accepted = field.correctValues || [String(field.correctValue ?? '')];
            const state = subtask.type === 'calculation'
              ? (Math.abs(Number(String(answer?.[field.id] || '').replace(',', '.').replace(/[^\d.+-]/g, '')) - field.correctValue) <= (subtask.tolerance ?? 0.01) ? 'correct' : 'wrong')
              : directFieldState(answer?.[field.id] || '', accepted);
            return (
              <label className="klausur-select" key={field.id}>
                <span>{field.label}</span>
                <input
                  className={fieldClass(showDirectResult, state)}
                  value={answer?.[field.id] || ''}
                  inputMode={subtask.type === 'calculation' ? 'decimal' : undefined}
                  onChange={(event) => updateObject(field.id, event.target.value)}
                />
              </label>
            );
          })}
        </div>
      );
    }

    if (subtask.type === 'structuredEquation') {
      return (
        <div className="equation-scaffold">
          {subtask.scaffold?.instruction && <p className="klausur-instruction">{subtask.scaffold.instruction}</p>}
          {(subtask.scaffold?.equations || []).map((equation, index) => {
            const state = directFieldState(answer?.[index] || '', [equation.expected, ...(equation.accepted || [])]);
            return (
              <section className={`klausur-structured-equation ${fieldClass(showDirectResult, state)}`} key={equation.label}>
                <h4>{equation.label}</h4>
                <StructuredEquationAnswer
                  subtaskId={subtask.id}
                  equation={equation}
                  index={index}
                  onChange={handleStructuredEquationChange}
                />
              </section>
            );
          })}
        </div>
      );
    }

    return null;
  }

  return (
    <article className="subtask-card">
      <h3>{subtask.label} {subtask.prompt}</h3>
      {renderControl()}
      {isCriteria && <CriteriaChecker criteria={subtask.criteria} answer={answerText} note={note} />}
      {isDirect && (
        <>
          <button type="button" className="check-answer-button" onClick={() => setShowDirectResult(true)}>
            Antwort prüfen
          </button>
          {showDirectResult && (
            <p className={directCorrect ? 'direct-feedback direct-feedback--correct' : 'direct-feedback direct-feedback--wrong'}>
              {directCorrect ? 'Richtig.' : 'Noch nicht ganz richtig. Prüfe die rot markierten Felder.'}
            </p>
          )}
        </>
      )}
      <button type="button" className="secondary-button" onClick={() => setShowModel(!showModel)}>
        Musterlösung anzeigen
      </button>
      {showModel && (
        <section className="solution-card solution-card--compact">
          <h4>Musterlösung</h4>
          <p>{subtask.modelAnswer}</p>
        </section>
      )}
    </article>
  );
}

function OxidationParticle({ rows = [], answer = {}, showDirectResult, updateObject, rowIndex, formulaLabel, elements }) {
  const row = rows[rowIndex] || {};

  return (
    <span className={`oxidation-particle ${elements.length > 1 ? 'oxidation-particle--compound' : ''}`}>
      {elements.map((element) => {
        const key = `${rowIndex}:${element}`;
        const state = directFieldState(answer?.[key] || '', row.accepted?.[element] || []);

        return (
          <span className="oxidation-slot" key={key}>
            <input
              className={`oxidation-number-input ${fieldClass(showDirectResult, state)}`}
              value={answer?.[key] || ''}
              onChange={(event) => updateObject(key, event.target.value)}
              aria-label={`${formulaLabel} ${element}`}
            />
            <span className="oxidation-formula-part">{formatFormulaPart(formulaLabel, element)}</span>
          </span>
        );
      })}
    </span>
  );
}

function formatFormulaPart(formulaLabel, element) {
  if (formulaLabel === 'O₂') return 'O₂';
  if (formulaLabel === 'Cu₂O' && element === 'Cu') return 'Cu₂';
  if (formulaLabel === 'Cu₂O' && element === 'O') return 'O';
  if (formulaLabel === 'CuO' && element === 'Cu') return 'Cu';
  if (formulaLabel === 'CuO' && element === 'O') return 'O';
  return formulaLabel;
}

function StructuredEquationAnswer({ subtaskId, equation, index, onChange }) {
  const exercise = useMemo(() => ({
    id: `${subtaskId}-${index}`,
    type: 'gesamtreaktion',
    answer: equation.expected,
    acceptedAnswers: [equation.expected, ...(equation.accepted || [])],
  }), [equation, index, subtaskId]);

  const handleChange = useCallback((value) => {
    onChange(index, value);
  }, [index, onChange]);

  return <StructuredEquationInput exercise={exercise} onAnswerChange={handleChange} />;
}
