<script lang="ts" setup>
import { TimelineNormalItem } from '~~/types/timeline'

defineProps<{item: TimelineNormalItem}>()
</script>

<template>
  <article class="flex flex-row items-start gap-5">
    <div class="rounded-full bg-white w-7 h-7 flex flex-col items-center justify-center">
      <Icon
        name="ph:git-commit"
        class="w-6 h-6 text-primary-base"
      />
    </div>
    <div class="flex flex-col gap-1">
      <h3 class="text-xl font-bold">
        {{ item.title }}
      </h3>
      <dl class="order-first">
        <dt class="sr-only">
          À partir du
        </dt>
        <dd>
          <time :datetime="item.startAt" class="text-sm font-light">
            {{ useDateToLocaleDateString(item.startAt).value }}
          </time>
        </dd>
      </dl>
    </div>
  </article>
</template>
