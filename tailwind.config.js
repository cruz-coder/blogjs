/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  
  content: ["./public/index.html","./public/js/index.js","./src/**/*{html.js}"],
  theme: {
    extend: {},
  },
  plugins: [
      require('@tailwindcss/forms'),
  ],
}
