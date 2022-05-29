<script lang="ts" setup>
import './assets/css/tailwind.css'

useHead({
  titleTemplate: '%s - Le Classement des Associations',
  htmlAttrs: {
    lang: 'fr'
  }
})
</script>

<template>
  <div>
    <TheHeader />
    <main>
      <NuxtPage />
    </main>
    <TheFooter />
  </div>
</template>

