<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'bg-slate',
  },
})
</script>

<template>
  <button
    type="button"
    class="px-6 py-2 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg text-slate-100 text-lg transition-all ease-in-out duration-200"
    :class="`${color}-400 hover:${color}-500 active:${color}-600`"
  >
    {{ label }}
  </button>
</template>
