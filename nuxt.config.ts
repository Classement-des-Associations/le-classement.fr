export default defineNuxtConfig({
  extends: ['@classement-des-associations/website-theme'],

  modules: [
    '@vueuse/nuxt',
    'nuxt-clarity-analytics'
  ],

  runtimeConfig: {
    public: {
      newsletterSubscriptionLink: 'https://example.com',
      concoursRegistrationLink: 'https://example.com',
      tourAssoRegistrationLink: 'https://example.com',
      writeForClassement: 'https://example.com',
      afterworkBattleRegistrationLink: 'https://example.com',
      afterworkToulouseRegistrationLink: 'https://example.com',
      bookAnAppointmentLink: 'https://example.com',
      siteUrl: 'https://le-classement.fr/',
      siteName: 'Le Classement des Associations',
      siteDescription:
        'L\'aventure humaine de référence qui rassemble, promeut et valorise la vie associative étudiante.',
      language: 'fr-FR',
      titleSeparator: '·'
    }
  },

  content: {
    documentDriven: {
      host: 'https://le-classement.fr',
      surround: false
    },
    defaultLocale: 'fr',
    navigation: {
      fields: ['for', 'dropdown']
    }
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'author', type: 'text/plain', href: '/humans.txt' }
      ],
      meta: [
        {
          name: 'google-site-verification',
          content: 'TdbVQQq00musVnOqyiFS2ulrIvi29dUNAhPXtGXWags'
        }
      ]
    }
  },

  nitro: {
    prerender: {
      routes: ['/', '/design-kit', '/le-pense-bete', '/associations', '/newsletter', '/newsletter/merci', '/404', '/classement/palmares'],
      crawlLinks: true
    }
  },

  routeRules: {
    '/newsletter/merci': { index: false }
  }
})
