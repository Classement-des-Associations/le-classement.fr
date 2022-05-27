<script setup>
const config = useRuntimeConfig()

const { data } = await useAsyncData('a-propos', () => queryContent('about').findOne())
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
          <img src="/image.png" alt="" class="max-h-72" />
          <img src="/image.png" alt="" class="max-h-72" />
          <img src="/image.png" alt="" class="max-h-72" />
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
        <img v-bind="data" src="/image.png" alt="">
      </template>
    </OrganismsArticleImage>
    <OrganismsArticleImage left class="bg-white text-black">
      {{ data.aneo.title }}
      <template #texts>
        <p v-for="text in data.aneo.texts" :key="text">{{ text }}</p>
      </template>
      <template #more>
        <AtomsAppLink :to="data.aneo.link">En savoir plus</AtomsAppLink>
      </template>
      <template #image="{ data }">
        <img v-bind="data" src="/image.png" alt="">
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
        <img v-bind="data" src="/image.png" alt="">
      </template>
    </OrganismsArticleImage>
  </div>
</template>