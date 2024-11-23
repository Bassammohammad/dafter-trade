/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        Inter: [ "Inter", "serif"]
      },
      colors: {
        primary: {
          700: 'rgb(21 128 61)',
          500: 'rgb(34 197 94)'
        },
        secondary: {
          700: 'rgb(185 28 28)',
          500: 'rgb(239 68 68)'
        },

      }
    },
  },
  safelist: [
    'bg-primary-700',
    'bg-secondary-700' ,
    'hover:bg-secondary-500' ,
    'hover:bg-primary-500' ,
  ],
  plugins: [],
}

