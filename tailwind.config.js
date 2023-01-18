const plugin = require("tailwindcss/plugin");

module.exports = {
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "tour-asso": `linear-gradient(135deg, ${theme(
          "colors.primary-base"
        )} 9.05%, ${theme("colors.accent-purple")} 100%)`,
        concours: `linear-gradient(153.98deg, ${theme(
          "colors.primary-base"
        )} 14.79%, ${theme("colors.primary-variation-1")} 100%)`,
        discovery: `linear-gradient(206.57deg, ${theme(
          "colors.primary-base"
        )} 53.61%, ${theme("colors.primary-variation-1")} 83.33%)`,
        "ceremonie-finale": `linear-gradient(153.98deg, ${theme(
          "colors.primary-base"
        )} 14.79%, ${theme("colors.primary-variation-1")} 100%)`,
        partenaires: `linear-gradient(153.43deg, ${theme(
          "colors.accent-purple"
        )} 0%, ${theme("colors.accent-blue")} 83.33%)`,
      }),
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
    plugin(function ({ addVariant }) {
      addVariant("blog", ".blog &");
    }),
  ],
};
