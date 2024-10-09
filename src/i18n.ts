import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend) // To load translations using HTTP
  .use(LanguageDetector) // To detect the user's language
  .use(initReactI18next) // To initialize react-i18next with i18next
  .init({
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: {
        translation: {
          "No Course IN PROGRESS.": "No Course IN PROGRESS.",
          "GO TO COURSE": "GO TO COURSE",
        }
      },
      fr: {
        translation: {
          "No Course IN PROGRESS.": "Pas de cours en cours.",
          "GO TO COURSE": "ALLER AU COURS",
        }
      }
    },
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
