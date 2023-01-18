<script lang="ts" setup>
const route = useRoute()

const id = route.params.id as string
const association = await useAssociation(id)

const socials = useSocials(`%s de l'association ${association.name}`, {
  linkedin: association.linkedin,
  instagram: association.instagram,
  website: association.website,
})


</script>

<template>

  <Head>
    <Title>{{ association.name }}</Title>
    <Meta name="description" :content="association.description" />
    <Meta property="og:description" :content="association.description" />
  </Head>
  <BaseSection class="my-20">
    <div class="flex flex-col items-start gap-3">
      <h1 class="text-5xl text-black font-bold">{{ association.name }}</h1>
      <dl class="order-first">
        <dt class="sr-only">Catégorie de l'association</dt>
        <dd class="rounded-md px-3 py-1 bg-primary-light text-base text-black">{{ association.category }}</dd>
      </dl>
      <dl>
        <dt class="sr-only">{{ association.schools.length > 1 ? "Écoles de l'association" : "École de l'association" }}
        </dt>
        <dd class="text-2xl text-black font-medium">{{ useSchoolsString(association.schools) }}</dd>
      </dl>
    </div>
    <p class="mt-8 text-xl">
      {{ association.description }}
    </p>
    <Socials :socials="socials" class="mt-8" />
  </BaseSection>
</template>
