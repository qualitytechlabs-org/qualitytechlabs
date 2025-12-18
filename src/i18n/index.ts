// // src/i18n/index.ts
// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector";

// // import JSON resources from src
// import en from "../locales/en/common.json";
// import ar from "../locales/en/common.json";

// i18n
//   .use(LanguageDetector)          // detect from query/localStorage/navigator
//   .use(initReactI18next)
//   .init({
//     resources: {
//       en: { common: en },
//       ar: { common: ar },
//     },
//     ns: ["common"],
//     defaultNS: "common",
//     fallbackLng: "en",
//     supportedLngs: ["en", "ar"],
//     interpolation: { escapeValue: false }, // React already escapes
//     detection: {
//       order: ["querystring", "localStorage", "navigator", "htmlTag"],
//       caches: ["localStorage"]
//     }
//   });

// export default i18n;


import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// inline JSON imports (kept in src/)
import en from "../locales/en/common.json";
import hi from "../locales/hi/common.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: en },
      hi: { common: hi }
    },
    ns: ["common"],
    defaultNS: "common",
    fallbackLng: "en",
    supportedLngs: ["en", "hi"],
    interpolation: { escapeValue: false },
    detection: {
      order: ["querystring", "localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"]
    }
  });

export default i18n;
