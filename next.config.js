/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "*.previews.dropboxusercontent.com",
				port: "",
			},
			{
				protocol: "https",
				hostname: "picsum.photos",
				port: "",
			},
		],
	},
	sassOptions: {
		additionalData: `@use "@/styles" as *;`,
		includePaths: [path.join(__dirname, "styles")],
	},
};

module.exports = nextConfig;
