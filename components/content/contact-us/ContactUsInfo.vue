<script lang="ts" setup>
const props = defineProps<{
  mail?: string
  tel?: string
  appointmentText?: string
  appointmentLink?: string
}>()

const link = useClassementLink(props.appointmentLink)
</script>

<template>
  <div>
    <h2 class="text-2xl md:text-3xl font-bold">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h2>
    <div class="mt-8 px-4 py-6 flex flex-col bg-white text-sm">
      <NuxtLink :to="link" class="py-3 flex flex-row space-x-4 items-center">
        <Icon name="heroicons:bell-alert" class="w-6 h-6" />
        <span>
          {{ appointmentText }}
        </span>
      </NuxtLink>
      <NuxtLink :to="`mailto:${mail}`" class="py-3 flex flex-row space-x-4 items-center">
        <Icon name="heroicons:envelope" class="w-6 h-6" />
        <span>
          {{ mail }}
        </span>
      </NuxtLink>
      <NuxtLink :to="`tel:${tel}`" class="py-3 flex flex-row space-x-4 items-center">
        <Icon name="heroicons:device-phone-mobile" class="w-6 h-6" />
        <span>
          {{ tel }}
        </span>
      </NuxtLink>
    </div>
    <div v-if="$slots.socials" class="mt-8">
      <ContentSlot :use="$slots.socials" unwrap="p" />
    </div>
  </div>
</template>
