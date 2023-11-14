/** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     serverActions: true,
//   },
//   reactStrictMode: false,
// };

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        // pathname: "/account123/**",
      },
    ],
  },
};
