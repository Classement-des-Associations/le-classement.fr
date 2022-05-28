<script setup>
const props = defineProps({
  winners: {
    type: Array,
    required: true
  }
})

// Get 3 first winners
const podium = computed(() => props.winners.slice(0, 3))
// Get the rest of winners
const others = computed(() => props.winners.slice(3))
</script>

<template>
  <div>
    <ul class="grid grid-cols-3 gap-[4.25rem] justify-items-center uppercase  text-center">
      <li class="mt-[4.75rem] px-[3.25rem] pt-11 w-full bg-white rounded-t-[1.25rem] shadow-default relative">
        <div class="absolute top-4 right-4 p-3 bg-primary-variation-1 text-white rounded-full">
          <NuxtLink :to="podium[0].link" target="_blank">
            <AtomsIconsGoTo /> <span class="sr-only">Vers le site de l'association</span>
          </NuxtLink>
        </div>
        <span class="text-[4rem] font-extrabold">2</span>
        <div class="mt-6 text-lg space-y-4">
          <h3 class="font-bold">
            {{ podium[1].name }}
          </h3>
          <span>{{ podium[1].school }}</span>
        </div>
        <img src="/image.png" alt="" class="mt-11 rounded-t-[1.25rem]">
      </li>
      <li class="px-[3.25rem] pt-11 w-full bg-white rounded-t-[1.25rem] shadow-default relative">
        <div class="absolute top-4 right-4 p-3 bg-primary-variation-1 text-white rounded-full">
          <NuxtLink :to="podium[0].link" target="_blank">
            <AtomsIconsGoTo /> <span class="sr-only">Vers le site de l'association</span>
          </NuxtLink>
        </div>
        <span class="text-[4rem] font-extrabold">1</span>
        <div class="mt-6 text-lg space-y-4">
          <h3 class="font-bold">
            {{ podium[0].name }}
          </h3>
          <span>{{ podium[0].school }}</span>
        </div>
        <img src="/image.png" alt="" class="mt-11 h-1/2 object-cover rounded-t-[1.25rem]">
      </li>
      <li class="mt-[9.125rem] px-[3.25rem] pt-11 w-full bg-white rounded-t-[1.25rem] shadow-default relative">
        <div class="absolute top-4 right-4 p-3 bg-primary-variation-1 text-white rounded-full">
          <NuxtLink :to="podium[0].link" target="_blank">
            <AtomsIconsGoTo /> <span class="sr-only">Vers le site de l'association</span>
          </NuxtLink>
        </div>
        <span class="text-[4rem] font-extrabold">3</span>
        <div class="mt-6 text-lg space-y-4">
          <h3 class="font-bold">
            {{ podium[2].name }}
          </h3>
          <span>{{ podium[2].school }}</span>
        </div>
        <img src="/image.png" alt="" class="mt-11 object-cover rounded-t-[1.25rem]">
      </li>
    </ul>
    <ul class="relative w-full bg-white top-[-6rem] rounded-b-[1.125rem] divide-y divide-[#808080]/10">
      <li v-for="(other, index) in others" class="py-7 flex flex-row justify-between items-center uppercase">
        <div class="ml-9 flex flex-row items-center ">
          <span class="text-[2.625rem] font-extrabold">{{ index + 3 }}</span>
          <div class="ml-12 space-y-2">
            <h3 class="text-lg font-bold">{{ other.name }}</h3>
            <span class="text-[#808080] text-lg">{{ other.school }}</span>
          </div>
        </div>
        <div class="mr-4 p-3 bg-primary-variation-1 text-white rounded-full">
          <NuxtLink :to="podium[0].link" target="_blank">
            <AtomsIconsGoTo /> <span class="sr-only">Vers le site de l'association</span>
          </NuxtLink>
        </div>
      </li>
    </ul>
  </div>
</template>