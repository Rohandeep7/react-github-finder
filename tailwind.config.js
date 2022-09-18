/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ejs}"],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
