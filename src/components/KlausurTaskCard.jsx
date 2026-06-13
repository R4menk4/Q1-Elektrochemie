export default function KlausurTaskCard({ task, onOpen }) {
  return (
    <article className="klausur-card">
      {task.image && (
        <img
          className="klausur-card__image"
          src={task.image}
          alt=""
          onError={(event) => {
            event.currentTarget.hidden = true;
          }}
        />
      )}
      <div className="klausur-card__body">
        <h2>{task.shortTitle || task.title}</h2>
        <p>{task.description}</p>
        <button type="button" className="primary-button" onClick={() => onOpen(task.id)}>
          Aufgabe öffnen
        </button>
      </div>
    </article>
  );
}
