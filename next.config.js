/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['firebasestorage.googleapis.com'],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'localhost:3000',
            },
        ]
    },
}

module.exports = nextConfig
