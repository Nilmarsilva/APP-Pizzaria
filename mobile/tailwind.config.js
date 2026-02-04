/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF3838",
        "primary-blue": "#2D5BFF",
        "primary-admin": "#1A1A1A",
      },
    },
  },
  plugins: [],
}
