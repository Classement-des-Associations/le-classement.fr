<script lang="ts" setup>
import './assets/css/tailwind.css'

useHead({
  htmlAttrs: {
    lang: 'fr'
  },
  meta: [
    {
      name: "google-site-verification",
      content: "TdbVQQq00musVnOqyiFS2ulrIvi29dUNAhPXtGXWags"
    }
  ],
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

