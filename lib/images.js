// ═══════════════════════════════════════════════════════════════
//  CENTRAL FAVICON & PWA CONFIG
// ═══════════════════════════════════════════════════════════════

const faviconBasePath = '/asbl%20favcion'

export const faviconImages = {
  manifest: '/manifest.webmanifest',
  icon: [
    { url: `${faviconBasePath}/favicon-16x16.png`, sizes: '16x16', type: 'image/png' },
    { url: `${faviconBasePath}/favicon-32x32.png`, sizes: '32x32', type: 'image/png' },
    { url: `${faviconBasePath}/favicon.ico`, type: 'image/x-icon' },
  ],
  apple: [{ url: `${faviconBasePath}/apple-touch-icon.png`, sizes: '180x180', type: 'image/png' }],
  android: [
    { src: `${faviconBasePath}/android-chrome-192x192.png`, sizes: '192x192', type: 'image/png' },
    { src: `${faviconBasePath}/android-chrome-512x512.png`, sizes: '512x512', type: 'image/png' },
  ],
}
