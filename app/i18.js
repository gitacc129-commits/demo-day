"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  uz: {
    translation: {
      "Home harromi":
        " Mahalliy bozoringiz, <br /> tez va oson yetkazib beriladi.",
    },
  },
  ru: {
    translation: {
      "Home page": "Ваш местный рынок, <br /> быстрая и удобная доставка.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "uz",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
