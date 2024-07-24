/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        Lato: ['Lato', 'sans-serif'],
        

      },

      colors: {
        overlay: 'rgba(0, 0, 0, 0.3)', // Adjust opacity as needed
      },
    },
  },
  variants: {},

  plugins: [],
}

