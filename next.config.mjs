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
    
};

export default nextConfig;
