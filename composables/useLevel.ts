import { Level } from '~~/types/level'

export const useLevel = (level: Level) => {
  switch (level) {
    case 'creator':
      return 'Créateur'
    case 'media':
      return 'Média'
    case 'platinum':
      return 'Platinum'
    case 'gold':
      return 'Gold'
    case 'silver':
      return 'Silver'
    case 'bronze':
      return 'Bronze'
  }
}
