<script lang="ts" setup>
defineProps<{
  sectionClass?: string
}>()
</script>

<template>
  <section :class="sectionClass" class="mx-auto sm:px-6 lg:px-8 px-4 max-w-7xl pb-16 pt-8">
    <p v-if="$slots.category" class="text-sm font-semibold text-gray-400">
      <ContentSlot :use="$slots.category" unwrap="p"></ContentSlot>
    </p>
    <h2 v-if="$slots.title" class="pb-4 text-2xl font-semibold text-black">
      <ContentSlot :use="$slots.title" unwrap="p"></ContentSlot>
    </h2>
    <p v-if="$slots.description" class="pb-10 prose max-w-none">
      <ContentSlot :use="$slots.description" unwrap="p"></ContentSlot>
    </p>
    <h3 v-if="$slots.titleExtra" class="pb-6 text-lg font-semibold text-black">
      <ContentSlot :use="$slots.titleExtra" unwrap="p"></ContentSlot>
    </h3>
    <ul v-if="$slots.designList" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      <ContentSlot :use="$slots.designList" unwrap="p"></ContentSlot>
    </ul>
  </section>
</template>
