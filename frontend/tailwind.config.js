/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary": "#ee2b34", // Cor principal da Pizzaria (Vermelho)
        "primary-blue": "#13b6ec", // Cor usada em algumas telas de cadastro
        "primary-admin": "#1b767e", // Cor principal do módulo administrativo (Verde Petróleo)
        "background-light": "#f8f6f6",
        "background-dark": "#221011",
      },
      fontFamily: {
        "display": ["Plus Jakarta Sans", "Work Sans", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}
