import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: config => {
    // ::::::::::::::[ SVG EXTENSIONS ]::::::::::::::
    config.module.rules.push({
      test: /(?<!\-image)\.svg$/, // LOOK BEHIND NOT SUPPORTED IN ALL BROWSERS
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
