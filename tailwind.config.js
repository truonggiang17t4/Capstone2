/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'Primary-regular': ['Primary-Regular'],
        'Primary-medium': ['Primary-Medium'],
        'Primary-bold': ['Primary-Bold'],
        'Primary-light': ['Primary-Light'],
      },
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10',
      },
    },
  },
  variants: {
    opacity: ['hover', 'active', 'group-hover'],
    lineClamp: ['responsive', 'hover'],
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar-hide'),
  ],
};
