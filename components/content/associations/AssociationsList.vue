<script lang="ts" setup>
useSchemaOrg([
  defineWebPage({
    '@type': 'CollectionPage',
  }),
]);

const { data: associations } = await useAssociations()
</script>

<template>
  <BaseSection class="my-20">
    <h1 class="text-5xl text-black font-bold">Les Associations</h1>
    <ul v-if="associations" class="mt-16 grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <li v-for="association in associations.body" :key="association.id"
        class="flex flex-col items-start px-4 py-8 rounded-xl bg-ultra-light-grey transition ease-in duration-200 hover:shadow-md relative">
        <h2 class="mt-4 text-3xl text-black font-semibold">
          <NuxtLink :to="`/associations/${association.id}`">
            <div class="absolute inset-0"></div>
            {{ association.name }}
          </NuxtLink>
        </h2>
        <dl class="order-first">
          <dt class="sr-only">Catégorie de l'association</dt>
          <dd class="rounded-md px-3 py-1 bg-primary-light text-sm text-black">{{ association.category }}</dd>
        </dl>
        <dl>
          <dt class="sr-only">{{
            association.schools.length > 1 ? "Écoles de l'association" : "École de l'association"
          }}
          </dt>
          <dd class="text-lg text-black">{{ useSchoolsString(association.schools) }}</dd>
        </dl>
      </li>
    </ul>
  </BaseSection>
</template>
