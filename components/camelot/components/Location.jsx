'use client'
import { useState } from 'react'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'

// Using Lucide-like SVG icons inline for consistency with main project
const categories = [
  {
    label: 'Education',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 1 3-3h7z" /></svg>,
    items: [
      { name: 'Narayana Junior College', dist: '1 km' },
      { name: 'St. Ann’s High School', dist: '1.5 km' },
      { name: 'Osmania University', dist: '3 km' },
      { name: 'Little Flower Junior College', dist: '2 km' }
    ],
  },
  {
    label: 'Hospitals',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
    items: [
      { name: 'KIMS Hospital', dist: '2 km' },
      { name: 'Apollo Hospital, Hyderguda', dist: '3 km' },
      { name: 'Care Hospital, Nampally', dist: '4 km' },
      { name: 'Yashoda Hospital, Secunderabad', dist: '5 km' }
    ],
  },
  {
    label: 'Food & Shopping',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>,
    items: [
      { name: 'RTC X Roads Shopping Hub', dist: 'Nearby' },
      { name: 'City Center Mall', dist: '3 km' },
      { name: 'GVK One Mall, Banjara Hills', dist: '6 km' },
      { name: 'Abids & Koti Markets', dist: '2–3 km' }
    ],
  },
  {
    label: 'Growth Drivers',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>,
    items: [
      { name: 'Proximity to Central Business District', dist: '-' },
      { name: 'Upcoming Metro Connectivity Expansion', dist: '-' },
      { name: 'High Rental Demand Zone', dist: '-' },
      { name: 'Strong Capital Appreciation Potential', dist: '-' }
    ],
  },
  {
    label: 'Convenient Travel',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M3 12h18M3 6h18M3 18h18" /></svg>,
    items: [
      { name: 'RTC X Roads', dist: 'Direct Access' },
      { name: 'Secunderabad Railway Station', dist: '5 km' },
      { name: 'MG Bus Station', dist: '4 km' },
      { name: 'Rajiv Gandhi International Airport', dist: '30 km' }
    ],
  },
]

const Location = () => {
  const [openIndex, setOpenIndex] = useState(0)
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="location" style={{
      padding: '72px 0',
      background: '#EAE5DC', // Matched to the screenshot background
    }}>
      <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">

        {/* Section Header */}
        <div style={{ marginBottom: '40px', textAlign: 'center' }} data-aos="fade-up">
           <h2 style={{
             fontFamily: F_JOST, fontWeight: '700', fontSize: '18px',
             color: '#684C1B', letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0,
             display: 'flex', alignItems: 'center', justifyContent: 'center',
           }}>
             LOCATION ADVANTAGES: RTC X CROSS ROAD
           </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">

          {/* LEFT — Accordion Table (Camelot Styled) */}
          <div className="w-full lg:w-[45%]" data-aos="fade-right" data-aos-delay="100">
            <div style={{ border: '1px solid #D5C2A8', background: '#EAE5DC' }}>

              {/* Table Header */}
              <div style={{
                display: 'grid', gridTemplateColumns: '1.2fr 1fr',
                background: '#000000', color: '#fff',
                fontFamily: F_JOST, fontWeight: '600', fontSize: '13.5px',
                letterSpacing: '0.04em', textTransform: 'uppercase',
                borderBottom: '1px solid #D5C2A8',
              }}>
                <div style={{ padding: '10px 16px', borderRight: '1px solid #D5C2A8' }}>LANDMARK CATEGORY</div>
                <div style={{ padding: '10px 16px', textAlign: 'center' }}>TIME / DISTANCE</div>
              </div>

              {/* Accordion List */}
              <div style={{ overflow: 'hidden' }}>
                {categories.map((cat, i) => (
                  <div key={i} style={{ borderBottom: i < categories.length - 1 ? '1px solid #D5C2A8' : 'none' }}>
                    
                    {/* Accordion Trigger */}
                    <button
                      onClick={() => toggle(i)}
                      style={{
                        width: '100%', display: 'flex', justifyContent: 'space-between',
                        alignItems: 'center', padding: '12px 16px',
                        background: openIndex === i ? '#D5C2A8' : '#F4EFE6',
                        color: openIndex === i ? '#000' : '#684C1B',
                        border: 'none', cursor: 'pointer', textAlign: 'left',
                        fontFamily: F_JOST, fontSize: '14px', fontWeight: '700', textTransform: 'uppercase',
                        transition: 'all 0.2s',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        {cat.icon}
                        <span>{cat.label}</span>
                      </div>
                      <span style={{ fontSize: '18px', fontWeight: '400', lineHeight: 1 }}>
                        {openIndex === i ? '−' : '+'}
                      </span>
                    </button>

                    {/* Accordion Content (Table format) */}
                    {openIndex === i && (
                      <div style={{ background: '#EAE5DC' }}>
                        {cat.items.map((item, j) => (
                          <div key={j} style={{
                            display: 'grid', gridTemplateColumns: '1.2fr 1fr',
                            color: '#684C1B', fontFamily: F_SANS,
                            fontSize: '13px', fontWeight: '600',
                            borderTop: '1px solid rgba(213, 194, 168, 0.4)',
                          }}>
                            <div style={{ padding: '10px 16px', borderRight: '1px solid #D5C2A8', display: 'flex', alignItems: 'center' }}>
                              {item.name}
                            </div>
                            <div style={{ padding: '10px 16px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              {item.dist}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* RIGHT — Map */}
          <div className="w-full lg:flex-1" data-aos="fade-left" data-aos-delay="150" style={{ minHeight: '420px' }}>
            <div style={{
              overflow: 'hidden',
              border: '1px solid #D5C2A8',
              height: '100%', minHeight: '420px',
              position: 'relative',
              background: '#EAE5DC'
            }}>
              <iframe
                src="https://www.google.com/maps?cid=11734109689802454663&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYASAA&hl=en&gl=IN&source=embed&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '420px', display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div style={{
                position: 'absolute', bottom: '16px', left: '16px', zIndex: 10,
                background: 'var(--color-gold)', opacity: 0.9, backdropFilter: 'blur(6px)',
                borderRadius: '8px', padding: '6px 14px',
                display: 'flex', alignItems: 'center', gap: '6px',
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span style={{
                  color: '#fff', fontSize: '11px', fontFamily: F_JOST,
                  fontWeight: '700', letterSpacing: '0.04em'
                }}>
                  RTC X Cross Road, Hyderabad
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Location
