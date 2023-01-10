<script lang="ts" setup>
import { PressArticle } from '~~/types/press-article';

const { article } = defineProps<{
  article: PressArticle
}>()

const datetime = useDateToISOString(article.date)
const formattedDate = useDateToLocaleDateString(article.date)
</script>

<template>
  <NuxtLink :href="article.link" target="_blank">
    <div class="overflow-hidden rounded-lg">
      <img v-if="article.image" class="group-hover:scale-[101%] transition-transform duration-200"
        :src="article.image.src" :alt="article.image.alt" loading="lazy">
    </div>
    <div class="mt-2 flex flex-row justify-between text-sm text-black gap-2">
      <span>{{ article.press }}</span>
      <time class="shrink-0" :datetime="datetime">{{
        formattedDate
      }}</time>
    </div>
    <h3 class="mt-2 text-lg text-black font-bold">{{ article.title }}</h3>
  </NuxtLink>
</template>
