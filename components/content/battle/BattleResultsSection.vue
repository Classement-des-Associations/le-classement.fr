<script lang="ts" setup>
const props = defineProps<{
  duels: string,
  sectionClass?: string
}>()

const { data: duels } = await useDuels(props.duels)
</script>

<template>
  <BaseSection :class="sectionClass">
    <Prose v-if="duels" class="mx-auto max-w-none prose-td:align-middle">
      <h2>
        <ContentSlot :use="$slots.title" unwrap="p" />
      </h2>
      <table>
        <thead>
          <tr>
            <th>Duel</th>
            <th>Association 1</th>
            <th>Résultat</th>
            <th>Association 2</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="duel in duels.body" :key="duel.id">
            <td>
              <span class="flex flex-row items-center">
                {{ duel.id }}
              </span>
            </td>
            <!-- Add bold to winner -->
            <td>
              <div class="flex flex-row items-center gap-2">
                <div class="not-prose">
                  <img :src="duel.player1.image.src" :alt="duel.player1.image.alt" class="h-6 w-auto object-cover">
                </div>
                <span>
                  {{ duel.player1.name }}
                </span>
              </div>
            </td>
            <td>
              <dl class="flex flex-row gap-1 items-center">
                <dt class="sr-only">
                  Nombre de votes pour l'association {{ duel.player1.name }}
                </dt>
                <dd>{{ duel.likesPlayer1 }}</dd>
                <Icon name="fluent-emoji:high-voltage" class="h-5 w-5" />
                <dt class="sr-only">
                  Nombre de votes pour l'association {{ duel.player2.name }}
                </dt>
                <dd>{{ duel.likesPlayer2 }}</dd>
              </dl>
            </td>
            <td>
              <div class="flex flex-row items-center gap-2">
                <span>
                  {{ duel.player2.name }}
                </span>
                <div class="not-prose">
                  <img :src="duel.player2.image.src" :alt="duel.player2.image.alt" class="h-6 w-auto object-cover">
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </Prose>
  </BaseSection>
</template>
