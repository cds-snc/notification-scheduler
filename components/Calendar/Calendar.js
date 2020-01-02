import React from "react";
import { YearMonth } from "./YearMonth";
import { DaysOfTheWeek } from "./DaysOfTheWeek";
import { Weeks } from "./Weeks";
import { Announce } from "./Announce";
import { StateProvider } from "./index";

// Note:
// Inspired by "A New Day: Making a Better Calendar"
// https://www.24a11y.com/2018/a-new-day-making-a-better-calendar

export const Calendar = () => {
  return (
    <div className="date-time">
      <section className="Calendar" aria-label="Calendar">
        <YearMonth />
        <div className="Calendar-grid">
          <DaysOfTheWeek />
          <Weeks />
        </div>
        <Announce msg="" />
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
