module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          '300': '#4587FF',
          '400': '#2D76F9',
          '500': '#1f26ff',
          'dark': '#2D00F9'
        },
        black: '#212121',
        gray: {
          '400': '#747474',
          'circle': '#EEF4FF',
        },
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
      'base': {'min': '1024px'},
        // => @media (max-width: 618px) { ... }
      'xl': {'min': '639px', 'max': '1010px'},
        // => @media (max-width: 1010px) { ... }
      'xxl': {'min': '1010px', 'max': '1440px'},
        // => @media (max-width: 1440px) { ... }
      },
    fontSize: {
      'xs': '14px',
      'sm': '18px',
      'base': '24px',
      'md': '36px',
      'lg': '48px',
      'xl': '64px'
      },
    lineHeight: {
      'xs': '21px',
      'sm': '27px',
      'md': '36px',
      'xmd': '40px',
      'lg': '65px',
      'xl': '85px'
      }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
