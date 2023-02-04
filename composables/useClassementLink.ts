export const useClassementLink = (link?: string) => {
  if (!link) {
    return ''
  }

  if (link.startsWith('/')) {
    return link
  }

  switch (link) {
    case 'tour-asso':
      return useRuntimeConfig().public.classement.tourAsso.registrationLink
    case 'newsletter':
      return useRuntimeConfig().public.classement.newsletter.subscribeLink
    case 'battle':
      return useRuntimeConfig().public.classement.battle.registrationLink
    case 'concours':
      return useRuntimeConfig().public.classement.concours.registrationLink
    default:
      throw new Error(`Unknown classement link: ${link}`)
  }
}
