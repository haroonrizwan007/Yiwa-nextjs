'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const UNIT_OPTIONS = [
  { value: 'cm', label: 'CM' },
  { value: 'm',  label: 'Meters' },
  { value: 'in', label: 'Inches' },
  { value: 'ft', label: 'Feet' },
]

const TO_METERS: Record<string, number> = {
  cm: 0.01,
  m:  1,
  in: 0.0254,
  ft: 0.3048,
}

function getShipping(cbm: number): { method: string; desc: string } {
  if (cbm === 0)   return { method: 'Enter dimensions to begin',    desc: 'Fill in the fields to see your recommendation' }
  if (cbm < 1)     return { method: 'LCL (Less than Container Load)', desc: 'Small shipment — shared container, pay only for space used' }
  if (cbm < 13)    return { method: 'LCL (Less than Container Load)', desc: 'Ideal for shipments under 13 CBM — cost-effective & flexible' }
  if (cbm < 25)    return { method: 'FCL 20ft Container',             desc: 'Consider a full 20ft container (~25 CBM capacity)' }
  if (cbm < 55)    return { method: 'FCL 40ft Container',             desc: 'Full 40ft container recommended (~55 CBM capacity)' }
  return           { method: 'FCL 40ft HC or Multiple',              desc: 'Large shipment — 40ft HC or multiple containers needed' }
}

export default function CBMCalculatorPage() {
  const [unit, setUnit]       = useState('m')
  const [length, setLength]   = useState('0.5')
  const [width, setWidth]     = useState('0.4')
  const [height, setHeight]   = useState('0.3')
  const [cartons, setCartons] = useState('10')

  const factor      = TO_METERS[unit]
  const l           = parseFloat(length)  || 0
  const w           = parseFloat(width)   || 0
  const h           = parseFloat(height)  || 0
  const c           = parseInt(cartons)   || 0
  const perCartonCBM = l * factor * w * factor * h * factor
  const totalCBM    = perCartonCBM * c
  const { method, desc } = getShipping(totalCBM)

  const handleReset = () => {
    setLength('')
    setWidth('')
    setHeight('')
    setCartons('')
  }

  return (
    <>
      <Navbar />

      <main>
        {/* ===== SECTION 1 - Header ===== */}
        <section className="calc-header">
          <div className="calc-header-label">CBM CALCULATOR</div>
          <h2>Calculate Your Freight Volume</h2>
          <p>Instantly calculate cubic meters (CBM) for your sea freight shipment. Accurate, fast, and free.</p>
        </section>

        {/* ===== SECTION 2 - Calculator ===== */}
        <section className="calc-container">
          <div className="calc-wrapper">

            {/* Input Card */}
            <div className="calc-card">
              <div className="calc-card-title">
                <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
                Shipment Dimensions
              </div>
              <p className="calc-card-subtitle">Enter the dimensions of a single carton and total quantity</p>

              {/* Unit Selector */}
              <div className="unit-selector">
                {UNIT_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    className={`unit-option${unit === opt.value ? ' active' : ''}`}
                    onClick={() => setUnit(opt.value)}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              {/* Input Fields */}
              <div className="input-grid">
                <div className="input-field">
                  <label htmlFor="length">Length</label>
                  <input
                    type="number" id="length" placeholder="0" min="0" step="0.01"
                    value={length} onChange={(e) => setLength(e.target.value)}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="width">Width</label>
                  <input
                    type="number" id="width" placeholder="0" min="0" step="0.01"
                    value={width} onChange={(e) => setWidth(e.target.value)}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="height">Height</label>
                  <input
                    type="number" id="height" placeholder="0" min="0" step="0.01"
                    value={height} onChange={(e) => setHeight(e.target.value)}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="cartons">No. of Cartons</label>
                  <input
                    type="number" id="cartons" placeholder="0" min="1" step="1"
                    value={cartons} onChange={(e) => setCartons(e.target.value)}
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="calc-buttons">
                <button className="btn btn-secondary" onClick={handleReset}>
                  <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="1 4 1 10 7 10" />
                    <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
                  </svg>
                  Reset
                </button>
                <button className="btn btn-primary">
                  Calculate CBM
                  <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Result Card */}
            <div className="calc-card result-card">
              <div className="calc-card-title">
                <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
                Your Result
              </div>
              <p className="calc-card-subtitle">Total shipping volume calculated in real-time</p>

              {/* Result Display */}
              <div className="result-display">
                <div className="result-label">Total CBM</div>
                <div className="result-value">
                  <span>{totalCBM.toFixed(3)}</span>
                  <span className="result-unit">m³</span>
                </div>
                <div className="result-formula">
                  L × W × H × Cartons = {l} × {w} × {h} × {c}
                </div>
              </div>

              {/* Breakdown */}
              <div className="result-breakdown">
                <div className="breakdown-row">
                  <span className="breakdown-label">
                    <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    </svg>
                    Volume per Carton
                  </span>
                  <span className="breakdown-value">{perCartonCBM.toFixed(3)} m³</span>
                </div>
                <div className="breakdown-row">
                  <span className="breakdown-label">
                    <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    </svg>
                    Total Cartons
                  </span>
                  <span className="breakdown-value">{c.toLocaleString()}</span>
                </div>
              </div>

              {/* Shipping Method */}
              <div className="shipping-method">
                <div className="shipping-icon">
                  <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                </div>
                <div className="shipping-info">
                  <h4>{method}</h4>
                  <p>{desc}</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ===== SECTION 3 - Info ===== */}
        <section className="info-section">
          <div className="info-wrapper">
            <h2 className="info-title">Understanding CBM in Sea Freight</h2>
            <p className="info-subtitle">Everything you need to know about cubic meter calculations</p>

            <div className="info-grid">
              <div className="info-card">
                <div className="info-card-icon">
                  <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                </div>
                <h3>What is CBM?</h3>
                <p>CBM (Cubic Meter) is the standard unit for measuring freight volume. It&apos;s calculated as Length × Width × Height in meters, and determines your shipping cost.</p>
              </div>

              <div className="info-card">
                <div className="info-card-icon">
                  <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                    <line x1="7" y1="7" x2="7.01" y2="7" />
                  </svg>
                </div>
                <h3>LCL vs FCL</h3>
                <p>Shipments under 13 CBM typically use LCL (shared container). Above 13 CBM, FCL (full container) becomes more cost-effective — 20ft holds ~25 CBM, 40ft holds ~55 CBM.</p>
              </div>

              <div className="info-card">
                <div className="info-card-icon">
                  <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <h3>Chargeable Weight</h3>
                <p>Sea freight uses the &quot;weight or measure&quot; rule: 1 CBM = 1,000 kg. Your chargeable weight is whichever is higher — gross weight or volumetric weight.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
