import React, { useContext } from "react";
import { yearMonthDay, getDates } from "./util";
import { Days } from "./Days";
import { YearMonth } from "./YearMonth";
import { DaysOfTheWeek } from "./DaysOfTheWeek";
import { store, StateProvider } from "../store.js";

export const Calendar = () => {
  const { date } = useContext(store);
  const weeks = getDates(date);
  return (
    <div className="date-time">
      <section className="Calendar" aria-label="Calendar">
        <YearMonth />
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
