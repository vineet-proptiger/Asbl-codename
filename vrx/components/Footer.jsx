'use client'
import React from 'react'
import Link from 'next/link'


const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'

const Footer = ({ privacyPolicyLink = '/privacy-policy' }) => (
  <footer style={{ background: 'var(--color-dark)', color: '#fff' }}>

    <div style={{ maxWidth: '860px', margin: '0 auto', padding: '56px 24px 32px', textAlign: 'center' }}>
      <h2 style={{ fontSize: '24px', fontWeight: '800', fontFamily: F_JOST, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }} data-aos="fade-in">
        <svg
          width="28" height="14" viewBox="0 0 28 14" fill="none"
          style={{ display: 'inline-block', marginRight: '10px', verticalAlign: 'middle', marginBottom: '3px' }}
        >
          <path d="M2 12 Q14 2 26 12" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </svg>
        ASBL BUILDERS
      </h2>
      <p style={{ fontSize: '13px', color: 'var(--color-gold)', fontFamily: F_JOST, fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '12px' }}>
        Premium Real Estate Developer — Hyderabad
      </p>

      <p style={{ fontSize: '15px', color: '#bbb', fontFamily: F_SANS, lineHeight: 1.8, marginBottom: '32px', textAlign: 'justify' }}
        data-aos="fade-in" data-aos-delay="100">
        ASBL (Ashoka Builders India Private Limited) is a reputed real estate developer known for delivering high-quality residential projects with a strong focus on design, transparency, and timely delivery. With a vision to redefine urban living, ASBL creates thoughtfully planned homes that combine modern architecture, efficient layouts, and premium amenities. The company has earned trust in the Hyderabad real estate market by consistently delivering projects that offer both lifestyle value and long-term investment potential. ASBL developments are known for their attention to detail, customer-centric approach, and commitment to excellence.<br /><br />Project RERA NO.: Coming Soon (Subject to official approvals).
      </p>
      {/* <div style={{ borderTop: '1px solid #333', marginBottom: '24px' }} /> */}
    </div>

    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 py-4 px-6 border-t border-[#222] text-center sm:text-left max-w-[1200px] mx-auto">
      <p style={{ fontSize: '13px', color: '#888', fontFamily: F_SANS }}>
        &copy; 2026 ASBL RTC X Road. All rights reserved.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
        <Link href={privacyPolicyLink} style={{ fontSize: '13px', color: 'var(--color-gold)', fontFamily: F_SANS }}>
          Privacy Policy
        </Link>
      </div>
    </div>

    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '12px 24px 20px', textAlign: 'center' }}>
      <p style={{ fontSize: '10.5px', color: '#999', fontFamily: F_SANS, lineHeight: 1.7, textAlign: 'justify' }}>
        <strong style={{ color: '#bbb' }}>Disclaimer:</strong> This is not the official website of the developer. The information depicted herein, including master plans, floor plans, furniture layout, fittings, illustrations, specifications, designs, dimensions, rendered views, colours, amenities and facilities etc., are subject to change without notification as may be required by the relevant authorities or the Developer&apos;s architect. This advertisement is an invitation to offer and shall not be construed as an offer or contract. * Prices subject to change without notice. All taxes extra as applicable.
      </p>
    </div>
  </footer>
)

export default Footer






