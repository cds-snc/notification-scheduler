import React from "react";
import { yearMonthDay, getDates } from "./util";
import { Days } from "./Days";
import { DaysOfTheWeek } from "./DaysOfTheWeek";
import { StateProvider } from "../store.js";

export const Calendar = () => {
  const weeks = getDates();
  return (
    <div className="Calendar-grid">
      <DaysOfTheWeek />
      <section
        id="Calendar-dates"
        aria-label="Calendar dates"
        role="application"
      >
        {weeks.map(week => {
          return (
            <div key={yearMonthDay(week[0])} className="Calendar-row">
              <Days week={week} />
            </div>
          );
        })}
      </section>
    </div>
  );
};

export const CalendarWrapper = () => {
  return (
    <StateProvider>
      <Calendar />
    </StateProvider>
  );
};
