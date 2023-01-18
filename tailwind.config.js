const plugin = require("tailwindcss/plugin");

module.exports = {
  theme: {
    extend: {
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
    require("@tailwindcss/typography"),
  ],
};
