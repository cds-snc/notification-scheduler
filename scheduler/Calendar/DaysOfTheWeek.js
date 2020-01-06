import React from "react";

export const DaysOfTheWeek = () => {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  return (
    <div className="Calendar-days Calendar-row" aria-hidden="false">
      {weekdays.map(day => {
        return (
          <span
            key={day}
            aria-label={day}
            className="Calendar-item Calendar-item--day"
          >
            {day.substring(0, 3)}
          </span>
        );
      })}
    </div>
  );
};
