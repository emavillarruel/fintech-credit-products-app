/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['http2.mlstatic.com', 'static.mercadolibre.com'],
  },
  env: {
    NEXT_PUBLIC_ENV: process.env.NODE_ENV || 'development',
  },
}

module.exports = nextConfig
