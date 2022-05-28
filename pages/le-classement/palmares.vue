<script setup>
const config = useRuntimeConfig()

const { data } = await useAsyncData('palmares', () => queryContent('/winners').findOne())

const years = Object.keys(data.value.winners).sort((a, b) => b - a)
const currentYear = ref(years[0])
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
    <section class="mb-2 bg-ultra-light-grey">
      <div class="py-12 bg-accent-purple text-white">
        <OrganismsTheCarouselYears class="max-w-screen-xl mx-auto" :years="years" @year="currentYear = $event" />
      </div>
      <OrganismsWinners :winners="data.winners[currentYear]"
        class="mt-14 lg:mt-[6.5rem] px-4 max-w-screen-xl mx-auto" />
    </section>
    <section class="max-w-screen-xl mx-auto bg-white">
      <AtomsAppSectionTitle class="mt-[6.5rem] px-4"> {{ data.final.title }} </AtomsAppSectionTitle>
    </section>
  </div>
</template>