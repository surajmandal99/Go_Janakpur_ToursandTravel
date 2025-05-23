/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#1A4F8A',
          dark: '#2563eb'
        },
        secondary: {
          light: '#FCAF3D',
          dark: '#f59e0b'
        }
      }
    },
  },
  plugins: [],
};