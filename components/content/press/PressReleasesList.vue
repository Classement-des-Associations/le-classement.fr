<script lang="ts" setup>
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import type { PressArticle } from '~~/types/press-article'

const props = defineProps<{
  limit?: number
}>()

const { data: releases } = await usePressReleases(props.limit)

const toArticle = (release: Pick<ParsedContent, string>): PressArticle => {
  return {
    title: release.title!,
    date: release.datePublished,
    link: release._path!,
    image: release.image,
    press: release.press
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
