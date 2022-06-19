<script setup lang="ts">
import LOCALES from '@/constants/locales.constants'
import i18n from '@/i18n'

const setLocale = (locale: string) => {
  i18n.global.locale = locale
}
</script>

<template>
  <button
    v-for="locale in LOCALES"
    type="button"
    class="text-slate-100 hover:text-slate-700 text-xs border-2 border-slate-100 hover:bg-slate-100 font-bold w-10 h-8 text-center mx-1 transition-all duration-200"
    @click="setLocale(locale)"
  >
    {{ locale }}
  </button>
</template>
