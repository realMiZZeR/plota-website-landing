const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  webpack: (config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/': path.resolve(__dirname),
      '@/fonts': path.resolve(__dirname, 'assets/fonts'),
    }

    return config
  }
}

module.exports = nextConfig
