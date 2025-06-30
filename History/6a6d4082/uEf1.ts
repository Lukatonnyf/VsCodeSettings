import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignora erros de ESLint no build
  },
};

export default nextConfig;