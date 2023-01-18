import { defineConfig, presetUno, presetTypography, transformerDirectives } from 'unocss'
import { gradientsRules } from './contants/gradients'

export default defineConfig({
  presets: [
    presetUno(),
    presetTypography(),
  ],
  extraContent: {
    filesystem: ['composables/*.ts', 'content/**.md'],
  },
  theme: {
    colors: {
      'primary-base': '#FF6944',
      'primary-light': '#F9B666',
      'primary-lighter': '#FFF6EA',
      'accent-purple': '#4B3069',
      'accent-blue': '#0A6B72',
      "light-grey": "#d4d4d4",
      "ultra-light-grey": "#f9f9f9",
      black: "#291B25",
      white: "#FFFFFF",
    },
  },
  rules: [
    [/border-(.*)/, ([, v], { theme }) => {
      if (!theme.colors[v])
        return

      return { 'border-color': theme.colors[v] }
    }],

    // [/bg-(\w+)-(\w+)/, ([, v, c], { theme }) => {
    //   if (!theme.colors[v])
    //     return

    //   if (!theme.colors[v][c])
    //     return

    //   return { 'background-color': theme.colors[v][c] }
    // }],
    ...gradientsRules,
    [/bg-border-gradient-associations/, (_, { theme }) => {
      return { 'background': `linear-gradient(90deg, #fff, #fff), linear-gradient(to bottom right, ${theme.colors['primary-base']}, ${theme.colors['primary-light']})` }
    }],
    [/bg-(.*)/, ([, v], { theme }) => {
      if (!theme.colors[v])
        return

      return { 'background-color': theme.colors[v] }
    }],
    [/text-(.*)/, ([, v], { theme }) => {
      if (!theme.colors[v])
        return

      return { 'color': theme.colors[v] }
    }]
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
