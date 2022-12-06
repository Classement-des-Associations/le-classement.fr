<script lang="ts" setup>
const { hexaColor } = defineProps<{
  colorClass: string,
  hexaColor: string
}>()

const { copy } = useClipboard({ source: hexaColor })
</script>

<template>
  <li>
    <div class="overflow-hidden rounded-xl h-[140px]" :class="colorClass"></div>
    <div>
      <div class="flex justify-between items-center">
        <p class="font-semibold text-black" v-if="$slots.color">
          <ContentSlot :use="$slots.color" unwrap="p"> </ContentSlot>
        </p>
        <button @click="copy()" type="button"
          class="font-medium focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 focus:ring-offset-white text-sm px-4 py-2 border border-transparent text-gray-500 hover:text-gray-700 focus:text-gray-700 disabled:hover:text-gray-500 inline-flex items-center rounded-lg"
          v-if="$slots.buttonText">
          <ContentSlot :use="$slots.buttonText" unwrap="p"></ContentSlot>
        </button>
      </div>
      <p class="text-gray-500">
        {{ hexaColor }}
      </p>
    </div>
  </li>
</template>
