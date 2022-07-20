import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import PTBR from './locales/pt/pt-br.json'
import ENUS from './locales/en/en-us.json'
import languageDetector from 'i18next-browser-languagedetector'
const resources = {
  'pt-BR': PTBR,
  'en-US': ENUS
}
i18n
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    resources,
   interpolation: {
      escapeValue: false
    },
    detection: {
      order: [
        'htmlTag',
        'cookie',
        'localStorage',
        'path',
        'subdomain'
      ],
      caches: ['cookie']
    }
  })

export default i18n
