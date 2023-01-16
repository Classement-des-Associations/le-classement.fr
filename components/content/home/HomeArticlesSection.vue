<script setup lang="ts">
const { categories } = defineProps<{
  sectionClass?: string
  categories: string[]
}>()

const { data: articles } = await useArticlesByCategories(categories, 3)
</script>

<template>
  <BaseSection :class="sectionClass">
    <h2 class="sr-only">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h2>
    <ol class="grid grid-cols-3 gap-16">
      <template v-for="article in articles">
        <li>
          <BlogCard :article="article" class="h-full" />
        </li>
      </template>
    </ol>
  </BaseSection>
</template>
