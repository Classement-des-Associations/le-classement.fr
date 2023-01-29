<script lang="ts" setup>
defineProps<{
  buttonText: string
  buttonLink: string
}>()
</script>

<template>
  <div class="not-prose flex flex-row justify-center">
    <BaseNuxtLink :button-text="buttonText" :button-link="buttonLink" type="primary" />
  </div>
</template>
