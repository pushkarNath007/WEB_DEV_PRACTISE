/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/*.{html,ejs}'],
  theme: {
    screens: {
      sm: '200px',
      s2m:'400px',
      md: '608px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        lightblue: 'rgb(153 246 228)'
      },
    },
  },
  plugins: [],
}
