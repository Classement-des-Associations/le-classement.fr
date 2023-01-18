import { Rule } from '@unocss/core'

const gradients = [
  {
    name: 'classement',
    angle: '150deg',
    from: {
      color: 'primary-base',
      percentage: '15%'
    },
    to: {
      color: 'primary-light',
      percentage: '100%'
    }
  },
  {
    name: 'ceremonie-finale',
    angle: '150deg',
    from: {
      color: 'primary-base',
      percentage: '15%'
    },
    to: {
      color: 'primary-light',
      percentage: '100%'
    }
  },
  {
    name: 'discovery',
    angle: '200deg',
    from: {
      color: 'primary-base',
      percentage: '50%'
    },
    to: {
      color: 'primary-light',
      percentage: '80%'
    }
  },
  {
    name: 'concours',
    angle: '150deg',
    from: {
      color: 'primary-base',
      percentage: '15%'
    },
    to: {
      color: 'primary-light',
      percentage: '100%'
    }
  },
  {
    name: 'tour-asso',
    angle: '135deg',
    from: {
      color: 'primary-base',
      percentage: '10%'
    },
    to: {
      color: 'accent-purple',
      percentage: '100%'
    }

  },
  {
    name: 'partenaires',
    angle: '150deg',
    from: {
      color: 'accent-purple',
      percentage: '0%'
    },
    to: {
      color: 'accent-blue',
      percentage: '80%'
    }
  },
]


export const gradientsRules = gradients.map((gradient): Rule => {
  return [
    new RegExp(`bg-gradient-${gradient.name}`),
    (_, { theme }) => {
      return {
        'background-image': `linear-gradient(${gradient.angle}, ${theme.colors[gradient.from.color]} ${gradient.from.percentage}, ${theme.colors[gradient.to.color]} ${gradient.to.percentage})`
      }
    }
  ]
})
