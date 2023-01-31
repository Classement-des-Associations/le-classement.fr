<script lang="ts" setup>
defineProps<{
  sectionClass?: string
}>()

</script>

<template>
  <BaseSection :class="sectionClass">
    <ConcoursExercices />
  </BaseSection>
</template>
