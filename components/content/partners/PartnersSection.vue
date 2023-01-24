<script lang="ts" setup>
import { ParsedContent } from '@nuxt/content/dist/runtime/types'
import type { Level } from '~~/types/level'

defineProps<{
  sectionClass?: string
}>()

const { data } = usePartners()

const levels: Level[] = ['creator', 'platinum', 'gold', 'silver', 'bronze']
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
      return 'grid grid-cols-2'
  }
}

</script>

<template>
  <BaseSection :class="sectionClass">
    <template v-for="level in levels" :key="level">
      <template v-if="partners[level]">
        <h2 class="pb-4 border-b border-b-light-grey text-center text-xl font-semibold">
          {{ useLevel(level) }}
        </h2>
        <ul :class="useLevelClassGrid(level)" class="mt-4 gap-[2px]">
          <template v-for="partner in partners[level]" :key="partner._id">
            <li class="rounded p-4 bg-ultra-light-grey">
              <NuxtLink :to="partner._path">
                <img :src="partner.image.src" :alt="partner.image.alt">
              </NuxtLink>
            </li>
          </template>
        </ul>
      </template>
    </template>
  </BaseSection>
</template>
