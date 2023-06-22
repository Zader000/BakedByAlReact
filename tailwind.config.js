/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#F8F8F6',
        'light-cream': '#FDFDFC',
        'confetti-blue': '#95BDFF',
        'confetti-green': '#DFFFD8',
        'confetti-pink': '#F7C8E0',
        'confetti-blue2': '#B4E4FF',
      }
    },
  },
  plugins: [],
}