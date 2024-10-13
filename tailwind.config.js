/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#f1f3f4',
        secondaryBackground: '#f5f5f5',
        headerColor: '#5f6368',
        textColor: '#3c4043',
      }
    },
  },
  plugins: [],
}

