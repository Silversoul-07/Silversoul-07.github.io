import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    output: 'export',
    // basePath: "/",
    images: {
      unoptimized: true,
    },
  
};

export default nextConfig;
