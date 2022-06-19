<script setup lang="ts">
import BaseButton from '@/components/Common/BaseButton.vue'
import CheatModeButton from '@/components/CheatMode/CheatModeButton.vue'
import { useLoop } from '@/composables/loop.composable'
import { useCheatMode } from '@/composables/cheatMode.composable'
import { useSoulsStore } from '@/stores/souls'

const soulsStore = useSoulsStore()

const cheatMode = useCheatMode()

useLoop()
</script>

<template>
  <div class="flex flex-col justify-center items-center font-medievalSharp">
    <span class="text-6xl flex flex-row items-center">
      Welcome to clicker souls
      <CheatModeButton v-if="cheatMode.isEnabled" />
    </span>
    <div class="mt-2 text-center flex flex-col">
      <span>Current souls: {{ soulsStore.souls }}</span>
      <span>Souls per second: {{ soulsStore.soulsPerSecond }}</span>
    </div>
    <div class="mt-2 w-full flex flex-row justify-around">
      <BaseButton label="Walk" @click="soulsStore.addSouls(1)" />

      <BaseButton
        v-if="soulsStore.canTrain"
        label="Train"
        @click="soulsStore.addSoulsPerSecond(1)"
      />
    </div>
  </div>
</template>
