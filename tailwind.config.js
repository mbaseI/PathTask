/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat'],
        'opensans': ['Open Sans'],
        'avenir': ['Sen']
      },
      fontSize: {
        '3xl' : ['2rem', {
          lineHeight: '3.75rem',
          fontWeight: '500',
        }],
        '2xl' : ['1.5rem', {
          lineHeight: '2.25rem',
          fontWeight: '400'
        }],
        'xl': ['1.25rem', {
            lineHeight: '1.875rem',
            fontWeight: '400'
        }],
        'md': ['1rem', {
            lineHeight: '1.25rem',
        }],
        'sm': ['0.875rem', {
            lineHeight: '1.25rem',
            fontWeight: '350'
        }],
        'xs': ['0.75rem', {
          lineHeight: '1.5rem'
        }]
      },
      colors: {
        'pathGray': '#666666'
      },
      letterSpacing: {
        wider: '0.0625em'
      }
    }
  },
  plugins: []
}
