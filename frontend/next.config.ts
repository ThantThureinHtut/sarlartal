import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
  images: {
    remotePatterns: [new URL('https://placehold.co/**') , new URL(`http://localhost:3001/**`)],

  },
  env: {
    FRONTEND_URL: "http://localhost:3000" ,  // your Next.js URL,
    API_URL: "http://localhost:3001"    // your Express URL
  }
};

export default nextConfig;
