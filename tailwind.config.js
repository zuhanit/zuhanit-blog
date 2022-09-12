/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
    "./containers/**/*.tsx",
  ],
  theme: {
    extend: {
      spacing: {
        search: "calc(3.5rem + 1px)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
