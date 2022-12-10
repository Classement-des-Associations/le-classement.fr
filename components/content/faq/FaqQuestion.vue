<template>
  <li>
    <h3>
      <ContentSlot :use="$slots.question" unwrap="p" />
    </h3>
    <!-- il faut utiliser un v-show pour que le contenu soit quand même sur la page -->
    <ContentSlot :use="$slots.answer" />
  </li>
</template>
