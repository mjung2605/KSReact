/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'start-image': "url('/src/assets/img/kathi_frontview_darkened.jpg')",
        'contact-image': "url('/src/assets/img/kathi_sideview.jpg')",
      }
    },
  },
  plugins: [],
}

