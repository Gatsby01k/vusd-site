export default function Hero() {
  return (
    <section className="hero" id="top">
      <div>
        <div className="hero-kicker">PRIVATE • AI-GOVERNED • USD</div>
        <h1 className="hero-title">
          A private, <span>AI-governed</span> USD stablecoin for the next financial era.
        </h1>
        <p className="hero-text">
          VUSD combines zero-knowledge privacy, an autonomous stability engine and
          self-defending infrastructure. Stability becomes a
          <span style={{ color: "var(--neon-soft)" }}> system property</span>, not a promise backed by a committee.
        </p>

        <div className="hero-badges">
          <div className="badge">Zero-knowledge privacy</div>
          <div className="badge">Autonomous stability engine</div>
          <div className="badge">No centralized operators</div>
        </div>

        <div className="hero-cta-row">
          <a href="/deck.pdf" className="btn-primary">
            <span className="icon">⬇</span>
            <span>Download investor deck</span>
          </a>
          <a href="#investors" className="btn-ghost">
            Book a 30-minute call
          </a>
        </div>

        <p className="hero-footnote">
          Raising $5–10M from long-term funds backing privacy, autonomous financial infrastructure
          and cryptography-heavy protocols.
        </p>
      </div>

      <aside className="hero-panel">
        <div className="arch-lattice"></div>
        <div className="panel-header">
          <div className="panel-label">SYSTEM SNAPSHOT</div>
          <div className="panel-dots">
            <div className="dot"></div>
            <div className="dot" style={{ background: "rgba(255,75,129,0.7)" }}></div>
            <div className="dot" style={{ background: "rgba(64,247,255,0.7)" }}></div>
          </div>
        </div>

        <div className="panel-console">
          <div className="panel-console-line">
            <span className="prompt">&gt;</span>
            <span>
              ase_status = <span style={{ color: "var(--neon)" }}>"ONLINE"</span>
            </span>
          </div>
          <div className="panel-console-line">
            <span className="prompt">&gt;</span>
            <span>
              liquidity_cover = <span style={{ color: "var(--neon)" }}>1.32x</span>
            </span>
          </div>
          <div className="panel-console-line">
            <span className="prompt">&gt;</span>
            <span>
              tail_risk = <span style={{ color: "var(--danger)" }}>"constrained"</span>
            </span>
          </div>
          <div className="panel-console-line typewriter">
            &gt; privacy_layer = ACTIVE // zk-shielded, unlinkable transfer graph
          </div>
        </div>

        <div className="panel-grid">
          <div className="stat-card">
            <div className="stat-label">PRIVACY</div>
            <div className="stat-value">Shielded</div>
            <div className="stat-tag">Balances & tx graph hidden by default.</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">GOVERNANCE</div>
            <div className="stat-value">AI-assisted</div>
            <div className="stat-tag">Models propose, community constrains.</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">RISK ENGINE</div>
            <div className="stat-value">Autonomous</div>
            <div className="stat-tag">Always-on collateral & peg defender.</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">INFRA</div>
            <div className="stat-value">Self-defending</div>
            <div className="stat-tag">Anomaly-aware, privacy-preserving audit trail.</div>
          </div>
        </div>

        <div className="hero-diagram">
          <div className="hero-diagram-row">
            <div className="diagram-chip">Users & Apps</div>
            <div className="diagram-arrow"></div>
            <div className="diagram-chip">VUSD Protocol</div>
            <div className="diagram-arrow"></div>
            <div className="diagram-chip">AI Governance</div>
          </div>
          <div className="diagram-note">
            Transactions stay private, risk is managed by models, not committees, and
            constraints are enforced on-chain.
          </div>
        </div>
      </aside>
    </section>
  );
}
