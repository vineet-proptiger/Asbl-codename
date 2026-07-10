const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'components/camelot/components/Hero.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Find the index of the start of the dark overlay section
const targetIndex = content.indexOf('{/* ── Dark overlay for text legibility ── */}');

if (targetIndex !== -1) {
  // Keep everything before the target
  const prefix = content.substring(0, targetIndex);
  
  // The correct suffix to append
  const suffix = `{/* ── Dark overlay for text legibility ── */}
      <div className="hero-overlay" />

      {/* ── Content overlay ── */}
      <div className="hero-content">
        <>
            {/* Main Heading */}
            <h1 className="hero-title" data-aos="zoom-in-up" data-aos-delay="0">
             ASBL RTC Crossroad
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle" data-aos="fade-right" data-aos-delay="100">
              <span style={{ fontSize: '0.85em', fontWeight: 500, textTransform: 'none' }}>New Launch @ RTC X Cross Road</span>
            </p>
            {/* Bullet Points */}
            <div className="hero-bullets" style={{ marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                'Iconic high-rise skyline living',
                'Prime central city address',
                'Smart layouts with premium finish',
                'Sky-High Luxury Residences',
                'Live at the Heart of Hyderabad'
              ].map((text, i) => (
                <div key={i} className="hero-bullet-item" data-aos="fade-left" data-aos-delay={(i * 200) + 300} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand, #C9A96E)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, backgroundColor: '#fff', borderRadius: '50%', padding: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="hero-bullet-text" style={{ color: '#fff', fontFamily: 'var(--font-sans), Open Sans, sans-serif', fontSize: 'clamp(13px, 1.5vw, 18px)', fontWeight: '500', letterSpacing: '0.02em', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Restored Subtitle */}
            <p className="hero-price-line" data-aos="fade-up" data-aos-delay="1300" style={{ marginBottom: '0px' }}>
              3 &amp; 4 BHK Luxury Apartments Starts
            </p>

            {/* CTA Row */}
            <div className="hero-cta-row" style={{ marginTop: '16px' }}>

              {/* Button 1 — Static Price Badge */}
              <div data-aos="flip-up" data-aos-delay="1400">
                <div
                  className="btn-gold-outline hero-btn-one"
                  style={{ fontSize: '14px', padding: '11px 22px', pointerEvents: 'none', fontWeight: '700', textTransform: 'none' }}
                >
                  Price starts <span className="hero-price-amt" style={{ fontSize: '15px', marginLeft: '6px' }}>₹ 1.8 Cr*</span>
                </div>
              </div>

          {/* Button 2 — Popup Trigger (global btn-brand) */}
          <div data-aos="flip-up" data-aos-delay="1500">
            <button
              onClick={() => setIsOpen(true)}
              className="btn-brand"
              style={{ fontSize: '12px', padding: '11px 22px' }}
            >
              {/* Calendar icon */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              Get Details
            </button>
          </div>

        </div>
        </>
      </div>

    </section>
  )
}

export default Hero
`;

  fs.writeFileSync(filePath, prefix + suffix);
  console.log('Fixed successfully!');
} else {
  console.log('Could not find the target string in the file.');
}
