const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mono: ['Lekton', ...defaultTheme.fontFamily.mono]
      },
      colors: {
        orange: '#ff7900'
      }
    },
    fontFamily: {
      title: ['Alegreya SC', ...defaultTheme.fontFamily.sans]
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
