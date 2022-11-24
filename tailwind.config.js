const { transform } = require("typescript")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        mono: ["Source Code Pro", "mono-space"],
      },
      fontSize: {
        secondaryHeader: [
          "0.8rem",
          {
            fontWeight: "700",
            lineHeight: "1rem",
          },
        ],
        md: "0.85rem",
        sm: "0.6rem",
        xs: "0.5rem",
      },
      colors: {
        darkestgreen: "#021B13",
        darkgreen: "#05221A",
        green: "#274110",
        lightgreen: "#B5D49A",
        beige: "#E5E5E5",
        darkpink: "#7A343C",
      },
      backgroundColor: {
        darkestgreen: "#021B13",
        darkgreen: "#05221A",
        green: "#4B7150",
        lightgreen: "#B5D49A",
        beige: "#E5E5E5",
        lightpink: "#F56476",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translate-x-0" },
          "100%": { transform: "translate-x-20" },
        },
      },
    },
  },
  plugins: [],
}
