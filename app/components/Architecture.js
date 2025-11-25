export default function Architecture() {
  return (
    <section id="architecture" className="section reveal">
      <h2 className="section-title">Architecture</h2>
      <p className="section-sub">
        VUSD is composed of four tightly integrated subsystems — privacy, stability, governance and
        self-defending infrastructure — each designed to operate continuously under on-chain
        constraints.
      </p>

      <div className="arch-grid">
        {/* PRIVACY ENGINE */}
        <div className="arch-card">
          <div className="arch-label">01 — Privacy Engine</div>
          <div className="arch-title">ZK-Shielded Balances</div>
          <p className="arch-text">
            Zero-knowledge proofs enable fully hidden balances and unlinkable transfers, while still
            proving solvency, enforcing spending limits and validating all invariants without
            revealing the underlying data.
          </p>
          <ul className="arch-list">
            <li>• Hidden balances &amp; private account graph</li>
            <li>• Proof-of-solvency without disclosure</li>
            <li>• Validity proofs for all state transitions</li>
            <li>• Adaptive proof compression</li>
          </ul>
        </div>

        {/* AUTONOMOUS STABILITY ENGINE */}
        <div className="arch-card">
          <div className="arch-label">02 — Autonomous Stability Engine (ASE)</div>
          <div className="arch-title">Real-time peg &amp; risk management</div>
          <p className="arch-text">
            Models continuously evaluate liquidity, volatility, collateral mix and tail-risk metrics.
            Parameters adjust autonomously within predefined constraints, ensuring peg integrity
            during stress scenarios.
          </p>
          <ul className="arch-list">
            <li>• Model-driven parameter changes</li>
            <li>• Liquidity caps &amp; incentive curves</li>
            <li>• Real-time collateral management</li>
            <li>• Automated tail-risk constraints</li>
          </ul>
        </div>

        {/* GOVERNANCE ENGINE */}
        <div className="arch-card">
          <div className="arch-label">03 — Governance Engine</div>
          <div className="arch-title">AI-assisted, constraint-bounded</div>
          <p className="arch-text">
            The governance engine uses models to generate proposals, which are then validated,
            rate-limited and constrained on-chain. Human governance sets boundaries — AI operates
            inside them.
          </p>
          <ul className="arch-list">
            <li>• AI-originated proposals</li>
            <li>• Hard-coded on-chain guardrails</li>
            <li>• Community veto authority</li>
            <li>• Continuous stress testing</li>
          </ul>
        </div>

        {/* SELF-DEFENDING INFRA */}
        <div className="arch-card">
          <div className="arch-label">04 — Self-Defending Infrastructure</div>
          <div className="arch-title">Anomaly-aware, private by design</div>
          <p className="arch-text">
            AI monitors transactional flows and system-level signals without piercing privacy. The
            system detects anomalies, mitigates abuse and prepares defensive actions autonomously.
          </p>
          <ul className="arch-list">
            <li>• Adaptive anomaly detection</li>
            <li>• Fraud &amp; abuse mitigation</li>
            <li>• Stress &amp; liquidity shock prediction</li>
            <li>• Privacy-preserving audit logging</li>
          </ul>
        </div>
      </div>

      {/* ARCHITECTURE FLOW DIAGRAM */}
      <div className="arch-diagram">
        <div className="diagram-row">
          <div className="diagram-chip">Users</div>
          <div className="diagram-arrow" />
          <div className="diagram-chip">VUSD</div>
          <div className="diagram-arrow" />
          <div className="diagram-chip">VUSD Protocol</div>
          <div className="diagram-arrow" />
          <div className="diagram-chip">AI Governance</div>
        </div>
        <div className="diagram-note">
          All subsystems run continuously with bounded autonomy. Privacy remains intact, risk is
          handled by models, and governance is transparent, predictable and non-custodial.
        </div>
      </div>
    </section>
  );
}
