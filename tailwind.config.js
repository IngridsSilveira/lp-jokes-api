/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      fontFamily: {
        'fredoka': ["Fredoka", "sans-serif"],
      }
    },
    screens: {
      'phone': '640px',
      'tablet': '768px',
      'desktop': '1024px',
      'monitor': '1280px',
    },
  },
  plugins: [],
}

