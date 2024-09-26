const { jsx } = require('react/jsx-runtime');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '350px', // Custom screen size
      },
      },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.link-hover': {
          position: 'relative',
          overflow: 'hidden',
          '::before': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '-100%',
            width: '100%',
            height: '90%',
            backgroundColor: '#222020',
            transition: 'left 0.8s',
            zIndex: '-1',
            borderRadius: '7px',
          },
          '&:hover::before': {
            left: '0',
          },
          '&:hover': {
            color: '#0a5ccf',
          },
        },
      });
    },
  ],
};
