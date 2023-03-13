<script lang="ts" setup>
useSchemaOrg([
  defineWebPage({
    '@type': 'CollectionPage'
  })
])

defineProps<{
  sectionClass?: string;
}>()

const { data: articles } = await useArticles()
</script>

<template>
  <BaseSection :class="sectionClass">
    <h2 class="sr-only">
      <ContentSlot :use="$slots.srTitle" unwrap="p" />
    </h2>
    <BlogList v-if="articles" :articles="articles" />
  </BaseSection>
</template>
