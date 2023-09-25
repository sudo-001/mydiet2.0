/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./projects/**/*.{html,ts}",
    "./src/index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
