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
      },
      colors: {
        'primary': '#EEF5FF',
        'secondary': '#9EB8D9',
        'tertiary': '#7C93C3',
        'quaternary': '#A25772'
      }
    },
  },
  plugins: [],
}

