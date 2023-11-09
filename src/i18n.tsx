import i18n from 'i18next';
import de from 'locales/de/translation.json';
import en from 'locales/en/translation.json';
import { initReactI18next } from 'react-i18next';

const languageResources = {
  en: {
    translation: en,
  },
  de: {
    translation: de,
  },
};

i18n
  //   // detect user language
  //   // learn more: https://github.com/i18next/i18next-browser-languageDetector
  //   .use(LanguageDetector)

  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: 'de', // default language
    fallbackLng: 'en',
    defaultNS: 'translation',
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: languageResources,
    returnNull: false,
  });

export default i18n;
