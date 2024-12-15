import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "tailwindui.com",
			},
			{
				hostname: "images.unsplash.com",
			},
		],
	},
};

export default nextConfig;
