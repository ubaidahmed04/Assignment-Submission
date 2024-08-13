/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#0d72b6',
        'white': '#fff',
        'custom-red': '#DC3545',
        'custom-green': '#88C641',
      },
    },
  },
  plugins: [],
}