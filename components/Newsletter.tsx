'use client'

/* START: Newsletter / CTA */
export default function Newsletter() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <>
      <section className="newsletter1">
        <div className="newsletter1-container">
          <div className="newsletter1-icon">
            <svg viewBox="0 0 24 24">
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            </svg>
          </div>
          <h2>Ready to import from China the smart way?</h2>
          <p>Get a free, no-obligation quote today. Our team responds within one business day.</p>
          <div className="newsletter1-buttons">
            <a href="#" className="newsletter1-btn primary">
              Get Free Quote →
            </a>
            <a href="#" className="newsletter1-btn secondary">
              View Membership
            </a>
          </div>
        </div>
      </section>

      <section className="newsletter2">
        <div className="newsletter2-container">
          <div className="newsletter2-content">
            <h3>Stay ahead of the market</h3>
            <p>Offer market updates, shipping alerts, and import tips — monthly, no spam.</p>
          </div>
          <form className="newsletter2-form" onSubmit={handleSubmit}>
            <input
              type="email"
              className="newsletter2-input"
              placeholder="Enter your email"
              required
            />
            <button type="submit" className="newsletter2-submit">
              Subscribe
              <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
/* END: Newsletter / CTA */
