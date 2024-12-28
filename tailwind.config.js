/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
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
      },
    },
  },
  plugins: [],
}

