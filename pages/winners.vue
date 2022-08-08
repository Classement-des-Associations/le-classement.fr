<script setup>
const config = useRuntimeConfig()

const { data } = await useAsyncData('palmares', () => queryContent('/winners').findOne())

const years = Object.keys(data.value.winners).sort((a, b) => a - b)
const currentYear = ref(years[0])
</script>

<template>
  <div>
    <Head>
      <Title> Le palmarès - Le Classement des Associations </Title>
       <Meta name="description" content="L'ensemble des associations gagnantes du Classement des associations des éditions précédentes !" />
    </Head>
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
    <section class="mb-2 pb-24 bg-ultra-light-grey">
      <div class="py-12 bg-accent-purple text-white">
        <OrganismsTheCarouselYears class="max-w-screen-xl mx-auto" :years="years" @year="currentYear = $event" />
      </div>
      <OrganismsWinners :winners="data.winners[currentYear]" class="mt-14 lg:mt-[6.5rem] max-w-screen-xl mx-auto" />
    </section>
    <section class="max-w-screen-xl mx-auto bg-ultra-light-grey md:bg-white pt-8 md:pt-0 md:mb-[4.5rem]">
      <AtomsAppSectionTitle class="md:mt-[6.5rem] px-4"> {{ data.final.title }} </AtomsAppSectionTitle>
      <div class="w-full h-auto mt-8 md:mt-11">
        <iframe src="https://player.vimeo.com/video/393641381?h=e0e06d5eb5" width="640" height="360" frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture" allowfullscreen class="w-full -mt-20 sm:m-0"></iframe>
      </div>
    </section>
  </div>
</template>