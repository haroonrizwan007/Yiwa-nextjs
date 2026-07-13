'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

function formatCurrency(num: number): string {
  return 'Rs ' + Math.round(num).toLocaleString('en-US')
}

function formatDecimal(num: number): string {
  return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

function getHealth(margin: number, netProfit: number) {
  if (margin >= 20) return {
    state: 'good',
    unitClass: 'result-unit-4',
    title: 'Healthy Margin',
    desc: 'Your profit margin is above 20%, which is excellent for imports.',
    icon: (
      <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  }
  if (margin >= 10) return {
    state: 'warning',
    unitClass: 'result-unit-4 low',
    title: 'Moderate Margin',
    desc: 'Margin is acceptable, but consider negotiating better freight or supplier rates.',
    icon: (
      <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  }
  return {
    state: 'danger',
    unitClass: 'result-unit-4 negative',
    title: netProfit < 0 ? 'Loss Warning' : 'Low Margin',
    desc: netProfit < 0
      ? 'You are selling below total cost. Review your pricing or reduce expenses.'
      : 'Margin is below 10%. Very risky for import businesses due to unforeseen costs.',
    icon: (
      <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="15" y1="9" x2="9" y2="15" />
        <line x1="9" y1="9" x2="15" y2="15" />
      </svg>
    ),
  }
}

export default function ProfitMarginCalculatorPage() {
  const [costPrice, setCostPrice]       = useState('500')
  const [quantity, setQuantity]         = useState('100')
  const [shippingCost, setShippingCost] = useState('15000')
  const [customsCost, setCustomsCost]   = useState('5000')
  const [sellingPrice, setSellingPrice] = useState('850')

  const cp  = parseFloat(costPrice)   || 0
  const qty = parseInt(quantity)      || 1
  const sc  = parseFloat(shippingCost) || 0
  const cc  = parseFloat(customsCost)  || 0
  const sp  = parseFloat(sellingPrice) || 0

  const totalInvestmentVal = (cp * qty) + sc + cc
  const costPerUnitVal     = qty > 0 ? totalInvestmentVal / qty : 0
  const totalRevenueVal    = sp * qty
  const netProfitVal       = totalRevenueVal - totalInvestmentVal
  const marginPercent      = totalRevenueVal > 0 ? (netProfitVal / totalRevenueVal) * 100 : 0
  const markupPercent      = totalInvestmentVal > 0 ? (netProfitVal / totalInvestmentVal) * 100 : 0

  const health = getHealth(marginPercent, netProfitVal)

  const handleReset = () => {
    setCostPrice('')
    setQuantity('')
    setShippingCost('')
    setCustomsCost('')
    setSellingPrice('')
  }

  return (
    <>
      <Navbar />

      <main>
        {/* ===== PROFIT-1 - Header ===== */}
        <section className="profit-header-1">
          <div className="profit-header-label-1">PROFIT CALCULATOR</div>
          <h2>Calculate Your Import Profit Margin</h2>
          <p>Accurately estimate net profit and margin percentage for your import and resale business.</p>
        </section>

        {/* ===== PROFIT-2 - Container ===== */}
        <section className="profit-container-2">
          <div className="profit-wrapper-2">

            {/* PROFIT-3 - Input Card */}
            <div className="profit-card-3">
              <div className="profit-card-title-3">
                <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
                Cost &amp; Pricing Details
              </div>
              <p className="profit-card-subtitle-3">Enter your per-unit costs and total shipment expenses</p>

              <div className="input-grid-3">
                <div className="input-field-3">
                  <label htmlFor="costPrice">Cost Price (per unit)</label>
                  <div className="input-wrap-3">
                    <span className="input-prefix-3">Rs</span>
                    <input type="number" id="costPrice" placeholder="0" min="0" step="0.01"
                      value={costPrice} onChange={(e) => setCostPrice(e.target.value)} />
                  </div>
                </div>

                <div className="input-field-3">
                  <label htmlFor="quantity">Quantity</label>
                  <div className="input-wrap-3">
                    <span className="input-prefix-3">#</span>
                    <input type="number" id="quantity" placeholder="0" min="1" step="1"
                      value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                  </div>
                </div>

                <div className="input-field-3">
                  <label htmlFor="shippingCost">Total Shipping Cost</label>
                  <div className="input-wrap-3">
                    <span className="input-prefix-3">Rs</span>
                    <input type="number" id="shippingCost" placeholder="0" min="0" step="0.01"
                      value={shippingCost} onChange={(e) => setShippingCost(e.target.value)} />
                  </div>
                </div>

                <div className="input-field-3">
                  <label htmlFor="customsCost">Total Customs &amp; Duties</label>
                  <div className="input-wrap-3">
                    <span className="input-prefix-3">Rs</span>
                    <input type="number" id="customsCost" placeholder="0" min="0" step="0.01"
                      value={customsCost} onChange={(e) => setCustomsCost(e.target.value)} />
                  </div>
                </div>

                <div className="input-field-3 full-width-3">
                  <label htmlFor="sellingPrice">Selling Price (per unit)</label>
                  <div className="input-wrap-3">
                    <span className="input-prefix-3">Rs</span>
                    <input type="number" id="sellingPrice" placeholder="0" min="0" step="0.01"
                      value={sellingPrice} onChange={(e) => setSellingPrice(e.target.value)} />
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
                  Calculate Profit
                  <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>

            {/* PROFIT-4 - Result Card */}
            <div className="profit-card-4">
              <div className="profit-card-title-4">
                <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
                Profit Analysis
              </div>
              <p className="profit-card-subtitle-4">Real-time breakdown of your investment and returns</p>

              <div className="result-display-4">
                <div className="result-label-4">Net Profit Margin</div>
                <div className="result-value-4">
                  <span>{formatDecimal(marginPercent)}</span>
                  <span className={health.unitClass}>%</span>
                </div>
                <div className="result-formula-4">
                  Net Profit: {formatCurrency(netProfitVal)} | Total Revenue: {formatCurrency(totalRevenueVal)}
                </div>
              </div>

              <div className="breakdown-grid-4">
                <div className="breakdown-item-4">
                  <div className="breakdown-label-4">Total Investment</div>
                  <div className="breakdown-value-4">{formatCurrency(totalInvestmentVal)}</div>
                </div>
                <div className="breakdown-item-4">
                  <div className="breakdown-label-4">Cost Per Unit</div>
                  <div className="breakdown-value-4">{formatCurrency(costPerUnitVal)}</div>
                </div>
                <div className="breakdown-item-4">
                  <div className="breakdown-label-4">Total Revenue</div>
                  <div className="breakdown-value-4">{formatCurrency(totalRevenueVal)}</div>
                </div>
                <div className="breakdown-item-4">
                  <div className="breakdown-label-4">Markup</div>
                  <div className="breakdown-value-4">{formatDecimal(markupPercent)}%</div>
                </div>
              </div>

              <div className={`margin-health-4 ${health.state}`}>
                <div className="health-icon-4">
                  {health.icon}
                </div>
                <div>
                  <div>{health.title}</div>
                  <div style={{ fontSize: '12px', fontWeight: 400, marginTop: '2px', opacity: 0.8 }}>
                    {health.desc}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ===== PROFIT-5 - Info Section ===== */}
        <section className="info-section-5p">
          <div className="info-wrapper-5p">
            <h2 className="info-title-5p">Maximize Your Import Profits</h2>
            <p className="info-subtitle-5p">Pro tips for resellers and wholesale importers</p>

            <div className="info-grid-5p">
              <div className="info-card-5p">
                <div className="info-card-icon-5p">
                  <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                </div>
                <h3>Consolidate Shipments</h3>
                <p>Combine multiple supplier orders into one container. This drastically reduces your per-unit shipping cost and improves overall margin.</p>
              </div>

              <div className="info-card-5p">
                <div className="info-card-icon-5p">
                  <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                </div>
                <h3>Understand HS Codes</h3>
                <p>Correct Harmonized System (HS) classification can legally reduce your customs duty burden. Always verify codes before shipping.</p>
              </div>

              <div className="info-card-5p">
                <div className="info-card-icon-5p">
                  <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <h3>Factor in Hidden Costs</h3>
                <p>Always include port handling, local transport, and potential storage fees in your &quot;Total Shipping Cost&quot; to avoid margin surprises.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
