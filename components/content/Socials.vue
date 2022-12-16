<script lang="ts" setup>
const { socials } = useAppConfig()

defineProps<{
  start?: boolean
}>()
</script>

<template>
  <div class="not-prose">
    <p class="sr-only">
      <ContentSlot :use="$slots.srOnly" unwrap="p"></ContentSlot>
    </p>
    <ul class="flex flex-row gap-6" :class="{ 'justify-evenly': !start }">
      <template v-for="social in socials" :key="social.to">
        <li
          class="text-black rounded-full p-3 hover:bg-black hover:text-white motion-safe:transition-all motion-safe:ease-in motion-safe:duration-200">
          <NuxtLink target="_blank" :to="social.to">
            <span class="sr-only">{{ social.name }}</span>
            <Icon :name="social.icon" size="40" />
          </NuxtLink>
        </li>
      </template>
    </ul>
  </div>
</template>
