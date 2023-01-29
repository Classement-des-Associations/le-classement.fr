<script lang="ts" setup>
import { Part } from '~~/types/part'

defineProps<{
  to: string
  part: Part
}>()

const useClass = function (part: Part) {
  switch (part) {
    case 'classement':
      return 'before:from-primary-base before:to-primary-variation-1 border-gradient-br-associations-white'
    case 'partenaires':
      return 'before:from-accent-purple before:to-accent-blue border-gradient-br-partenaires-white'
    default:
      return ''
  }
}
</script>

<template>
  <BaseNuxtLink
    :to="to"
    class="relative gradient-border-2 before:absolute before:transition before:duration-200 before:rounded-lg before:opacity-0 hover:before:opacity-75 before:-inset-0.5 before:bg-gradient-to-r  before:blur-md before:z-[-1]"
    :class="useClass(part)"
  >
    <slot />
  </BaseNuxtLink>
</template>
