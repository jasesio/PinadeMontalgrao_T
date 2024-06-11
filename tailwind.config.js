/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,scss}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ],
      },
      colors: {
        'primary-color': '#1e1e1e',
        'secondary-color': '#f3ca52',
        'tertiary-color': '#dc3545',
      },
      maxHeight: {
        '350': '350px',
      },
      backgroundPosition: {
        'center-top': 'center top',
        'center-bottom': 'center bottom',
      },
  
    },
  },
  plugins: [],
};
