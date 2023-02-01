<script lang="ts" setup>
defineProps<{
  sectionClass?: string;
  sponsors: {
    name: string;
    src: string;
  }[]
}>()
</script>

<template>
  <BaseSection :class="sectionClass">
    <h2 class="text-sm sm:text-base text-zinc-500 tracking-tight font-medium">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h2>
    <ul class="mt-5">
      <template v-for="sponsor in sponsors" :key="sponsor.name">
        <li class="h-8 sm:h-11">
          <NuxtImg
            :src="sponsor.src"
            :alt="`Logo du sponsor ${sponsor.name}`"
            height="44"
          />
        </li>
      </template>
    </ul>
  </BaseSection>
</template>
