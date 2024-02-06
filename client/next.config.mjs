/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    HOSTADDRESS: process.env.HOSTADDRESS,
  },
};

export default nextConfig;
