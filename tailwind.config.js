module.exports = {
  content: [
    'app.vue',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    colors: {
      'primary-base': '#FF6944',
      'primary-variation-1': '#F9B666',
      'primary-variation-2': '#FFF6EA',
      'accent-purple': '#4B3069',
      'accent-blue': '#0A6B72',
      black: '#291B25',
      'light-grey': '#EDEDED',
      'ultra-light-grey': '#E6E6E6',
      white: '#FFFFFF',
    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
