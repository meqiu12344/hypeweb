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
        hostname: "www.sodaextreme.pl",
      },
      {
        protocol: "https",
        hostname: "sodaextreme.pl",
      },
      {
        protocol: "https",
        hostname: "www.drukarniaxyz.pl",
      },
      {
        protocol: "https",
        hostname: "drukarniaxyz.pl",
      },
    ],
  },
};

export default nextConfig;
