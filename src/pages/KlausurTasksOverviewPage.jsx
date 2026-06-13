import BackButton from '../components/BackButton.jsx';
import Header from '../components/Header.jsx';
import KlausurTaskCard from '../components/KlausurTaskCard.jsx';
import { klausurTasks, klausurTaskMeta } from '../data/klausurTasks.js';

export default function KlausurTasksOverviewPage({ navigate }) {
  return (
    <>
      <BackButton onClick={() => navigate('home')}>Zur Startseite</BackButton>
      <Header title={klausurTaskMeta.title} subtitle={klausurTaskMeta.subtitle} />
      <div className="klausur-grid">
        {klausurTasks.map((task) => (
          <KlausurTaskCard key={task.id} task={task} onOpen={(taskId) => navigate('klausurTaskDetail', { taskId })} />
        ))}
      </div>
    </>
  );
}
