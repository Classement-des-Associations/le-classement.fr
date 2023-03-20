<script lang="ts" setup>
import { TimelineLargeItem } from '~~/types/timeline'

const props = defineProps<{item: TimelineLargeItem}>()

const link = props.item.link ? useClassementLink(props.item.link) : null
</script>

<template>
  <article class="relative gradient-border-2 border-gradient-br-associations-white rounded-2xl p-6 flex flex-col gap-3">
    <div class="flex flex-col gap-1">
      <div class="flex flex-row items-center gap-2">
        <Icon
          :name="item.icon"
          class="w-5 h-5"
        />
        <h3 class="text-xl font-bold">
          <NuxtLink v-if="link" :to="link">
            {{ item.title }}
            <div class="absolute inset-0" />
          </NuxtLink>
          <span v-else>
            {{ item.title }}
          </span>
        </h3>
      </div>
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
    <p>
      {{ item.description }}
    </p>
  </article>
</template>
