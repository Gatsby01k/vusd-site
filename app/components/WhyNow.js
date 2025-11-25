export default function WhyNow() {
  return (
    <section id="why" className="reveal">
      <div className="section-label">WHY NOW</div>
      <h2 className="section-title">
        Stablecoins scaled finance — but they didn’t evolve with it.
      </h2>
      <p className="section-sub">
        2017-era architecture can’t handle a decade of regulatory pressure, liquidity shocks and
        disappearing privacy. Capital needs stability. Users need autonomy. VUSD is built for this
        tension.
      </p>

      <div className="why-grid">
        <div className="card">
          <div className="card-title">The fracture in today’s stablecoins</div>
          <ul className="card-list">
            <li>• Transparent by design — every transaction is linkable, every user is legible.</li>
            <li>• Human-run risk committees reacting on Twitter timelines and news cycles.</li>
            <li>• Centralized operators as single points of failure and regulatory choke points.</li>
            <li>• Experimental “algorithmic” designs that blew up trust instead of building it.</li>
          </ul>
          <div className="pill">Legacy rails, new attack surface.</div>
        </div>

        <div className="card">
          <div className="card-title">The structural gap</div>
          <ul className="card-list">
            <li>• No stablecoin delivers Monero-grade privacy with on-chain verifiability.</li>
            <li>• No system uses AI as an autonomous, parameter-level risk regulator.</li>
            <li>• Governance is still politics and forums, not guardrails and constraints.</li>
          </ul>
          <div className="pill">VUSD exists to close this gap.</div>
        </div>
      </div>
    </section>
  );
}
