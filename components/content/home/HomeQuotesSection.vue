<script lang="ts" setup>
defineProps<{
  sectionClass?: string
}>()
</script>

<template>
  <BaseSection :class="sectionClass">
    <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
      <ContentSlot :use="$slots.default" unwrap="p" />
    </ul>
  </BaseSection>
</template>
