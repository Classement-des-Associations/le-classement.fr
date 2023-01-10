<script lang="ts" setup>
import { PressArticle } from '~~/types/press-article';

defineProps<{
  articles: PressArticle[]
}>()
</script>

<template>
  <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <template v-for="article in articles" :key="article.title">
      <li class="group">
        <PressListItem :article="article">
        </PressListItem>
      </li>
    </template>
  </ul>
</template>
