import { roadmap } from "../content/roadmap";

export default function Roadmap() {
  return (
    <section id="roadmap" className="section reveal">
      <div className="section-label">PROGRESS &amp; EXECUTION</div>
      <h2 className="section-title">Roadmap</h2>
      <p className="section-sub">
        VUSD is being built in parallel across cryptography, economics, AI governance and security
        — with functional prototypes already in motion.
      </p>

      <div className="roadmap-grid">
        {/* Q1 BLOCK */}
        <div className="roadmap-card">
          <div className="roadmap-time">Q1</div>
          <div className="roadmap-title">Core architecture &amp; research</div>
          <ul className="roadmap-list">
            <li>• ZK shielded balance model</li>
            <li>• Proof-of-solvency system design</li>
            <li>• AI governance constraint framework</li>
            <li>• ASE initial simulation engine</li>
          </ul>
        </div>

        {/* Q2 BLOCK */}
        <div className="roadmap-card">
          <div className="roadmap-time">Q2</div>
          <div className="roadmap-title">Prototype implementation</div>
          <ul className="roadmap-list">
            <li>• Privacy layer prototype</li>
            <li>• Early collateral &amp; peg models</li>
            <li>• Governance proposal pipeline</li>
            <li>• Self-defending infra foundations</li>
          </ul>
        </div>

        {/* Q3 BLOCK */}
        <div className="roadmap-card">
          <div className="roadmap-time">Q3</div>
          <div className="roadmap-title">Smart contracts &amp; proofs</div>
          <ul className="roadmap-list">
            <li>• Solidity proto-contracts</li>
            <li>• Proof circuits</li>
            <li>• On-chain constraint templates</li>
            <li>• Auditor-in-the-loop test harness</li>
          </ul>
        </div>

        {/* Q4 BLOCK */}
        <div className="roadmap-card">
          <div className="roadmap-time">Q4</div>
          <div className="roadmap-title">Testnet + internal audit</div>
          <ul className="roadmap-list">
            <li>• Internal multi-regime stress testing</li>
            <li>• Adversarial privacy testing</li>
            <li>• ASE behavior under real volatility</li>
            <li>• Initial external audit process</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
