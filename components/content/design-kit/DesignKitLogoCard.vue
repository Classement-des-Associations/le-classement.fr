<script lang="ts" setup>
defineProps<{
  imageName: string,
  cardClass: string,
  infoType: 'primary'
}>()
</script>

<template>
  <li>
    <div>
      <div>
        <ContentSlot :use="$slots.info" unwrap="p"> </ContentSlot>
      </div>
      <img :src="`/assets/design-kit/logo/${imageName}.svg`" :alt="imageName">
    </div>
    <div>
      <p>
        <ContentSlot :use="$slots.name" unwrap="p"></ContentSlot>
      </p>
      <div>
        <a :href="`/assets/design-kit/logo/${imageName}.svg`" aria-label="Télécharger le svg" download>svg</a>
        <a :href="`/assets/design-kit/logo/${imageName}.png`" aria-label="Télécharger le png" download>png</a>
      </div>
    </div>
  </li>
</template>
