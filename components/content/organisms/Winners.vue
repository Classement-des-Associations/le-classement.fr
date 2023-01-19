<script setup lang="ts">
const { winners } = defineProps<{
  winners: {
    year: number
    winners: {
      name: string
      school: string
      href: string
    }[]
  }[]
}>()

const years = winners.map(winner => winner.year)
const sortedYears = years.sort((a, b) => a - b)
const currentYear = ref(sortedYears[0])

const currentWinners = computed(() => {
  return winners.find(winner => winner.year === currentYear.value).winners
})
</script>

<template>
  <section class="mb-2 pb-24 bg-ultra-light-grey">
    <div class="py-12 bg-accent-purple text-white">
      <OrganismsTheCarouselYears class="max-w-screen-xl mx-auto" :years="years" @year="currentYear = $event" />
    </div>
    <OrganismsTheWinners :winners="currentWinners" class="mt-14 lg:mt-[6.5rem] max-w-screen-xl mx-auto" />
  </section>
</template>
