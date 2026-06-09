/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './leistungen/**/*.html',
    './demo/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        void:   '#0a0a0a',
        char:   '#1d1d1d',
        iron:   '#3d3d3d',
        bone:   '#e5e5e5',
        mist:   '#c2c2c2',
        fog:    '#686868',
        ink:    { DEFAULT: '#0F172A', soft: '#1E293B' },
        accent: { DEFAULT: '#0369A1', 600: '#0284C7', ink: '#075985' },
      },
      fontFamily: {
        heading: ['Geist', 'Inter', 'ui-sans-serif', 'sans-serif'],
        body:    ['DM Sans', 'ui-sans-serif', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
