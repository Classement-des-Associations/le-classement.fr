<script setup>
const config = useRuntimeConfig()

const { data } = await useAsyncData('a-propos', () => queryContent('about').findOne())

useHead({
  title: data.value.title,
  description: data.value.subtitle,
})
</script>

<template>
  <div>
    <OrganismsHero>
      {{ data.title }}
      <template #subtitle>
        {{ data.subtitle }}
      </template>
      <template #actions>
        <AtomsAppLink taget="_blank" fill :to="config.public.formUrl">S'inscrire</AtomsAppLink>
        <AtomsAppLink to="/contact">Nous contacter</AtomsAppLink>
      </template>
    </OrganismsHero>
    <section class="bg-ultra-light-grey py-14 md:pb-12 md:pt-24">
      <div class="px-4 max-w-screen-xl mx-auto space-y-16">
        <p class="text-base md:text-lg md:leading-[1.125rem]">
          {{ data.text }}
        </p>
        <div class="grid grid-cols-3 justify-items-center">
          <img loading="lazy" src="~/assets/images/bnem_logo.webp"
            alt="Logo du BNEM - Bureau National des étudiants en École de Management" class="max-h-72" />
          <img loading="lazy" src="~/assets/images/bnei_logo.webp"
            alt="Logo du BNEI - Bureau National des Élèves Ingénieurs" class="max-h-72" />
          <img loading="lazy" src="~/assets/images/aneo_logo.webp" alt="Logo d'aneo" class="max-h-72" />
        </div>
      </div>
    </section>
    <OrganismsArticleImage class="bg-accent-blue text-white">
      {{ data.bnei.title }}
      <template #texts>
        <p v-for="text in data.bnei.texts" :key="text">{{ text }}</p>
      </template>
      <template #more>
        <AtomsAppLink :to="data.bnei.link" white>En savoir plus</AtomsAppLink>
      </template>
      <template #image="{ data }">
        <img loading="lazy" v-bind="data" src="~/assets/images/bnei_about.webp" alt="Photo de groupe du BNEI">
      </template>
    </OrganismsArticleImage>
    <OrganismsArticleImage left class="bg-white text-black">
      {{ data.bnem.title }}
      <template #texts>
        <p v-for="text in data.bnem.texts" :key="text">{{ text }}</p>
      </template>
      <template #more>
        <AtomsAppLink :to="data.bnem.link">En savoir plus</AtomsAppLink>
      </template>
      <template #image="{ data }">
        <img loading="lazy" v-bind="data" src="~/assets/images/bnem_about.webp" alt="Image d'une foule">
      </template>
    </OrganismsArticleImage>
    <OrganismsArticleImage class="bg-accent-purple text-white">
      {{ data.aneo.title }}
      <template #texts>
        <p v-for="text in data.aneo.texts" :key="text">{{ text }}</p>
      </template>
      <template #more>
        <AtomsAppLink :to="data.aneo.link" white>En savoir plus</AtomsAppLink>
      </template>
      <template #image="{ data }">
        <img loading="lazy" v-bind="data" src="~/assets/images/aneo_about.webp" alt="Image de l'open space d'aneo">
      </template>
    </OrganismsArticleImage>
  </div>
</template>