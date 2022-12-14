<script lang="ts" setup>
const { socials } = useAppConfig()
</script>

<template>
  <div class="not-prose">
    <ul class="flex flex-row justify-evenly">
      <template v-for="social in socials" :key="social.to">
        <li class="text-black hover:text-black/80 motion-safe:transition-all duration-300">
          <NuxtLink target="_blank" :to="social.to">
            <span class="sr-only">{{ social.name }}</span>
            <Icon :name="social.icon" size="40" />
          </NuxtLink>
        </li>
      </template>
    </ul>
  </div>
</template>
