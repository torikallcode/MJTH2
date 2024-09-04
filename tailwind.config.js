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
        'light-blue': '#5a9bec',
        'dark-blue': '#13223f',
        'darken': '#0F172A',
        'light-pink': '#f472b6',
        'dark-gray': '#333333',
        'hitam' : '#212721'
      }
    },
  },
  darkMode: "class",
  plugins: [
    require('daisyui'), // DaisyUI plugin
    nextui(),           // NextUI plugin
  ],
}