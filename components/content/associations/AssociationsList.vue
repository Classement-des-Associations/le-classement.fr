<script lang="ts" setup>
const { data: associations } = await useAssociations()
</script>

<template>
  <ul v-if="associations">
    <li v-for="association in associations.body" :key="association._id">
      <NuxtLink :to="`/associations/${association._id}`">
        {{ association.name }}
      </NuxtLink>
    </li>
  </ul>
</template>
