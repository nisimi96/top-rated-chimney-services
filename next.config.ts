import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',  // Enable static export for hosting on Hostinger
  basePath: '/top-rated-chimney-services',  // GitHub Pages base path
  images: {
    unoptimized: true,  // Required for static export
  },
  reactStrictMode: true,
  trailingSlash: true,  // Better compatibility with static hosting
};

export default nextConfig;
