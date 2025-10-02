import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  ...(isProd
    ? {
        output: "export",
        basePath: "/PortafolioPersonal",
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
