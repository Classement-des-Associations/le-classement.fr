<template>
  <section>
    <p v-if="$slots.category">
      <ContentSlot :use="$slots.category" unwrap="p"></ContentSlot>
    </p>
    <h2 v-if="$slots.title">
      <ContentSlot :use="$slots.title" unwrap="p"></ContentSlot>
    </h2>
    <p v-if="$slots.description">
      <ContentSlot :use="$slots.description" unwrap="p"></ContentSlot>
    </p>
    <h3>
      <ContentSlot :use="$slots.titleExtra" unwrap="p"></ContentSlot>
    </h3>
    <ul v-if="$slots.designList">
      <ContentSlot :use="$slots.designList" unwrap="p"></ContentSlot>
    </ul>
  </section>
</template>
