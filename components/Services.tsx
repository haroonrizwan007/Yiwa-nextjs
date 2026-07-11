/* START: Services */
export default function Services() {
  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2>Our Services</h2>
          <p>
            A complete import toolkit — from finding the right supplier in China to delivering to
            your door in Pakistan.
          </p>
        </div>

        <div className="services-grid">

          {/* 1. Product Sourcing */}
          <div className="service-card">
            <div className="service-icon">
              <svg className="icon-search" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
            <h3>Product Sourcing</h3>
            <p>Find the right suppliers across Yiwu, Guangzhou, and Shenzhen.</p>
          </div>

          {/* 2. Supplier Verification */}
          <div className="service-card">
            <div className="service-icon">
              <svg className="icon-shield" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3>Supplier Verification</h3>
            <p>Confirm every supplier is legitimate, licensed, and reliable.</p>
          </div>

          {/* 3. Factory Verification */}
          <div className="service-card">
            <div className="service-icon">
              <svg className="icon-factory" viewBox="0 0 24 24">
                <path d="M2 20h20" />
                <path d="M4 20V8l5 4V8l5 4V4h6v16" />
                <path d="M8 20v-4M12 20v-4M16 20v-4" />
              </svg>
            </div>
            <h3>Factory Verification</h3>
            <p>On-ground factory visits to confirm capability and conditions.</p>
          </div>

          {/* 4. Price Negotiation */}
          <div className="service-card">
            <div className="service-icon">
              <svg className="icon-handshake" viewBox="0 0 24 24">
                <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                <path d="m21 3 1 11h-2" />
                <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                <path d="M3 4h8" />
              </svg>
            </div>
            <h3>Price Negotiation</h3>
            <p>Get the best factory price without language barriers.</p>
          </div>

          {/* 5. Sample Inspection */}
          <div className="service-card">
            <div className="service-icon">
              <svg className="icon-cube" viewBox="0 0 24 24">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <path d="m3.3 7 8.7 5 8.7-5" />
                <path d="M12 22V12" />
              </svg>
            </div>
            <h3>Sample Inspection</h3>
            <p>Validate product quality before you commit to bulk.</p>
          </div>

          {/* 6. Quality Inspection */}
          <div className="service-card">
            <div className="service-icon">
              <svg className="icon-clipboard" viewBox="0 0 24 24">
                <rect x="8" y="2" width="8" height="4" rx="1" />
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <path d="m9 14 2 2 4-4" />
              </svg>
            </div>
            <h3>Quality Inspection</h3>
            <p>Third-party QC before your goods leave China.</p>
          </div>

          {/* 7. Air Freight */}
          <div className="service-card">
            <div className="service-icon">
              <svg className="icon-plane" viewBox="0 0 24 24">
                <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
              </svg>
            </div>
            <h3>Air Freight</h3>
            <p>Fast airport-to-airport and door-to-door air cargo.</p>
          </div>

          {/* 8. Sea Freight */}
          <div className="service-card">
            <div className="service-icon">
              <svg className="icon-ship" viewBox="0 0 24 24">
                <path d="M2 20c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
                <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76" />
                <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" />
                <path d="M12 10v4" />
                <path d="M12 14h.01" />
              </svg>
            </div>
            <h3>Sea Freight</h3>
            <p>Cost-effective FCL and LCL ocean shipping.</p>
          </div>

        </div>

        <div className="services-cta">
          <a href="#" className="btn-view-all">
            View All Services
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
      </div>
    </section>
  )
}
/* END: Services */
