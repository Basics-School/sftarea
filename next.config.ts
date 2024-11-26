import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.realestateindia.com",
        port: "",
        pathname: "/rei/images/topcity/**",
      },
    ],
  },
};

export default nextConfig;
