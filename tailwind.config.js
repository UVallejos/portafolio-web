/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fondo': "url('/images/ssspiralVortexF.svg')",
      }
    },
    colors: {
      ...colors,
      primary: colors.green,
      secondary: colors.blue,
      third: colors.yellow,
    },
    
  },
  plugins: [],
}
