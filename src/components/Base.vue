<script setup lang="ts">
  import { useLoop } from '@/composables/loop.composable'
  import { useSoulsStore } from '@/stores/souls'

  const souls = useSoulsStore()
  useLoop()
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <div class="text-center">
      <span>Current souls: {{ souls.souls }}</span
      ><br />
      <span>Souls per second: {{ souls.soulsPerSecond }}</span
      ><br />
    </div>
    <div class="mt-2">
      <button
        type="button"
        class="px-6 py-2 rounded bg-slate-400 hover:bg-slate-500 text-slate-100"
        @click="souls.addSouls(1)"
      >
        Walk
      </button>

      <button
        v-if="souls.canTrain"
        type="button"
        class="mx-2 px-6 py-2 rounded bg-green-600 hover:bg-green-700 text-slate-100"
        @click="souls.addSoulsPerSecond(1)"
      >
        Train
      </button>
    </div>
  </div>
</template>
