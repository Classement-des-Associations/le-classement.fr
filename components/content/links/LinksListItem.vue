<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <NuxtLink
    class="flex flex-row justify-center items-center gap-2 rounded-xl bg-primary-base text-white px-1 py-2 hover:bg-primary-base hover:bg-opacity-[85%] transition-colors ease-in"
    :to="to">
    <Icon v-if="icon" :name="icon" />
    <span>
      {{ text }}
    </span>
  </NuxtLink>
</template>
