/** @type {import('tailwindcss').Config} */
// https://coolors.co/fbfef9-191923-0e79b2-bf1363-f39237
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Arial'],
      soft: ['Nunito'],
      extra: ['Shanti'],
      writable: ['Barlow'],
      display: ['YesChirp'],
    },

    colors: {
      babyPowder: '#fbfef9ff',
      raisinBlack: '#191923ff',
      starCommandBlue: '#0e79b2ff',
      maroon: '#bf1363ff',
      deepSaffron: '#f39237ff'
    },

    screens: {
      sm: '576px',
      md: '768px',
      lg: '1224px',
      xl: '1470px',
    },




},
  plugins: [],
}
