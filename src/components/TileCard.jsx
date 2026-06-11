export default function TileCard({
  title,
  description,
  status = 'active',
  onClick,
  badge,
  featured = false,
}) {
  const disabled = status !== 'active';

  return (
    <button
      type="button"
      className={`tile-card ${featured ? 'tile-card--featured' : ''} ${disabled ? 'is-disabled' : ''}`}
      onClick={onClick}
      aria-disabled={disabled}
    >
      <span className="tile-card__title">{title}</span>
      <span className="tile-card__description">{description}</span>
      {(badge || disabled) && (
        <span className="tile-card__badge">{badge ?? 'Kommt später'}</span>
      )}
    </button>
  );
}
