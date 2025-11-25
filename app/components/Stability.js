export default function Stability() {
  return (
    <section id="stability" className="reveal">
      <div className="section-label">STABILITY &amp; RISK</div>
      <h2 className="section-title">Turning risk management into an always-on AI utility.</h2>
      <p className="section-sub">
        Instead of slow, political human committees, ASE acts as an unbiased, data-driven stability
        manager — watching markets, collateral and flows 24/7.
      </p>

      <div className="stab-grid">
        <div>
          <div className="card">
            <div className="card-title">Collateral &amp; peg design</div>
            <ul className="card-list">
              <li>• Overcollateralized baskets with clear quality and liquidity tiers.</li>
              <li>• Real-time health scoring: volatility, depth, correlation, regime shifts.</li>
              <li>• Stress-test driven limits on exposure to any asset, sector or venue.</li>
            </ul>
          </div>

          <div className="card" style={{ marginTop: 14 }}>
            <div className="card-title">Autonomous Stability Engine (ASE)</div>
            <ul className="card-list">
              <li>• Adjusts haircuts, fees, mint/burn curves and liquidity incentives.</li>
              <li>• Optimizes for long-horizon peg stability, not short-term yield.</li>
              <li>• Emits signed recommendations that must fit on-chain constraint templates.</li>
            </ul>
          </div>
        </div>

        <div>
          <div className="stab-stats">
            <div className="stab-stat">
              <div className="stat-label">OBJECTIVE</div>
              <div className="stab-stat-value">&lt; 1%</div>
              <div>Target annualized deviation from USD peg under normal regimes.</div>
            </div>
            <div className="stab-stat">
              <div className="stat-label">COLLATERAL</div>
              <div className="stab-stat-value">100%+</div>
              <div>Overcollateralized design with dynamic, model-driven haircuts.</div>
            </div>
            <div className="stab-stat">
              <div className="stat-label">UPDATES</div>
              <div className="stab-stat-value">24/7</div>
              <div>Continuous monitoring instead of quarterly governance cycles.</div>
            </div>
          </div>
          <p className="stab-note">
            Hard-coded guardrails ensure ASE cannot push the system into unsafe territories — even
            under faulty models or adversarial conditions.
          </p>
        </div>
      </div>
    </section>
  );
}
