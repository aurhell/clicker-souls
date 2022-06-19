<script setup lang="ts">
import BUTTON_COLORS from '@/constants/buttonColors.constant'

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: BUTTON_COLORS.PRIMARY,
  },
})
</script>

<template>
  <button
    type="button"
    class="px-6 py-2 text-slate-100 text-lg transition-all ease-in-out duration-200 "
    :class="[props.color]"
  >
    {{ label }}
  </button>
</template>
