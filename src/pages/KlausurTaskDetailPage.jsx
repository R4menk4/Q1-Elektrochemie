import BackButton from '../components/BackButton.jsx';
import Header from '../components/Header.jsx';
import KlausurMaterialBlock from '../components/KlausurMaterialBlock.jsx';
import KlausurSubtask from '../components/KlausurSubtask.jsx';
import { klausurTasks, klausurTaskMeta } from '../data/klausurTasks.js';

export default function KlausurTaskDetailPage({ navigate, selectedTaskId }) {
  const task = klausurTasks.find((item) => item.id === selectedTaskId) || klausurTasks[0];

  return (
    <>
      <div className="button-row print-hidden">
        <BackButton onClick={() => navigate('klausurOverview')}>Zur Aufgabenübersicht</BackButton>
        <button type="button" className="secondary-button" onClick={() => navigate('home')}>Zurück zur Startseite</button>
        <button type="button" className="primary-button" onClick={() => window.print()}>{klausurTaskMeta.printButtonLabel}</button>
      </div>
      <Header title={task.title} subtitle={task.context} />
      <div className="klausur-image-row">
        {[task.image, task.secondaryImage].filter(Boolean).map((image) => (
          <img key={image} src={image} alt="" onError={(event) => { event.currentTarget.hidden = true; }} />
        ))}
      </div>
      <div className="material-stack">
        {task.materials.map((material) => <KlausurMaterialBlock key={material.title} material={material} />)}
      </div>
      <section className="subtask-stack">
        {task.subtasks.map((subtask) => (
          <KlausurSubtask key={subtask.id} taskId={task.id} subtask={subtask} note={klausurTaskMeta.note} />
        ))}
      </section>
      <div className="button-row print-hidden">
        <button type="button" className="primary-button" onClick={() => window.print()}>{klausurTaskMeta.printButtonLabel}</button>
        <button type="button" className="secondary-button" onClick={() => navigate('klausurOverview')}>{klausurTaskMeta.overviewButtonLabel}</button>
        <button type="button" className="secondary-button" onClick={() => navigate('home')}>Zurück zur Startseite</button>
      </div>
    </>
  );
}
