/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#030712', // deep navy/charcoal tailwind slate-950
        cardBg: 'rgba(30, 41, 59, 0.5)',
        neonGreen: '#2ecc71',
        brightBlue: '#60a5fa',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Geist Mono', 'monospace'],
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 10px #2ecc71, 0 0 20px #2ecc71' },
          '100%': { boxShadow: '0 0 20px #2ecc71, 0 0 30px #2ecc71' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
