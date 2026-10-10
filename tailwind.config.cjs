// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // enable class-based dark mode
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8F8F6',
        text: '#111111',
        border: '#E5E5E0',
        accent: '#D2F800', // electric lime
      },
      fontFamily: {
        sans: ['Inter Tight', 'sans-serif'],
        serif: ['Syne', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
