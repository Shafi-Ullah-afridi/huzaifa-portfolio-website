/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: '#7f5af0',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #060b20 0%, #0f1f46 40%, #120a42 100%)',
      },
      boxShadow: {
        glow: '0 0 20px rgba(127,90,240,0.35), 0 0 35px rgba(42,119,255,0.25)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        heartbeat: 'heartbeat 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '40%': { transform: 'scale(1.05)' },
          '60%': { transform: 'scale(0.95)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
