export default function Architecture() {
  return (
    <section id="architecture" className="reveal">
      <div className="section-label">ARCHITECTURE</div>
      <h2 className="section-title">Three rails: privacy, stability, governance.</h2>
      <p className="section-sub">
        VUSD splits the system into independent, composable rails — each auditable, each
        upgradeable, all designed to keep humans away from day-to-day risk knobs.
      </p>

      <div className="arch-layout">
        <div className="arch-diagram">
          <div className="arch-lattice"></div>

          <div className="arch-layer">
            <div className="arch-layer-label">LAYER 01 — USER &amp; APPLICATIONS</div>
            <div className="arch-layer-title">Wallets, dApps, merchants, and rails</div>
            <div className="arch-layer-desc">
              Any compatible wallet or integration talks to VUSD through a privacy-preserving
              interface: shielded accounts, stealth addresses, zk-proof-based actions.
            </div>
          </div>

          <div className="arch-layer">
            <div className="arch-layer-label">LAYER 02 — VUSD PROTOCOL</div>
            <div className="arch-layer-title">Shielded pool + collateral vaults</div>
            <div className="arch-layer-desc">
              A core contract system managing the private UTXO/account set, collateral baskets
              (on-chain treasuries, LSTs, high-grade assets) and issuance/redemption logic.
            </div>
          </div>

          <div className="arch-layer">
            <div className="arch-layer-label">LAYER 03 — AI GOVERNANCE &amp; SECURITY</div>
            <div className="arch-layer-title">Autonomous risk &amp; threat models</div>
            <div className="arch-layer-desc">
              ASE, governance proposal engines and anomaly detectors form a meta-layer: they observe
              system health, propose changes and surface warnings — while staying within
              hard-coded on-chain limits.
            </div>
          </div>
        </div>

        <div className="arch-bullets">
          <div>
            <div className="arch-bullet-title">Not “algorithmic” in the Terra sense.</div>
            <div>
              VUSD is fully collateral-backed. AI controls parameters around issuance, collateral
              weights, fees and safety margins — never minting from thin air.
            </div>
          </div>
          <div>
            <div className="arch-bullet-title">Privacy with verifiability.</div>
            <div>
              Zero-knowledge proofs ensure that every private transfer respects system rules without
              exposing balances, counterparties or flows.
            </div>
          </div>
          <div>
            <div className="arch-bullet-title">Governance = constraints, not vibes.</div>
            <div>
              Tokenholders and contributors define guardrails and objectives. Models compete and
              evolve inside those constraints, not outside them.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
