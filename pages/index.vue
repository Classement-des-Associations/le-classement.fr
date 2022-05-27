<script setup>
const config = useRuntimeConfig()

const { data } = await useAsyncData('index', () => queryContent('home').findOne())
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
    <section class="bg-primary-base text-white py-14 md:py-[7.5rem]">
      <ul
        class="max-w-[1120px] mx-auto flex flex-col items-center space-y-[3.75rem] md:space-y-0 md:flex-row md:justify-between">
        <li class="p-4 w-72 lg:w-64 space-y-9 md:space-y-12 text-center" v-for="kpi in data.kpi">
          <span class="text-[4rem] font-extrabold whitespace-nowrap">{{ kpi.value }}</span>
          <div class="space-y-3 md:space-y-2">
            <h3 class="text-lg font-semibold">{{ kpi.title }}</h3>
            <p class="text-sm leading-[1.125rem]">{{ kpi.text }}</p>
          </div>
        </li>
      </ul>
    </section>
    <OrganismsArticleImage>
      {{ data.classement.title }}
      <template #texts>
        <p v-for="text in data.classement.texts" :key="text">{{ text }}</p>
      </template>
      <template #more>
        <AtomsAppLink to="/le-classement/palmares">En savoir plus</AtomsAppLink>
      </template>
      <template #image="{ data }">
        <img v-bind="data" src="/image.png" alt="">
      </template>
    </OrganismsArticleImage>
    <section class="py-[4.375rem] mt-14 lg:mt-0 bg-ultra-light-grey">
      <div
        class="px-4 max-w-screen-lg mx-auto flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-[4.5rem] text-center md:text-left">
        <img class="rounded-full w-36 h-36" src="/image.png" alt="Photo de profil">
        <figure class="flex flex-col space-y-4">
          <p class="text-lg">{{ data.quote.text }}
          </p>
          <blockquote>
            <figcaption class="text-lg font-semibold">{{ data.quote.author }}</figcaption>
          </blockquote>
        </figure>
      </div>
    </section>
    <section class="px-4 max-w-screen-xl mx-auto py-14 md:py-[6.125rem]">
      <AtomsAppSectionTitle>Nos partenaires</AtomsAppSectionTitle>
      <OrganismsTheCarouselPartners class="mt-11 px-4" />
    </section>
    <OrganismsArticleImage class="bg-accent-purple text-white">
      {{ data['lights-on'].title }}
      <template #texts>
        <p v-for="text in data['lights-on'].texts" :key="text">{{ text }}</p>
      </template>
      <template #more>
        <AtomsAppLink to="/le-classement/palmares" white>En savoir plus</AtomsAppLink>
      </template>
      <template #image="{ data }">
        <img v-bind="data" src="/image.png" alt="">
      </template>
    </OrganismsArticleImage>
    <section class="mt-14">
      <AtomsAppSectionTitle class="px-4 max-w-screen-xl mx-auto">Galerie Photos</AtomsAppSectionTitle>
      <ul class="mt-11 grid grid-cols-2 md:grid-cols-5">
        <li v-for="num in 10" :key="num" class="relative group">
          <img src="/image.png" alt="">
          <div
            class="opacity-0 absolute inset-0 bg-black group-hover:opacity-50 motion-safe:transition-all motion-safe:duration-300">
          </div>
          <div
            class="opacity-0 group-hover:opacity-100 absolute inset-0 flex justify-center items-center motion-safe:transition-all motion-safe:duration-300">
            <AtomsIconsInstagram class="text-white" />
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>