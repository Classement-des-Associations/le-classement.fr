<script lang="ts" setup>
defineProps<{
  sectionClass?: string
}>()

const proseClass = useProse()
</script>

<template>
  <BaseSection :class="sectionClass">
    <div class="mx-auto" :class="proseClass">
      <slot />
    </div>
  </BaseSection>
</template>
