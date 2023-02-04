<script lang="ts" setup>
defineProps<{
    sectionClass?: string
  }>()
</script>

<template>
  <BaseSection :class="sectionClass">
    <h2 class="sr-only">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h2>
    <ContentSlot :use="$slots.content" unwrap="p" />
  </BaseSection>
</template>
