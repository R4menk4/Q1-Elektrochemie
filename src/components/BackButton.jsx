export default function BackButton({ children = 'Zurück', onClick }) {
  return (
    <button type="button" className="back-button" onClick={onClick}>
      ← {children}
    </button>
  );
}
