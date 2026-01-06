/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',
        secondary: '#2DD4BF',
        danger: '#EF4444',
        background: '#F8FAFC',
      },
    },
  },
  plugins: [],
}
