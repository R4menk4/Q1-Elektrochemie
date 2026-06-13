export default function KlausurMaterialBlock({ material }) {
  const contentItems = Array.isArray(material.content) ? material.content : [material.content].filter(Boolean);

  return (
    <section className="material-block">
      <h2>{material.title}</h2>
      {material.type === 'table' && (
        <div className="table-scroll">
          <table className="material-table">
            <thead>
              <tr>{material.columns.map((column) => <th key={column}>{column}</th>)}</tr>
            </thead>
            <tbody>
              {material.rows.map((row, rowIndex) => (
                <tr key={`${material.title}-${rowIndex}`}>
                  {row.map((cell, cellIndex) => <td key={`${rowIndex}-${cellIndex}`}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {material.type === 'reaction-list' && (
        <div className="material-list">
          {contentItems.map((item) => <p key={item}>{item}</p>)}
        </div>
      )}
      {material.type === 'text-list' && (
        <ul className="material-list">
          {contentItems.map((item) => <li key={item}>{item}</li>)}
        </ul>
      )}
      {material.type === 'sequence' && <p className="formula formula--block">{material.content}</p>}
      {material.type === 'text' && <p>{material.content}</p>}
      {material.type === 'quote' && <blockquote className="material-quote">{material.content}</blockquote>}
      {material.type === 'image' && material.image && (
        <figure className="material-image-only">
          <img src={material.image} alt={material.alt || material.title} />
        </figure>
      )}
      {material.type === 'image-and-text' && (
        <div className="material-image-text">
          {material.image && <img src={material.image} alt={material.title} />}
          <div className="material-list">
            {contentItems.map((item) => <p key={item}>{item}</p>)}
          </div>
        </div>
      )}
    </section>
  );
}
