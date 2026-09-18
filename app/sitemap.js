const BASE_URL = 'https://www.asbllegacyrtcxroad.in'

export default function sitemap() {
  return [
    {
      url: `${BASE_URL}/luxury-apartments-in-hyderabad`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/luxury-apartments-in-hyderabad/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/new-launch-hyderabad`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/new-launch-hyderabad/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
