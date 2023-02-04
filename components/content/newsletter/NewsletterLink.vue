<script lang="ts" setup>
const newsletterLink = useRuntimeConfig().public.classement.newsletter.subscribeLink
</script>

<template>
  <ClassementLink part="classement" :button-link="newsletterLink" button-text="Recevoir la newsletter" target="_blank" />
</template>
