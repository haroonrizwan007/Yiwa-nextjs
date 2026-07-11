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

          {/* Contact Column */}
          <div className="footer1-column">
            <h4>Contact</h4>
            <ul className="footer1-contact-list">
              <li className="footer1-contact-item">
                <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:info@yiwalogistics.com">info@yiwalogistics.com</a>
              </li>
              <li className="footer1-contact-item">
                <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+923001234567">+92 300 1234567</a>
              </li>
              <li className="footer1-contact-item">
                <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>12 Trade Center, Lahore, Pakistan</span>
              </li>
              <li className="footer1-contact-item">
                <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Yiwu International Trade City, Zhejiang, China</span>
              </li>
              <li className="footer1-contact-item">
                <a href="#" className="footer1-whatsapp">
                  <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </li>
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
