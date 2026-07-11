/* START: Why Choose Us */
export default function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="why-container">

        {/* LEFT SIDE */}
        <div className="why-left">
          <div className="why-label">WHY YIWA</div>
          <h2>Why Choose Us</h2>
          <p>
            We are not a freight forwarder that disappears after pickup. We are your on-the-ground
            team in China and your delivery partner in Pakistan.
          </p>

          <div className="why-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://picsum.photos/800/400?random=1"
              alt="Container Terminal"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '14px' }}
            />
          </div>

          <a href="#" className="btn-more">
            More about us
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* RIGHT SIDE - FEATURE CARDS */}
        <div className="why-right">

          {/* 1. End-to-End Solutions */}
          <div className="feature-card">
            <div className="feature-icon">
              <svg className="icon-globe" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <div>
              <h3>End-to-End Solutions</h3>
              <p>From supplier search to your warehouse door — one partner, one accountability.</p>
            </div>
          </div>

          {/* 2. Verified Suppliers */}
          <div className="feature-card">
            <div className="feature-icon">
              <svg className="icon-shield" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <div>
              <h3>Verified Suppliers</h3>
              <p>Every supplier is background-checked and factory-verified before you pay.</p>
            </div>
          </div>

          {/* 3. Transparent Pricing */}
          <div className="feature-card">
            <div className="feature-icon">
              <svg className="icon-doc" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <div>
              <h3>Transparent Pricing</h3>
              <p>No hidden margins. You see factory price, freight, and duties line by line.</p>
            </div>
          </div>

          {/* 4. Dedicated Support */}
          <div className="feature-card">
            <div className="feature-icon">
              <svg className="icon-headset" viewBox="0 0 24 24">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
              </svg>
            </div>
            <div>
              <h3>Dedicated Support</h3>
              <p>A real sourcing consultant who knows your business, reachable on WhatsApp.</p>
            </div>
          </div>

          {/* 5. Quality Guaranteed */}
          <div className="feature-card">
            <div className="feature-icon">
              <svg className="icon-check" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <div>
              <h3>Quality Guaranteed</h3>
              <p>AQL-standard pre-shipment inspections catch defects before they ship.</p>
            </div>
          </div>

          {/* 6. On-Time Delivery */}
          <div className="feature-card">
            <div className="feature-icon">
              <svg className="icon-clock" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div>
              <h3>On-Time Delivery</h3>
              <p>Tracked shipments with ETAs you can plan your inventory around.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
/* END: Why Choose Us */
