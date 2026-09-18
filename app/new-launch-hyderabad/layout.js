import './new-launch-hyderabad-theam.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Open_Sans, Montserrat, Cormorant_Garamond, Poppins } from 'next/font/google'
import { CITY_DISPLAY } from '../../lib/new-launch-hyderabad/config'
import localFont from 'next/font/local'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jost',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const nephilm = localFont({
  src: '../../public/fonts/Nephilm.otf',
  variable: '--font-nephilm',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://www.asbllegacyrtcxroad.in'),
  title: 'ASBL Legacy | New Launch @ RTC X Roads, Hyderabad',
  description: "ASBL Legacy is an iconic new launch at RTC X Roads, Hyderabad, offering premium 3 & 4 BHK luxury apartments designed for modern urban living.",
  alternates: {
    canonical: 'https://www.asbllegacyrtcxroad.in/new-launch-hyderabad',
  },
  openGraph: {
    title: 'ASBL Legacy | New Launch @ RTC X Roads, Hyderabad',
    description: "ASBL Legacy is an iconic new launch at RTC X Roads, Hyderabad, offering premium 3 & 4 BHK luxury apartments designed for modern urban living.",
    url: 'https://www.asbllegacyrtcxroad.in/new-launch-hyderabad',
    siteName: 'ASBL Legacy',
    images: [
      {
        url: '/new-launch-hyderabad/hero/banner1.webp',
        width: 1200,
        height: 630,
        alt: 'ASBL Legacy RTC X Roads Hyderabad',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ASBL Legacy | New Launch @ RTC X Roads, Hyderabad',
    description: "ASBL Legacy is an iconic new launch at RTC X Roads, Hyderabad, offering premium 3 & 4 BHK luxury apartments designed for modern urban living.",
    images: ['/new-launch-hyderabad/hero/banner1.webp'],
  },
  icons: {
    icon: '/new-launch-hyderabad/favicon/fav.webp',
  },
}

import SmoothScroll from '../../components/new-launch-hyderabad/components/SmoothScroll'

export default function Layout({ children }) {  
  return (
    <div className={`${openSans.variable} ${montserrat.variable} ${cormorant.variable} ${nephilm.variable} ${poppins.variable} font-sans text-dark antialiased`}>
      <GoogleTagManager gtmId="GTM-575H8R87" />
      <Script
        id="json-ld-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "ASBL Legacy RTC X Roads",
            "url": "https://www.asbllegacyrtcxroad.in/new-launch-hyderabad",
            "logo": "https://www.asbllegacyrtcxroad.in/new-launch-hyderabad/logo/Logo.webp",
            "image": "https://www.asbllegacyrtcxroad.in/new-launch-hyderabad/hero/banner1.webp",
            "description": "ASBL Legacy is an iconic new launch at RTC X Roads, Hyderabad, offering premium 3 & 4 BHK luxury apartments.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "RTC X Roads",
              "addressLocality": "Hyderabad",
              "addressRegion": "Telangana",
              "postalCode": "500020",
              "addressCountry": "IN"
            },
            "telephone": "+919718344024",
            "priceRange": "₹ 1.99 Crore Onwards",
            "sameAs": [
              "https://www.asbllegacyrtcxroad.in/new-launch-hyderabad"
            ]
          })
        }}
      />
      <Script id="gtag-init" strategy="beforeInteractive">
        {`window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ 'city': '${CITY_DISPLAY}' });
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`} 
      </Script>
      <SmoothScroll>
        {children}
      </SmoothScroll>
    </div>
  )
}
