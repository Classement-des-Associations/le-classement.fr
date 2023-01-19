<script lang="ts" setup>
defineProps<{
  to: string
}>()
</script>

<template>
  <BaseNuxtLink :to="to"
    class="relative bg-white border-2 border-transparent bg-border-gradient-associations before:content-empty before:absolute before:transition before:duration-200 before:rounded-lg before:opacity-0 hover:before:opacity-75 before:-inset-0.5 before:bg-gradient-to-r before:from-primary-base before:to-primary-light before:blur-md before:z-[-1]">
    <slot> </slot>
  </BaseNuxtLink>
</template>

<style scoped>
a {
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
}
</style>
