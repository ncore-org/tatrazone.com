import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: "/tatrazone.com",
  assetPrefix: "/tatrazone.com/",
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
