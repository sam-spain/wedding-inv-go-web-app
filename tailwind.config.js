/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': {
        DEFAULT: "#A1BDD7",
        dark: "#7DA4C7",
        darker: "#598BB8"
      },
      'secondary': {
        DEFAULT: "#D7BBA1",
        dark: "#C8A17D"
      },
      "information": {
        DEFAULT: "#A1A2D7",
        dark: "#7D7FC8"
      },
      "success": {
        DEFAULT: "#A1D7D6",
        dark: "#7DC8C6"
      },
      "error": {
        DEFAULT: "#D7A1BD",
        dark: "#C87DA4"
      }

    }
  },
  plugins: [],
}