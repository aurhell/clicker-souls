<script setup lang="ts">
import { reactive } from 'vue'

import BaseButton from '@/components/Common/BaseButton.vue'
import BaseModal from '@/components/Common/BaseModal.vue'
import { useSoulsStore } from '@/stores/souls'

type CheatModeModalState = {
  soulsNumberInput: number | null
}

const state = reactive({ soulsNumberInput: null } as CheatModeModalState)

const soulsStore = useSoulsStore()

const setSouls = () => {
  if (!state.soulsNumberInput) {
    return
  }
  soulsStore.setSouls(state.soulsNumberInput)
  state.soulsNumberInput = null
}
</script>

<template>
  <BaseModal title="CHEAT MODE!" is-persisent>
    <template #modalContent>
      <div class="flex flex-row mt-2 px-7 py-3">
        <input
          v-model="state.soulsNumberInput"
          class="h-12 text-base shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="souls number"
        />
        <BaseButton label="set" @click="setSouls" />
      </div>
    </template>
  </BaseModal>
</template>
