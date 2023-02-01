<script lang="ts" setup>
defineProps<{
  sectionClass?: string
  buttonText: string
  buttonLink: string
}>()
</script>

<template>
  <BaseSection :class="sectionClass">
    <h2 class="text-2xl font-bold">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h2>
    <div class="mt-8 flex flex-col items-center">
      <ClassementLink :button-link="buttonLink" :button-text="buttonText" part="partenaires" />
    </div>
  </BaseSection>
</template>
