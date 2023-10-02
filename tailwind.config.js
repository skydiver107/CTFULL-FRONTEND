/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Verdana', 'Sans-serif'],
      poppinns: 'Poppins',
      galano: 'Galano Grotesque DEMO',
      montserrat: 'Montserrat',
    },
    fontWeight: {
      thin: '100',
      // hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      // 'extra-bold': '800',
      black: '900',
    },
    extend: {
      colors:{
        paper: '#333333',
        background:  '#A4A4A4',
        primary: '#EFEFEF',
        secondary:  '#A4A4A4',
        ...defaultTheme.colors,
        pink: {
          '900': '#A118AB'
        }
      },
      fontSize: {
        ...defaultTheme.fontSize,
        xs: ['12px', {
          fontWeight: 500,
          lineHeight: '17px',        
        }],
        sm: ['14px', {
          fontWeight: 500,
          lineHeight: '21px',        
        }],
        md: ['22px', {
          fontWeight: 700
        }],
        '2xl': ['40px', {
          fontWeight: 600,
          lineHeight: '60px',
        }]
      },
    },
  },
  plugins: [],
}
