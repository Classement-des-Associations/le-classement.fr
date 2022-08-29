<script setup lang="ts">
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue'
</script>

<template>
  <Disclosure v-slot="{ open }">
    <article class="pb-4 flex flex-col border-b border-[#808080] border-opacity-50">
      <DisclosureButton
        class="flex flex-row justify-between text-left text-sm md:text-lg leading-4 font-semibold md:font-normal">
        <span>
          <ContentSlot :use="$slots.title" unwrap="p" />
        </span>
        <AtomsIconsArrowBottom class="transition-transform duration-300" :class="open ? 'transform rotate-180' : ''" />
      </DisclosureButton>
      <transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0"
        enter-to-class="opacity-100" leave-active-class="transition duration-300 ease-out"
        leave-from-class="opacity-100" leave-to-class="opacity-0">
        <DisclosurePanel class="mt-4 text-sm leading-[1.125rem]">
          <ContentSlot :use="$slots.default" />
        </DisclosurePanel>
      </transition>
    </article>
  </Disclosure>
</template>