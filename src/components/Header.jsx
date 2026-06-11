export default function Header({ title, subtitle }) {
  return (
    <header className="page-header">
      <p className="eyebrow">Elektrochemie</p>
      <h1>{title}</h1>
      {subtitle && <p className="lead">{subtitle}</p>}
    </header>
  );
}
