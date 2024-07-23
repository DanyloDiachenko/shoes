/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
		serverComponentsExternalPackages: ['@prisma/client', 'bcryptjs']
	},
	images: {
		domains: ['lh3.googleusercontent.com']
	}
};

module.exports = nextConfig;
