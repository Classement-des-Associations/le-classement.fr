<script lang="ts" setup>
defineProps<{
  sectionClass?: string;
  sponsors: {
    name: string;
    src: string;
    class: string;
    width: string | number;
    height: string | number;
  }[]
}>()
</script>

<template>
  <BaseSection :class="sectionClass">
    <NuxtLink to="/partenaires">
      <h2 class="text-sm sm:text-base text-zinc-500 tracking-tight font-medium">
        <ContentSlot :use="$slots.title" unwrap="p" />
      </h2>
      <ul class="mt-5 flex flex-row gap-4">
        <template v-for="sponsor in sponsors" :key="sponsor.name">
          <li class="h-8 sm:h-11 flex flex-row items-center justify-center">
            <img
              :src="sponsor.src"
              :alt="`Logo du sponsor ${sponsor.name}`"
              :class="sponsor.class"
              :width="sponsor.width"
              :height="sponsor.height"
            >
          </li>
        </template>
      </ul>
    </NuxtLink>
  </BaseSection>
</template>
