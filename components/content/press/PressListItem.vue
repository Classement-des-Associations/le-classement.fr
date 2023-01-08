<script lang="ts" setup>
import { PressArticle } from '~~/types/press-article';

const { article } = defineProps<{
  article: PressArticle
}>()

const datetime = ref(new Date(article.date || Date.now()))
</script>

<template>
  <NuxtLink :href="article.link" target="_blank">
    <div class="overflow-hidden rounded-lg">
      <img v-if="article.image" class="group-hover:scale-[101%] transition-transform duration-200"
        :src="article.image.src" :alt="article.image.alt" loading="lazy">
    </div>
    <div class="mt-2 flex flex-row justify-between text-sm text-black">
      <span>{{ article.press }}</span>
      <time :datetime="datetime.toISOString()">{{
          datetime.toLocaleDateString('fr-FR', {
            year: 'numeric', month: 'long', day: 'numeric'
          })
      }}</time>
    </div>
    <h3 class="mt-2 text-lg text-black font-bold">{{ article.title }}</h3>
  </NuxtLink>
</template>
