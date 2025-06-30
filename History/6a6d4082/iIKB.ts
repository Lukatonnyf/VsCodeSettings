import type { NextConfig } from "next";


export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignora erros de ESLint no build
  },
};

module.exports = nextConfig;