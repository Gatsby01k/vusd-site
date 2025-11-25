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
          <div className="founder-name">Your Name</div>
          <div className="founder-role">FOUNDER • PROTOCOL &amp; AI</div>
          <p style={{ fontSize: 13, color: "var(--muted)" }}>
            Background across crypto, machine learning and protocol design. Building the core
            architecture, ASE framework and governance primitives while assembling cryptography,
            risk and legal contributors around VUSD.
          </p>
          <div className="tag-chip">Founder-led • Deep technical</div>
        </div>

        <div>
          <div className="card">
            <div className="card-title">Actively hiring core contributors</div>
            <ul className="hiring-list">
              <li>• Cryptography / ZK engineer — design &amp; implement proof systems and circuits.</li>
              <li>• Risk &amp; quant researcher — build ASE models and tail-risk tooling.</li>
              <li>• Protocol engineer — productionize the shielded pool and collateral vaults.</li>
              <li>
                • Compliance &amp; regulatory strategy — structure jurisdictional rollout.
              </li>
            </ul>
            <div className="tag-chip">Global • Remote-first</div>
          </div>
        </div>
      </div>
    </section>
  );
}
