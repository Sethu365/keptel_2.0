/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#D63A1E', // Main Keptel Red
          50: '#FFF0ED',
          100: '#FFE4DE',
          200: '#FFC8B9',
          300: '#FFA58F',
          400: '#FF7A53',
          500: '#D63A1E',
          600: '#B92D14', // Darker for hover
          700: '#9A220F',
          light: '#FFD6CD', // Soft tint
        },
        footer: '#0E141B', // Matte corporate footer
        cta: '#101828', // Deep slate CTA background
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
