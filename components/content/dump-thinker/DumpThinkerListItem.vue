<script lang="ts" setup>
const props = defineProps<{
  buttonText: string
  buttonLink: string
  icon?: string
}>()

const link = useClassementLink(props.buttonLink)
</script>

<template>
  <BaseNuxtLink :button-link="link" :button-text="buttonText" :icon="icon" type="primary" />
</template>
