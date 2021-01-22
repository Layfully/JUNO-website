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
        orange: 'rgba(255, 121, 0, var(--tw-bg-opacity))'
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
