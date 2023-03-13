<script lang="ts" setup>
import { ParsedContent } from '@nuxt/content/dist/runtime/types'

defineProps<{
  articles: ParsedContent[];
}>()
</script>

<template>
  <BaseGrid>
    <template v-for="article in articles" :key="article.id">
      <li>
        <BlogCard :article="article" />
      </li>
    </template>
  </BaseGrid>
</template>
