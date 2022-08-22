/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  env: {
    NEXT_MONGODB_URI: process.env.NEXT_MONGODB_URI,
    NEXT_MONGODB_DB: process.env.NEXT_MONGODB_DB,

    NEXT_RESTAURANTS_URI: process.env.NEXT_RESTAURANTS_URI,

    NEXT_GET_RESTAURANTS_URI: process.env.NEXT_GET_RESTAURANTS_URI,

    NEXT_GET_REVIEW_URI: process.env.NEXT_GET_REVIEW_URI,

    NEXT_GET_REVIEWER_URI: process.env.NEXT_GET_REVIEWER_URI,
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: 'file-loader',
      },
    });
    return config;
  }
}

const withTM = require('next-transpile-modules')([
  'three',
  '@react-three/fiber',
]);

module.exports = withTM(nextConfig);
