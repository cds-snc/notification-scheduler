import React, { useContext } from "react";
import { store, yearMonthDay, getDates, onKeydown } from "./index";
import { Days } from "./Days";

export const Weeks = () => {
  const { date } = useContext(store);
  const weeks = getDates(date);
  return (
    <section
      id="Calendar-dates"
      aria-label="Calendar dates"
      role="application"
      onKeyDown={onKeydown}
    >
      {weeks.map(week => {
        return (
          <div key={yearMonthDay(week[0])} className="Calendar-row">
            <Days week={week} />
          </div>
        );
      })}
    </section>
  );
};
