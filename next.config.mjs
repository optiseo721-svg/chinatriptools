/** @type {import('next').NextConfig} */
const nextConfig = {
  agentRules: false,
  output: "export",
  images: {
    unoptimized: true
  },
  trailingSlash: true
};

export default nextConfig;
