/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ...colors,
        primaryBlue: '#1967D2',
        primaryDark: '#0146A6',
        secondaryYellow: '#F9AB00',
        secondaryDark: '#E9A000',
        whiteBlue: '#EFF4FC',
        overlay: '#202124'
      },
      fontFamily: {
        Nunito: ['Nunito Sans', 'sans-serif']
      }
    }
  },
  plugins: []
}
