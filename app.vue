<script lang="ts" setup>
useSchemaOrg([
  defineOrganization({
    name: 'Le Classement des Associations',
    logo: '/logo.png',
    sameAs: [
      'https://www.linkedin.com/company/le-classement',
      'https://www.instagram.com/leclassement/',
      'https://www.facebook.com/le.classement',
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

