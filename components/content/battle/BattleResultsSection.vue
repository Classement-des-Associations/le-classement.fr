<script lang="ts" setup>
const props = defineProps<{
  duels: string,
  sectionClass?: string
}>()

const { data: duels } = await useDuels(props.duels)

const calculatePercentage = (value: number, total: number) => {
  const result = (value / total) * 100
  if (Number.isNaN(result)) {
    return 0
  }

  return Math.round((value / total) * 100)
}

const isWinner = (duel: any, player: 'player1' | 'player2') => {
  if (player === 'player1') {
    return duel.likesPlayer1 > duel.likesPlayer2
  } else if (player === 'player2') {
    return duel.likesPlayer2 > duel.likesPlayer1
  }
}
</script>

<template>
  <BaseSection :class="sectionClass">
    <Prose v-if="duels" class="mx-auto max-w-none prose-td:align-middle prose-th:text-lg prose-th:py-4 prose-th:px-8 prose-td:py-4 prose-td:px-8">
      <table class="w-auto mx-auto">
        <thead>
          <tr>
            <th>
              <div class="flex flex-row justify-end">
                Association 1
              </div>
            </th>
            <th class="flex flex-row justify-center">
              Résultat (votes - %)
            </th>
            <th>Association 2</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="duel in duels.body" :key="duel.id">
            <td>
              <div class="flex flex-row justify-end items-center gap-2" :class="{'font-bold': isWinner(duel, 'player1')}">
                <div class="not-prose">
                  <img :src="duel.player1.image.src" :alt="duel.player1.image.alt" class="h-6 w-auto object-cover">
                </div>
                <span>
                  {{ duel.player1.name }}
                </span>
              </div>
            </td>
            <td>
              <dl class="flex flex-row gap-1 items-center justify-center">
                <dt class="sr-only">
                  Nombre de votes pour l'association {{ duel.player1.name }}
                </dt>
                <dd class="tabular-nums" :class="{'font-bold': isWinner(duel, 'player1')}">
                  {{ duel.likesPlayer1 }} ({{ calculatePercentage(duel.likesPlayer1, (duel.likesPlayer1 + duel.likesPlayer2)) }}%)
                </dd>
                <Icon name="fluent-emoji:high-voltage" class="h-5 w-5" />
                <dt class="sr-only">
                  Nombre de votes pour l'association {{ duel.player2.name }}
                </dt>
                <dd class="tabular-nums" :class="{'font-bold': isWinner(duel, 'player2')}">
                  {{ duel.likesPlayer2 }} ({{ calculatePercentage(duel.likesPlayer2, (duel.likesPlayer1 + duel.likesPlayer2)) }}%)
                </dd>
              </dl>
            </td>
            <td>
              <div class="flex flex-row items-center gap-2" :class="{'font-bold': isWinner(duel, 'player2')}">
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
