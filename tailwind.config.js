/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '	#FFCA30',
        base: '#FFE089',
        vividCyan: '#2FE1FF',
        vividPurple: "#772FFF"
      }
    },
  },
  plugins: [],
}

