import type { NextConfig } from "next";
const nextConfig: NextConfig = { async rewrites() { return [{ source: "/images/:path*", destination: "https://raw.githubusercontent.com/mateosonaglia/Mateo-portfolio/main/:path*" }, { source: "/og.png", destination: "https://raw.githubusercontent.com/mateosonaglia/Mateo-portfolio/main/og.png" }]; } };
export default nextConfig;
