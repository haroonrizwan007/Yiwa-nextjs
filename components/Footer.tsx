'use client'

/* START: Footer */
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <footer className="footer1">
        <div className="footer1-container">

          {/* Brand Column */}
          <div className="footer1-brand">
            <div className="footer1-logo">
              <div className="footer1-logo-icon">
                <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="10" rx="2" />
                  <path d="M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
                  <line x1="12" y1="17" x2="12" y2="22" />
                  <line x1="7" y1="17" x2="7" y2="22" />
                  <line x1="17" y1="17" x2="17" y2="22" />
                </svg>
              </div>
              <div className="footer1-logo-text">
                YIWA
                <span>LOGISTICS</span>
              </div>
            </div>

            <p className="footer1-description">
              Professional sourcing, freight forwarding, and door-to-door delivery from China to
              Pakistan. Import with confidence.
            </p>

            <div className="footer1-social">
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Company Column */}
          <div className="footer1-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Membership</a></li>
              <li><a href="#">Resources</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Track Shipment</a></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="footer1-column">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Product Sourcing</a></li>
              <li><a href="#">Sea Freight</a></li>
              <li><a href="#">Air Freight</a></li>
              <li><a href="#">Customs Clearance</a></li>
              <li><a href="#">Quality Inspection</a></li>
              <li><a href="#">All Services</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="footer1-column">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Import Guides</a></li>
              <li><a href="#">Calculators</a></li>
              <li><a href="#">Shipping Updates</a></li>
              <li><a href="#">Trade Policies</a></li>
            </ul>
          </div>

          {/* Calculator Column */}
          <div className="footer1-column">
            <h4>CALCULATOR</h4>
            <ul>
              <li><a href="/tools/cbm-calculator">CBM Calculator</a></li>
              <li><a href="/tools/currency-converter">Currency Converter</a></li>
              <li><a href="/tools/profit-margin-calculator">Profit Margin Calculator</a></li>
              <li><a href="/tools/moq-cost-calculator">MOQ Cost Calculator</a></li>
            </ul>
          </div>

        </div>
      </footer>

      {/* FOOTER 2 - Bottom Bar */}
      <footer className="footer2">
        <div className="footer2-container">
          <div className="footer2-left">
            <button
              className="footer2-back-top"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </button>
            <span className="footer2-copy">© 2026 Yiwa Logistics. All rights reserved.</span>
          </div>

          <div className="footer2-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </footer>
    </>
  )
}
/* END: Footer */
