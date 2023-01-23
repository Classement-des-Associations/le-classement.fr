<script lang="ts" setup>
import { Association } from '~~/types/association'

defineProps<{
  association: Association
}>()
</script>

<template>
  <article class="flex flex-col items-start px-4 py-8 rounded-xl bg-ultra-light-grey relative">
    <h2 class="mt-4 text-3xl text-black font-semibold">
      <NuxtLink :to="`/associations/${association.id}`">
        <div class="absolute inset-0" />
        {{ association.name }}
      </NuxtLink>
    </h2>
    <dl class="order-first">
      <dt class="sr-only">
        Catégorie de l'association
      </dt>
      <dd class="rounded-md px-3 py-1 bg-primary-variation-1 text-sm text-black">
        {{ association.category }}
      </dd>
    </dl>
    <dl v-if="association.schools">
      <dt class="sr-only">
        {{
          association.schools.length > 1 ? "Écoles de l'association" : "École de l'association"
        }}
      </dt>
      <dd class="text-lg text-black">
        {{ useSentence(association.schools) }}
      </dd>
    </dl>
  </article>
</template>
