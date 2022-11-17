export default defineNuxtConfig({
  schemaOrg: {
    canonicalHost: "https://le-classement.fr",
    defaultLanguage: "fr",
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "fr",
      },
      meta: [
        {
          name: "google-site-verification",
          content: "TdbVQQq00musVnOqyiFS2ulrIvi29dUNAhPXtGXWags",
        },
        {
          hid: "og:site_name",
          property: "og:site_name",
          content: "Le Classement des Associations",
        },
        { hid: "og:type", property: "og:type", content: "website" },
        { hid: "twitter:site", name: "twitter:site", content: "@Leclassement" },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://le-classement.fr/preview.png",
        },
        {
          hid: "og:image:secure_url",
          property: "og:image:secure_url",
          content: "https://le-classement.fr/preview.png",
        },
        {
          hid: "og:image:alt",
          property: "og:image:alt",
          content: "Image d'illustration pour le classement",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "https://le-classement.fr/preview.png",
        },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" },
        { rel: "shortcut icon", type: "image/png", href: "/favicon.png" },
        { rel: "author", type: "text/plain", href: "/humans.txt" },
      ],
    },
  },
  runtimeConfig: {
    public: {
      formUrl: process.env.FORM_URL,
      emailTo: process.env.EMAIL_TO,
      phoneTo: process.env.PHONE_TO,
      microsoftClarityID: process.env.MICROSOFT_CLARITY_ID,
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@vueuse/nuxt",
    "nuxt-icon",
    "nuxt-schema-org",
  ],
  content: {
    documentDriven: true,
  },
  routeRules: {
    // "/**/": { static: true },
  },
});
