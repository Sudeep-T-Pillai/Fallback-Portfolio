import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === "production";
const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: isProd ? "/Fallback-Portfolio" : "",
  assetPrefix: isProd ? "/Fallback-Portfolio/" : "",
  output: "export",
}
export default nextConfig;