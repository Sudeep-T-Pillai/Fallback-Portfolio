import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/Fallback-Portfolio" ,
  output: "export",
}
export default nextConfig;