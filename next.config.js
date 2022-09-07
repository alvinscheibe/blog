/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'media.graphassets.com']
  },
  env: {
    API_ENVIRONMENT_GRAPHQL: process.env.NEXT_PUBLIC_API_ENVIRONMENT_GRAPHQL
  }
}

module.exports = nextConfig
