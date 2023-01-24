<script lang="ts" setup>
const route = useRoute()

const id = ref(route.params.id as string)
const { data: association } = await useAssociation(id.value)

const socials = useSocials(`%s de l'association ${association.value?.name ?? ''}`, {
  linkedin: association.value?.linkedin,
  instagram: association.value?.instagram,
  website: association.value?.website
})

const { data: relatedAssociations } = await useRelatedAssociations(id.value, association.value?.category)

useSeoMeta({
  title: association.value?.name,
  description: association.value?.description
})
</script>

<template>
  <BaseSection v-if="association" class="my-20">
    <div class="flex flex-col items-start gap-6">
      <h1 class="text-5xl text-black font-bold">
        {{ association.name }}
      </h1>
      <dl class="order-first">
        <dt class="sr-only">
          Catégorie de l'association
        </dt>
        <dd class="rounded-md px-3 py-1 bg-primary-variation-1 text-base text-black">
          {{ association.category }}
        </dd>
      </dl>
      <dl v-if="association.schools">
        <dt class="sr-only">
          {{ association.schools.length > 1 ? "Écoles de l'association" : "École de l'association" }}
        </dt>
        <dd class="text-2xl text-black font-medium">
          {{ useSentence(association.schools) }}
        </dd>
      </dl>
    </div>
    <p class="mt-8 text-xl">
      {{ association.description }}
    </p>
    <p class="mt-4 text-xl">
      L'association {{ association.name }} a participé au Classement des Associations en {{ useSentence(association.years) }}.
    </p>
    <Socials :socials="socials" class="mt-8" />
    <section v-if="relatedAssociations && relatedAssociations?.length > 0" class="mt-16">
      <h2 class="text-xl">
        Associations en lien
      </h2>
      <ul class="mt-4 grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <template v-for="relatedAssociation in relatedAssociations" :key="relatedAssociation.id">
          <li>
            <AssociationsCard :association="relatedAssociation" class="h-full transition ease-in duration-200 hover:shadow-lg" />
          </li>
        </template>
      </ul>
    </section>
    <NuxtLink to="/associations" class="block mt-4 text-lg">
      Retour aux associations
    </NuxtLink>
  </BaseSection>
</template>
