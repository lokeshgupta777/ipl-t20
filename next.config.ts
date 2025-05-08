import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://cdn.sportmonks.com/**")],
  },
};

export default withFlowbiteReact(nextConfig);
