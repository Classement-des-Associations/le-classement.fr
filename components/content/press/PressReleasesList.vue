<script lang="ts" setup>
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import type { PressArticle } from '~~/types/press-article'

const { limit } = defineProps<{
  limit?: number
}>()

const { data: releases } = await usePressReleases(limit)

const toArticle = (release: Pick<ParsedContent, string>): PressArticle => {
  return {
    title: release.title!,
    date: release.datePublished,
    link: release._path!,
    image: release.image,
  }
}
</script>

<template>
  <PressArticlesList v-if="releases">
    <template v-for="release in releases" :key="release.title">
      <li>
        <PressArticlesItem :article="toArticle(release)" />
      </li>
    </template>
  </PressArticlesList>
</template>
