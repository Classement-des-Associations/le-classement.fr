<script lang="ts" setup>
defineProps<{
  icon: string
}>()
</script>

<template>
  <li>
    <HomeItem :icon="icon">
      <template v-slot:title>
        <ContentSlot :use="$slots.title" unwrap="p" />
      </template>
      <template v-slot:description>
        <ContentSlot :use="$slots.description" />
      </template>
    </HomeItem>
  </li>
</template>
