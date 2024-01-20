/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-wood': "url('./src/assets/bg-wood.jpg')"
      }
    },
  },
  plugins: [],
}

