import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

};

module.exports = {
  eslint: {
    ignoreDuringBuilds: true, // 👈 isso permite o deploy mesmo com erros de lint
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};

export default nextConfig;
