<script setup>
const { data } = await useAsyncData('partenariats', () => queryContent('partners').findOne())
</script>

<template>
  <div>
    <OrganismsHero>
      {{ data.title }}
      <template #subtitle>
        {{ data.subtitle }}
      </template>
      <template #actions>
        <AtomsAppLink to="/contact">Nous contacter</AtomsAppLink>
      </template>
    </OrganismsHero>
    <OrganismsArticleImage class="bg-accent-purple text-white">
      {{ data.enterprise.title }}
      <template #texts>
        <p v-for="text in data.enterprise.texts" :key="text">{{ text }}</p>
      </template>
      <template #more>
        <AtomsAppLink to="/contact" white>Nous contacter</AtomsAppLink>
      </template>
      <template #image="{ data }">
        <img v-bind="data" src="/image.png" alt="">
      </template>
    </OrganismsArticleImage>
    <section class="px-4 max-w-screen-xl mx-auto py-14 md:py-[6.125rem]">
      <AtomsAppSectionTitle>Rejoindre nos partenaires</AtomsAppSectionTitle>
      <ul class="mt-11 grid grid-cols-2 md:grid-cols-5">
        <li v-for="value in 10" :kye="10">
          <img src="/image.png" alt="">
        </li>
      </ul>
    </section>
  </div>
</template>