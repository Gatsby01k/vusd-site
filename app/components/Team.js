import { roadmap } from "../content/team";

export default function Team() {
  return (
    <section id="team" className="section reveal">
      <div className="section-label">TEAM</div>
      <h2 className="section-title">Building VUSD</h2>
      <p className="section-sub">
        A cross-disciplinary team with backgrounds in cryptography, trading infrastructure,
        AI systems, L2 architecture and secure protocol design.
      </p>

      <div className="team-grid">
        {/* MEMBER 1 */}
        <div className="team-card">
          <div className="team-role">Founder / Architecture</div>
          <div className="team-name">A. Ivanov</div>
          <p className="team-desc">
            Research &amp; engineering across crypto-economic design, risk systems, protocol
            architecture and privacy infrastructure.
          </p>
        </div>

        {/* MEMBER 2 */}
        <div className="team-card">
          <div className="team-role">Systems &amp; Cryptography</div>
          <div className="team-name">M. Kirov</div>
          <p className="team-desc">
            Cryptography engineer with focus on ZK proofs, secure computation, circuit auditability
            and prover performance.
          </p>
        </div>

        {/* MEMBER 3 */}
        <div className="team-card">
          <div className="team-role">AI Governance &amp; Modeling</div>
          <div className="team-name">S. Petrov</div>
          <p className="team-desc">
            AI systems researcher. Builds agentic governance models, constraint-bounded parameter
            engines and stress-test simulation frameworks.
          </p>
        </div>

        {/* MEMBER 4 */}
        <div className="team-card">
          <div className="team-role">Security &amp; Infrastructure</div>
          <div className="team-name">E. Romanova</div>
          <p className="team-desc">
            Background in infra security, anomaly detection, on-chain monitoring and privacy-safe
            audit trails.
          </p>
        </div>
      </div>
    </section>
  );
}
