<script lang="ts" setup>
defineProps<{
  icon?: string
}>()
</script>

<template>
  <div class="relative rounded-2xl p-7 md:p-9 gradient-border gradient-border-classement">
    <Icon v-if="icon" :name="icon" class="w-8 sm:w-10 h-auto" />

    <slot
      title-class="mt-4 sm:mt-7 text-black text-xl sm:text-2xl font-semibold"
      description-class="mt-4 text-black text-base"
    />
  </div>
</template>

<style scoped>
.gradient-border-classement::before {
  @apply bg-classement;
}

.gradient-border::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  padding: 2px;
  width: 100%;
  opacity: 0.3;
  transition: opacity 0.2s ease-in-out;
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  @apply rounded-2xl;
}

.gradient-border:hover::before {
  opacity: 1;
}
</style>
