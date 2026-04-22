import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
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
