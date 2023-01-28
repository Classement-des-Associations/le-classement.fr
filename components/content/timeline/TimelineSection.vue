<script lang="ts" setup>
defineProps<{
  sectionClass?: string
}>()

const { data: timeline } = await useTimeline()
</script>

<template>
  <BaseSection v-if="timeline" :class="sectionClass">
    <h2 class="sr-only">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h2>
    <div class="relative max-w-prose mx-auto">
      <div class="-z-10 absolute left-[1.75rem] transform translate-x-1/2 -top-3 -bottom-3 w-[2px] rounded-full bg-gradient-to-b from-primary-base to-primary-variation-1" />
      <ol class="flex flex-col gap-6">
        <template v-for="item in timeline.body" :key="item.title">
          <li>
            <TimelineNormalItem v-if="item.type === 'normal'" :item="item" class="ml-4" />
            <TimelineLargeItem v-else-if="item.type === 'large'" :item="item" />
          </li>
        </template>
      </ol>
    </div>
  </BaseSection>
</template>
