/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        port: '',
        pathname: '**',
      },
    ],
  },
  env: {
    API_URL: process.env.API_URL,
    IMGKIT_PUBLIC_URL: process.env.IMGKIT_PUBLIC_URL,
    IMGKIT_PUBLIC_KEY: process.env.IMGKIT_PUBLIC_KEY,
  },
};

export default nextConfig;
