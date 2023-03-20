<script setup lang="ts">
const { data: offers } = await useOffers()
</script>

<template>
  <div v-if="offers" class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
    <template v-for="offer in offers.body" :key="offer.title">
      <BecomePartnerOffersCard :offer="offer" />
    </template>
  </div>
</template>
