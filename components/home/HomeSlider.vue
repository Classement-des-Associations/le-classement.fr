<script lang="ts" setup>
defineProps<{
  images: {
    src: string;
    alt: string;
    width: string | number;
    height: string | number;
  }[];
  timing: string;
  slidesPerView: number;
  slideWidth: string;
  imageWidth: string;
  imageHeight: string;
  reversed?: boolean;
}>()
</script>

<template>
  <div class="slider">
    <div class="slide-track" :class="reversed ? 'animation-reverse' : 'animation'">
      <template v-for="item in [...images, ...images]" :key="item.src">
        <div class="slide shrink-0">
          <slot :image="item" />
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
@keyframes scroll {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    -webkit-transform: translateX(calc(-1 * v-bind(slideWidth) * v-bind(slidesPerView)));
    transform: translateX(calc(-1 * v-bind(slideWidth) * v-bind(slidesPerView)));
  }
}

.animation {
  -webkit-animation: scroll v-bind(timing) linear infinite;
  animation: scroll v-bind(timing) linear infinite;
}

.animation-reverse {
  -webkit-animation: scroll v-bind(timing) linear infinite reverse;
  animation: scroll v-bind(timing) linear infinite reverse;
}

.slider {
  margin: auto;
  position: relative;
}

.slider .slide-track {
  display: flex;
  width: calc(v-bind(slideWidth) * (v-bind(slidesPerView) * 2));
}

.slide-track:hover {
  animation-play-state: paused;
}

.slide {
  height: v-bind(imageHeight);
  width: v-bind(slideWidth);
}

.slide :deep(img) {
  width: v-bind(imageWidth);
}
</style>
