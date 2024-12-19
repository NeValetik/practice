/** @type {import('next').NextConfig} */
import { NextConfig } from "next";
const nextConfig = {
  reactStrictMode: true,
  webpack(config:NextConfig) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
      
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.simpalsmedia.com',
        port: '',
        pathname: '/point.md/news/**',
      },
      {
        protocol: 'https',
        hostname: 'i.simpalsmedia.com',
        port: '',
        pathname: '/point.md/logo/**',
      },
    ],
  },
  // eslint: {
  //   dirs: ['app', 'utils','lib','components'],
  // },  
  
  
};
export default nextConfig;

