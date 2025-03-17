/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['sp-ao.shortpixel.ai','badlaavfoundation.in'],
  },
};

export default nextConfig;
