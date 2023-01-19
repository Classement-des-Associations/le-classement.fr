import { Rule } from '@unocss/core'
import { Theme } from '@unocss/preset-uno'

const gradients = [
  {
    name: 'classement',
    angle: '150deg',
    from: {
      color: {
        name: 'primary',
        key: 'base'
      },
      percentage: '15%'
    },
    to: {
      color: {
        name: 'primary',
        key: 'light'
      },
      percentage: '100%'
    }
  },
  {
    name: 'ceremonie-finale',
    angle: '150deg',
    from: {
      color: {
        name: 'primary',
        key: 'base'
      },
      percentage: '15%'
    },
    to: {
      color: {
        name: 'primary',
        key: 'light'
      },
      percentage: '100%'
    }
  },
  {
    name: 'discovery',
    angle: '200deg',
    from: {
      color: {
        name: 'primary',
        key: 'base'
      },
      percentage: '50%'
    },
    to: {
      color: {
        name: 'primary',
        key: 'light'
      },
      percentage: '80%'
    }
  },
  {
    name: 'concours',
    angle: '150deg',
    from: {
      color: {
        name: 'primary',
        key: 'base'
      },
      percentage: '15%'
    },
    to: {
      color: {
        name: 'primary',
        key: 'light'
      },
      percentage: '100%'
    }
  },
  {
    name: 'tour-asso',
    angle: '135deg',
    from: {
      color: {
        name: 'primary',
        key: 'base'
      },
      percentage: '10%'
    },
    to: {
      color: {
        name: 'accent',
        key: 'purple'
      },
      percentage: '100%'
    }

  },
  {
    name: 'partenaires',
    angle: '150deg',
    from: {
      color: {
        name: 'accent',
        key: 'purple'
      },
      percentage: '0%'
    },
    to: {
      color: {
        name: 'accent',
        key: 'blue'
      },
      percentage: '80%'
    }
  }
]

export const gradientsRules: Rule<Theme>[] = gradients.map((gradient) => {
  return [
    new RegExp(`bg-gradient-${gradient.name}`),
    (_, { theme }) => {
      if (!theme.colors) { return }

      return {
        // @ts-ignore
        'background-image': `linear-gradient(${gradient.angle}, ${theme.colors[gradient.from.color.name][gradient.from.color.key]} ${gradient.from.percentage}, ${theme.colors[gradient.to.color.name][gradient.to.color.key]} ${gradient.to.percentage})`
      }
    }
  ]
})
