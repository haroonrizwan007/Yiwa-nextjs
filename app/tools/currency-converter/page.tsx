'use client'

import { useState, useEffect, useRef } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// ===== RATES (Base: USD) =====
const RATES_TO_USD: Record<string, number> = {
  USD: 1,
  CNY: 1 / 7.24,
  PKR: 1 / 278.50,
}

const SYMBOLS: Record<string, string> = { USD: '$', CNY: '¥', PKR: '₨' }

const QUICK_PAIRS = [
  { from: 'USD', to: 'PKR', rate: '278.50', change: '+0.35%', up: true },
  { from: 'CNY', to: 'PKR', rate: '38.42',  change: '-0.12%', up: false },
  { from: 'USD', to: 'CNY', rate: '7.24',   change: '+0.08%', up: true },
  { from: 'PKR', to: 'USD', rate: '0.00359',change: '-0.35%', up: false },
  { from: 'PKR', to: 'CNY', rate: '0.0260', change: '+0.12%', up: true },
  { from: 'CNY', to: 'USD', rate: '0.138',  change: '-0.08%', up: false },
]

function getRate(from: string, to: string) {
  return RATES_TO_USD[from] / RATES_TO_USD[to]
}

function formatNumber(num: number): string {
  if (num === 0) return '0.00'
  if (num < 0.01) return num.toFixed(5)
  if (num < 1)   return num.toFixed(4)
  return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

function formatRate(rate: number): string {
  if (rate < 0.01) return rate.toFixed(5)
  if (rate < 1)   return rate.toFixed(4)
  return rate.toFixed(2)
}

export default function CurrencyConverterPage() {
  const [amount, setAmount]           = useState('1000')
  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency]   = useState('PKR')
  const [updatedTime, setUpdatedTime] = useState('')
  const converterRef = useRef<HTMLElement>(null)

  // Live clock
  useEffect(() => {
    const tick = () => {
      const now = new Date()
      const t = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
      setUpdatedTime(`Updated ${t}`)
    }
    tick()
    const id = setInterval(tick, 60000)
    return () => clearInterval(id)
  }, [])

  const amt  = parseFloat(amount) || 0
  const rate = fromCurrency === toCurrency ? 1 : getRate(fromCurrency, toCurrency)
  const result = amt * rate

  const handleSwap = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }

  const handleQuickPair = (from: string, to: string) => {
    setFromCurrency(from)
    setToCurrency(to)
    converterRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <Navbar />

      <main>
        {/* ===== CONV-1 - Header ===== */}
        <section className="conv-header-1">
          <div className="conv-header-label-1">CURRENCY CONVERTER</div>
          <h2>Convert CNY, USD &amp; PKR Instantly</h2>
          <p>Real-time exchange rates for China, USA, and Pakistan. Perfect for importers calculating landed costs.</p>
        </section>

        {/* ===== CONV-2 - Converter ===== */}
        <section className="conv-container-2" ref={converterRef}>
          <div className="conv-wrapper-2">

            {/* CONV-3 - Main Converter Card */}
            <div className="conv-card-3">
              <div className="conv-card-title-3">
                <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
                Live Currency Converter
              </div>
              <p className="conv-card-subtitle-3">Enter amount and select currencies to convert</p>

              {/* Amount Input */}
              <div className="amount-group-3">
                <label className="amount-label-3" htmlFor="amount">Amount</label>
                <div className="amount-input-wrap-3">
                  <div className="currency-badge-3">
                    <span className="currency-flag-3">{SYMBOLS[fromCurrency]}</span>
                    <span>{fromCurrency}</span>
                  </div>
                  <input
                    type="number" id="amount" placeholder="0.00" min="0" step="0.01"
                    value={amount} onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
              </div>

              {/* Currency Selector Row */}
              <div className="currency-row-3">
                <div className="currency-select-wrap-3">
                  <label htmlFor="fromCurrency">From</label>
                  <span className="select-flag-3">{SYMBOLS[fromCurrency]}</span>
                  <select
                    className="currency-select-3" id="fromCurrency"
                    value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}
                  >
                    <option value="USD">USD - US Dollar</option>
                    <option value="CNY">CNY - Chinese Yuan</option>
                    <option value="PKR">PKR - Pakistani Rupee</option>
                  </select>
                </div>

                <button className="swap-btn-3" aria-label="Swap currencies" onClick={handleSwap}>
                  <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="17 1 21 5 17 9" />
                    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                    <polyline points="7 23 3 19 7 15" />
                    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
                  </svg>
                </button>

                <div className="currency-select-wrap-3">
                  <label htmlFor="toCurrency">To</label>
                  <span className="select-flag-3">{SYMBOLS[toCurrency]}</span>
                  <select
                    className="currency-select-3" id="toCurrency"
                    value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}
                  >
                    <option value="USD">USD - US Dollar</option>
                    <option value="CNY">CNY - Chinese Yuan</option>
                    <option value="PKR">PKR - Pakistani Rupee</option>
                  </select>
                </div>
              </div>

              {/* Result Display */}
              <div className="result-display-3">
                <div className="result-label-3">Converted Amount</div>
                <div className="result-value-3">
                  <span>{formatNumber(result)}</span>
                  <span className="result-currency-3">{toCurrency}</span>
                </div>
                <div className="result-rate-3">
                  <span>1 {fromCurrency} = {formatRate(rate)} {toCurrency}</span>
                  <span className="rate-updated-3">
                    <span className="live-dot-3"></span>
                    <span>{updatedTime || 'Live rates'}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* CONV-4 - Quick Pairs Card */}
            <div className="conv-card-4">
              <div className="conv-card-title-4">
                <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
                Popular Exchange Rates
              </div>
              <p className="conv-card-subtitle-4">Most used pairs for Pakistan-China-USA trade</p>

              <div className="quick-pairs-4">
                <div className="quick-pairs-title-4">Today&apos;s Rates</div>

                {QUICK_PAIRS.map((pair) => (
                  <div
                    key={`${pair.from}-${pair.to}`}
                    className="pair-card-4"
                    onClick={() => handleQuickPair(pair.from, pair.to)}
                  >
                    <div className="pair-info-4">
                      <div className="pair-flags-4">
                        <span>{SYMBOLS[pair.from]}</span>
                        <span>{SYMBOLS[pair.to]}</span>
                      </div>
                      <div className="pair-codes-4">{pair.from} → {pair.to}</div>
                    </div>
                    <div className="pair-rate-4">
                      <div className="pair-rate-value-4">{pair.rate}</div>
                      <div className={`pair-rate-change-4 ${pair.up ? 'up' : 'down'}`}>
                        <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                          {pair.up
                            ? <polyline points="18 15 12 9 6 15" />
                            : <polyline points="6 9 12 15 18 9" />}
                        </svg>
                        {pair.change}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ===== CONV-5 - Info Section ===== */}
        <section className="info-section-5">
          <div className="info-wrapper-5">
            <h2 className="info-title-5">How We Calculate Exchange Rates</h2>
            <p className="info-subtitle-5">Transparent rates for importers and traders</p>

            <div className="info-grid-5">
              <div className="info-card-5">
                <div className="info-card-icon-5">
                  <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <h3>Mid-Market Rates</h3>
                <p>We use mid-market exchange rates — the real rate banks use when trading among themselves. No hidden markups on the displayed rate.</p>
              </div>

              <div className="info-card-5">
                <div className="info-card-icon-5">
                  <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <h3>Trade-Focused Pairs</h3>
                <p>Specialized for Pakistan-China-USA trade corridor. Whether you&apos;re sourcing from Yiwu or shipping to Lahore, we cover your key currency pairs.</p>
              </div>

              <div className="info-card-5">
                <div className="info-card-icon-5">
                  <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <h3>Updated Hourly</h3>
                <p>Rates refresh every hour during market hours. For actual transactions, final rates are locked at the moment of payment confirmation.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
