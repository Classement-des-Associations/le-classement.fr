<script setup>
const config = useRuntimeConfig()

const { data } = await useAsyncData('concours', () => queryContent('contest').findOne())

useHead({
  title: data.value.title,
  description: data.value.subtitle,
})
</script>

<template>
  <div>
    <OrganismsHero class="z-10">
      {{ data.title }}
      <template #subtitle>
        {{ data.subtitle }}
      </template>
      <template #actions>
        <AtomsAppLink taget="_blank" fill :to="config.public.formUrl">S'inscrire</AtomsAppLink>
        <AtomsAppLink to="/contact">Nous contacter</AtomsAppLink>
      </template>
    </OrganismsHero>
    <section class="md:hidden -z-10">
      <OrganismsTheCarouselExperiences :experiences="data.experiences" />
    </section>
    <OrganismsArticleImage class="hidden md:grid text-white" :class="data.experiences[0]['background-color']">
      {{ data.experiences[0].title }}
      <template #texts>
        <p class="text-sm">{{ data.experiences[0].text }}</p>
      </template>
      <template #image="{ data }">
        <img loading="lazy" v-bind="data" src="~/assets/images/concours_experience.webp"
          alt="Image montrant des jeunes parler en groupe">
      </template>
    </OrganismsArticleImage>
    <OrganismsArticleImage class="hidden md:grid text-black bg-white" left>
      {{ data.experiences[1].title }}
      <template #texts>
        <p class="text-sm">{{ data.experiences[1].text }}</p>
      </template>
      <template #more>
        <AtomsAppLink to="/le-classement/palmares">Découvrir le palmarès</AtomsAppLink>
      </template>
      <template #image="{ data }">
        <img loading="lazy" v-bind="data" src="~/assets/images/concours_valoriser.webp"
          alt="Image montrant l'un des gagnants du concours parler au micro">
      </template>
    </OrganismsArticleImage>
    <OrganismsArticleImage class="hidden md:grid bg-accent-blue text-white">
      {{ data.experiences[2].title }}
      <template #texts>
        <p class="text-sm">{{ data.experiences[2].text }}</p>
      </template>
      <template #more>
        <AtomsAppLink to="/partenariats" white>Découvrir nos partenaires</AtomsAppLink>
      </template>
      <template #image="{ data }">
        <img loading="lazy" v-bind="data" src="~/assets/images/concours_reseaux.webp"
          alt="Image montrant un intervenant parler au micro devant un grand écran">
      </template>
    </OrganismsArticleImage>
    <section class="pt-14 pb-8 md:pt-[6.5rem] md:pb-20 bg-ultra-light-grey">
      <div class="max-w-screen-xl mx-auto">
        <AtomsAppSectionTitle class="px-4"> {{ data.course.title }} </AtomsAppSectionTitle>
        <OrganismsTheCardsConcours :progress="data.course.progress" class="px-4 mt-5 md:mt-[2.875rem]" />
      </div>
    </section>
    <section class="py-14 md:py-[6.25rem] px-4 bg-ultra-light-grey md:bg-white">
      <div class="max-w-screen-xl mx-auto flex flex-col md:flex-row md:items-center">
        <img loading="lazy" src="/meilleure_association.png" alt="" class="w-60 mx-auto md:w-auto" />
        <div class="mt-10 md:mt-0 md:ml-[6.25rem]">
          <AtomsAppSectionTitle> {{ data.price.title }} </AtomsAppSectionTitle>
          <p class="mt-8 text-sm">{{ data.price.text }}</p>
        </div>
      </div>
    </section>
  </div>
</template>