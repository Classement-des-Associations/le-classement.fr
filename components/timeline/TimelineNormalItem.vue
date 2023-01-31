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
      <dl class="order-first flex flex-row text-sm font-light">
        <dt v-if="item.startAt" class="sr-only">
          À partir du
        </dt>
        <dd v-if="item.startAt">
          <time :datetime="item.startAt">
            {{ useDateToLocaleDateString(item.startAt).value }}
          </time>
        </dd>
        <span v-if="item.startAt && item.endAt" class="mx-1">
          -
        </span>
        <dt v-if="item.endAt" class="sr-only">
          Jusqu'au
        </dt>
        <dd v-if="item.endAt">
          <time :datetime="item.endAt">
            {{ useDateToLocaleDateString(item.endAt).value }}
          </time>
        </dd>
      </dl>
    </div>
  </article>
</template>
