const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lekton", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        orange: "#ff7900",
        orangeError: "#D32C07",
        customGray: "#231F1F",
        customDarkGray: "#171616",
      },
      borderRadius: {
        large: "5rem",
      },
      spacing: {
        160: "40rem",
      },

      padding: {
        "1/4": "25%",
      },

      maxWidth: {
        160: "40rem",
      },
    },
    fontFamily: {
      title: ["Alegreya SC", ...defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
