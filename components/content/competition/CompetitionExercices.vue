<script lang="ts" setup>
defineProps<{
  tag?: string
}>()

const { data: exercices } = await useConcoursExercices()
</script>

<template>
  <div v-if="exercices" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 md:gap-10">
    <article v-for="item in exercices.body" :key="item.title">
      <NuxtLink :to="item.to">
        <HomeItem :tag="tag" :icon="item.icon">
          <template #title>
            {{ item.title }}
          </template>
          <template #description>
            {{ item.description }}
          </template>
        </HomeItem>
      </NuxtLink>
    </article>
  </div>
</template>
