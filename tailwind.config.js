/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        top: "-1px -2px 6px -3px rgba(79,79,79,0.50)",
      },
      colors: {
        lightGreen: "#D4E9E2",
        mdGreen: "#3d7170",
        darkGreen: "#1E3932",
        mdManhattan: "#f4c5a1",
        lightGray: "#00000094",
      },
    },
  },
  plugins: [],
};
