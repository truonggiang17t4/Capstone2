/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'Primary-regular': ['Primary-Regular'],
        'Primary-medium': ['Primary-Medium'],
        'Primary-bold': ['Primary-Bold'],
        'Primary-light': ['Primary-Light'],
      },
    },
  },
  plugins: [],
};
