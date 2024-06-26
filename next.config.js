/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    serverActions: false,
  },
  output: "export",
  basePath: "/akhandmishratruth.github.io",

};

module.exports = nextConfig;
