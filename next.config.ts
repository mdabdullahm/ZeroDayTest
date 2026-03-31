import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // 👈 এটা add করা হয়েছে

  images: {
    domains: ["i.ibb.co"],
  },
};

export default nextConfig;