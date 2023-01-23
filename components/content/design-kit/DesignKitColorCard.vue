<script lang="ts" setup>
const { hexaColor } = defineProps<{
  colorClass: string
  hexaColor: string
}>()

const { copy, copied } = useClipboard({ source: hexaColor })
</script>

<template>
  <li>
    <div class="overflow-hidden rounded-xl h-[140px]" :class="colorClass" />
    <div>
      <div class="flex justify-between items-center">
        <p v-if="$slots.color" class="font-semibold text-black">
          <ContentSlot :use="$slots.color" unwrap="p" />
        </p>
        <button
          v-if="$slots.buttonText"
          :disabled="copied"
          type="button"
          class="font-medium focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 focus:ring-offset-white text-sm px-4 py-2 border border-transparent text-zinc-500 hover:text-zinc-700 focus:text-zinc-700 disabled:hover:text-zinc-500 inline-flex items-center rounded-lg"
          @click="copy()"
        >
          <Transition mode="out-in">
            <Icon v-if="copied" name="heroicons:check" class="w-5 h-5 mr-2" />
            <span v-else>
              <ContentSlot :use="$slots.buttonText" unwrap="p" />
            </span>
          </Transition>
        </button>
      </div>
      <p class="text-zinc-500">
        {{ hexaColor }}
      </p>
    </div>
  </li>
</template>
