export default function ProgressBar({ current, total }) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="progress" aria-label={`Aufgabe ${current} von ${total}`}>
      <div className="progress__label">
        <span>Aufgabe {current} von {total}</span>
        <span>{percentage}%</span>
      </div>
      <div className="progress__track" aria-hidden="true">
        <div className="progress__bar" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}
