<script setup lang="ts">
const props = defineProps<{
  sectionClass?: string
  categories: string[]
}>()

const { data: articles } = await useArticlesByCategories(props.categories, 3)
</script>

<template>
  <BaseSection :class="sectionClass">
    <h2 class="sr-only">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h2>
    <ol class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
      <template v-for="article in articles" :key="article._path">
        <li>
          <BlogCard :article="article" class="h-full" />
        </li>
      </template>
    </ol>
  </BaseSection>
</template>
