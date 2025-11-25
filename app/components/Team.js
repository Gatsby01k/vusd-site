export default function Team() {
  return (
    <section id="team" className="reveal">
      <div className="section-label">TEAM</div>
      <h2 className="section-title">
        Founder-led, cryptography-first, assembling the first cohort.
      </h2>
      <p className="section-sub">
        VUSD starts as a focused core team building the rails, with contributors and model authors
        joining around a shared objective: make autonomous, private financial infrastructure real.
      </p>

      <div className="team-grid">
        <div className="founder-card">
          <div className="founder-name">Vladyslav Bozhko</div>
          <div className="founder-role">FOUNDER • PROTOCOL, AI & CRYPTOGRAPHY</div>
          <p style={{ fontSize: 13, color: "var(--muted)" }}>
            Builder with strong background across AI systems, protocol architecture, security and
            high-integrity financial infrastructure.  
            <br /><br />
            Before starting VUSD, Vladyslav worked across engineering, automation, AI-driven tooling
            and product systems — designing and implementing complex backend and data pipelines, scalable automation frameworks, and 
            intelligent agent workflows used in production environments.
            <br /><br />
            Today he leads protocol design, autonomy modeling, and cryptographic rails for VUSD:  
            bringing together AI-driven stability systems, private-by-default transaction layers,
            and a fully autonomous governance architecture.
          </p>

          <a
            className="tag-chip"
            href="https://www.linkedin.com/in/vladyslav-bozhko/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn → Vladyslav Bozhko
          </a>
        </div>

        <div>
          <div className="card">
            <div className="card-title">Actively hiring core contributors</div>
            <ul className="hiring-list">
              <li>• Cryptography / ZK engineer — circuits + proof systems.</li>
              <li>• Risk & quant researcher — ASE models, tail-risk tooling.</li>
              <li>• Protocol engineer — shielded pool & vault primitives.</li>
              <li>• Compliance & regulatory strategy.</li>
            </ul>
            <div className="tag-chip">Global • Remote-first</div>
          </div>
        </div>
      </div>
    </section>
  );
}
