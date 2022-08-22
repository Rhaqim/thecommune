/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    MONGODB_DB: process.env.MONGODB_DB,

    ENV: process.env.ENV,

    RESTAURANTS_URI: process.env.RESTAURANTS_URI,

    GET_RESTAURANTS_URI: process.env.GET_RESTAURANTS_URI,

    GET_REVIEW_URI: process.env.GET_REVIEW_URI,
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
