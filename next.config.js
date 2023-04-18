/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'photobank.maximum.expert',
        port: '',
        pathname: '/photo/**',
      },
    ],
  },
};

module.exports = nextConfig;
