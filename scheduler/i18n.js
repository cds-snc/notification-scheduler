import React, { useReducer } from "react";

import EN from "./locales/en.json";
import FR from "./locales/fr.json";

const translations = {
  en: EN,
  fr: FR
};

const getTranslate = langCode => key => translations[langCode][key] || key;

const initialState = {
  langCode: "fr",
  translate: getTranslate("fr")
};

export const I18nContext = React.createContext(initialState);

export const I18nProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "setLanguage":
        return {
          langCode: action.payload,
          translate: getTranslate(action.payload)
        };
      default:
        return { ...initialState };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <I18nContext.Provider value={{ ...state, dispatch }}>
      {children}
    </I18nContext.Provider>
  );
};
