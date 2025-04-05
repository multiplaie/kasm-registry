/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kasm ZeroNet',
    description: 'Kasm registry for ZeroNet',
    icon: 'https://zeronet.io/docs/logo/zeronet_logo.svg',
    listUrl: 'https://https://github.com/multiplaie/kasm-registry/',
    contactUrl: 'https://github.com/multiplaie/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
