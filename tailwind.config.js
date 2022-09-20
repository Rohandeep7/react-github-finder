/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ejs}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
    extend: {},
  },
  plugins: [require('daisyui')],
}
