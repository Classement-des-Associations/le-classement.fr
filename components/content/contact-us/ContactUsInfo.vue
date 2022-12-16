<script lang="ts" setup>
defineProps<{
  mail?: string
  tel?: string
}>()
</script>

<template>
  <div>
    <h2 class="text-2xl md:text-3xl font-bold">
      <ContentSlot :use="$slots.title" unwrap="p"></ContentSlot>
    </h2>
    <div class="mt-8 px-4 py-6 flex flex-col bg-white text-sm">
      <NuxtLink :to="'tel:' + tel" class="py-3 flex flex-row space-x-4 items-center">
        <Icon name="heroicons:device-phone-mobile" class="w-6 h-6" />
        <span>
          {{ tel }}
        </span>
      </NuxtLink>
      <NuxtLink :to="'mailto:' + mail" class="py-3 flex flex-row space-x-4 items-center">
        <Icon name="heroicons:envelope" class="w-6 h-6" />
        <span>
          {{ mail }}
        </span>
      </NuxtLink>
    </div>
    <div class="mt-8" v-if="$slots.socials">
      <ContentSlot :use="$slots.socials" unwrap="p"></ContentSlot>
    </div>
  </div>
</template>
