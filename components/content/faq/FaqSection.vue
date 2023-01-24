<script lang="ts" setup>
defineProps<{
  sectionClass?: string
  id?: string
}>()
</script>

<template>
  <BaseSection :id="id" :class="sectionClass">
    <h2 class="pb-6 text-2xl font-semibold text-black">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h2>
    <ol class="flex flex-col gap-8">
      <ContentSlot :use="$slots.questions" />
    </ol>
  </BaseSection>
</template>
