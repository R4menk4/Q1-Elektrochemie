import { useState } from 'react';
import Header from '../components/Header.jsx';
import TileCard from '../components/TileCard.jsx';
import TileGrid from '../components/TileGrid.jsx';
import { modules } from '../data/modules.js';

export default function HomePage({ navigate }) {
  const [notice, setNotice] = useState('');

  function handleModuleClick(module) {
    if (module.href) {
      window.location.href = module.href;
      return;
    }

    if (module.status === 'active') {
      navigate(module.target);
      return;
    }

    setNotice('Dieses Modul wird später ergänzt.');
  }

  return (
    <>
      <Header
        title="Elektrochemie Lernprogramm"
        subtitle="Interaktive Übungen und Erklärungen zur Elektrochemie"
      />

      {notice && (
        <div className="notice" role="status">
          {notice}
        </div>
      )}

      <TileGrid>
        <TileCard
          title="Selbstcheck"
          description="Hake ab, welche Kompetenzen du schon sicher beherrschst, und drucke deinen Stand als PDF."
          status="active"
          featured
          onClick={() => navigate('selfCheck')}
        />
        {modules.map((module) => (
          <TileCard
            key={module.id}
            title={module.title}
            description={module.description}
            status={module.status}
            onClick={() => handleModuleClick(module)}
          />
        ))}
      </TileGrid>
    </>
  );
}
