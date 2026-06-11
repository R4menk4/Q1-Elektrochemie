import { useEffect, useState } from 'react';
import BackButton from '../components/BackButton.jsx';
import Header from '../components/Header.jsx';
import { selfCheckCompetencies } from '../data/selfCheckCompetencies.js';

const storageKey = 'elektrochemie-self-check';

export default function SelfCheckPage({ navigate }) {
  const [checkedItems, setCheckedItems] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (!saved) return;

    try {
      setCheckedItems(JSON.parse(saved));
    } catch {
      localStorage.removeItem(storageKey);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(checkedItems));
  }, [checkedItems]);

  function toggleItem(id) {
    setCheckedItems((current) => ({
      ...current,
      [id]: !current[id],
    }));
  }

  return (
    <>
      <div className="print-hidden">
        <BackButton onClick={() => navigate('home')}>Zurück zur Startseite</BackButton>
      </div>
      <Header
        title={selfCheckCompetencies.title}
        subtitle={selfCheckCompetencies.subtitle}
      />

      <div className="button-row print-hidden">
        <button type="button" className="primary-button" onClick={() => window.print()}>
          Selbstcheck drucken / als PDF speichern
        </button>
        <button
          type="button"
          className="secondary-button"
          onClick={() => navigate('home')}
        >
          Zurück zur Startseite
        </button>
      </div>

      <div className="self-check-list">
        {selfCheckCompetencies.sections.map((section) => (
          <section className="self-check-section" key={section.id}>
            <h2>{section.title}</h2>
            <div className="self-check-items">
              {section.items.map((item, index) => {
                const itemId = `${section.id}-${index}`;
                return (
                  <label className="self-check-item" key={itemId}>
                    <input
                      type="checkbox"
                      checked={Boolean(checkedItems[itemId])}
                      onChange={() => toggleItem(itemId)}
                    />
                    <span>{item}</span>
                  </label>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
