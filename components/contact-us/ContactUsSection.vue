<script lang="ts" setup>
defineProps<{
  sectionClass?: string
}>()
</script>

<template>
  <div class="bg-ultra-light-grey py-14">
    <BaseSection :class="sectionClass">
      <slot />
    </BaseSection>
  </div>
</template>
