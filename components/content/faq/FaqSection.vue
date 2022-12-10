<script lang="ts" setup>
defineProps<{
  sectionClass?: string
  id?: string
}>()
</script>

<template>
  <section :class="sectionClass" :id="id">
    <h2>
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h2>
    <ol>
      <ContentSlot :use="$slots.questions" />
    </ol>
  </section>
</template>
