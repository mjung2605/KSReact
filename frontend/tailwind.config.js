/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT( {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'start-image': "url('/src/assets/img/kathi_frontview_darkened.jpg')",
        'contact-image': "url('/src/assets/img/kathi_sideview.jpg')",
      },
      colors: {
        'ksPink': '#fff3f3',
        'ksBlack': '#171717',
        'ksWhite': '#ffffff',
      },
      maxWidth: {
        '160': '640px', 
      },
      padding: {
        '160': '640px',
      },
      

    },

    fontFamily: {

      serif: ['PlayfairDisplay', 'serif'],
      
    }
    
  },
  plugins: [],
})

