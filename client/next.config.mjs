/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

 
  images: {
    domains: ['https://ebuy.cabbageweb.com'],
  },

  env: {
    HOSTADDRESS: process.env.HOSTADDRESS,
  },
};

export default nextConfig;
