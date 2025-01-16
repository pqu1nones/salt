/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        '1/8': '12.5%',
      },
      aspectRatio: {
        'video': '16 / 9',
      },
    },
  },
  plugins: [],
};