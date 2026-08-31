/** @type {import('next').NextConfig} */
const nextConfig = {
    allowedDevOrigins: ['192.168.29.59'],
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
                pathname: "/dnheivzi6/**",
            },
        ],
    },


};

export default nextConfig;
