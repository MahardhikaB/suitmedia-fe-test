/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com', 'cdn.sanity.io','suitmedia.static-assets.id','assets.suitdev.com','suitmedia.static-assets.id','suitmedia-backend.suitdev.com'],
        remotePatterns: [{
            protocol: 'https',
            hostname: 'cdn.sanity.io',
        }],
    }
}

module.exports = nextConfig
