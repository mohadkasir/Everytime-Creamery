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
          primary: '#BF3E1F', // Deep Terracotta - Primary Brand Color
          secondary: '#E6A288', // Soft Clay - Secondary/Hover
          cream: '#FDF8E5',   // Rich Cream - Background
          dark: '#2A1A18',    // Dark Chocolate - Text/Heading
          gold: '#D4AF37',    // Muted Gold - Accents
          muted: '#8C7B75',   // Taupe - Subtitles
          white: '#FFFFFF',
          black: '#000000',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Lato"', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      fontSize: {
        '2xs': '0.65rem',
        'display-1': ['4.5rem', { lineHeight: '1.1' }],
        'display-2': ['3.5rem', { lineHeight: '1.2' }],
      },
      backgroundImage: {
        'noise': "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.05%22/%3E%3C/svg%3E')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'scroll-left': 'scroll 25s linear infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'reveal': 'reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) forwards',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        reveal: {
          '0%': { clipPath: 'inset(0 0 100% 0)' },
          '100%': { clipPath: 'inset(0 0 0 0)' },
        }
      }
    },
  },
  plugins: [],
}