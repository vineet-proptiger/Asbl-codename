'use client'
import { useState } from 'react'
import Image from 'next/image'
import { overviewImage } from '../../../lib/camelot/lib/images'

const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'

const EldecoIcon = ({ width = 24, height = 24, style, className }) => (
  <svg width={width} height={height} viewBox="0 0 32 32" fill="none" strokeLinecap="round" strokeLinejoin="round" style={style} className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M 4 4 L 14 4" stroke="#8c4740" strokeWidth="2.5" />
    <path d="M 4 8 L 14 8" stroke="#8c4740" strokeWidth="2.5" />
    <path d="M 4 12 L 14 12" stroke="#8c4740" strokeWidth="2.5" />
    <path d="M 4 16 L 14 16" stroke="#8c4740" strokeWidth="2.5" />
    <path d="M 4 20 L 14 20" stroke="#8c4740" strokeWidth="2.5" />
    <path d="M 4 25 Q 6.5 23 9 25 T 14 25" stroke="#1f8bca" strokeWidth="2.5" />
    <path d="M 4 29 Q 6.5 27 9 29 T 14 29" stroke="#1f8bca" strokeWidth="2.5" />
    <path d="M 17 2 A 14 14 0 0 1 17 30" stroke="#7eb546" strokeWidth="2.5" />
    <path d="M 17 6 A 10 10 0 0 1 17 26" stroke="#7eb546" strokeWidth="2.5" />
    <path d="M 17 10 A 6 6 0 0 1 17 22" stroke="#7eb546" strokeWidth="2.5" />
    <path d="M 17 14 A 2 2 0 0 1 17 18" stroke="#7eb546" strokeWidth="2.5" />
    <circle cx="15.5" cy="16" r="1.8" fill="#f8b620" />
  </svg>
)

/* Curved concave notch at each corner of the info box */
const CurvedCorners = ({ bg = '#fff' }) => {
  const corners = [
    { top: '-1px', left: '-1px', borderRight: '1px solid #D5C2A8', borderBottom: '1px solid #D5C2A8', borderBottomRightRadius: '18px' },
    { top: '-1px', right: '-1px', borderLeft: '1px solid #D5C2A8', borderBottom: '1px solid #D5C2A8', borderBottomLeftRadius: '18px' },
    { bottom: '-1px', left: '-1px', borderRight: '1px solid #D5C2A8', borderTop: '1px solid #D5C2A8', borderTopRightRadius: '18px' },
    { bottom: '-1px', right: '-1px', borderLeft: '1px solid #D5C2A8', borderTop: '1px solid #D5C2A8', borderTopLeftRadius: '18px' },
  ]

  return corners.map((c, i) => (
    <span key={i} style={{
      position: 'absolute', ...c,
      width: '22px', height: '22px',
      background: bg,
      display: 'block',
    }} />
  ))
}

const infoItems = [
  { label: 'Status',             value: 'New Launch', bgColor: '#FDF8F6' },
  { label: 'Location',           value: 'RTC X Roads', bgColor: '#FFFDF2' },
  { label: 'Configuration',      value: '3 & 4 BHK', bgColor: '#F4FAF4' },
  { label: 'Category',           value: 'Luxury High-Rise', bgColor: '#F2FAFD' },
]

const Overview = ({ setIsOpen }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <section
      id="overview"
      style={{ background: '#fff', padding: '72px 0 80px', borderBottom: '1px solid #f0ede6' }}
    >
      <div className="container mx-auto px-4 sm:px-8 max-w-[1200px]">
      
      <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-14">
        
        {/* ── Left Side: Text Content ── */}
        <div className="w-full lg:w-1/2">
          
          {/* ── Section Heading ── */}
          <div style={{ marginBottom: '40px', textAlign: 'left' }}>
            <h2 data-aos="flip-right" data-aos-delay="500" style={{
              fontFamily: F_JOST, fontWeight: '700', fontSize: '17px',
              color: '#3A2A0E', letterSpacing: '0.1em',
              textTransform: 'uppercase', margin: '0 0 10px 0',
              display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px'
            }}>
              ASBL Codename New Launch
            </h2>
            {/* <h3 style={{
              fontFamily: F_JOST, fontWeight: '600', fontSize: '16px',
              color: '#C9A96E', letterSpacing: '0.05em',
              textTransform: 'capitalize', margin: 0,
            }}>
              Project Overview
            </h3> */}
          </div>
          
          {/* Paragraphs */}
          <p data-aos="flip-down" data-aos-delay="500" style={{
            fontFamily: F_SANS, fontSize: '14.5px', color: '#4A4540',
            lineHeight: 1.9,
            marginTop: 0, marginBottom: '24px',
            textAlign: 'justify',
          }}>
            <strong>ASBL Codename</strong> is an iconic new launch at <strong>RTC X Roads, Hyderabad</strong>, offering premium 3 & 4 BHK luxury apartments designed for modern urban living. Located in the heart of the city, this high-rise development features contemporary architecture, spacious layouts, and world-class amenities, providing a perfect blend of comfort and convenience.
            Spread across a thoughtfully planned development, it offers excellent connectivity to major IT hubs, reputed schools, hospitals, and entertainment zones, making it an ideal choice for families and professionals. With its prime central location, gated community living, and modern infrastructure, ASBL is set to become a landmark residential address in Hyderabad.
          </p>

          {/* Info Box */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-offset="0"
            style={{
              position: 'relative',
              border: '1px solid #D5C2A8',
              overflow: 'hidden',
            }}
          >
            <CurvedCorners />

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-[1px]" style={{ background: '#D5C2A8' }}>
            {infoItems.map((item, i) => (
              <div key={i} className="flex flex-col justify-center" style={{
                background: item.bgColor || '#fff',
                padding: '20px 16px',
                textAlign: 'left',
              }}>
                <div data-aos="fade" data-aos-delay={600 + i * 150} data-aos-duration="800" data-aos-once="true">
                  <p style={{
                    fontFamily: F_JOST, fontSize: '10px', fontWeight: '500',
                    color: '#b5a99a', letterSpacing: '0.18em',
                    textTransform: 'uppercase', margin: '0 0 8px',
                  }}>
                    {item.label}:
                  </p>
                  <p className="whitespace-normal" style={{
                    fontFamily: F_JOST, fontSize: '12px', fontWeight: '700',
                    color: '#3A2A0E', letterSpacing: '0.05em',
                    textTransform: 'uppercase', margin: 0,
                  }}>
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
            </div>
          </div>

        </div>

        {/* ── Right Side: Image ── */}
        <div className="hidden lg:block lg:w-1/2" data-aos="fade-left">
          <div className="relative w-full flex justify-center items-center">
            <Image 
              src={overviewImage} 
              alt="ASBL Codename Overview" 
              width={1000}
              height={1200}
              className="rounded-lg shadow-lg"
              style={{ width: '75%', height: 'auto', objectFit: 'contain', margin: '0 auto' }}
            />
          </div>
        </div>

      </div>
    </div>
  </section>
  )
}

export default Overview
