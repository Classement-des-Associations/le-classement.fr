<script lang="ts" setup>
const { page } = useContent()
</script>

<template>
  <div>
    <Hero part="classement" :actions="page.actions">
      <template #title>
        {{ page.title }}
      </template>
      <template #subtitle>
        {{ page.description }}
      </template>
    </Hero>
  </div>
</template>
