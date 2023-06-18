/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
	sassOptions: {
		includePaths: [path.join(__dirname, "_styles")],
	},
};

module.exports = nextConfig;
