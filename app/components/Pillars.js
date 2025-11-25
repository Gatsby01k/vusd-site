import Section from "./ui/Section";
import Card from "./ui/Card";
import { roadmap } from "../content/pillars";

export default function Pillars() {
  return (
    <section id="pillars" className="section reveal">
      <div className="section-label">WHAT WE’RE BUILDING</div>
      <h2 className="section-title">
        A new class of stable asset: private, intelligent, self-governed.
      </h2>
      <p className="section-sub">
        VUSD is a collateral-backed USD stablecoin with privacy baked into the protocol and AI
        embedded in its risk and governance layer — not another “Terra-style” experiment.
      </p>

      <div className="pillars-grid">
        {/* MODULE 01 — PRIVACY */}
        <div className="pillar-card">
          <div className="pillar-label">MODULE 01 — PRIVACY</div>
          <div className="pillar-title">Private-by-default stablecoin</div>
          <div className="pillar-body">
            <p>
              ZK rails and confidential transaction schemes power shielded balances and invisible
              transaction graphs.
            </p>
            <ul>
              <li>• Shielded balances by default</li>
              <li>• Invisible transfer graph</li>
              <li>• Unlinkable payments</li>
              <li>• Monero-grade privacy for a USD peg</li>
            </ul>
          </div>
        </div>

        {/* MODULE 02 — STABILITY */}
        <div className="pillar-card">
          <div className="pillar-label">MODULE 02 — STABILITY</div>
          <div className="pillar-title">Autonomous Stability Engine (ASE)</div>
          <div className="pillar-body">
            <p>
              Models monitor volatility, liquidity and collateral composition, adjusting parameters
              in real time.
            </p>
            <ul>
              <li>• Dynamic collateral haircuts</li>
              <li>• Peg-aware fee curves</li>
              <li>• Liquidity incentives and caps</li>
              <li>• Risk as code, not as meetings</li>
            </ul>
          </div>
        </div>

        {/* MODULE 03 — GOVERNANCE */}
        <div className="pillar-card">
          <div className="pillar-label">MODULE 03 — GOVERNANCE</div>
          <div className="pillar-title">AI-assisted, constraint-driven governance</div>
          <div className="pillar-body">
            <p>
              No centralized committees, no manual micromanagement. AI originates proposals, the
              community defines guardrails.
            </p>
            <ul>
              <li>• AI-generated parameter updates</li>
              <li>• On-chain validation &amp; veto by tokenholders</li>
              <li>• Continuous stress analytics</li>
              <li>• No human “emergency overrides”</li>
            </ul>
          </div>
        </div>

        {/* MODULE 04 — SECURITY */}
        <div className="pillar-card">
          <div className="pillar-label">MODULE 04 — SECURITY</div>
          <div className="pillar-title">Self-defending infrastructure</div>
          <div className="pillar-body">
            <p>
              Privacy attracts adversaries. AI shrinks the attack surface without piercing
              confidentiality.
            </p>
            <ul>
              <li>• Anomaly detection across mint/burn/transfer flows</li>
              <li>• Automated fraud and abuse mitigation</li>
              <li>• Early warning for liquidity shocks</li>
              <li>• Privacy-preserving audit trails</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
