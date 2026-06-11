import { useEffect, useState } from 'react';
import BackButton from '../components/BackButton.jsx';
import FeedbackBox from '../components/FeedbackBox.jsx';
import Formula from '../components/Formula.jsx';
import GivenFormsCard from '../components/GivenFormsCard.jsx';
import Header from '../components/Header.jsx';
import ProgressBar from '../components/ProgressBar.jsx';
import StructuredEquationInput, {
  supportsStructuredEquationInput,
} from '../components/StructuredEquationInput.jsx';
import { checkAnswer } from '../utils/checkAnswer.js';

export default function RedoxPracticePage({
  navigate,
  exercises,
  storageKey,
  title,
  subtitle,
  restartLabel = 'Noch einmal üben',
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [blankAnswers, setBlankAnswers] = useState([]);
  const [pairAnswers, setPairAnswers] = useState({});
  const [feedback, setFeedback] = useState(null);
  const [showSolution, setShowSolution] = useState(false);
  const [correctIds, setCorrectIds] = useState([]);
  const [isFinished, setIsFinished] = useState(false);
  const [inputResetKey, setInputResetKey] = useState(0);

  const exercise = exercises[currentIndex];

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (!saved) return;

    try {
      const progress = JSON.parse(saved);
      setCurrentIndex(Math.min(progress.currentIndex ?? 0, exercises.length - 1));
      setCorrectIds(progress.correctIds ?? []);
      setIsFinished(progress.isFinished ?? false);
    } catch {
      localStorage.removeItem(storageKey);
    }
  }, [exercises.length, storageKey]);

  useEffect(() => {
    localStorage.setItem(
      storageKey,
      JSON.stringify({ currentIndex, correctIds, isFinished }),
    );
  }, [currentIndex, correctIds, isFinished, storageKey]);

  function resetInput() {
    setAnswer('');
    setBlankAnswers([]);
    setPairAnswers({});
    setFeedback(null);
    setShowSolution(false);
    setInputResetKey((key) => key + 1);
  }

  function handleCheck() {
    const userAnswer = getUserAnswer(exercise, answer, blankAnswers, pairAnswers);
    const result = checkAnswer(exercise, userAnswer);
    setFeedback(result);

    if (result.status === 'correct') {
      setCorrectIds((ids) =>
        ids.includes(exercise.id) ? ids : [...ids, exercise.id],
      );
    }
  }

  function handleNext() {
    if (currentIndex === exercises.length - 1) {
      setIsFinished(true);
      return;
    }

    setCurrentIndex((index) => index + 1);
    resetInput();
  }

  function restart() {
    localStorage.removeItem(storageKey);
    setCurrentIndex(0);
    setCorrectIds([]);
    setIsFinished(false);
    resetInput();
  }

  if (isFinished) {
    return (
      <>
        <BackButton onClick={() => navigate('redoxOverview')}>Zur Modulübersicht</BackButton>
        <section className="finish-card">
          <p className="eyebrow">Geschafft</p>
          <h1>Übungsreihe beendet</h1>
          <p>
            Du hast {correctIds.length} von {exercises.length} Aufgaben richtig gelöst.
          </p>
          <div className="button-row">
            <button type="button" className="primary-button" onClick={restart}>
              {restartLabel}
            </button>
            <button
              type="button"
              className="secondary-button"
              onClick={() => navigate('redoxOverview')}
            >
              Zurück zur Übersicht
            </button>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <BackButton onClick={() => navigate('redoxOverview')}>Zur Modulübersicht</BackButton>
      <Header title={title} subtitle={subtitle} />

      <ProgressBar current={currentIndex + 1} total={exercises.length} />

      <article className="practice-card">
        <div className="practice-card__head">
          <p className="eyebrow">{exercise.title}</p>
          <h2>{exercise.prompt}</h2>
        </div>

        <GivenFormsCard forms={exercise.givenForms} />

        {(exercise.medium || exercise.helperSpecies) && (
          <section className="helper-card" aria-label="Hilfsstoffe und Reaktionsmedium">
            {exercise.medium && (
              <p>
                <strong>Reaktionsmedium:</strong> saure Lösung
              </p>
            )}
            {exercise.helperSpecies && (
              <p>
                <strong>Hilfsstoffe zum Ausgleichen:</strong>{' '}
                {exercise.helperSpecies.map((item) => (
                  <Formula key={item}>{item} </Formula>
                ))}
              </p>
            )}
            {exercise.helperHint && <p>{exercise.helperHint}</p>}
          </section>
        )}

        {exercise.partialReactions && (
          <section className="partial-reactions" aria-label="Teilreaktionen">
            <h3>Vorgegebene Teilreaktionen</h3>
            <p>Oxidation:</p>
            <Formula block>{exercise.partialReactions.oxidation}</Formula>
            <p>Reduktion:</p>
            <Formula block>{exercise.partialReactions.reduction}</Formula>
          </section>
        )}

        <AnswerInput
          exercise={exercise}
          answer={answer}
          setAnswer={setAnswer}
          blankAnswers={blankAnswers}
          setBlankAnswers={setBlankAnswers}
          pairAnswers={pairAnswers}
          setPairAnswers={setPairAnswers}
          inputResetKey={inputResetKey}
        />

        <div className="button-row">
          <button type="button" className="primary-button" onClick={handleCheck}>
            Antwort prüfen
          </button>
          <button
            type="button"
            className="secondary-button"
            onClick={() => setShowSolution(true)}
          >
            Musterlösung anzeigen
          </button>
          <button type="button" className="secondary-button" onClick={resetInput}>
            Neuer Versuch
          </button>
          <button type="button" className="secondary-button" onClick={handleNext}>
            Nächste Aufgabe
          </button>
        </div>

        <FeedbackBox feedback={feedback} />

        {showSolution && (
          <section className="solution-card solution-card--compact">
            <h3>Musterlösung</h3>
            {exercise.solutionSteps && (
              <div className="solution-steps">
                {exercise.solutionSteps.oxidation && (
                  <>
                    <p>Oxidation:</p>
                    <Formula block>{exercise.solutionSteps.oxidation}</Formula>
                  </>
                )}
                {exercise.solutionSteps.reduction && (
                  <>
                    <p>Reduktion:</p>
                    <Formula block>{exercise.solutionSteps.reduction}</Formula>
                  </>
                )}
                {exercise.solutionSteps.electronBalance && (
                  <p>
                    <strong>Elektronenausgleich:</strong>{' '}
                    {exercise.solutionSteps.electronBalance}
                  </p>
                )}
              </div>
            )}
            <Formula block>{exercise.answer}</Formula>
            <p>{exercise.explanation}</p>
            {exercise.solutionSteps?.interpretation && (
              <p>
                <strong>Deutung:</strong> {exercise.solutionSteps.interpretation}
              </p>
            )}
          </section>
        )}
      </article>
    </>
  );
}

