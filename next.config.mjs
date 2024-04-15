/** @type {import('next').NextConfig} */
const nextConfig = {

  // next js is heavy on security, so, if we want to use an external imageConfigDefault(image address) 
  // we need to configure the hostname or domain name in that image in our next.config.js
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cafeu.vercel.app',
            
           
          },
          {
            protocol: 'https',
            hostname: 'plus.unsplash.com',
            
           
          },
          {
            protocol: 'https',
            hostname: 'static.episodate.com',
            
           
          },
        ],

        // domains:['cafeu.vercel.app',"static.episodate.com"]
      },
};

export default nextConfig;
