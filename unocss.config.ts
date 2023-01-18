import { defineConfig, presetUno, presetTypography, transformerDirectives } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetTypography(),
  ],
  extraContent: {
    filesystem: ['composables/*.ts'],
  },
  theme: {
    colors: {
      primary: {
        base: "#FF6944",
        "light": "#F9B666",
        "lighter": "#FFF6EA",
      },
      accent: {
        purple: "#4B3069",
        blue: "#0A6B72",
      },
      "light-grey": "#d4d4d4",
      "ultra-light-grey": "#f9f9f9",
      black: "#291B25",
      white: "#FFFFFF",
    },
  },
  rules: [
    [/bg-(\w+)-(\w+)/, ([, v, c], { theme }) => {
      if (!theme.colors[v])
        return

      if (!theme.colors[v][c])
        return

      return { 'background-color': theme.colors[v][c] }
    }],
    [/bg-classement/, (_, { theme }) => {
      return { 'background-image': `linear-gradient(153.98deg, ${theme.colors.primary.base} 14.79%, ${theme.colors.primary.light} 100%)` }
    }],
    [/bg-ceremonie-finale/, (_, { theme }) => {
      return { 'background-image': `linear-gradient(153.98deg, ${theme.colors.primary.base} 14.79%, ${theme.colors.primary.light} 100%)` }
    }],
    [/bg-discovery/, (_, { theme }) => {
      return {
        'background-image': `linear-gradient(206.57deg, ${theme.colors.primary.base} 53.61%, ${theme.colors.primary.light} 83.33%)`
      }
    }],
    [/bg-concourss/, (_, { theme }) => {
      return {
        'background-image': `linear-gradient(153.98deg, ${theme.colors.primary.base} 14.79%, ${theme.colors.primary.light} 100%)`
      }
    }],
    [/bg-tour-asso/, (_, { theme }) => {
      return { 'background-image': `linear-gradient(180deg, ${theme.colors.primary.base} 0%, ${theme.colors.accent.purple} 100%)` }
    }],
    [/bg-partenaires/, (_, { theme }) => {
      return { 'background-image': `linear-gradient(180deg, ${theme.colors.accent.purple} 0%, ${theme.colors.accent.blue} 100%)` }
    }],
    [/bg-border-gradient-associations/, (_, { theme }) => {
      return { 'background': `linear-gradient(90deg, #fff, #fff), linear-gradient(to bottom right, ${theme.colors.primary.base}, ${theme.colors.primary.light})` }
    }],
  ],
  variants: [
    (matcher) => {
      if (!matcher.startsWith('blog:'))
        return matcher
      return {
        matcher: matcher.slice(5),
        selector: s => `.blog ${s}`,
      }
    },
  ],
  transformers: [
    transformerDirectives(),
  ],
})
