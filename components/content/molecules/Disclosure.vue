<script setup lang="ts">
const open = ref(false)
</script>

<template>
  <SchemaOrgQuestion>
    <template #name>
      <ContentSlot :use="$slots.title" unwrap="p" />
    </template>
    <template #acceptedAnswer>
      <div>
        <ContentSlot :use="$slots.default" />
      </div>
    </template>
    <article class="pb-4 flex flex-col border-b border-[#808080] border-opacity-50">
      <button @click="open = !open"
        class="flex flex-row justify-between text-left text-sm md:text-lg leading-4 font-semibold md:font-normal">
        <span>
          <ContentSlot :use="$slots.question" unwrap="p" />
        </span>
        <AtomsIconsArrowBottom class="transition-transform duration-300" :class="open ? 'transform rotate-180' : ''" />
      </button>
      <transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0"
        enter-to-class="opacity-100" leave-active-class="transition duration-300 ease-out"
        leave-from-class="opacity-100" leave-to-class="opacity-0">
        <div class="mt-4 text-sm leading-[1.125rem]" v-show="open">
          <ContentSlot :use="$slots.answer" />
        </div>
      </transition>
    </article>
  </SchemaOrgQuestion>
</template>
