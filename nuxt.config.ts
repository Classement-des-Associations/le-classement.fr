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
      microsoftClarityID: process.env.MICROSOFT_CLARITY_ID,
      siteUrl: 'https://le-classement.fr/',
      siteName: 'Le Classement des Associations',
      siteDescription:
        'L\'aventure humaine de référence qui rassemble, promeut et valorise la vie associative étudiante.',
      language: 'fr-FR',
      titleSeparator: '·'
    }
  },

  content: {
    documentDriven: true,
    defaultLocale: 'fr',
    navigation: {
      fields: ['for']
    }
  },

  app: {
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
      routes: ['/', '/design-kit', '/le-pense-bete', '/associations'],
      crawlLinks: true
    }
  }
})
