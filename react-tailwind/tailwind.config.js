module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      'primary': '#ffffff',
      'secondary': '#000000',
      'myCustom': '#e3342f'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
