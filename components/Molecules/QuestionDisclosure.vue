<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue'

const props = defineProps({
  question: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <Disclosure v-slot="{ open }" as="article" class="pb-4 flex flex-col border-b border-[#808080] border-opacity-50">
    <DisclosureButton
      class="flex flex-row justify-between text-left text-sm md:text-lg leading-4 font-semibold md:font-normal">
      <span>
        {{ question.title }}
      </span>
      <AtomsIconsArrowBottom class="transition-transform duration-300" :class="open ? 'transform rotate-180' : ''" />
    </DisclosureButton>
    <transition enter-active-class="transition duration-300 ease-out" enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-300 ease-out"
      leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
      <DisclosurePanel class="mt-4 text-sm leading-[1.125rem] flex flex-col space-y-4">
        <p v-for="text in question.answers">{{ text }}</p>
      </DisclosurePanel>
    </transition>
  </Disclosure>
</template>