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
          400: 'rgb(74 222 128)'
        },
        secondary: {
          700: 'rgb(185 28 28)',
          400: 'rgb(248 113 113)'
        },

      }
    },
  },
  safelist: [

    'bg-red-400',
    'bg-red-700',
    'bg-green-400',
    'bg-green-700',
    'hover:bg-green-700',
    'hover:bg-green-400',
    'hover:bg-red-700',
    'hover:bg-red-400',
    'bg-primary-700',
    'bg-primary-400',
    'bg-secondary-700' ,
    'bg-secondary-400' ,
      'hover:bg-secondary-700' ,
      'hover:bg-secondary-400' ,
      'hover:bg-primary-700' ,
      'hover:bg-primary-400' ,





  ],
  plugins: [],
}

