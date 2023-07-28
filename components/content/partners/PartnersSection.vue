<script lang="ts" setup>
import { ParsedContent } from '@nuxt/content/dist/runtime/types'
import type { Level } from '~~/types/level'

defineProps<{
  sectionClass?: string
}>()

const { data } = await usePartners()

const levels: Level[] = ['creator', 'media', 'platinum', 'gold', 'silver', 'bronze', 'heart']
const partners = ref<Record<Level, ParsedContent[]>>({} as Record<Level, ParsedContent[]>)

partners.value = data.value?.reduce((acc, partner) => {
  if (!acc[partner.level as Level]) {
    acc[partner.level as Level] = []
  }
  acc[partner.level as Level].push(partner)
  return acc
}, {} as Record<Level, ParsedContent[]>) ?? {} as Record<Level, ParsedContent[]>

const useLevelClassGrid = function (level: Level) {
  switch (level) {
    case 'creator':
      return 'grid grid-cols-1 md:grid-cols-4'
    case 'media':
      return 'grid grid-cols-1 md:grid-cols-3'
    case 'platinum':
      return 'grid grid-cols-2'
    case 'gold':
      return 'grid grid-cols-3'
    case 'silver':
      return 'grid grid-cols-4'
    case 'bronze':
      return 'grid grid-cols-5'
    case 'heart':
      return 'grid grid-cols-1 md:grid-cols-5'
  }
}

const useItemClass = function (level: Level) {
  switch (level) {
    case 'creator':
      return 'md:col-start-2 md:col-end-4 max-h-48'
    case 'media':
      return 'max-h-48'
    case 'platinum':
      return 'max-h-40'
    case 'gold':
      return 'max-h-32'
    case 'silver':
      return 'max-h-24'
    case 'bronze':
      return 'max-h-20'
    case 'heart':
      return 'max-h-48'
  }
}
</script>

<template>
  <BaseSection :class="sectionClass" class="flex flex-col gap-16">
    <template v-for="level in levels" :key="level">
      <template v-if="partners[level]">
        <div>
          <h2 class="pb-4 border-b border-b-light-grey text-center text-xl font-semibold">
            {{ useLevel(level) }}
          </h2>
          <ul :class="useLevelClassGrid(level)" class="mt-4 gap-8">
            <template v-for="partner in partners[level]" :key="partner._id">
              <li :class="useItemClass(level)">
                <NuxtLink class="w-full h-full flex flex-col items-center rounded p-8" :to="partner.externalLink ?? partner._path" :rel="partner.rel">
                  <img :src="partner.image.src" :alt="partner.image.alt" class="h-full object-contain">
                </NuxtLink>
              </li>
            </template>
          </ul>
        </div>
      </template>
    </template>
  </BaseSection>
</template>
