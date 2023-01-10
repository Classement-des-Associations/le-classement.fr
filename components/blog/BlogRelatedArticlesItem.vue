<script lang="ts" setup>
import { ParsedContent } from '@nuxt/content/dist/runtime/types';

defineProps<{ article: ParsedContent }>()
</script>

<template>
  <li>
    <NuxtLink :to="article._path">
      {{ article.title }}
    </NuxtLink>
  </li>
</template>
