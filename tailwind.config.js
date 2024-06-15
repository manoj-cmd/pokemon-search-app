/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: {
          light: '#ffd858', // Custom light shade
          DEFAULT: '#f3b614', // Custom default shade
          dark: '#7bf2da', // Custom dark shade
        },
      },
    },
  },
  plugins: [],
}
