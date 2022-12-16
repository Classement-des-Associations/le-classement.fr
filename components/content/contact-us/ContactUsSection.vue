<script lang="ts" setup>
defineProps<{
  sectionClass?: string
}>()
</script>

<template>
  <BaseSection :class="sectionClass" class="bg-ultra-light-grey py-14">
    <h1 class="sr-only">
      <ContentSlot :use="$slots.srOnly" unwrap="p"></ContentSlot>
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
      <ContentSlot :use="$slots.content" unwrap="p"></ContentSlot>
    </div>
  </BaseSection>
</template>
