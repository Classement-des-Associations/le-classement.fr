<script lang="ts" setup>
useSchemaOrg([
  defineWebPage({
    '@type': 'CollectionPage'
  })
])

const { data } = await useSchools()
</script>

<template>
  <BaseSection class="my-20">
    <h1 class="text-5xl text-black font-bold">
      Les Écoles
    </h1>
    <ul v-if="data" class="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <li v-for="school in data" :key="school.id">
        <SchoolsCard :school="school" class="h-full transition ease-in duration-200 hover:shadow-lg" />
      </li>
    </ul>
  </BaseSection>
</template>
