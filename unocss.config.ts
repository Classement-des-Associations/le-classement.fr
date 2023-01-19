import { defineConfig, presetUno, presetTypography, transformerDirectives } from 'unocss'
import type { Theme } from '@unocss/preset-uno'
import { gradientsRules } from './contants/gradients'

export default defineConfig<Theme>({
  presets: [
    presetUno(),
    presetTypography()
  ],
  extraContent: {
    filesystem: ['composables/*.ts', 'content/**.md']
  },
  theme: {
    colors: {
      primary: {
        base: '#FF6944',
        light: '#F9B666',
        lighter: '#FFF6EA'
      },
      accent: {
        purple: '#4B3069',
        blue: '#0A6B72'
      },
      ultra: {
        light: {
          grey: '#f9f9f9'
        }
      },
      light: {
        grey: '#d4d4d4'
      },
      black: '#291B25',
      white: '#FFFFFF'
    }
  },
  rules: [
    [/bg-border-gradient-associations/, (_, { theme }) => {
      if (!theme.colors) { return }

      // @ts-ignore
      return { background: `linear-gradient(90deg, #fff, #fff), linear-gradient(to bottom right, ${theme.colors.primary.base}, ${theme.colors.primary.light})` }
    }],
    ...gradientsRules
  ],
  variants: [
    (matcher) => {
      if (!matcher.startsWith('blog:')) { return matcher }
      return {
        matcher: matcher.slice(5),
        selector: s => `.blog ${s}`
      }
    }
  ],
  transformers: [
    transformerDirectives()
  ]
})
