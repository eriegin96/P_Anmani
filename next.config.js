/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "**.vn",
				port: "",
			},
			{
				hostname: "**.com",
				port: "",
			},
			{
				hostname: "**.co",
				port: "",
			},
			{
				hostname: "**.net",
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
