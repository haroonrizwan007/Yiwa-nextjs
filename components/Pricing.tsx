/* START: Membership Pricing */

function CheckIcon() {
  return (
    <span className="check-icon">
      <svg viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  )
}

export default function Pricing() {
  return (
    <section className="pricing-section">
      <div className="pricing-container">
        <div className="pricing-header">
          <div className="pricing-label">MEMBERSHIP CLUB</div>
          <h2>Join the Yiwa Importers Club</h2>
          <div className="pricing-subtitle">Learn Smarter. Import Better. Grow Faster.</div>
          <p>
            Become part of an exclusive community designed for importers and business owners looking
            to source from China with confidence. Get expert guidance, educational resources,
            exclusive opportunities, and priority access to help you make informed importing
            decisions.
          </p>
        </div>

        <div className="pricing-grid">

          {/* Starter Membership */}
          <div className="pricing-card">
            <div className="card-header">
              <div className="card-title">Starter Membership</div>
              <div className="card-subtitle">Perfect for First-Time Importers</div>
              <div className="card-price">
                <span className="price-amount">PKR 2,999</span>
                <span className="price-period">/ Year</span>
              </div>
            </div>

            <ul className="features-list">
              <li><CheckIcon />Access to the Members Portal</li>
              <li><CheckIcon />Monthly China Import Tips &amp; Updates</li>
              <li><CheckIcon />Import Guides &amp; Educational Resources</li>
              <li><CheckIcon />Member-Only WhatsApp Community</li>
              <li><CheckIcon />Invitations to Online Webinars</li>
              <li><CheckIcon />Early Access to Market Insights</li>
              <li><CheckIcon />Email Support for General Queries</li>
            </ul>

            <a href="#" className="btn-cta gray">Join Starter</a>
          </div>

          {/* Business Membership (Popular) */}
          <div className="pricing-card popular">
            <div className="popular-badge">MOST POPULAR</div>
            <div className="card-header">
              <div className="card-title">
                Business Membership <span className="star">⭐</span>
              </div>
              <div className="card-subtitle">Ideal for Growing Businesses &amp; Online Sellers</div>
              <div className="card-price">
                <span className="price-amount">PKR 7,999</span>
                <span className="price-period">/ Year</span>
              </div>
            </div>

            <ul className="features-list">
              <li><CheckIcon />Everything in Starter, plus:</li>
              <li><CheckIcon />Priority Response to Member Questions</li>
              <li><CheckIcon />Monthly Live Q&amp;A Sessions</li>
              <li><CheckIcon />Exclusive Product Opportunity Updates</li>
              <li><CheckIcon />China Market Trend Reports</li>
              <li><CheckIcon />Business Networking Events</li>
              <li><CheckIcon />Discounted Training Workshops</li>
              <li><CheckIcon />Import Planning Guidance</li>
              <li><CheckIcon />Access to Premium Learning Resources</li>
            </ul>

            <a href="#" className="btn-cta primary">Become a Business Member</a>
          </div>

          {/* Elite Membership */}
          <div className="pricing-card">
            <div className="card-header">
              <div className="card-title">Elite Membership</div>
              <div className="card-subtitle">For Serious Importers &amp; Business Owners</div>
              <div className="card-price">
                <span className="price-amount">PKR 14,999</span>
                <span className="price-period">/ Year</span>
              </div>
            </div>

            <ul className="features-list">
              <li><CheckIcon />Everything in Business, plus:</li>
              <li><CheckIcon />One-to-One Import Consultation (Quarterly)</li>
              <li><CheckIcon />VIP Member Events &amp; Networking</li>
              <li><CheckIcon />Exclusive Supplier Recommendation Lists</li>
              <li><CheckIcon />Priority Registration for Trade Tours</li>
              <li><CheckIcon />Advanced Import Strategy Sessions</li>
              <li><CheckIcon />Business Growth Resources</li>
              <li><CheckIcon />Direct Access to Senior Consultants</li>
              <li><CheckIcon />Early Access to New Services &amp; Programs</li>
            </ul>

            <a href="#" className="btn-cta gray">Join Elite</a>
          </div>

        </div>
      </div>
    </section>
  )
}
/* END: Membership Pricing */
