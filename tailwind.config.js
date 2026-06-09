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
        ink:    { DEFAULT: '#0F172A', soft: '#1E293B' },
        paper:  { DEFAULT: '#FAF8F4', 2: '#F3EEE5' },
        accent: { DEFAULT: '#0369A1', 600: '#0284C7', ink: '#075985' },
      },
      fontFamily: {
        heading: ['Archivo', 'sans-serif'],
        body:    ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
