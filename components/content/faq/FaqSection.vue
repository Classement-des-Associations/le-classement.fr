<script lang="ts" setup>
defineProps<{
  sectionClass?: string
  id?: string
}>()
</script>

<template>
  <section class="mx-auto sm:px-6 lg:px-8 px-4 max-w-7xl" :class="sectionClass" :id="id">
    <h2 class="pb-6 text-2xl font-semibold text-black">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h2>
    <ol class="flex flex-col gap-8">
      <ContentSlot :use="$slots.questions" />
    </ol>
  </section>
</template>
