import type { Ref } from 'vue'
import type { Social } from '~~/types/socials'

export const useSocials = (
  nameTemplate: string,
  socialsLinks: {
    website?: string
    linkedin?: string
    instagram?: string
  }
): Ref<Social[]> => {
  const { website, linkedin, instagram } = socialsLinks

  const socials: Social[] = []

  if (website) {
    socials.push({
      name: nameTemplate.replace('%s', 'site web'),
      to: website,
      icon: 'website'
    })
  }

  if (linkedin) {
    socials.push({
      name: nameTemplate.replace('%s', 'linkedin'),
      to: linkedin,
      icon: 'linkedin'
    })
  }

  if (instagram) {
    socials.push({
      name: nameTemplate.replace('%s', 'instagram'),
      to: instagram,
      icon: 'instagram'
    })
  }

  return ref(socials)
}
