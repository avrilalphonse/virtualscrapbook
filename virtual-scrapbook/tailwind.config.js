/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
        width: {
          '128': '32rem',  /* Custom width */
          '144': '36rem',  
          '160': '40rem',
          '256': '64rem',
        },
        height: {
          '128': '32rem',  /* Custom height */
          '144': '36rem',  
          '160': '40rem',
        },
    },
  },
  plugins: [],
}
