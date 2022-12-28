<script lang="ts" setup>
defineProps<{
  icon: string
  to: string
}>()
</script>

<template>
  <li>
    <NuxtLink :to="to">
      <HomeItem :icon="icon">
        <template v-slot:title>
          <ContentSlot :use="$slots.title" unwrap="p" />
        </template>
        <template v-slot:description>
          <ContentSlot :use="$slots.description" />
        </template>
      </HomeItem>
    </NuxtLink>
  </li>
</template>
