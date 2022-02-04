/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "uploads-ssl.webflow.com",
      "localhost:3000",
      "wavv-demo.vercel.app",
      "api.twilio.com"
    ],
  },
};

module.exports = nextConfig;
