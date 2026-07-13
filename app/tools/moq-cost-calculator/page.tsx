'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

function formatCurrency(num: number): string {
  return '₨ ' + Math.round(num).toLocaleString('en-US')
}

function formatDecimal(num: number): string {
  return '₨ ' + num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

export default function MOQCostCalculatorPage() {
  const [moq, setMoq]                   = useState('100')
  const [unitPrice, setUnitPrice]       = useState('500')
  const [shippingCost, setShippingCost] = useState('15000')
  const [taxRate, setTaxRate]           = useState('18')

  const qty = parseInt(moq)         || 0
  const up  = parseFloat(unitPrice) || 0
  const sc  = parseFloat(shippingCost) || 0
  const tr  = parseFloat(taxRate)   || 0

  const productCost      = qty * up
  const taxableAmount    = productCost + sc
  const taxAmount        = taxableAmount * (tr / 100)
  const totalInvestment  = taxableAmount + taxAmount
  const landedCostPerUnit = qty > 0 ? totalInvestment / qty : 0
  const shippingPerUnit  = qty > 0 ? sc / qty : 0

  let tipTitle: string
  let tipDesc: string
  if (qty === 0) {
    tipTitle = 'Waiting for data'
    tipDesc  = 'Enter your MOQ and costs to see personalized sourcing tips.'
  } else if (shippingPerUnit > up * 0.3) {
    tipTitle = 'High Shipping Ratio'
    tipDesc  = `Your shipping cost per unit (₨ ${Math.round(shippingPerUnit).toLocaleString()}) is over 30% of the product price. Consider sea freight consolidation or negotiating FOB terms.`
  } else if (tr > 20) {
    tipTitle = 'High Tax Burden'
    tipDesc  = `At ${tr}% tax, duties are significantly impacting your landed cost. Verify the HS code with YIWA Logistics to ensure you aren't overpaying.`
  } else {
    tipTitle = 'Healthy Cost Structure'
    tipDesc  = 'Your cost breakdown looks balanced. Ensure you have a 20-30% buffer in your final selling price to cover local marketing and unforeseen expenses.'
  }

  const handleReset = () => {
    setMoq('')
    setUnitPrice('')
    setShippingCost('')
    setTaxRate('')
  }

  return (
    <>
      <Navbar />

      <main>
        {/* ===== MOQ-1 - Header ===== */}
        <section className="moq-header-1">
          <div className="moq-header-label-1">MOQ CALCULATOR</div>
          <h2>Estimate Your Total Investment</h2>
          <p>Calculate the true landed cost of your minimum order quantity, including shipping and taxes.</p>
        </section>

        {/* ===== MOQ-2 - Container ===== */}
        <section className="moq-container-2">
          <div className="moq-wrapper-2">

            {/* MOQ-3 - Input Card */}
            <div className="moq-card-3">
              <div className="moq-card-title-3">
                <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
                Order Details
              </div>
              <p className="moq-card-subtitle-3">Enter supplier MOQ and associated costs</p>

              <div className="input-grid-3">
                <div className="input-field-3">
                  <label htmlFor="moq">Minimum Order Quantity (MOQ)</label>
                  <div className="input-wrap-3">
                    <span className="input-prefix-3">#</span>
                    <input type="number" id="moq" placeholder="0" min="1" step="1"
                      value={moq} onChange={(e) => setMoq(e.target.value)} />
                  </div>
                </div>

                <div className="input-field-3">
                  <label htmlFor="unitPrice">Unit Price</label>
                  <div className="input-wrap-3">
                    <span className="input-prefix-3">₨</span>
                    <input type="number" id="unitPrice" placeholder="0" min="0" step="0.01"
                      value={unitPrice} onChange={(e) => setUnitPrice(e.target.value)} />
                  </div>
                </div>

                <div className="input-field-3">
                  <label htmlFor="shippingCost">Total Shipping Cost</label>
                  <div className="input-wrap-3">
                    <span className="input-prefix-3">₨</span>
                    <input type="number" id="shippingCost" placeholder="0" min="0" step="0.01"
                      value={shippingCost} onChange={(e) => setShippingCost(e.target.value)} />
                  </div>
                </div>

                <div className="input-field-3">
                  <label htmlFor="taxRate">Taxes &amp; Duties (%)</label>
                  <div className="input-wrap-3">
                    <span className="input-prefix-3">%</span>
                    <input type="number" id="taxRate" placeholder="0" min="0" step="0.1"
                      value={taxRate} onChange={(e) => setTaxRate(e.target.value)} />
                  </div>
                </div>
              </div>

              <div className="calc-buttons-3">
                <button className="btn-3 btn-secondary-3" onClick={handleReset}>
                  <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="1 4 1 10 7 10" />
                    <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
                  </svg>
                  Reset
                </button>
                <button className="btn-3 btn-primary-3">
                  Calculate Investment
                  <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>

            {/* MOQ-4 - Result Card */}
            <div className="moq-card-4">
              <div className="moq-card-title-4">
                <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
                Investment Breakdown
              </div>
              <p className="moq-card-subtitle-4">Real-time estimate of your total landed cost</p>

              <div className="result-display-4">
                <div className="result-label-4">Total Estimated Investment</div>
                <div className="result-value-4">
                  <span>{formatCurrency(totalInvestment)}</span>
                </div>
                <div className="result-formula-4">
                  Landed Cost Per Unit:{' '}
                  <span style={{ color: '#fff', fontWeight: 700 }}>{formatDecimal(landedCostPerUnit)}</span>
                </div>
              </div>

              <div className="breakdown-grid-4">
                <div className="breakdown-item-4">
                  <div className="breakdown-label-4">Product Cost</div>
                  <div className="breakdown-value-4">{formatCurrency(productCost)}</div>
                </div>
                <div className="breakdown-item-4">
                  <div className="breakdown-label-4">Shipping Cost</div>
                  <div className="breakdown-value-4">{formatCurrency(sc)}</div>
                </div>
                <div className="breakdown-item-4">
                  <div className="breakdown-label-4">Tax &amp; Duty Amount</div>
                  <div className="breakdown-value-4">{formatCurrency(taxAmount)}</div>
                </div>
                <div className="breakdown-item-4">
                  <div className="breakdown-label-4">Effective Unit Cost</div>
                  <div className="breakdown-value-4">{formatDecimal(landedCostPerUnit)}</div>
                </div>
              </div>

              <div className="moq-tip-4">
                <div className="tip-icon-4">
                  <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                </div>
                <div>
                  <div>{tipTitle}</div>
                  <div style={{ fontSize: '12px', fontWeight: 400, marginTop: '4px', opacity: 0.85 }}>
                    {tipDesc}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ===== MOQ-5 - Info Section ===== */}
        <section className="info-section-5">
          <div className="info-wrapper-5">
            <h2 className="info-title-5">Smart Sourcing Strategies</h2>
            <p className="info-subtitle-5">How to optimize your MOQ and reduce initial investment</p>

            <div className="info-grid-5">
              <div className="info-card-5">
                <div className="info-card-icon-5">
                  <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3>Group Buying</h3>
                <p>Partner with other importers to meet the supplier&apos;s MOQ. This splits the shipping and customs costs, dramatically lowering your individual landed cost per unit.</p>
              </div>

              <div className="info-card-5">
                <div className="info-card-icon-5">
                  <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                </div>
                <h3>Request Tiered Pricing</h3>
                <p>Always ask suppliers for a price break at 500, 1000, and 5000 units. Sometimes the unit price drop at higher MOQs outweighs the extra inventory holding cost.</p>
              </div>

              <div className="info-card-5">
                <div className="info-card-icon-5">
                  <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <h3>Factor in Hidden Fees</h3>
                <p>Remember to include port handling, local delivery, and warehouse storage in your &quot;Shipping Cost&quot; field to get a truly accurate total investment estimate.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
