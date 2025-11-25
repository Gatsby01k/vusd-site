export default function Roadmap() {
  return (
    <section id="roadmap" className="reveal">
      <div className="section-label">PROGRESS &amp; ROADMAP</div>
      <h2 className="section-title">
        From prototype to globally deployed, self-governed stablecoin.
      </h2>
      <p className="section-sub">
        VUSD is in the prototype stage today: architecture, simulations and cryptographic rails
        under active development. The next 18 months are about shipping and hardening.
      </p>

      <div className="roadmap">
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-label">NOW — PROTOTYPE</div>
            <div className="timeline-title">Architecture &amp; cryptography rails</div>
            <div className="timeline-body">
              Core protocol design, ASE simulation framework and initial ZK circuit prototypes for
              private transfers and state proofs. Early legal and regulatory mapping.
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-label">NEXT 12 MONTHS</div>
            <div className="timeline-title">Testnet &amp; stress harness</div>
            <div className="timeline-body">
              Launch testnet with private transfers, basic ASE online, and a battery of stress
              scenarios: collateral shocks, liquidity droughts, tail-event simulations and
              cross-chain volatility.
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-label">12–18 MONTHS</div>
            <div className="timeline-title">
              Mainnet, audits &amp; progressive decentralization
            </div>
            <div className="timeline-body">
              Formal audits of cryptography and ASE, rollout of guarded launch on mainnet, followed
              by progressive decentralization of governance and model control.
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-title">What we’re raising</div>
          <ul className="card-list">
            <li>• $5M–$10M to scale engineering, cryptography and risk modeling teams.</li>
            <li>• Invest in compliance and jurisdictional strategy from day one.</li>
            <li>• Fund security, audits and adversarial testing of both cryptography and models.</li>
          </ul>
          <div className="pill">Offering: equity + token rights (hybrid).</div>
        </div>
      </div>
    </section>
  );
}
