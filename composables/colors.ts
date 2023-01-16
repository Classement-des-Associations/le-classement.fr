import type { Ref } from 'vue'
import type { Part } from '~~/types/part'

type TextColor = string
type BackgroundColor = string
type BorderColor = string
type BackgroundGradient = `bg-${Part}`
type LineColor = `bg-line-${Part}`

interface Colors {
  textColor: TextColor | null
  backgroundColor: BackgroundColor | null
  lineColor: LineColor | null
  borderColor: BorderColor | null
  backgroundGradient: BackgroundGradient | null
}

export const useColorsByPart = (type: Part): Ref<Colors> => {
  const colors: Colors = {
    textColor: 'text-primary-base',
    backgroundColor: 'bg-primary-base',
    lineColor: `bg-line-${type}`,
    borderColor: 'border-primary-base',
    backgroundGradient: `bg-${type}`,
  }

  switch (type) {
    case 'classement':
    case 'concours':
    case 'ceremonie-finale':
      colors.textColor = 'text-primary-base'
      colors.backgroundColor = 'bg-primary-base'
      colors.borderColor = 'border-primary-base'
      break
    case 'partenaires':
      colors.textColor = 'text-accent-blue'
      colors.backgroundColor = 'bg-accent-blue'
      colors.borderColor = 'border-accent-blue'
      break
    case 'tour-asso':
      colors.textColor = 'text-accent-purple'
      colors.backgroundColor = 'bg-accent-purple'
      colors.borderColor = 'border-accent-purple'
      break
    case 'discovery':
      colors.textColor = 'text-primary-variation-1'
      colors.backgroundColor = 'bg-primary-variation-1'
      colors.borderColor = 'border-primary-variation-1'
      break
    case 'blog':
      colors.textColor = null
      colors.backgroundColor = null
      colors.lineColor = null
      colors.borderColor = null
      colors.backgroundGradient = null
      break
    default:
      colors.textColor = 'text-primary-base'
      colors.backgroundColor = 'bg-primary-base'
      colors.borderColor = 'border-primary-base'
      break
  }

  return ref(colors)
}
