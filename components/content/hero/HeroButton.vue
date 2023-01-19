<script setup lang="ts">
defineProps<{
  href: string
  target?: string
  filled?: boolean
  disabled?: boolean
  title?: string
}>()
</script>

<template>
  <AtomsAppLink :to="href" :target="target" :filled="filled" :disabled="disabled" :title="title">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </AtomsAppLink>
</template>
