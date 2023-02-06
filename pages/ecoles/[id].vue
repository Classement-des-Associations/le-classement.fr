<script lang="ts" setup>
import { Association } from '~~/types/association'

const route = useRoute()

const id = ref(route.params.id as string)

const { data: school } = await useSchool(id.value)

useSeoMeta({
  title: school.value?.name
})
</script>

<template>
  <BaseSection v-if="school" class="my-20">
    <h1 class="text-5xl text-black font-bold">
      {{ school.name }}
    </h1>
    <section v-if="school.associations" class="mt-16">
      <h2 class="text-xl">
        Associations de l'école
      </h2>
      <ol class="mt-4 grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <template v-for="association in school.associations" :key="association.id">
          <li>
            <AssociationsCard
              :association="(association as Association)"
              class="h-full transition ease-in duration-200 hover:shadow-lg"
            />
          </li>
        </template>
      </ol>
    </section>
    <NuxtLink to="/ecoles" class="block mt-4 text-lg">
      Retour aux écoles
    </NuxtLink>
  </BaseSection>
</template>
