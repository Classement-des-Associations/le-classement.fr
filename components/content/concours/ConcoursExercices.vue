<script lang="ts" setup>
const { data: exercices } = await useConcoursExercices()
</script>

<template>
  <div v-if="exercices" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
    <article v-for="item in exercices.body" :key="item.title">
      <NuxtLink :to="item.to">
        <HomeItem v-slot="{ titleClass, descriptionClass }" class="h-full" :icon="item.icon">
          <h2 :class="titleClass">
            {{ item.title }}
          </h2>
          <p :class="descriptionClass">
            {{ item.description }}
          </p>
        </HomeItem>
      </NuxtLink>
    </article>
  </div>
</template>
