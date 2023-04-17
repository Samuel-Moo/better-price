/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['m.media-amazon.com', 'http2.mlstatic.com', 'cdn.dribbble.com'],
  },
}

module.exports = nextConfig
