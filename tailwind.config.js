/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./content/**/*.html",
    "./themes/elevatika/layouts/**/*.html",
    "./themes/elevatika/content/**/*.md",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#1B3F6B",
        gold: "#F5B800",
        navyDeep: "#0F2540",
        goldDark: "#C9920A",
        cream: "#FAF7F2",
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
