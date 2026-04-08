'use client'
import React from 'react'
import Link from 'next/link'

const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'

const Footer = () => (
  <footer style={{ background: 'var(--color-dark)', color: '#fff' }}>

    <div style={{ maxWidth: '860px', margin: '0 auto', padding: '56px 24px 32px', textAlign: 'center' }}>
      <h2 style={{ fontSize: '24px', fontWeight: '800', fontFamily: F_JOST, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }} data-aos="fade-in">
        Max Estate 361
      </h2>
      <p style={{ fontSize: '13px', color: 'var(--color-gold)', fontFamily: F_JOST, fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '12px' }}>
        Forest Living Residences — Sector 36A, Dwarka Expressway, Gurugram
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
        <span style={{ width: '36px', height: '2.5px', background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-light))', borderRadius: '2px' }} />
      </div>
      <p style={{ fontSize: '15px', color: '#bbb', fontFamily: F_SANS, lineHeight: 1.8, marginBottom: '32px', textAlign: 'justify' }}
        data-aos="fade-in" data-aos-delay="100">
        Max Estate 361 is a landmark luxury residential development by Max Estates, located on Dwarka Expressway, Sector 36A, Gurugram. Offering 3 BHK, 4 BHK and double-storey penthouses amidst 2,50,000+ sq ft of lush greens and 1,000+ native plants, this IGBC Platinum Pre-certified project redefines forest living. With 2,00,000+ sq ft of world-class amenities including an indoor pool, sports courts, wellness centre and integrated senior living by Antara — Max Estate 361 is designed for discerning homebuyers seeking a life well-lived.
      </p>
      <div style={{ borderTop: '1px solid #333', marginBottom: '24px' }} />
      <p style={{ fontSize: '14px', color: '#aaa', fontFamily: F_SANS, marginBottom: '8px' }} data-aos="fade-in" data-aos-delay="200">
        Sector 36A, Dwarka Expressway, Gurugram, Haryana — 122004
      </p>
      <p style={{ fontSize: '13px', color: '#777', fontFamily: F_SANS, marginBottom: '24px' }}>
        HARERA Reg. No.: RC/REP/HARERA/GGM/1012/744/2025/115
      </p>
    </div>

    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 py-4 px-6 border-t border-[#222] text-center sm:text-left max-w-[1200px] mx-auto">
      <p style={{ fontSize: '13px', color: '#888', fontFamily: F_SANS }}>
        &copy; 2026 Max Estate 361 by Max Estates. All rights reserved.
      </p>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        <Link href="/privacy-policy" style={{ fontSize: '13px', color: 'var(--color-gold)', fontFamily: F_SANS }}>
          Disclaimer &amp; Privacy Policy
        </Link>
      </div>
    </div>

    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '12px 24px 20px', textAlign: 'center' }}>
      <p style={{ fontSize: '10.5px', color: '#555', fontFamily: F_SANS, lineHeight: 1.7, textAlign: 'justify' }}>
        <strong style={{ color: '#777' }}>Disclaimer:</strong> This is not the official website of the developer. The information depicted herein, including master plans, floor plans, furniture layout, fittings, illustrations, specifications, designs, dimensions, rendered views, colours, amenities and facilities etc., are subject to change without notification as may be required by the relevant authorities or the Developer&apos;s architect. This advertisement is an invitation to offer and shall not be construed as an offer or contract. * Prices subject to change without notice. All taxes extra as applicable.
      </p>
    </div>
  </footer>
)

export default Footer
