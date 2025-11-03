/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration pour Netlify
  images: {
    unoptimized: true,
  },
  // Pas de trailing slash pour Netlify
  trailingSlash: false,
}

module.exports = nextConfig
