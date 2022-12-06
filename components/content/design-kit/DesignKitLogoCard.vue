<script lang="ts" setup>
const { infoType } = defineProps<{
  imageName: string,
  cardClass: string,
  infoType: 'primary' | 'secondary' | 'secondary-dark'
}>()

const infoClass = function (): string {
  if (infoType === 'primary')
    return 'border-primary-base text-black'
  else if (infoType === 'secondary')
    return 'border-black text-black'
  else if (infoType === 'secondary-dark')
    return 'border-zinc-300 text-zinc-300'

  return ''
}
</script>

<template>
  <li class="flex flex-col space-y-2">
    <div class="overflow-hidden rounded-xl ring-1 ring-zinc-200 flex items-center justify-center h-[140px] relative"
      :class="cardClass">
      <div class="px-4 py-5 sm:p-6">
        <div class="absolute right-2 top-2 rounded-md text-xs bg-transparent border p-1" :class="infoClass()">
          <ContentSlot :use="$slots.info" unwrap="p"> </ContentSlot>
        </div>
        <img :src="`/assets/design-kit/logo/${imageName}.svg`" :alt="imageName" class="h-10">
      </div>
    </div>
    <div class="flex justify-between">
      <p class="font-semibold text-black">
        <ContentSlot :use="$slots.name" unwrap="p"></ContentSlot>
      </p>
      <div>
        <a :href="`/assets/design-kit/logo/${imageName}.svg`" aria-label="Télécharger le svg" download
          class="pr-2  text-zinc-400 first-letter:hover:text-zinc-500 hover:underline">svg</a>
        <a :href="`/assets/design-kit/logo/${imageName}.png`" aria-label="Télécharger le png" download
          class="text-zinc-400 first-letter:hover:text-zinc-500 hover:underline">png</a>
      </div>
    </div>
  </li>
</template>
