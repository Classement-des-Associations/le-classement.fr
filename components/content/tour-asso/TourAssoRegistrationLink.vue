<script lang="ts" setup>
defineProps<{
  buttonText: string
}>()

const tourAssoLink = useRuntimeConfig().public.classement.tourAsso.registrationLink
</script>

<template>
  <CenteredLink :button-link="tourAssoLink" :button-text="buttonText" part="tour-asso" />
</template>
