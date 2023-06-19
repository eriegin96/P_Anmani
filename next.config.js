/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
	sassOptions: {
		additionalData: `@use "@/styles" as *;`,
		includePaths: [path.join(__dirname, "styles")],
	},
};

module.exports = nextConfig;
