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
      spacing: {
        
        
        '300' : '300px'
      } 
    },
    screens: {
      'sm': {'min': '220px', 'max': '440px'},
        // => @media (max-width: 414px) { ... }
      'md': {'min': '441px', 'max': '637px'},
        // => @media (max-width: 618px) { ... }
      'lg': {'min': '638px'},
        // => @media (max-width: 618px) { ... }

      }, 
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


