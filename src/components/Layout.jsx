export default function Layout({ children }) {
  return (
    <div className="app-shell">
      <main className="page-wrap">{children}</main>
    </div>
  );
}
