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
            lineHeight: "1.3rem",
          },
        ],
        xs: "0.6rem",
      },
      colors: {
        darkestgreen: "#021B13",
        darkgreen: "#05221A",
        green: "#4B7150",
        lightgreen: "#B5D49A",
        beige: "#E5E5E5",
      },
      backgroundColor: {
        darkestgreen: "#021B13",
        darkgreen: "#05221A",
        green: "#4B7150",
        lightgreen: "#B5D49A",
        beige: "#E5E5E5",
      },
    },
  },
  plugins: [],
}
