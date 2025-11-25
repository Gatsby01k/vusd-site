// app/components/Hero.js

import Card from "./ui/Card";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-inner">
        {/* Левая колонка — текст */}
        <div className="hero-content">
          <h1 className="hero-title">
  <span className="hero-title-mask">
    A private,{" "}
    <span className="hero-ai" data-text="AI-governed">
      AI-governed
    </span>{" "}
    USD stablecoin
  </span>
</h1>

          <p className="hero-sub">
            VUSD brings together ZK privacy, verifiable AI governance and
            autonomous risk management — building the next generation of
            self-defending stablecoin infrastructure.
          </p>

          <div className="hero-bullets">
            <div>ZK-powered private USD transfers</div>
            <div>AI-automated reserve supervision</div>
            <div>Autonomous stability orchestration</div>
            <div>Clean institutional architecture</div>
          </div>

          <div className="hero-cta-row">
            <a href="#architecture" className="hero-cta primary">
              Learn more
            </a>
            <a href="#investors" className="hero-cta secondary">
              For investors
            </a>
          </div>
        </div>

        {/* Правая колонка — премиальная панель-снэпшот */}
        <Card className="hero-panel">
  <div className="hero-panel-header">
    <div className="hero-panel-chip">
      <span className="hero-panel-chip-dot" />
      System snapshot
    </div>
    <div className="hero-panel-status">Pre-mainnet · 2025</div>
  </div>

  <div className="hero-panel-rows">
    <div className="hero-panel-row">
      <div className="hero-panel-label">Privacy</div>
      <div className="hero-panel-value">ZK Layer</div>
    </div>

    <div className="hero-panel-row">
      <div className="hero-panel-label">Governance</div>
      <div className="hero-panel-value">AI-autonomous</div>
    </div>

    <div className="hero-panel-row">
      <div className="hero-panel-label">Risk model</div>
      <div className="hero-panel-value">Self-defending</div>
    </div>

    <div className="hero-panel-row">
      <div className="hero-panel-label">Status</div>
      <div className="hero-panel-value">In development</div>
    </div>
  </div>

  <div className="hero-panel-footnote">
    Designed for on-chain AI governance with ZK-powered privacy and
    autonomous stability controls.
  </div>
</Card>
      </div>
    </section>
  );
}
