<script lang="ts" setup>
defineProps<{
  icon: string
}>()
</script>

<template>
  <li>
    <HomeItem class="h-full" :icon="icon" v-slot="{titleClass, descriptionClass}">
      <h3 :class="titleClass">
        <ContentSlot :use="$slots.title" unwrap="p" />
      </h3>
      <p :class="descriptionClass">
        <ContentSlot :use="$slots.description" unwrap="p" />
      </p>
    </HomeItem>
  </li>
</template>
