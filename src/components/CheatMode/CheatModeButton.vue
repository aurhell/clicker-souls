<script setup lang="ts">
import { reactive } from 'vue'

import CheatModeModal from '@/components/CheatMode/CheatModeModal.vue'

const state = reactive({ isCheatModeModalOpen: false })

const openModal = () => state.isCheatModeModalOpen = true
const closeModal = () => state.isCheatModeModalOpen = false
</script>

<template>
  <button
    type="button"
    class="ml-2 p-1 text-sm text-green-600 border-2 border-green-600 hover:text-gray-700 hover:bg-green-600 transition-all ease-in-out duration-200"
    @click="openModal"
  >
    cheat
  </button>

  <CheatModeModal v-if="state.isCheatModeModalOpen" is-persistent @close="closeModal" />
</template>
