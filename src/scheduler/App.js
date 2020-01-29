import React from "react";
import { StateProvider, setIntialState } from "./store";
import { I18nProvider } from "./i18n";
import { ErrorMessage } from "./ErrorMessage/ErrorMessage";
import { Calendar } from "./Calendar/Calendar";
import { DateTime } from "./DateTime/DateTime";
import { SetDateTime } from "./SetDateTime/SetDateTime";
import "./style.css";

export const App = () => {
  const providerState = setIntialState();
  return (
    <I18nProvider>
      <StateProvider value={providerState}>
        <ErrorMessage />
        <div className="schedule">
          <div>
            <Calendar />
          </div>
          <DateTime />
          <SetDateTime />
        </div>
      </StateProvider>
    </I18nProvider>
  );
};
