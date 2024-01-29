/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  prefix: 'tw-',
  content: ['./src/**/*.js'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      // heading: ['Rajdhani', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
    },
    opacity: {
      0: '0',
      5: '0.05',
      10: '.1',
      15: '.15',
      20: '.2',
      25: '.25',
      30: '.3',
      35: '.35',
      40: '.4',
      45: '.45',
      50: '.5',
      55: '.55',
      60: '.6',
      65: '.65',
      70: '.7',
      75: '.75',
      80: '.8',
      85: '.85',
      90: '.9',
      95: '.95',
      100: '1',
    },

    extend: {
      maxWidth: {
        prose: '75ch',
      },
      scale: {
        flipped: '-1',
      },
      zIndex: {
        1: 1,
        100: 100,
        1000: 1000,
        10000: 10000,
      },
    },
  },
  // In Tailwind CSS v3.0, every variant is automatically available for every utility by default,
  // so you can remove the variants section from your tailwind.config.js file
  // variants: {
  //   extend: {
  //     scale: ['group-hover'],
  //     translate: ['group-hover'],
  //   },
  // },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
