// app/components/Hero.js

import Card from "./ui/Card";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-inner">
        {/* Левая колонка — текст */}
        <div className="hero-content">
          <h1 className="hero-title">
            A private, AI-governed USD stablecoin
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
          <div className="hero-panel-item">
            <div className="hero-panel-label">Privacy</div>
            <div className="hero-panel-value">ZK Layer</div>
          </div>

          <div className="hero-panel-item">
            <div className="hero-panel-label">Governance</div>
            <div className="hero-panel-value">AI-autonomous</div>
          </div>

          <div className="hero-panel-item">
            <div className="hero-panel-label">Risk model</div>
            <div className="hero-panel-value">Self-defending</div>
          </div>

          <div className="hero-panel-item">
            <div className="hero-panel-label">Status</div>
            <div className="hero-panel-value">In development</div>
          </div>
        </Card>
      </div>
    </section>
  );
}
