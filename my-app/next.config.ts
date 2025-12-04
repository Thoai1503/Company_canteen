import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["electric-commercial.vercel.app", "www.fivebranches.edu"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/Thoai-pro-spring/upload/**",
      },
    ],
  },
};

export default nextConfig;
