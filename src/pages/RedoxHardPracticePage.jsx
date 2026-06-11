import { redoxHardExercises } from '../data/redoxHardExercises.js';
import RedoxPracticePage from './RedoxPracticePage.jsx';

export default function RedoxHardPracticePage({ navigate }) {
  return (
    <RedoxPracticePage
      navigate={navigate}
      exercises={redoxHardExercises}
      storageKey="redox-hard-practice-progress"
      title="Redoxreaktionen aufstellen – schwer"
      subtitle="In diesen Aufgaben übst du anspruchsvollere Redoxreaktionen. Einige Reaktionen laufen in saurer Lösung ab. Dann dürfen H⁺ und H₂O zum Ausgleichen verwendet werden. Achte darauf, zuerst die Teilreaktionen korrekt aufzustellen und anschließend die Elektronen auszugleichen."
      restartLabel="Schwere Aufgaben noch einmal üben"
    />
  );
}
