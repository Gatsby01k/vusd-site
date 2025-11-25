export default function Hero() {
  return (
    <section className="hero reveal" id="top">
      {/* Левая колонка — текст + CTA */}
      <div>
        <div className="hero-kicker">PRIVATE • AI-GOVERNED • USD</div>

        <h1 className="hero-title">
          A private, <span>AI-governed</span> USD stablecoin
        </h1>

        <p className="hero-text">
          VUSD brings together ZK privacy, verifiable AI governance and autonomous
          risk management — building the next generation of self-defending
          stablecoin infrastructure.
        </p>

        {/* CTA-кнопки — используют уже существующие классы btn-primary/btn-ghost */}
        <div className="hero-cta-row">
          <a href="#investors" className="btn-primary">
            Talk to us
          </a>
          <a href="#roadmap" className="btn-ghost">
            View progress
          </a>
        </div>

        {/* Бэйджи статуса / позиционирования */}
        <div className="hero-badges">
          <div className="badge badge-strong">
            <span className="chip-dot" />
            <span>Prototype live</span>
            <span className="badge-sep">•</span>
            <span>Investor conversations open</span>
          </div>

          <div className="badge">ZK-shielded balances</div>
          <div className="badge">Autonomous stability engine</div>
          <div className="badge">Self-defending infra</div>
        </div>
      </div>

      {/* Правая колонка — панель «снэпшот системы» */}
      <aside className="hero-panel" aria-label="System snapshot">
        <div className="panel-header">
          <div className="panel-label">SYSTEM SNAPSHOT</div>
          <div className="panel-caption">Model-governed, constraint-bounded</div>
        </div>

        {/* Псевдо-терминал */}
        <div className="panel-terminal">
          <div className="terminal-line">
            <span className="terminal-key">&gt; ase_status</span>
            <span className="terminal-value">"ONLINE"</span>
          </div>
          <div className="terminal-line">
            <span className="terminal-key">&gt; liquidity_cover</span>
            <span className="terminal-value">1.32x</span>
          </div>
          <div className="terminal-line">
            <span className="terminal-key">&gt; tail_risk</span>
            <span className="terminal-value terminal-value-warn">"constrained"</span>
          </div>
        </div>

        {/* Карточки по подсистемам */}
        <div className="panel-grid">
          <div className="stat-card">
            <div className="stat-label">PRIVACY</div>
            <div className="stat-value">Shielded</div>
            <div className="stat-tag">Balances &amp; tx graph hidden by default.</div>
          </div>

          <div className="stat-card">
            <div className="stat-label">GOVERNANCE</div>
            <div className="stat-value">AI-assisted</div>
            <div className="stat-tag">Models propose, community constrains.</div>
          </div>

          <div className="stat-card">
            <div className="stat-label">RISK ENGINE</div>
            <div className="stat-value">Autonomous</div>
            <div className="stat-tag">24/7 collateral &amp; peg defence.</div>
          </div>

          <div className="stat-card">
            <div className="stat-label">INFRA</div>
            <div className="stat-value">Self-defending</div>
            <div className="stat-tag">Anomaly-aware, privacy-preserving audit trail.</div>
          </div>
        </div>

        {/* Упрощённая диаграмма потока */}
        <div className="panel-diagram">
          <div className="diagram-row">
            <div className="diagram-chip">Users &amp; Protocols</div>
            <div className="diagram-arrow" />
            <div className="diagram-chip">VUSD</div>
            <div className="diagram-arrow" />
            <div className="diagram-chip">VUSD Protocol</div>
            <div className="diagram-arrow" />
            <div className="diagram-chip">AI Governance</div>
          </div>
          <div className="diagram-note">
            Transactions stay private, risk is managed by models, not committees, and constraints are
            enforced on-chain.
          </div>
        </div>
      </aside>
    </section>
  );
}
