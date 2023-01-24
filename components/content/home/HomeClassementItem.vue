<script lang="ts" setup>
defineProps<{
  icon: string
  to: string
}>()
</script>

<template>
  <li>
    <NuxtLink :to="to">
      <HomeItem v-slot="{titleClass, descriptionClass}" :icon="icon">
        <h3 :class="titleClass">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h3>
        <p :class="descriptionClass">
          <ContentSlot :use="$slots.description" unwrap="p" />
        </p>
      </HomeItem>
    </NuxtLink>
  </li>
</template>
