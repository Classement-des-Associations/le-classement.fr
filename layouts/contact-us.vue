<script setup lang="ts">
const { page } = useContent()
</script>

<template>
  <Hero part="classement">
    <template #title>
      {{ page.title }}
    </template>
    <template #subtitle>
      {{ page.description }}
    </template>
  </Hero>
  <ContactUsSection>
    <h1 class="sr-only">
      Nous contacter
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
      <div>
        <h2 class="mb-8 text-2xl md:text-3xl font-bold">
          Nous envoyer un message
        </h2>
        <ContactUsForm />
      </div>
      <div>
        <h2 class="mb-8 text-2xl md:text-3xl font-bold">
          Nous joindre
        </h2>
        <ContactUsInfo />
        <div class="mt-8">
          <Socials start>
            <template #srOnly>
              Nos réseaux sociaux
            </template>
          </Socials>
        </div>
      </div>
    </div>
  </ContactUsSection>
</template>
