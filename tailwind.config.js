/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      sm: '375px',
      md: '1200px'
    },
    extend: {
      colors: {
        white: 'hsl(0, 0%, 100%)',
        lightGray: 'hsl(212, 45%, 89%)',
        grayishBlue: 'hsl(220, 15%, 55%)',
        darkBlue: 'hsl(218, 44%, 22%)'
      }
    },
  },
  plugins: [],
}
