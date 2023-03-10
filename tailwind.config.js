/** @type {import('tailwindcss').Config} */

const { yellow } = require("color-name");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontWeight: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 500,
      medium: 600,
      semibold: 700,
      bold: 800,
      extrabold: 900,
      black: 900,
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "6rem",
        "2xl": "12rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["sofia", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        top: "-1px -2px 6px -3px rgba(79,79,79,0.50)",
        hoverShadow: "0px -1px 0px 8px rgba(0,0,0,0.1);",
      },
      colors: {
        lightGreen: "#D4E9E2",
        mdGreen: "#3d7170",
        darkGreen: "#1E3932",
        darkGreenTwo: "#00754a",
        mdManhattan: "#f4c5a1",
        lightGray: "#00000094",
        darkBlack: "rgba(0,0,0,.85)",
        DarkYellow: "#CBA258",
      },
    },
  },
  plugins: [],
};
