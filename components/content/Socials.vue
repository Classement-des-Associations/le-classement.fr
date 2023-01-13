<script lang="ts" setup>
import { Social } from '~~/types/socials';

const { socials: defaultSocials } = useAppConfig()

defineProps<{
  start?: boolean
  socials?: Social[]
}>()
</script>

<template>
  <div class="not-prose">
    <p class="sr-only" v-if="$slots.srOnly">
      <ContentSlot :use="$slots.srOnly" unwrap="p"></ContentSlot>
    </p>
    <ul class="flex flex-row gap-6" :class="{ 'justify-evenly': !start }">
      <template v-for="social in socials ?? defaultSocials" :key="social.to">
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
