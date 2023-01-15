<script lang="ts" setup>
defineProps<{
  to: string;
}>();
</script>

<template>
  <BaseNuxtLink :to="to"
    class="relative gradient-border-2 border-gradient-br-associations-white before:absolute before:transition before:duration-200 before:rounded-lg before:opacity-0 hover:before:opacity-75 before:-inset-0.5 before:bg-gradient-to-r before:from-primary-base before:to-primary-variation-1 before:blur-md before:z-[-1]">
    <slot> </slot>
  </BaseNuxtLink>
</template>
