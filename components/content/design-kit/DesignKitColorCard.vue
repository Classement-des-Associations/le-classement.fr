<script lang="ts" setup>
defineProps<{
  colorClass: string,
  hexaColor: string
}>()
</script>

<template>
  <li>
    <div></div>
    <div>
      <div>
        <p>
          <ContentSlot :use="$slots.color" unwrap="p"> </ContentSlot>
        </p>
        <!-- Use vueuse to use clipboard -->
        <button type="button">
          <ContentSlot :use="$slots.buttonText" unwrap="p"></ContentSlot>
        </button>
      </div>
      <p>
        {{ hexaColor }}
      </p>
    </div>
  </li>
</template>
