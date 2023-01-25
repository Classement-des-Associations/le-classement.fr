export default defineAppConfig({
  showActionButton: false,
  actionButton: {
    to: '',
    text: ''
  },
  nuxtIcon: {
    aliases: {
      instagram: 'mdi:instagram',
      linkedin: 'mdi:linkedin',
      twitter: 'mdi:twitter',
      website: 'mdi:web'
    }
  },
  socials: [
    {
      name: 'Instagram',
      to: 'https://www.instagram.com/leclassement/',
      icon: 'instagram'
    },
    {
      name: 'LinkedIn',
      to: 'https://www.linkedin.com/company/le-classement/',
      icon: 'linkedin'
    },
    {
      name: 'Twitter',
      to: 'https://twitter.com/leclassement',
      icon: 'twitter'
    }
  ]
})
