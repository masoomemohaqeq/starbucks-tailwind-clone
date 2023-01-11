/** @type {import('tailwindcss').Config} */

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
        mdManhattan: "#f4c5a1",
        lightGray: "#00000094",
        darkBlack: "rgba(0,0,0,.85)",
      },
    },
  },
  plugins: [],
};
