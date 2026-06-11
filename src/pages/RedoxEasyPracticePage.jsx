import { redoxExercises } from '../data/redoxExercises.js';
import RedoxPracticePage from './RedoxPracticePage.jsx';

export default function RedoxEasyPracticePage({ navigate }) {
  return (
    <RedoxPracticePage
      navigate={navigate}
      exercises={redoxExercises.filter((item) => item.level === 'einfach')}
      storageKey="redox-easy-practice-progress"
      title="Redoxreaktionen aufstellen – einfach"
      subtitle="Bearbeite die Aufgaben der Reihe nach. Die gegebenen Formen helfen dir beim Aufstellen der Reaktion."
      restartLabel="Noch einmal üben"
    />
  );
}
