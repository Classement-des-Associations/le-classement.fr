<script lang="ts" setup>
import { TimelineLargeItem } from '~~/types/timeline'

defineProps<{item: TimelineLargeItem}>()
</script>

<template>
  <article class="gradient-border-2 border-gradient-br-associations-white rounded-2xl p-6 flex flex-col gap-3">
    <div class="flex flex-col gap-1">
      <div class="flex flex-row items-center gap-2">
        <Icon
          :name="item.icon"
          class="w-5 h-5"
        />
        <h3 class="text-xl font-bold">
          {{ item.title }}
        </h3>
      </div>
      <dl class="order-first flex flex-row text-sm font-light">
        <dt class="sr-only">
          À partir du
        </dt>
        <dd>
          <time :datetime="item.startAt">
            {{ useDateToLocaleDateString(item.startAt).value }}
          </time>
        </dd>
        <span class="mx-1">
          -
        </span>
        <dt class="sr-only">
          Jusqu'au
        </dt>
        <dd>
          <time :datetime="item.endAt">
            {{ useDateToLocaleDateString(item.endAt).value }}
          </time>
        </dd>
      </dl>
    </div>
    <p>
      {{ item.description }}
    </p>
  </article>
</template>
