<script setup lang="ts">
const props = defineProps<{
  winners: {
    name: string
    school: string
    href: string
  }[]
}>()

// Get 3 first winners
const podium = computed(() => props.winners.slice(0, 3))
// Get the rest of winners
const others = computed(() => props.winners.slice(3))
</script>

<template>
  <div>
    <ul class="px-4 xl:px-0 grid grid-cols-3 gap-4 lg:gap-[4.25rem] justify-items-center uppercase  text-center">
      <li class="mt-8 lg:mt-[4.75rem] w-full group">
        <NuxtLink class="h-full" :to="podium[1].href" target="_blank">
          <div class="lg:hidden text-sm md:text-lg space-y-2">
            <h3 class="font-bold">
              {{ podium[1].name }}
            </h3>
            <div>{{ podium[1].school }}</div>
          </div>
          <div
            class="mt-6 lg:mt-0 w-full h-full px-4 lg:px-[3.25rem] pt-11 bg-white rounded-t-[1.25rem] relative"
          >
            <WinnerExternalSticker class="absolute top-4 right-4" />
            <span class="text-5xl lg:text-[4rem] font-extrabold">2</span>
            <div class="hidden lg:block mt-6 lg:text-lg space-y-4">
              <h3 class="font-bold">
                {{ podium[1].name }}
              </h3>
              <div>{{ podium[1].school }}</div>
            </div>
            <!-- <img loading="lazy" src="/image.png" alt="" class="hidden lg:block mt-11 rounded-t-[1.25rem]"> -->
          </div>
        </NuxtLink>
      </li>
      <li class="w-full group">
        <NuxtLink class="h-full" :to="podium[0].href" target="_blank">
          <div class="lg:hidden text-sm md:text-lg space-y-2">
            <h3 class="font-bold">
              {{ podium[0].name }}
            </h3>
            <div>{{ podium[0].school }}</div>
          </div>
          <div
            class="mt-6 lg:mt-0 w-full h-full px-4 lg:px-[3.25rem] pt-11 bg-white rounded-t-[1.25rem] relative"
          >
            <WinnerExternalSticker class="absolute top-4 right-4" />
            <div class="relative text-5xl lg:text-[4rem] font-extrabold">
              1
              <Icon
                name="fluent-emoji:1st-place-medal"
                class="absolute right-[51%] transform translate-x-[90%] -rotate-[26deg] top-[70%] w-7 h-7 lg:w-9 lg:h-9"
              />
            </div>
            <div class="hidden lg:block mt-6 lg:text-lg space-y-4">
              <h3 class="font-bold">
                {{ podium[0].name }}
              </h3>
              <div>{{ podium[0].school }}</div>
            </div>
            <!-- <img loading="lazy" src="/image.png" alt=""
              class="hidden lg:block mt-11 h-1/2 object-cover rounded-t-[1.25rem]"> -->
          </div>
        </NuxtLink>
      </li>
      <li class="mt-14 lg:mt-[9.125rem] w-full group">
        <NuxtLink class="h-full" :to="podium[2].href" target="_blank">
          <div class="lg:hidden text-sm md:text-lg space-y-2">
            <h3 class="font-bold">
              {{ podium[2].name }}
            </h3>
            <div>{{ podium[2].school }}</div>
          </div>
          <div
            class="mt-6 lg:mt-0 pb-3 px-4 lg:px-[3.25rem] pt-11 w-full h-full bg-white rounded-t-[1.25rem] relative"
          >
            <WinnerExternalSticker class="absolute top-4 right-4" />
            <span class="text-5xl lg:text-[4rem] font-extrabold">3</span>
            <div class="hidden lg:block mt-6 text-sm md:text-lg space-y-4">
              <h3 class="font-bold">
                {{ podium[2].name }}
              </h3>
              <div>{{ podium[2].school }}</div>
            </div>
            <!-- <img loading="lazy" src="/image.png" alt="" class="hidden lg:block mt-11 object-cover rounded-t-[1.25rem]"> -->
          </div>
        </NuxtLink>
      </li>
    </ul>
    <ul class="relative right-0 left-0 bg-white lg:top-[0rem] md:rounded-b-[1.125rem] divide-y divide-[#808080]/10">
      <template v-if="others.length > 0">
        <li v-for="(other, index) in others" :key="other.href" class="py-7 uppercase group">
          <NuxtLink :to="other.href" target="_blank" class="flex flex-row justify-between items-center">
            <div class="ml-9 flex flex-row items-center ">
              <span class="text-[1.75rem]  lg:text-[2.625rem] font-extrabold w-12 flex-shrink-0">{{ index + 4 }}</span>
              <div class="md:ml-12 space-y-2">
                <h3 class="text-sm lg:text-lg font-semibold lg:font-bold">
                  {{ other.name }}
                </h3>
                <span class="text-[#808080] text-sm lg:text-lg">{{ other.school }}</span>
              </div>
            </div>
            <WinnerExternalSticker class="mr-4" />
          </NuxtLink>
        </li>
      </template>
      <li v-else class="w-full h-24">
        <span class="sr-only">
          Cette liste est vide
        </span>
      </li>
    </ul>
  </div>
</template>
