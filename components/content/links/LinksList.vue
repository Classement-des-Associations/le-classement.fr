<script lang="ts" setup>
useSchemaOrg([
  defineItemList()
])
</script>

<template>
  <section class="py-20 px-4 max-w-sm mx-auto">
    <h1 class="sr-only">
      <ContentSlot :use="$slots.default"></ContentSlot>
    </h1>
    <div class="flex flex-col gap-8">
      <ContentSlot :use="$slots.sections"></ContentSlot>
    </div>
  </section>
</template>
