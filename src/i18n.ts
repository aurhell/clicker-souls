import { createI18n } from 'vue-i18n'

import LOCALES from '@/constants/locales.constants'
import messages from '@/locales/index'

export default createI18n({
  locale: LOCALES.FR,
  fallbackLocale: LOCALES.EN,
  messages,
})
