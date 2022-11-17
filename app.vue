<script lang="ts" setup>
useHead({
  title: 'Le Classement des Associations',
  titleTemplate: (title) => {
    if (title === 'Le Classement des Associations') {
      return title
    }

    return `${title} - Le Classement des Associations`
  },
})

useSchemaOrg([
  defineOrganization({
    name: 'Le Classement des Associations',
    logo: '/logo.png',
    sameAs: [
      'https://www.linkedin.com/company/le-classement',
      'https://www.instagram.com/leclassement/',
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