function getUserAnswer(exercise, answer, blankAnswers, pairAnswers) {
  if (exercise.type === 'zuordnung') return pairAnswers;
  return answer;
}

function AnswerInput({
  exercise,
  answer,
  setAnswer,
  blankAnswers,
  setBlankAnswers,
  pairAnswers,
  setPairAnswers,
  inputResetKey,
}) {
  if (exercise.type === 'elektronenanzahl') {
    return (
      <fieldset className="answer-options">
        <legend>Wähle die Elektronenanzahl aus.</legend>
        <div className="option-grid">
          {exercise.options.map((option) => (
            <button
              type="button"
              className={answer === option ? 'choice-button is-selected' : 'choice-button'}
              key={option}
              onClick={() => setAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </fieldset>
    );
  }

  if (exercise.type === 'zuordnung') {
    return (
      <fieldset className="pair-task">
        <legend>Tippe für jede Teilgleichung die passende Zuordnung an.</legend>
        {exercise.pairs.map((pair) => (
          <div className="pair-row" key={pair.equation}>
            <Formula block>{pair.equation}</Formula>
            <div className="segmented-control">
              {['Oxidation', 'Reduktion'].map((type) => (
                <button
                  type="button"
                  className={
                    pairAnswers[pair.equation] === type
                      ? 'choice-button is-selected'
                      : 'choice-button'
                  }
                  onClick={() =>
                    setPairAnswers((current) => ({
                      ...current,
                      [pair.equation]: type,
                    }))
                  }
                  key={type}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        ))}
      </fieldset>
    );
  }

  if (supportsStructuredEquationInput(exercise)) {
    return (
      <StructuredEquationInput
        key={`${exercise.id}-${inputResetKey}`}
        exercise={exercise}
        onAnswerChange={setAnswer}
      />
    );
  }

  return null;
}
