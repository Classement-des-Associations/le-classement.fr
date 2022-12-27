<script lang="ts" setup>
const router = useRouter()

const isBlog = computed(() => router.currentRoute.value.path.includes('blog'))
const htmlClass = computed(() => {
  if (isBlog.value) {
    return 'blog'
  }

  return ''
})

useHead({
  title: 'Le Classement des Associations',
  titleTemplate: (title) => {
    if (title === 'Le Classement des Associations') {
      return title
    }

    return `${title} - Le Classement des Associations`
  },
  htmlAttrs: {
    lang: 'fr',
    class: htmlClass,
  },
  bodyAttrs: {
    class: 'bg-white blog:bg-primary-variation-2',
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
  ],
  link: [
    { rel: "icon", type: "image/png", href: "/favicon.png" },
    { rel: "author", type: "text/plain", href: "/humans.txt" },
  ],
})

defineRobotMeta()

useSchemaOrg([
  defineOrganization({
    name: 'Le Classement des Associations',
    logo: '/logo.png',
    sameAs: [
      'https://www.linkedin.com/company/classement-des-associations/',
      'https://www.instagram.com/classementdesassociations/',
      'https://twitter.com/Leclassement',
    ],
  }),
  defineWebSite({
    name: 'Le Classement des Associations'
  }),
  defineWebPage(),
])
</script>

<template>
  <div>
    <TheHeader />
    <NuxtPage />
    <TheFooter />
  </div>
</template>

