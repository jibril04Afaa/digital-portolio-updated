/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      "sm": "320px",
      "md": "375px",
      "lg": "425px",
      "tablet": "650px",
      "laptop": "1024px",
      "large-laptop": "1440px",
    },
    extend: {
      colors: {
        customDark: 'rgba(2, 0, 36, 1)',
        customGreen: 'rgba(87, 167, 77, 1)',
        lightPurple: '#FCEEFE',
      },
      animation: {
        rotate: 'rotate 10s linear infinite',
        tilt: 'tilt 10s infinite linear',
        'gradient-xy': 'gradient 15s ease infinite',
      },
      keyframes: {
        rotate: {
          '0%': { 'clip-path': 'inset(0 0 98% 0)' },
          '25%': { 'clip-path': 'inset(0 98% 0 0)' },
          '50%': { 'clip-path': 'inset(98% 0 0 0)' },
          '75%': { 'clip-path': 'inset(0 0 0 98%)' },
          '100%': { 'clip-path': 'inset(0 0 98% 0)' },
        },
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(1deg)',
          },
          '75%': {
            transform: 'rotate(-1deg)',
          },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      },
    },
  },
  plugins: [],
}

