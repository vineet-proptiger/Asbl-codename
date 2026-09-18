import React from 'react'

const Highlights = ({ setIsOpen }) => {
  return (
    <section id="highlights" className="about_us pt-5 sm:pt-6 md:pt-8 pb-3 md:pb-6 relative bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/new-launch-hyderabad/highlights/highlight.webp')" }}>
      {/* Dark overlay for better contrast if needed */}
      <div className="container mx-auto px-4 md:px-8 max-w-[1200px] relative z-10 pt-0 pb-2">
        <h2 className="text-[22px] sm:text-[28px] md:text-[36px] font-semibold leading-tight uppercase tracking-wider text-white text-center" data-aos="fade-up" data-aos-duration="1000" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif", marginBottom: '10px' }}>
          PROJECT HIGHLIGHTS: ASBL CODENAME
        </h2>
        {/* Decorative Line */}
        <div className="flex items-center justify-center mt-3 mb-8" data-aos="fade-up" data-aos-duration="1000">
          <div className="w-16 h-[1px] bg-white/70"></div>
          <div className="w-2 h-2 rounded-full bg-white mx-3"></div>
          <div className="w-16 h-[1px] bg-white/70"></div>
        </div>
        
        {/* 6 Highlights Cards Matching User Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                
          {/* Highlight 1: High-Rise Towers */}
          <div className="highlight-card gradient-blue p-6 sm:p-7 rounded-2xl bg-[#eef5fc] border-none shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col items-center text-center" style={{ animation: '0.6s ease-out 0s 1 normal both running fadeInScale' }}>
              <div className="icon-float mb-4 relative flex items-center justify-center" style={{ animation: 'float 3s ease-in-out infinite' }}>
                  <span className="text-[38px] sm:text-[44px] leading-none select-none" role="img" aria-label="High-Rise Towers">🏙️</span>
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-bold mb-2 text-gray-900" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }}>High-Rise Towers</h3>
              <p className="text-gray-600 text-[13.5px] sm:text-[14.5px] leading-[1.65]">
                  Premium high-rise towers in Central Hyderabad designed for modern and elegant urban living.
              </p>
          </div>

          {/* Highlight 2: Prime Location */}
          <div className="highlight-card gradient-green p-6 sm:p-7 rounded-2xl bg-[#eefcee] border-none shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col items-center text-center" style={{ animation: '0.6s ease-out 0.1s 1 normal both running fadeInScale' }}>
              <div className="icon-float mb-4 relative flex items-center justify-center" style={{ animation: 'float 3s ease-in-out infinite', animationDelay: '0.2s' }}>
                  <span className="text-[38px] sm:text-[44px] leading-none select-none" role="img" aria-label="Prime Location">📍</span>
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-bold mb-2 text-gray-900" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }}>Prime Location</h3>
              <p className="text-gray-600 text-[13.5px] sm:text-[14.5px] leading-[1.65]">
                  Prime location at Nallakunta near RTC X Roads offering unparalleled convenience and access.
              </p>
          </div>

          {/* Highlight 3: World-Class Lifestyle */}
          <div className="highlight-card gradient-purple p-6 sm:p-7 rounded-2xl bg-[#f5eefc] border-none shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col items-center text-center" style={{ animation: '0.6s ease-out 0.2s 1 normal both running fadeInScale' }}>
              <div className="icon-float mb-4 relative flex items-center justify-center" style={{ animation: 'float 3s ease-in-out infinite', animationDelay: '0.4s' }}>
                  <span className="text-[38px] sm:text-[44px] leading-none select-none" role="img" aria-label="World-Class Lifestyle">💎</span>
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-bold mb-2 text-gray-900" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }}>World-Class Lifestyle</h3>
              <p className="text-gray-600 text-[13.5px] sm:text-[14.5px] leading-[1.65]">
                  Experience a world-class lifestyle with exclusive clubhouse and recreational amenities.
              </p>
          </div>

          {/* Highlight 4: Excellent Connectivity */}
          <div className="highlight-card gradient-amber p-6 sm:p-7 rounded-2xl bg-[#fdf8ee] border-none shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col items-center text-center" style={{ animation: '0.6s ease-out 0s 1 normal both running fadeInScale' }}>
              <div className="icon-float mb-4 relative flex items-center justify-center" style={{ animation: 'float 3s ease-in-out infinite', animationDelay: '0.6s' }}>
                  <span className="text-[38px] sm:text-[44px] leading-none select-none" role="img" aria-label="Excellent Connectivity">🛣️</span>
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-bold mb-2 text-gray-900" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }}>Excellent Connectivity</h3>
              <p className="text-gray-600 text-[13.5px] sm:text-[14.5px] leading-[1.65]">
                  Excellent connectivity to key city hubs ensuring you are always close to what matters.
              </p>
          </div>

          {/* Highlight 5: Gated Community */}
          <div className="highlight-card gradient-red p-6 sm:p-7 rounded-2xl bg-[#fceedf] border-none shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col items-center text-center" style={{ animation: '0.6s ease-out 0.1s 1 normal both running fadeInScale' }}>
              <div className="icon-float mb-4 relative flex items-center justify-center" style={{ animation: 'float 3s ease-in-out infinite', animationDelay: '0.8s' }}>
                  <span className="text-[38px] sm:text-[44px] leading-none select-none" role="img" aria-label="Gated Community">🏡</span>
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-bold mb-2 text-gray-900" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }}>Gated Community</h3>
              <p className="text-gray-600 text-[13.5px] sm:text-[14.5px] leading-[1.65]">
                  A modern gated community tailored for a secure, peaceful and vibrant urban living experience.
              </p>
          </div>

          {/* Highlight 6: Premium Construction */}
          <div className="highlight-card gradient-indigo p-6 sm:p-7 rounded-2xl bg-[#eef0fc] border-none shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col items-center text-center" style={{ animation: '0.6s ease-out 0.2s 1 normal both running fadeInScale' }}>
              <div className="icon-float mb-4 relative flex items-center justify-center" style={{ animation: 'float 3s ease-in-out infinite', animationDelay: '1s' }}>
                  <span className="text-[38px] sm:text-[44px] leading-none select-none" role="img" aria-label="Premium Construction">🏗️</span>
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-bold mb-2 text-gray-900" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }}>Premium Construction</h3>
              <p className="text-gray-600 text-[13.5px] sm:text-[14.5px] leading-[1.65]">
                  Superior premium construction with elegant design focusing on every minute detail.
              </p>
          </div>

        </div>
      </div>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  )
}

export default Highlights
