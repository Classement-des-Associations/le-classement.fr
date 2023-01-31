<script lang="ts" setup>
defineProps<{
  icon: string
  to: string
}>()
</script>

<template>
  <li>
    <NuxtLink :to="to">
      <HomeItem tag="h3" :icon="icon">
        <template #title>
          <ContentSlot :use="$slots.title" unwrap="p" />
        </template>
        <template #description>
          <ContentSlot :use="$slots.description" unwrap="p" />
        </template>
      </HomeItem>
    </NuxtLink>
  </li>
</template>
