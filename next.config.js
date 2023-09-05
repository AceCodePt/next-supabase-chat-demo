/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: [
      "maps.googleapis.com",
      "plus.unsplash.com",
      "images.unsplash.com",
      "scontent.ftlv20-1.fna.fbcdn.net",
    ],
  },
};

module.exports = nextConfig;
