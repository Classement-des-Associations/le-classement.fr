<script lang="ts" setup>
import { ParsedContent } from '@nuxt/content/dist/runtime/types'

defineProps<{
  articles: ParsedContent[];
}>()
</script>

<template>
  <BaseGrid>
    <template v-for="article in articles" :key="article.id">
      <li class="h-full">
        <BlogCard :article="article" class="h-full" />
      </li>
    </template>
  </BaseGrid>
</template>
