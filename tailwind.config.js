/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      plainThin: ['Plain Thin'],
      saolDisplayRegular: ['Saol Display Regular'],
      apercu: ['Apercu'],
      kenokyLight: ['KENOKY Light']
    },
    extend: {
      screens: {
        '1xs': '520px',
        '3xl': '1700px'
      }
    },
  },
  plugins: [],
}
