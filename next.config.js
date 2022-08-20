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

    RESTAURANTS_URI_DEV: process.env.RESTAURANTS_URI_DEV,
    RESTAURANTS_URI_PROD: process.env.RESTAURANTS_URI_PROD,

    GET_RESTAURANTS_URI_DEV: process.env.GET_RESTAURANTS_URI_DEV,
    GET_RESTAURANTS_URI_PROD: process.env.GET_RESTAURANTS_URI_PROD,

    GET_REVIEW_URI_DEV: process.env.GET_REVIEW_URI_DEV,
    GET_REVIEW_URI_PROD: process.env.GET_REVIEW_URI_PROD,
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
