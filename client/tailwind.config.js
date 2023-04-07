/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        reddit_dark: {
          DEFAULT: '#333'
        },
        reddit_dark_light: {
          DEFAULT: '#444'
        },
        
      },
    },
  },
  plugins: [],
}
