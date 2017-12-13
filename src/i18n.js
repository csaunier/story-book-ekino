import { reactI18nextModule } from 'react-i18next'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import XHR from 'i18next-xhr-backend'

const { FALLBACK_LOCALE } = process.env

const loadLocales = (url, options, callback) =>
  require(`bundle-loader!i18n/${url}.yml`)(locale => callback(locale, { status: '200' }))

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    backend: {
      loadPath: '{{lng}}',
      parse: data => data,
      ajax: loadLocales,
    },

    detection: {
      order: ['querystring', 'htmlTag'],
    },

    fallbackLng: FALLBACK_LOCALE,

    interpolation: {
      escapeValue: false,
    },

    react: {
      wait: true,
    },

    debug: !!__DEBUG__,
  })

export default i18n
