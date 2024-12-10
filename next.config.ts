import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
        port: "",
        pathname: "/**",
      },

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
