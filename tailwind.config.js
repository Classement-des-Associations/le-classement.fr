module.exports = {
  content: [
    'app.vue',
    './content/**/*.{md,json}',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    aspectRatio: {
      square: '1 / 1',
    },
    colors: {
      'primary-base': '#FF6944',
      'primary-variation-1': '#F9B666',
      'primary-variation-2': '#FFF6EA',
      'accent-purple': '#4B3069',
      'accent-blue': '#0A6B72',
      black: '#291B25',
      'light-grey': '#d4d4d4',
      'ultra-light-grey': '#f9f9f9',
      white: '#FFFFFF',
    },
    extend: {
      boxShadow: {
        default: '0 4px 40px 0px rgba(161, 160, 160, 0.1)',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/typography')],
}
