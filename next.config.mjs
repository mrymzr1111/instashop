// /** @type {import('next').NextConfig} */
// const nextConfig = {
    
//   /** @type {import('next').NextConfig} */

    
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "images.unsplash.com",
//         pathname: "/**", // Allow all images from Unsplash
//       },
//     ],
//   },
    

  
     

// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.unsplash.com",
          pathname: "/**", // Allow all images from Unsplash
        },
      ],
    },
  };
  
  export default nextConfig;

    
