/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/new-projects-in-hyderabad',
        destination: '/new-launch-hyderabad',
      },
      {
        source: '/new-projects-in-hyderabad/privacy-policy',
        destination: '/new-launch-hyderabad/privacy-policy',
      },
    ]
  },
  
  webpack: (config, { dev }) => {
    if (dev) config.cache = false
    return config
  },
}
module.exports = nextConfig
