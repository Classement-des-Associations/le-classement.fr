<script lang="ts" setup>
import type { Social } from '~~/types/socials'

defineProps<{
  start?: boolean
  socials?: Social[]
}>()

const { socials: defaultSocials } = useAppConfig()
</script>

<template>
  <div class="not-prose">
    <p v-if="$slots.srOnly" class="sr-only">
      <ContentSlot :use="$slots.srOnly" unwrap="p" />
    </p>
    <ul class="flex flex-row gap-6" :class="{ 'justify-evenly': !start }">
      <template v-for="social in socials ?? defaultSocials" :key="social.to">
        <li
          class="text-black rounded-full p-3 hover:bg-black hover:text-white motion-safe:transition-all motion-safe:ease-in motion-safe:duration-200"
        >
          <NuxtLink target="_blank" :to="social.to">
            <span class="sr-only">{{ social.name }}</span>
            <Icon :name="social.icon" size="40" />
          </NuxtLink>
        </li>
      </template>
    </ul>
  </div>
</template>
