<script lang="ts" setup>
const { data: associations } = await useAssociations()
</script>

<template>
  <ul v-if="associations">
    <li v-for="association in associations.body" :key="association.id">
      <NuxtLink :to="`/associations/${association.id}`">
        {{ association.name }}
      </NuxtLink>
    </li>
  </ul>
</template>
