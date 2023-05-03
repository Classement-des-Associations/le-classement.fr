<script lang="ts" setup>
defineProps<{
  sectionClass?: string
}>()
</script>

<template>
  <!-- Need to be rework and simplify -->
  <section :class="sectionClass" class="mx-auto sm:px-6 lg:px-8 px-4 max-w-7xl">
    <p v-if="$slots.category" class="text-sm font-semibold text-zinc-400">
      <ContentSlot :use="$slots.category" unwrap="p" />
    </p>
    <h2 v-if="$slots.title" class="pb-4 text-2xl font-semibold text-black">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h2>
    <h3 v-if="$slots.titleExtra" class="pb-6 text-lg font-semibold text-black">
      <ContentSlot :use="$slots.titleExtra" unwrap="p" />
    </h3>
    <div v-if="$slots.typography" class="prose max-w-none">
      <ContentSlot :use="$slots.typography" />
    </div>
    <div v-if="$slots.content">
      <ContentSlot :use="$slots.content" />
    </div>
  </section>
</template>
