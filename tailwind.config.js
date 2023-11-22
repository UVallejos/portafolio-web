/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];

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

    fontFamily: {
      VinaSans: ['Vina Sans', 'serif'],
      Poppins: ['Poppins', 'serif'],
      RobotoCondensed: ['Roboto Condensed', 'serif'],
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
