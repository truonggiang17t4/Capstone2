/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'OpenSans-regular': ['OpenSans-Regular'],
        'OpenSans-medium': ['OpenSans-Medium'],
        'OpenSans-bold': ['OpenSans-Bold'],
        'OpenSans-light': ['OpenSans-Light'],
      },
    },
  },
  plugins: [],
};
