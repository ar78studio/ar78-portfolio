/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        blueDianne: "rgba(35, 61, 77, 1)",
        springGreen: "rgba(163, 204, 171, 1)",
        lightBeige: "rgba(244, 241, 222, 1);",
        sunsetOrange: "rgba(254, 95, 85, 1);",
      },
      variants: {
        stroke: ["hover", "focus"], // For SVG hover states
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },

      fontSize: {
        // 11
        base: "0.688rem",
        // 18
        md: "1.125rem",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms")({
      strategy: "base",
      strategy: "class",
    }),
  ],
};
