<script lang="ts" setup>
import type { PressArticle } from '~~/types/press-article'

const props = defineProps<{
  article: PressArticle
}>()

const datetime = useDateToISOString(props.article.date)
const formattedDate = useDateToLocaleDateString(props.article.date)
</script>

<template>
  <NuxtLink :href="article.link" class="group">
    <div class="overflow-hidden rounded-lg">
      <img
        v-if="article.image"
        class="group-hover:scale-[101%] transition-transform duration-200 aspect-video w-full"
        :src="article.image.src"
        :alt="article.image.alt"
        loading="lazy"
        height="300"
        width="400"
      >
    </div>
    <div
      class="mt-2 flex flex-row text-sm text-black gap-2"
      :class="{
        'justify-between': article.press, 'justify-end': !article.press,
      }"
    >
      <dl v-if="article.press">
        <dt class="sr-only">
          Publié sur
        </dt>
        <dd>{{ article.press }}</dd>
      </dl>
      <time class="shrink-0" :datetime="datetime">{{
        formattedDate
      }}</time>
    </div>
    <h3 class="mt-2 text-lg text-black font-bold">
      {{ article.title }}
    </h3>
  </NuxtLink>
</template>
