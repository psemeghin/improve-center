/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ocean: "#25515E",           // Azul Oceano Profundo
        leaf: "#257143",            // Verde Folha Viva
        breeze: "#B5DAE2",          // Azul Brisa do Mar
        earth: "#A57D49",           // Marrom Alma da Terra
        summerleaf: "#BBDDA8",      // Verde Folha de Verão
        horizon: "#40788D",         // Azul Horizonte Claro
        cream: "#FFFEF2",           // neutro suave para fundo
      },
      fontFamily: {
        // provisório; TT Fors será adicionada depois pela licença
        sans: ["Inter", "ui-sans-serif", "system-ui", "Helvetica", "Arial"]
      },
      boxShadow: {
        soft: "0 6px 24px rgba(37, 81, 94, 0.08)"
      }
    }
  },
  plugins: []
}