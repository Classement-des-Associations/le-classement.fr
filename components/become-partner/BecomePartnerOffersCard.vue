<script setup lang="ts">
import type { Offer } from '~/types/offer'

defineProps<{
  offer: Offer
}>()
</script>

<template>
  <article class="gradient-border-2 border-gradient-br-partenaires-white rounded-lg p-4 md:p-6">
    <h3 class="text-2xl lg:text-3xl font-semibold text-accent-purple text-center">
      {{ offer.title }}
    </h3>

    <dl class="mt-2 text-lg md:text-xl lg:text-2xl font-medium text-center">
      <dt class="sr-only">
        Le prix de l'offre
      </dt>
      <dd>
        {{ offer.price }}
      </dd>
    </dl>

    <p class="mt-8 text-lg">
      {{ offer.description }}
    </p>

    <p class="mt-8 text-lg underline">
      Ce tarif comprend :
    </p>

    <ul class="mt-2 pl-6 text-lg space-y-2 list-disc">
      <li
        v-for="feature in offer.features"
        :key="feature"
      >
        {{ feature }}
      </li>
    </ul>
  </article>
</template>
