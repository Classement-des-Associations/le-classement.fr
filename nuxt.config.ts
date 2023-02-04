export default defineNuxtConfig({
  extends: ['nuxt-seo-kit'],
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontaine',
    '@nuxt/content',
    'nuxt-icon'
  ],

  runtimeConfig: {
    public: {
      siteUrl: 'https://le-classement.fr/',
      siteName: 'Le Classement des Associations',
      siteDescription:
        'L\'aventure humaine de référence qui rassemble, promeut et valorise la vie associative étudiante.',
      language: 'fr-FR',
      titleSeparator: '·',
      classement: {
        tourAsso: {
          registrationLink: process.env.TOUR_ASSO_REGISTRATION_LINK
        },
        concours: {
          registrationLink: process.env.CONCOURS_REGISTRATION_LINK
        },
        newsletter: {
          subscribeLink: process.env.NEWSLETTER_SUBSCRIBE_LINK
        },
        battle: {
          registrationLink: process.env.BATTLE_REGISTRATION_LINK
        }
      }
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
      routes: ['/', '/design-kit', '/le-pense-bete', '/associations', '/newsletter', '/newsletter/merci', '/404'],
      crawlLinks: true
    }
  },

  routeRules: {
    '/newsletter/merci': { index: false }
  }
})
