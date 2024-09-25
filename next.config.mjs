/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['m.media-amazon.com'],
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'm.media-amazon.com',
                port: '',
                pathname: '/images/**',
            },
        ]
    },

};

export default nextConfig;
