import { redoxMediumExercises } from '../data/redoxMediumExercises.js';
import RedoxPracticePage from './RedoxPracticePage.jsx';

export default function RedoxMediumPracticePage({ navigate }) {
  return (
    <RedoxPracticePage
      navigate={navigate}
      exercises={redoxMediumExercises}
      storageKey="redox-medium-practice-progress"
      title="Redoxreaktionen aufstellen – mittel"
      subtitle="In diesen Aufgaben übst du Redoxreaktionen mit etwas komplexeren Teilchen. Es können auch Ionen, Nichtmetalle oder Moleküle vorkommen. Achte besonders darauf, welche Form Elektronen abgibt und welche Form Elektronen aufnimmt."
      restartLabel="Mittel-Aufgaben noch einmal üben"
    />
  );
}
