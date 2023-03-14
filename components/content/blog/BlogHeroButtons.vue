<script lang="ts" setup>
defineProps<{
  primaryButtonText: string
  primaryButtonLink: string
  secondaryButtonText: string
  secondaryButtonLink: string
}>()
</script>

<template>
  <div class="flex flex-col md:flex-row gap-6">
    <BaseNuxtLink :button-link="primaryButtonLink" :button-text="primaryButtonText" type="primary" />

    <BaseNuxtLink :button-link="secondaryButtonLink" :button-text="secondaryButtonText" type="primary" outline />
  </div>
</template>
