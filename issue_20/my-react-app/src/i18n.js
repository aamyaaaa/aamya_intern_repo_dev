// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to Focus Bear",
      subtitle: "Build better habits, one tiny step at a time.",
      languageSwitcher: "Change language to Spanish",
    },
  },
  es: {
    translation: {
      welcome: "Bienvenido a Focus Bear",
      subtitle: "Crea mejores hábitos, un pequeño paso a la vez.",
      languageSwitcher: "Cambiar idioma a inglés",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en", // if key/language not found
    debug: false, // you can make this true while developing

    interpolation: {
      escapeValue: false, // react already does XSS protection
    },
  });

export default i18n;
