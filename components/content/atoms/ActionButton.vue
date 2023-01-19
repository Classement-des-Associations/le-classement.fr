<script lang="ts" setup>
defineProps({
  to: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <AtomsAppLink target="_blank" :to="to" fill>
    {{ text }}
  </AtomsAppLink>
</template>
