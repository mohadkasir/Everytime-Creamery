/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#BF3E1F', // Terracotta
          cream: '#FDF8E5',   // Background
          dark: '#4A2C2A',    // Text
          gold: '#D4AF37',    // Accent
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Lato"', 'sans-serif'],
      },
      spacing: {
        'golden-sm': '0.618rem',
        'golden-md': '1rem',
        'golden-lg': '1.618rem',
        'golden-xl': '2.618rem',
        'golden-2xl': '4.236rem',
      },
      gridTemplateColumns: {
        'golden': '1fr 1.618fr',
      },
      transitionDuration: {
        'golden-fast': '382ms',
        'golden-norm': '618ms',
        'golden-slow': '1618ms',
      }
    },
  },
  plugins: [],
}