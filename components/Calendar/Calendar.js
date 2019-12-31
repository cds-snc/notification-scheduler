import React from "react";
import { YearMonth } from "./YearMonth";
import { DaysOfTheWeek } from "./DaysOfTheWeek";
import { Weeks } from "./Weeks";
import { StateProvider } from "./index";

export const Calendar = () => {
  return (
    <div className="date-time">
      <section className="Calendar" aria-label="Calendar">
        <YearMonth />
        <div className="Calendar-grid">
          <DaysOfTheWeek />
          <Weeks />
        </div>
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
