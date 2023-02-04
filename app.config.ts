export default defineAppConfig({
  classement: {
    tourAsso: {
      registrationLink: 'https://forms.office.com/e/BWbu3wdhVb'
    },
    newsletter: {
      subscribeLink: 'https://25070129.hs-sites-eu1.com/fr/newsletter-du-classement-des-associations'
    },
    battle: {
      registrationLink: 'https://my.weezevent.com/la-battle-du-classement'
    }
  },
  nuxtIcon: {
    aliases: {
      battle: 'fluent-emoji:crossed-swords',
      classement: 'fluent-emoji:sparkles',
      'tour-asso': 'fluent-emoji:telescope',
      concours: 'fluent-emoji:trophy',
      discovery: 'fluent-emoji:rocket',
      'ceremonie-finale': 'fluent-emoji:party-popper',
      'rendu-ecrit': 'fluent-emoji:framed-picture',
      'rendu-video': 'fluent-emoji:video-camera',
      vote: 'fluent-emoji:ballot-box-with-ballot',
      pitch: 'fluent-emoji:microphone',
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
