import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  // path redirecting 
  async rewrites() {
    return [
      {
        source: "/uploads/:path*",
        destination: "http://localhost:3001/uploads/:path*",
      },
    ];
  },
  images: {
    remotePatterns: [
      new URL("https://placehold.co/**"),
      new URL(`http://localhost:3001/**`),
    ],
  },
  env: {
    API_URL: "http://localhost:3001",
  },
};

export default nextConfig;
