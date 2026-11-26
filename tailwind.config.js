/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#1E40AF',
          dark: '#172554',
          light: '#3B82F6',
        },
        ink: '#090C12',
      },
      fontFamily: {
        sans: ['Archivo', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
