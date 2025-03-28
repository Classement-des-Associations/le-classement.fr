<script lang="ts" setup>
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
const props = defineProps<{ article: ParsedContent }>()

const datetime = ref(new Date(props.article.datePublished || Date.now()))

const colors = useColorsByPart(props.article.part)
const normalizedPart = useNormalizedPart(props.article.part)
</script>

<template>
  <article
    class="relative bg-white group rounded-xl before:rounded-xl gradient-border"
    :class="`gradient-border-${article.part}`"
  >
    <NuxtLink :to="article._path" class="p-5 relative z-10 h-full flex flex-col gap-4">
      <div class="aspect-video rounded-lg md:rounded overflow-hidden">
        <img
          v-if="article.cover"
          class="h-full w-full object-cover group-hover:scale-[101%] transition-transform duration-200"
          :src="article.cover.src"
          :alt="article.cover.alt"
          width="3000"
          height="1687"
          loading="lazy"
        >
      </div>
      <div>
        <dl>
          <dt class="sr-only">
            Partie du Classement
          </dt>
          <dd class="capitalize font-bold bg-clip-text text-transparent" :class="colors.backgroundGradient">
            {{
              normalizedPart
            }}
          </dd>
        </dl>
      </div>
      <div class="flex-grow flex flex-col gap-2">
        <h3 class="text-xl text-black font-bold">
          {{ article.title }}
        </h3>
        <p class="text-base text-black">
          {{ article.description }}
        </p>
      </div>
      <time class="text-sm text-black font-light" :datetime="datetime.toISOString()">
        {{ datetime.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }) }}
      </time>
    </NuxtLink>
  </article>
</template>

<style scoped>
.gradient-border-ceremonie-finale::before {
  background-image: theme("backgroundImage.ceremonie-finale");
}

.gradient-border-tour-asso::before {
  background-image: theme("backgroundImage.tour-asso");
}

.gradient-border-discovery::before {
  background-image: theme("backgroundImage.discovery");
}

.gradient-border-classement::before {
  background-image: theme("backgroundImage.classement");
}

.gradient-border-partenaires::before {
  background-image: theme("backgroundImage.partenaires");
}

.gradient-border::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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
}

.gradient-border:hover::before {
  opacity: 1;
}
</style>
