<script lang="ts" setup>
defineProps<{
  is?: string
}>()
</script>

<template>
  <component :is="is ?? 'section'" class="mx-auto sm:px-6 lg:px-8 px-4 max-w-7xl">
    <slot />
  </component>
</template>
