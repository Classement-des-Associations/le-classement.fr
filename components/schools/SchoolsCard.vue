<script lang="ts" setup>
import { School } from '~~/types/school'

defineProps<{
  school: School
}>()
</script>

<template>
  <article class="flex flex-col items-start px-4 py-8 rounded-xl bg-ultra-light-grey relative">
    <h2 class="mt-4 text-3xl text-black font-semibold">
      <NuxtLink :to="`/ecoles/${school.id}`">
        <div class="absolute inset-0" />
        {{ school.name }}
      </NuxtLink>
    </h2>
  </article>
</template>
