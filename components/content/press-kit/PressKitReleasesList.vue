<script lang="ts" setup>
const { releases } = defineProps<{
  releases: {
    title: string
    image: {
      src: string
      alt: string
    }
    date: string
    href: string
  }[]
}>()

const toISOString = function (date: string): string {
  return new Date(date).toISOString()
}

const toLocaleDateString = function (date: string): string {
  return new Date(date).toLocaleDateString('fr')
}
</script>

<template>
  <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
    <template v-for="release in releases" :key="release.title">
      <li class="group">
        <NuxtLink :href="release.href" target="_blank">
          <div class="overflow-hidden rounded-lg">
            <img class="group-hover:scale-[101%] transition-transform duration-200" :src="release.image.src"
              :alt="release.image.alt" loading="lazy">
          </div>
          <h3 class="mt-4 text-lg text-black font-bold">{{ release.title }}</h3>
          <time class="mt-1 text-normal text-black" :datetime="toISOString(release.date)">{{
              toLocaleDateString(release.date)
          }}</time>
        </NuxtLink>
      </li>
    </template>
  </ul>
</template>
