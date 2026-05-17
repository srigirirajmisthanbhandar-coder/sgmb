import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 640, 768, 1024, 1280, 1600],
    imageSizes: [64, 96, 128, 200, 256, 384],
    minimumCacheTTL: 31536000,
  },
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
  async redirects() {
    return [
      {
        source: "/govardhan/heritage",
        destination: "/heritage",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
