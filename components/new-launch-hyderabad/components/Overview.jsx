'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { overviewImage } from '../../../lib/new-launch-hyderabad/images'

const Overview = ({ setIsOpen }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
  <section
    id="overview"
    className="about_us about-us-section"
  >
    <style jsx>{`
      .about-us-section {
        box-sizing: border-box;
        padding: 70px 0px;
        position: relative;
        background: #F8F9FA;
        overflow: hidden;
      }
      .inner-section {
        position: relative;
        z-index: 1;
        padding-right: 30px;
      }
      .image_caption_wrap img {
        width: 100%;
        height: auto;
        border-radius: 10px;
      }
      @media (max-width: 991px) {
        .inner-section {
          padding-right: 0;
          margin-bottom: 40px;
        }
      }
    `}</style>

    <div className="container mx-auto px-4 sm:px-8 max-w-[1300px] relative z-10">
      
      {/* Section Header - Spanning across top */}
      <div className="mb-6 sm:mb-8" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="text-[22px] sm:text-[28px] md:text-[36px] font-semibold leading-tight uppercase tracking-wider text-gray-900" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif", marginBottom: '6px' }}>ASBL RTC X Roads</h2>
        {/* Decorative Line */}
        <div className="flex items-center justify-start mt-1 mb-3">
          <div className="w-16 h-[1px] bg-[#004B87]"></div>
          <div className="w-2 h-2 rounded-full bg-[#004B87] mx-3"></div>
          <div className="w-16 h-[1px] bg-[#004B87]"></div>
        </div>
        <h3 className="text-[16px] sm:text-[18px] md:text-[22px] font-medium tracking-wide text-gray-600" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }}>Premium 3 & 4 BHK Luxury Apartments in RTC X Roads, Hyderabad</h3>
      </div>

      <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8">
        
        {/* Left Side: Green Box (Paragraph + 4 Info Boxes) */}
        <div className="w-full lg:w-7/12 flex flex-col" data-aos="fade-up" data-aos-duration="1000">
          <div 
            className="relative p-6 sm:p-8 rounded-2xl shadow-[0_12px_36px_rgba(11, 30, 54,0.18)] overflow-hidden flex-1 flex flex-col justify-between" 
            style={{ background: '#0B1E36' }}
          >
            <div>
              <p style={{ fontSize: '15.5px', fontFamily: '"Poppins", sans-serif', color: '#E5EDDC', textAlign: 'justify', lineHeight: '1.85', margin: 0 }}>
                
                <span 
                  style={{ 
                    float: 'left', 
                    fontSize: '3.6rem', 
                    lineHeight: '0.8', 
                    fontWeight: '800', 
                    color: '#C5A059', 
                    marginRight: '12px', 
                    marginTop: '4px',
                    fontFamily: "var(--font-jost), Montserrat, sans-serif" 
                  }}
                >
                  A
                </span>
                <span style={{ fontWeight: '700', color: '#FFFFFF' }}>SBL Legacy Codename RTC X Roads</span> is a premium residential development coming up at RTC Cross Road, Hyderabad. This luxury address comprises 3 stunning high-rise towers, featuring lavish 3 BHK & 4 BHK Vaastu-compliant residences with roomy balconies, offering glimpses of Hussain Sagar and the vistas of Hyderabad’s cityscape. And offerings such as a private foyer and an elevator per residence take care of your comfort and privacy. This enclave introduces resort-style living with amenities spanning over 86,000 sq. ft., including a 0.75-acre central park, clubhouse, gymnasium, swimming pool, jogging track, yoga zone, indoor games area, multipurpose court, amphitheatre, etc.
                {!isExpanded ? '... ' : ' '}
                {isExpanded && (
                  <span>
                    {" "}Spread across 8 acres of prime land with G+50 floors, this prestigious landmark offers seamless connectivity to Secunderabad, Banjara Hills, major IT hubs, reputed educational institutes, super-speciality hospitals, and premier entertainment destinations, making it the most coveted address in central Hyderabad.
                  </span>
                )}

                <button 
                  onClick={() => setIsExpanded(!isExpanded)}
                  type="button"
                  className="text-[#C5A059] hover:text-[#E0BA6A] font-bold inline-flex items-center gap-1 transition-colors cursor-pointer ml-1 select-none focus:outline-none"
                  style={{ fontSize: '15px' }}
                >
                  <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </p>
            </div>

            {/* Info Boxes inside the background container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 sm:mt-8 pt-6 border-t border-[#C5A059]/20">
              
              {/* Box 1: Land Parcel */}
              <div className="flex items-center gap-4 p-4 sm:p-5 bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 sm:w-9 sm:h-9 text-[#004B87]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18" />
                    <path d="M9 21V9" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }} className="text-[20px] sm:text-[23px] font-bold text-[#004B87] leading-tight uppercase">8 Acres</span>
                  <span style={{ fontFamily: "var(--font-sans), Open Sans, sans-serif" }} className="text-[13px] sm:text-[14px] text-gray-500 font-bold leading-normal mt-0.5 uppercase tracking-wide">LAND PARCEL</span>
                </div>
              </div>

              {/* Box 2: Floors */}
              <div className="flex items-center gap-4 p-4 sm:p-5 bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 sm:w-9 sm:h-9 text-[#004B87]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 21V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16" />
                    <path d="M9 8h2" />
                    <path d="M13 8h2" />
                    <path d="M9 12h2" />
                    <path d="M13 12h2" />
                    <path d="M10 21v-4a2 2 0 0 1 4 0v4" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }} className="text-[20px] sm:text-[23px] font-bold text-[#004B87] leading-tight uppercase">G+50 Floors</span>
                  <span style={{ fontFamily: "var(--font-sans), Open Sans, sans-serif" }} className="text-[13px] sm:text-[14px] text-gray-500 font-bold leading-normal mt-0.5 uppercase tracking-wide">FLOORS</span>
                </div>
              </div>

              </div>
          </div>
        </div>

        {/* Right Side: Image without crop */}
        <div className="w-full lg:w-5/12 flex flex-col justify-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
          <div className="image_caption_wrap relative overflow-hidden rounded-2xl shadow-lg border border-[#004B87]/20 bg-white w-full aspect-square flex items-center justify-center">
            <Image
              src={overviewImage}
              alt="ASBL RTC X Road - Tower Elevation"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-contain rounded-2xl transition-transform duration-700 hover:scale-105"
              priority={true}
            />
          </div>
        </div>

      </div>

    </div>
  </section>
  )
}

export default Overview
