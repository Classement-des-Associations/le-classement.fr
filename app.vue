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
  <Html dir="ltr" lang="fr" :class="htmlClass">

    <Head>

    </Head>

    <Body class="bg-white blog:bg-primary-variation-2">
      <TheHeader />
      <main>
        <NuxtPage />
      </main>
      <TheFooter />
    </Body>

  </Html>
</template>

