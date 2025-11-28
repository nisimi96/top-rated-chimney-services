import type { NextConfig } from 'next';

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',  // Enable static export for hosting on Hostinger
  basePath: isProduction ? '/top-rated-chimney-services' : '',  // GitHub Pages base path (production only)
  images: {
    unoptimized: true,  // Required for static export
  },
  reactStrictMode: true,
  trailingSlash: true,  // Better compatibility with static hosting
};

export default nextConfig;
