/** @type {import('next').NextConfig} */



// tailwind.config.js
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'bounce-in': 'bounceIn 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'm.media-amazon.com',
      'img.freepik.com',
      'plus1.unsplash.com',
      'images.unsplash.com',
      'your-cloudinary-domain.cloudinary.com', // Replace with your Cloudinary domain
      'localhost',
      'res.cloudinary.com',
      "via.placeholder.com",
      "your-image-domain.com",
       "www.shutterstock.com",
       "i.ibb.co",
       "i.pinimg.com",
       "hindi.holidayrider.com",
       "static.independent.co.uk",
       "t3.ftcdn.net",
       "t3.ftcdn.net",
       "images.pexels.com",
       "rukminim2.flixcart.com",
       "rukminim2.flixcart.com",
         
    ],
  },
}



module.exports = nextConfig;



