/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'registerbg': "url('/image/register_bg.png')"
          
      },
      fontFamily:
      {
        Gilroy_md:['Gilroy_md','sans-serif'],
        Gilroy_bd:['Gilroy_bd','sans-serif'],
        Gilroy_sb:['Gilroy_sb','sans-serif'],
 
      },
      colors:
      {
        'yellow':'#F2B547',
        'cream':'#FFF1DE',
        'blue':'#27219A',
        'red':'#F06966',
        'grey': '#434373',
      },
    },
  },
  plugins: [ require('tailwind-scrollbar-hide'),
    // function({addUtilities}){
    //   const newUtilities = {
    //     ".no-scrollbar::-webkit-scrollbar": {
    //       display: "none",
    //     },
    //     ".no-scrollbar": {
    //       "-ms-overflow-style": "none",
    //       "scrollbar-width": "none",
    //     },
    //   };

    //   addUtilities(newUtilities);
    // }
  ],
  corePlugins: {
    preflight: false
  }, 
}