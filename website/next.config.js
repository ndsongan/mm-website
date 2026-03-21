/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/mm-website',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/mm-website',
  },
}

module.exports = nextConfig
