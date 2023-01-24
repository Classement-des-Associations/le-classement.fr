<script lang="ts" setup>
defineProps<{
  icon: string
}>()
</script>

<template>
  <li>
    <HomeItem v-slot="{titleClass, descriptionClass}" class="h-full" :icon="icon">
      <h3 :class="titleClass">
        <ContentSlot :use="$slots.title" unwrap="p" />
      </h3>
      <p :class="descriptionClass">
        <ContentSlot :use="$slots.description" unwrap="p" />
      </p>
    </HomeItem>
  </li>
</template>
