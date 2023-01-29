<script lang="ts" setup>
defineProps<{
  buttonText: string
  buttonLink: string
  icon?: string
}>()
</script>

<template>
  <BaseNuxtLink :button-link="buttonLink" :button-text="buttonText" :icon="icon" type="primary" />
</template>
