import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'shortcut icon', type: 'image/png', href: '/favicon.png' },
      ],
    },
  },
  runtimeConfig: {
    public: {
      formUrl: process.env.FORM_URL,
      emailTo: process.env.EMAIL_TO,
      phoneTo: process.env.PHONE_TO,
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@vueuse/nuxt'],
})
