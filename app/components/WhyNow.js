export default function WhyNow() {
  return (
    <section className="section reveal" id="why">
      <h2 className="section-title">Why now?</h2>

      <div className="section-grid">
        {/* 1 */}
        <div className="card">
          <div className="card-title">Privacy is becoming mandatory</div>
          <ul className="card-list">
            <li>
              Users, institutions and protocols increasingly require private balances and protected
              transaction graphs for competitive and safety reasons.
            </li>
            <li>
              ZK proofs make it possible to keep balances hidden while still proving solvency and
              enforcing strict constraints.
            </li>
            <li>Privacy is no longer a luxury — it is baseline infrastructure.</li>
          </ul>
        </div>

        {/* 2 */}
        <div className="card">
          <div className="card-title">Models outperform committees</div>
          <ul className="card-list">
            <li>
              Human governance is slow, reactive and often politicized. Models enforce constraints
              predictably and continuously.
            </li>
            <li>
              Autonomous risk engines can maintain collateral levels, rebalance positions and enforce
              tail-risk limits in real time.
            </li>
            <li>On-chain constraints provide bounded autonomy and prevent capture.</li>
          </ul>
        </div>

        {/* 3 */}
        <div className="card">
          <div className="card-title">Stablecoins need real infrastructure</div>
          <ul className="card-list">
            <li>
              Today’s largest stablecoins rely on opaque custodians and discretionary human
              decision-making.
            </li>
            <li>
              Next-generation financial infrastructure must be transparent, self-auditing and
              minimally trust-required.
            </li>
            <li>
              A private, AI-governed USD asset is the next logical step in the evolution of digital
              money.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
