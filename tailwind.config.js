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
        orange: '#FF7A00'
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
