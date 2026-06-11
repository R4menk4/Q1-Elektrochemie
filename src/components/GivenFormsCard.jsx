import Formula from './Formula.jsx';

export default function GivenFormsCard({ forms }) {
  return (
    <section className="given-card" aria-labelledby="given-forms-heading">
      <h2 id="given-forms-heading">Gegebene Formen</h2>
      <div className="forms-grid">
        {forms.map((form) => (
          <article className="form-row" key={`${form.element}-${form.oxidizedForm}`}>
            <h3>{form.element}</h3>
            <p>
              reduzierte Form: <Formula>{form.reducedForm}</Formula>
            </p>
            <p>
              oxidierte Form: <Formula>{form.oxidizedForm}</Formula>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
