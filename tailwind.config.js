/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        areia: "#FFF6E3",
        azulImprove: "#0D3B66"
      },
      boxShadow: {
        suave: "0 6px 24px rgba(0,0,0,0.06)"
      },
      borderRadius: {
        sutil: "10px"
      }
    }
  },
  plugins: []
};
