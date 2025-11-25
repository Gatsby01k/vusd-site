export default function Investors() {
  return (
    <section id="investors" className="section reveal">
      <div className="section-label">FOR INVESTORS</div>
      <h2 className="section-title">
        If you’re backing the next decade of financial infrastructure — let’s talk.
      </h2>
      <p className="section-sub">
        We’re looking for partners comfortable with deep R&amp;D cycles, cryptography and AI-driven
        systems — and with the ambition to help define how private, self-governed stability rails
        should look.
      </p>

      <div className="investors-grid">
        {/* ЛЕВАЯ КОЛОНКА — ОФФЕР */}
        <div>
          <div className="card">
            <div className="card-title">What we’re offering</div>
            <ul className="investor-points">
              <li>• Hybrid equity + token exposure to a new class of stable asset.</li>
              <li>
                • Exposure to privacy infrastructure, ZK rails and AI-governed risk tooling as a
                platform.
              </li>
              <li>
                • Direct access to architecture &amp; design decisions at the earliest stage.
              </li>
            </ul>
          </div>

          <div className="card" style={{ marginTop: 14 }}>
            <div className="card-title">Ideal partners</div>
            <ul className="investor-points">
              <li>• Long-term crypto / frontier-tech funds.</li>
              <li>• Teams backing privacy, ZK, security and ML-first stacks.</li>
              <li>• Strategic partners able to help with liquidity, compliance and distribution.</li>
            </ul>
            <div className="pill">We’re building for a multi-decade horizon.</div>
          </div>
        </div>

        {/* ПРАВАЯ КОЛОНКА — ФОРМА */}
        <div className="form-card">
          <form
            action="https://formspree.io/f/your-form-id"
            method="POST"
            autoComplete="on"
          >
            <div className="form-row">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" placeholder="Ada Lovelace" required />
              </div>
              <div className="field">
                <label htmlFor="fund">Fund / Organization</label>
                <input id="fund" name="fund" placeholder="Fund / Family Office / Angel" />
              </div>
            </div>

            <div className="form-row">
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="invest@fund.xyz"
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="checksize">Typical check size</label>
                <select id="checksize" name="checksize" defaultValue="">
                  <option value="">Select</option>
                  <option>&lt; $250k</option>
                  <option>$250k – $1M</option>
                  <option>$1M – $3M</option>
                  <option>$3M+</option>
                </select>
              </div>
            </div>

            <div className="field">
              <label htmlFor="message">How do you typically back infra teams?</label>
              <textarea
                id="message"
                name="message"
                placeholder="Share context on your fund, thesis, how you like to work with founders..."
              />
            </div>

            <button
              type="submit"
              className="btn-primary"
              style={{ marginTop: 12, width: "100%", justifyContent: "center" }}
            >
              <span>Send intro</span>
            </button>

            <p className="form-note">
              Or email directly: <a href="mailto:invest@vusd.ai">invest@vusd.ai</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
