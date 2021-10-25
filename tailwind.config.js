module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          '400': '#2D76F9',
          'dark': '#2D00F9'
        }
      },
    },
    screens: {
      'sm': {'max': '440px'},

        // => @media (max-width: 414px) { ... }

      'md': {'max': '620px'},
        // => @media (max-width: 618px) { ... }

      },  
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
