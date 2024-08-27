/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'cinzel': ['Cinzel', 'sans-serif'],
        'baskerville': ['Baskervville SC', 'serif'],
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        'light-blue': '#a5d8ff',
        'dark-blue': '#004f9d',
        'light-gray': '#f3f3f3',
        'dark-gray': '#333333',
        'hitam' : '#212721'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}