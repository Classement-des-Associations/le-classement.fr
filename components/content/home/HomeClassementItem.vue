<script lang="ts" setup>
defineProps<{
  icon: string
  to: string
}>()
</script>

<template>
  <li>
    <NuxtLink :to="to" class="relative block rounded-2xl p-9 gradient-border gradient-border-classement">
      <Icon :name="icon" class="w-10 h-auto" />

      <p class="mt-7 text-black text-2xl font-semibold">
        <ContentSlot :use="$slots.title" unwrap="p" />
      </p>

      <p class="mt-4 text-black text-base">
        <ContentSlot :use="$slots.description" />
      </p>
    </NuxtLink>
  </li>
</template>

<style>
.gradient-border-classement::before {
  @apply bg-classement
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
