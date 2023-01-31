<script lang="ts" setup>
import { Part } from '~~/types/part'

defineProps<{
  buttonText: string
  buttonLink: string
  part: Part
}>()
</script>

<template>
  <div class="not-prose flex flex-row justify-center">
    <ClassementLink :button-text="buttonText" :button-link="buttonLink" :part="part" />
  </div>
</template>
