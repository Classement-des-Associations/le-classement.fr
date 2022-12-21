export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      microsoftClarityID: process.env.MICROSOFT_CLARITY_ID,
      indexable: true,
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@vueuse/nuxt",
    "nuxt-icon",
    "nuxt-schema-org",
    "@nuxtjs/fontaine",
    "nuxt-simple-robots",
  ],
  schemaOrg: {
    canonicalHost: "https://le-classement.fr",
    defaultLanguage: "fr-FR",
    tagPosition: "head",
  },
  robots: {
    sitemap: "https://le-classement.fr/sitemap.xml",
  },
  content: {
    documentDriven: true,
    defaultLocale: "fr",
    navigation: {
      fields: ["for"],
    },
  },
  routeRules: {
    // "/**/": { static: true },
  },
});
