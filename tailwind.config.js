/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '400px',
      },
      colors: {
        brown: {
          50: '#fdf8f6',   // Lightest Brown
          100: '#f3eae7',  // Very Light Brown
          200: '#e0cfc7',  // Light Brown
          300: '#c9aea4',  // Soft Brown
          400: '#ab8576',  // Medium Brown
          500: '#8e5f4f',  // Standard Brown
          600: '#72483b',  // Dark Brown
          700: '#56372c',  // Deeper Brown
          800: '#3b251e',  // Very Dark Brown
          900: '#241511',  // Darkest Brown
        },
      },
    },
  },
  plugins: [],
}
