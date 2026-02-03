import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "**.brilex-dz.com",
      },
      {
        protocol: "https",
        hostname: "www.brilex-dz.com",
      },
    ],
  },
};

export default nextConfig;
