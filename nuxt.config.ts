export default defineNuxtConfig({
  extends: ['nuxt-seo-kit'],
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontaine',
    '@nuxt/content',
    'nuxt-icon'
  ],

  experimental: {
    componentIslands: true
  },

  runtimeConfig: {
    public: {
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
      surround: false
    },
    defaultLocale: 'fr',
    navigation: {
      fields: ['for']
    }
  },

  ogImage: {
    fonts: ['Montserrat:700']
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
      routes: ['/', '/design-kit', '/le-pense-bete', '/associations'],
      crawlLinks: true
    }
  }
})
