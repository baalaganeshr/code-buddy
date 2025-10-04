/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#050505',
        surface: '#0a0a0f',
        accent: {
          DEFAULT: '#ff1a43',
          soft: '#ff4d6d',
          glow: 'rgba(255, 26, 67, 0.35)',
        },
        muted: '#1b1b21',
        border: '#2a2a34',
        text: {
          primary: '#fefefe',
          secondary: '#b3b3c2',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 30px rgba(255, 26, 67, 0.35)',
        glowStrong: '0 0 60px rgba(255, 26, 67, 0.45)',
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at center, rgba(255,26,67,0.2) 0%, rgba(5,5,5,0.75) 45%, rgba(5,5,5,1) 70%)',
      },
    },
  },
  plugins: [],
};
