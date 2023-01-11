<script lang="ts" setup>
const route = useRoute()

const id = route.params.id as string
const association = await useAssociation(id)
</script>

<template>
  <div>
    <h1>Association</h1>
    <p>Page d'une association</p>
    <p>Nom de l'association : {{ association }}</p>
  </div>
</template>
