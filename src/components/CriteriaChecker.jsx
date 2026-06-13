import { useState } from 'react';
import { criterionMatches } from '../utils/checkCriteria.js';

export default function CriteriaChecker({ criteria = [], answer = '', note }) {
  const [showCriteria, setShowCriteria] = useState(false);

  if (!criteria.length) return null;

  return (
    <>
      <button type="button" className="check-answer-button" onClick={() => setShowCriteria(true)}>
        {showCriteria ? 'Antwort erneut überprüfen' : 'Antwort überprüfen'}
      </button>
      {showCriteria && (
        <section className="criteria-card" aria-label="Kriteriencheck">
          <h4>Deine Antwort enthält:</h4>
          <div className="criteria-list">
            {criteria.map((criterion) => {
              const checked = criterionMatches(answer, criterion);
              return (
                <label className="criteria-item" key={criterion.label}>
                  <input type="checkbox" checked={checked} readOnly />
                  <span>{criterion.label}</span>
                </label>
              );
            })}
          </div>
          {note && <p className="criteria-note">{note}</p>}
        </section>
      )}
    </>
  );
}
