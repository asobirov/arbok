/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        "blackAlpha-50": "rgba(0, 0, 0, 0.04)",
        "blackAlpha-100": "rgba(0, 0, 0, 0.06)",
        "blackAlpha-200": "rgba(0, 0, 0, 0.08)",
        "blackAlpha-300": "rgba(0, 0, 0, 0.16)",
        "blackAlpha-400": "rgba(0, 0, 0, 0.24)",
        "blackAlpha-500": "rgba(0, 0, 0, 0.36)",
        "blackAlpha-600": "rgba(0, 0, 0, 0.48)",
        "blackAlpha-700": "rgba(0, 0, 0, 0.64)",
        "blackAlpha-800": "rgba(0, 0, 0, 0.80)",
        "blackAlpha-900": "rgba(0, 0, 0, 0.92)",

        "whiteAlpha-50": "rgba(255, 255, 255, 0.04)",
        "whiteAlpha-100": "rgba(255, 255, 255, 0.06)",
        "whiteAlpha-200": "rgba(255, 255, 255, 0.08)",
        "whiteAlpha-300": "rgba(255, 255, 255, 0.16)",
        "whiteAlpha-400": "rgba(255, 255, 255, 0.24)",
        "whiteAlpha-500": "rgba(255, 255, 255, 0.36)",
        "whiteAlpha-600": "rgba(255, 255, 255, 0.48)",
        "whiteAlpha-700": "rgba(255, 255, 255, 0.64)",
        "whiteAlpha-800": "rgba(255, 255, 255, 0.80)",
        "whiteAlpha-900": "rgba(255, 255, 255, 0.92)",
      },
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
}
