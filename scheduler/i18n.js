import React, { useReducer } from "react";

import EN from "./locales/en.json";
import FR from "./locales/fr.json";

const translations = {
  en: EN,
  fr: FR
};

export const getTranslate = langCode => key =>
  translations[langCode][key] || key;

const initialState = {
  langCode: "en",
  translate: getTranslate("en")
};

export const I18nContext = React.createContext(initialState);

export const I18nProvider = ({ value = {}, children }) => {
  const mergedState = { ...initialState, ...value };
  const reducer = (state, action) => {
    switch (action.type) {
      case "setLanguage":
        return {
          langCode: action.payload,
          translate: getTranslate(action.payload)
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, mergedState);

  return (
    <I18nContext.Provider value={{ ...state, dispatch }}>
      {children}
    </I18nContext.Provider>
  );
};
