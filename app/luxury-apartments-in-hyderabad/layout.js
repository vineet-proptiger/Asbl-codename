import './camelot.css'
import { Open_Sans, Montserrat, Cormorant_Garamond } from 'next/font/google'
import { CITY_DISPLAY } from '../../lib/camelot/lib/config'
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

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const nephilm = localFont({
  src: '../../public/camelot/fonts/Nephilm.otf',
  variable: '--font-nephilm',
  display: 'swap',
})

export const metadata = {
  title: 'ASBL Legacy | 3 & 4 BHK Luxury Apartments in RTC X Roads, Hyderabad',
  description: "ASBL Legacy is all set to be the most experiential and premium residential project in the prime corridor of RTC X Roads, Hyderabad. Crafted with a low-density concept in mind.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-575H8R87" />
      {/* <head>
        <Script
          id="json-ld-article"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.asbllegacyrtcxroad.in/"
              },
              "headline": "ASBL Legacy | 3 & 4 BHK Luxury Apartments in RTC X Roads, Hyderabad",
              "description": "ASBL Legacy is all set to be the most experiential and premium residential project in the prime corridor of RTC X Roads, Hyderabad.",
              "image": "https://www.asbllegacyrtcxroad.in/_next/image?url=%2Fimages%2Fhero%2Fbanner1.webp&w=1200&q=75",
              "author": {
                "@type": "Organization",
                "name": "Proptiger Marketing Services Pvt Ltd",
                "url": "https://www.asbllegacyrtcxroad.in/"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Proptiger",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.proptiger.com/"
                }
              },
              "datePublished": "2026-06-10"
            })
          }}
        />
      </head> */}
      <body className={`${openSans.variable} ${montserrat.variable} ${cormorant.variable} ${nephilm.variable} font-sans text-dark antialiased`}>
        <Script id="gtag-init" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ 'city': '${CITY_DISPLAY}' });
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`}
        </Script>
        {children}
      </body>
    </html>
  )
}
