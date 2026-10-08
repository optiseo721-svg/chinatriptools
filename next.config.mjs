/** @type {import('next').NextConfig} */
const nextConfig = {
  agentRules: false,
  output: "export",
  allowedDevOrigins: ["127.0.0.1"],
  images: {
    unoptimized: true
  },
  trailingSlash: true
};

export default nextConfig;
