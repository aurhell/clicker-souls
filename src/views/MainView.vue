<script setup lang="ts">
import LocaleSelector from '@/components/Common/LocaleSelector.vue'
import Base from '@/components/Base.vue'
</script>

<template>
  <main
    class="w-screen h-screen bg-gradient-to-tr from-gray-700 via-gray-900 to-black text-gray-200 font-medievalSharp"
  >
    <div class="flex flex-col w-full h-full">
      <div class="flex flex-none justify-end mt-2 mr-2">
        <LocaleSelector />
      </div>
      <div class="flex flex-col flex-1 justify-center items-center">
        <Base />
      </div>
    </div>
  </main>
</template>
