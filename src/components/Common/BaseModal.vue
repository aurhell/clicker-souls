<script setup lang="ts">
import { reactive, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

import BaseButton from '@/components/Common/BaseButton.vue'

type BaseModalState = {
  isWiggling: Boolean
}

const targetBaseModal = ref(null)

const emit = defineEmits(['close'])

const state = reactive({ isWiggling: false } as BaseModalState)

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  isPersistent: {
    type: Boolean,
    required: false,
    default: false,
  },
})

const closeModal = () => {
  emit('close')
}

onClickOutside(targetBaseModal, () => {
  if (props.isPersistent) {
    state.isWiggling = true
    setTimeout(() => {
      state.isWiggling = false
    }, 300)
    return
  }
  return closeModal()
})
</script>

<template>
  <div
    class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
  >
    <div
      class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"
      :class="{ 'animate-wiggle': state.isWiggling }"
      ref="targetBaseModal"
    >
      <div class="mt-3 text-center">
        <slot name="modalHeader">
          <h3 class="text-lg leading-6 font-medium text-gray-900">{{ title }}</h3>
        </slot>
        
        <slot name="modalContent" />

        <slot name="modalFooter">
          <div class="items-center px-4 py-3">
            <BaseButton :label="$t('common.close')" @click="closeModal" />
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>
