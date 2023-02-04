<script lang="ts" setup>
const newsletterLink = useAppConfig().classement.newsletter.subscribeLink
</script>

<template>
  <ClassementLink part="classement" :button-link="newsletterLink" button-text="Recevoir la newsletter" />
</template>
