/* START: Trusted Partners Marquee */
const partners = [
  'Pakistan Customs',
  'PSW',
  'Yiwu Market',
  'China Warehouse',
  'Alibaba',
  '1688',
  'Made-in-China',
  'DHL',
  'FedEx',
  'UPS',
  'COSCO',
  'Maersk',
]

export default function PartnersMarquee() {
  return (
    <section className="partners-section">
      <div className="partners-heading">
        TRUSTED BY LEADING LOGISTICS &amp; MANUFACTURING PARTNERS
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {/* Set 1 */}
          {partners.map((name) => (
            <div key={`a-${name}`} className="marquee-item">
              {name}
            </div>
          ))}
          {/* Set 2 (duplicate for seamless loop) */}
          {partners.map((name) => (
            <div key={`b-${name}`} className="marquee-item">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
/* END: Trusted Partners Marquee */
