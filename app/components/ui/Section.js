export default function Section({ id, label, title, sub, children }) {
  return (
    <section id={id} className="section reveal">
      <div className="section-header">
        {label && <div className="section-label">{label}</div>}
        {title && <h2 className="section-title">{title}</h2>}
        {sub && <p className="section-sub">{sub}</p>}
      </div>

      <div className="section-content">
        {children}
      </div>
    </section>
  );
}
