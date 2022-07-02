<script setup>

const config = useRuntimeConfig()

const { data } = await useAsyncData('index', () => queryContent('home').findOne())

useHead({
  title: 'Accueil',
  description: data.value.subtitle,

})

const loadGalerieImage = function (num) {
  return `/images/galerie/${num}.webp`
}

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
        class="max-w-[1120px] mx-auto flex flex-col items-center space-y-[2.5rem] md:space-y-0 md:flex-row md:justify-between">
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
        <img loading="lazy" v-bind="data" src="~/assets/images/le_classement.webp"
          alt="Photo des coupes de l'édition 2021" class="object-left">
      </template>
    </OrganismsArticleImage>
    <section class="lg:px-[7.5rem] py-14 lg:py-[4.375rem] bg-ultra-light-grey">
      <div
        class="px-4 lg:px-0 flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-[4.5rem] text-center md:text-left">
        <img loading="lazy" class="rounded-full w-36 h-36 object-cover object-right"
          src="~/assets/images/quote_louise.webp" alt="Photo de profil de Louise">
        <figure class="flex flex-col space-y-4">
          <p class="text-lg">{{ data.quote.text }}
          </p>
          <blockquote>
            <figcaption class="text-lg font-semibold">{{ data.quote.author }}</figcaption>
          </blockquote>
        </figure>
      </div>
    </section>
    <!-- <section class="px-4 max-w-screen-xl mx-auto py-14 md:py-[6.125rem]">
      <AtomsAppSectionTitle>Nos partenaires</AtomsAppSectionTitle>
      <OrganismsTheCarouselPartners class="mt-11 px-4" />
    </section> -->
    <OrganismsArticleImage class="bg-accent-purple text-white">
      {{ data['lights-on'].title }}
      <template #texts>
        <p v-for="text in data['lights-on'].texts" :key="text">{{ text }}</p>
      </template>
      <template #more>
        <AtomsAppLink to="http://supaerospacesection.com/" target="_blank" white>En savoir plus</AtomsAppLink>
      </template>
      <template #image="{ data: bind }">
        <img loading="lazy" v-bind="bind" src="~/assets/images/supaero_space_section.webp" :alt="data['lights-on'].alt">
      </template>
    </OrganismsArticleImage>
    <OrganismsArticleImage class="bg-accent-blue text-white" left>
      {{ data['lights-on-second'].title }}
      <template #texts>
        <p v-for="text in data['lights-on-second'].texts" :key="text">{{ text }}</p>
      </template>
      <template #more>
        <AtomsAppLink to="https://www.savoiroserlasolidarite.org/" target="_blank" white>En savoir plus</AtomsAppLink>
      </template>
      <template #image="{ data: bind }">
        <img loading="lazy" v-bind="bind" src="~/assets/images/savoir_oser_solidarite.webp"
          :alt="data['lights-on-second'].alt">
      </template>
    </OrganismsArticleImage>
    <section class="mt-14">
      <AtomsAppSectionTitle class="px-4 max-w-screen-xl mx-auto">Galerie Photos</AtomsAppSectionTitle>
      <ul class="mt-11 grid grid-cols-2 md:grid-cols-5">
        <li v-for="num in 10" :key="num" class="relative group h-full w-full">
          <NuxtLink to="https://www.instagram.com/leclassement/">
            <div class="aspect-w-square aspect-h-square">
              <img loading="lazy" :src="loadGalerieImage(num)" alt="Image du classement de 2021"
                class="object-cover w-full h-full">
            </div>
            <div
              class="opacity-0 absolute inset-0 bg-black group-hover:opacity-50 motion-safe:transition-all motion-safe:duration-300">
            </div>
            <div
              class="opacity-0 group-hover:opacity-100 absolute inset-0 flex justify-center items-center motion-safe:transition-all motion-safe:duration-300">
              <AtomsIconsInstagram class="text-white" />
            </div>
          </NuxtLink>
        </li>
      </ul>
    </section>
  </div>
</template>