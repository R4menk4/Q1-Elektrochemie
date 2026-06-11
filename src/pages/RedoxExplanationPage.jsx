import { useState } from 'react';
import BackButton from '../components/BackButton.jsx';
import Formula from '../components/Formula.jsx';
import GivenFormsCard from '../components/GivenFormsCard.jsx';
import Header from '../components/Header.jsx';

const exampleForms = [
  { element: 'Zink', reducedForm: 'Zn', oxidizedForm: 'Zn²⁺' },
  { element: 'Kupfer', reducedForm: 'Cu', oxidizedForm: 'Cu²⁺' },
];

const steps = [
  {
    title: 'Schritt 1: Gegebene Formen betrachten',
    body: (
      <>
        <p>
          Schau dir zuerst die Formen an. <Formula>Zn</Formula> ist die reduzierte
          Form von Zink, <Formula>Zn²⁺</Formula> ist die oxidierte Form. Bei
          Kupfer ist <Formula>Cu</Formula> die reduzierte Form und{' '}
          <Formula>Cu²⁺</Formula> die oxidierte Form.
        </p>
      </>
    ),
  },
  {
    title: 'Schritt 2: Oxidation erkennen',
    body: (
      <>
        <p>
          Bei der Oxidation werden Elektronen abgegeben. Zink wird von{' '}
          <Formula>Zn</Formula> zu <Formula>Zn²⁺</Formula>.
        </p>
        <Formula block>Zn → Zn²⁺ + 2 e⁻</Formula>
      </>
    ),
  },
  {
    title: 'Schritt 3: Reduktion erkennen',
    body: (
      <>
        <p>
          Bei der Reduktion werden Elektronen aufgenommen. Kupfer-Ionen werden von{' '}
          <Formula>Cu²⁺</Formula> zu <Formula>Cu</Formula>.
        </p>
        <Formula block>Cu²⁺ + 2 e⁻ → Cu</Formula>
      </>
    ),
  },
  {
    title: 'Schritt 4: Elektronenanzahl prüfen',
    body: (
      <p>
        Oxidation und Reduktion müssen gleich viele Elektronen enthalten. Hier
        werden 2 Elektronen abgegeben und 2 Elektronen aufgenommen. Es ist also
        kein zusätzlicher Ausgleich nötig.
      </p>
    ),
  },
  {
    title: 'Schritt 5: Gesamtreaktion bilden',
    body: (
      <>
        <p>Die Elektronen werden gekürzt. In der Gesamtreaktion tauchen sie nicht mehr auf.</p>
        <Formula block>Zn + Cu²⁺ → Zn²⁺ + Cu</Formula>
      </>
    ),
  },
  {
    title: 'Schritt 6: Fachliche Deutung',
    body: (
      <p>
        Zink gibt Elektronen ab und ist deshalb der Elektronendonator. Zink wird
        oxidiert und ist das Reduktionsmittel. <Formula>Cu²⁺</Formula> nimmt
        Elektronen auf und ist deshalb der Elektronenakzeptor. <Formula>Cu²⁺</Formula>{' '}
        wird reduziert und ist das Oxidationsmittel.
      </p>
    ),
  },
];

export default function RedoxExplanationPage({ navigate }) {
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = steps[activeStep];

  return (
    <>
      <BackButton onClick={() => navigate('redoxOverview')}>Zur Modulübersicht</BackButton>
      <Header
        title="Redoxreaktionen aufstellen – Erläuterung"
        subtitle="Ein Beispiel mit Zink und Kupfer-Ionen."
      />

      <GivenFormsCard forms={exampleForms} />

      <section className="step-card" aria-live="polite">
        <p className="step-count">Schritt {activeStep + 1} von {steps.length}</p>
        <h2>{currentStep.title}</h2>
        <div>{currentStep.body}</div>
        <div className="button-row">
          <button
            type="button"
            className="secondary-button"
            onClick={() => setActiveStep((step) => Math.max(0, step - 1))}
            disabled={activeStep === 0}
          >
            Zurück
          </button>
          <button
            type="button"
            className="primary-button"
            onClick={() => setActiveStep((step) => Math.min(steps.length - 1, step + 1))}
            disabled={activeStep === steps.length - 1}
          >
            Weiter
          </button>
        </div>
      </section>

      <section className="solution-card" aria-labelledby="solution-heading">
        <h2 id="solution-heading">Fertige Lösung</h2>
        <p>Oxidation:</p>
        <Formula block>Zn → Zn²⁺ + 2 e⁻</Formula>
        <p>Reduktion:</p>
        <Formula block>Cu²⁺ + 2 e⁻ → Cu</Formula>
        <p>Gesamtreaktion:</p>
        <Formula block>Zn + Cu²⁺ → Zn²⁺ + Cu</Formula>
      </section>

      <aside className="memory-card">
        <h2>Merke</h2>
        <p>Oxidation: Elektronen stehen auf der Produktseite.</p>
        <p>Reduktion: Elektronen stehen auf der Eduktseite.</p>
        <p>In der Gesamtreaktion dürfen keine Elektronen mehr vorkommen.</p>
      </aside>
    </>
  );
}
