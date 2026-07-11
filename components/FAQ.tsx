'use client'

/* START: FAQ */
import { useState } from 'react'

const faqs = [
  {
    question: '1. How do I get started with Yiwa Logistics?',
    answer:
      'Simply share your product requirements or request a free quote, and our team will guide you through the entire process.',
  },
  {
    question: '2. Do I need a membership to use your services?',
    answer:
      'No. Our services are available to everyone. Membership offers extra benefits like guidance, resources, and priority support.',
  },
  {
    question: '3. What shipping methods do you offer?',
    answer:
      'We provide Air Freight, Sea Freight, Express Shipping, and Door-to-Door Delivery based on your needs.',
  },
  {
    question: '4. How long does shipping from China to Pakistan take?',
    answer:
      'Air Freight typically takes 5–10 days, while Sea Freight usually takes 20–35 days, depending on customs and destination.',
  },
  {
    question: '5. Can you help verify suppliers?',
    answer:
      'Yes. We help connect you with trusted suppliers and offer supplier verification services to reduce sourcing risks.',
  },
  {
    question: '6. Do you provide customs clearance?',
    answer:
      'Yes. We assist with customs documentation and clearance to ensure a smooth import process into Pakistan.',
    defaultOpen: true,
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(
    faqs.findIndex((f) => f.defaultOpen)
  )

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index))
  }

  return (
    <section className="faqs1">
      <div className="faqs1-container">
        {/* Left side */}
        <div className="faqs1-left">
          <div className="faqs1-label">FAQ</div>
          <h2>Frequently Asked Questions</h2>
          <p className="faqs1-description">
            Everything you need to know about sourcing products, shipping from China, and importing
            into Pakistan. If you can&apos;t find your answer here, our team is always ready to help.
          </p>
          <a href="#" className="faqs1-cta">
            Still have questions?
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

        {/* FAQS2 - Accordion Container */}
        <div className="faqs2-container">
          <div className="faqs2-list">
            {faqs.map((faq, index) => {
              const isActive = openIndex === index
              return (
                <div key={index} className={`faqs3${isActive ? ' active' : ''}`}>
                  <button
                    className="faqs4"
                    aria-expanded={isActive}
                    onClick={() => toggle(index)}
                  >
                    <h3>{faq.question}</h3>
                    <div className="faqs4-icon">
                      <svg viewBox="0 0 24 24">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </button>
                  <div className="faqs5">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
/* END: FAQ */
