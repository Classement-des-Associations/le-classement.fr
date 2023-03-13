// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('blog', '.blog &')
    })
  ]
}
