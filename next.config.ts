import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    domains: ['res.cloudinary.com', 'lh3.googleusercontent.com'],
  },
};

export default nextConfig;
