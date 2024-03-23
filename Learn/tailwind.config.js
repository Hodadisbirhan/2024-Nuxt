/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./assets/css/style.css",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./layouts/*.vue",

    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./*.{vue,js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1fb6ff",
        secondary: "#7e5bef",
        // 'pink': '#ff49db',
        // 'orange': '#ff7849',
        // 'green': '#13ce66',
        // 'yellow': '#ffc82c',
        // 'gray-dark': '#273444',
        // 'gray': '#8492a6',
        // 'gray-light': '#d3dce6',
      },
      animation: {
        slideDown: "slideDown 5s easy-in-out",
        fade: "fade 0.4s easy-in-out",
        "blob-bounce": "blobe-bounce 1s easy-in-out",
      },
      keyframes: {
        slideDown: {
          "0%": { translateY: "translateY(70px)", opacity: 0 },
          "25%": { translateY: "translateY(0)", opacity: 1 },
        },
        "blobe-bounce": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
