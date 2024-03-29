const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    enabled: true,
    options: {
      keyframes: true,
      variables: true,
    },
    content: [
      "./pages/**/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx,ts,tsx}",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lekton", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "16xl": "12rem",
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
        120: "30rem",
        160: "40rem",
      },
      padding: {
        "1/4": "25%",
      },
      maxWidth: {
        160: "40rem",
      },
      ringWidth: {
        5: "5px",
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
