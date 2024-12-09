/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
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
    
    
};
export default nextConfig;

