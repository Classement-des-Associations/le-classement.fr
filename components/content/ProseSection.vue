<script lang="ts" setup>
defineProps<{
  sectionClass?: string
}>()

const proseClass = 'prose prose-zinc prose-img:rounded-lg prose-a:prose-headings:no-underline prose-a:prose-headings:font-semibold prose-table:block prose-table:overflow-y-scroll'
</script>

<template>
  <BaseSection :class="sectionClass">
    <div class="mx-auto" :class="proseClass">
      <slot />
    </div>
  </BaseSection>
</template>
