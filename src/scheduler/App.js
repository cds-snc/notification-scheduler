import React from "react";
import { StateProvider, setIntialState, defaultState } from "./store";
import { I18nProvider } from "./i18n";
import { ErrorMessage } from "./ErrorMessage/ErrorMessage";
import { Calendar } from "./Calendar/Calendar";
import { DateTime } from "./DateTime/DateTime";
import { SetDateTime } from "./SetDateTime/SetDateTime";
import { DomEventHandler } from "./DomEventHandler/DomEventHandler";
import dayjs from "dayjs";

export const App = () => {
  let options = {};

  options = { init: setIntialState, ...window.schedulerOptions };

  // const providerState = options.init(dayjs);
  const providerState = options.init({
    dayjs,	
    defaultState: defaultState()
  })

  return (
    <I18nProvider>
      <StateProvider value={providerState}>
        <DomEventHandler />
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
