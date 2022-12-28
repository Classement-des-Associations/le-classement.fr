const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "app.vue",
    "./content/**/*.{md,json}",
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      aspectRatio: {
        square: "1 / 1",
      },
      colors: {
        "primary-base": "#FF6944",
        "primary-variation-1": "#F9B666",
        "primary-variation-2": "#FFF6EA",
        "accent-purple": "#4B3069",
        "accent-blue": "#0A6B72",
        black: "#291B25",
        "light-grey": "#d4d4d4",
        "ultra-light-grey": "#f9f9f9",
        white: "#FFFFFF",
      },
      backgroundImage: {
        association: "linear-gradient(135deg, #FF6944 9.05%, #4B3069 100%)",
        vote: "linear-gradient(206.57deg, #FF6944 53.61%, #F9B666 83.33%)",
        classement: "linear-gradient(153.98deg, #FF6944 14.79%, #F9B666 100%)",
        partenaire: "linear-gradient(153.43deg, #4B3069 0%, #0A6B72 83.33%)",
      },
      boxShadow: {
        default: "0 4px 40px 0px rgba(161, 160, 160, 0.1)",
      },
      linearBorderGradients: ({ theme }) => ({
        colors: {
          associations: [
            theme("colors.primary-base"),
            theme("colors.primary-variation-1"),
          ],
          "associations-light": [
            theme("colors.primary-base / 0.3"),
            theme("colors.primary-variation-1 / 0.3"),
          ],
        },
        background: theme("colors"),
      }),
    },
  },
  corePlugins: {
    aspectRatio: true,
  },
  plugins: [
    require("tailwindcss-border-gradient-radius"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    plugin(function ({ addVariant }) {
      addVariant("blog", ".blog &");
    }),
  ],
};
