import React, { useContext, useRef, useEffect } from "react";
import {
  store,
  isBlockedDay,
  formattedDay,
  yearMonthDay,
  isSelected
} from "./index";

export const Day = ({ day }) => {
  const { today, selected, focusedDayNum, dispatch } = useContext(store);
  const { $D: dayNum = 0 } = day;
  const { $D: todayDayNum = 0 } = today;
  const tabIndex = dayNum !== todayDayNum ? { tabIndex: -1 } : {};
  const isDisabled = isBlockedDay(day, today);
  const isCurrent = day.isSame(today);
  const pressed = isSelected(selected, yearMonthDay(day));
  const bthState = isDisabled
    ? "Calendar-item--unavailable"
    : "Calendar-item--active";
  const currentState = isCurrent ? { "aria-current": "date" } : {};
  const labelDate = formattedDay(day);
  const label = isDisabled ? `Unavailable, ${labelDate}` : labelDate;
  const inputEl = useRef(null);

  useEffect(() => {
    if (dayNum === focusedDayNum) {
      inputEl.current.focus();
    }
  }, []);

  return (
    <button
      ref={inputEl}
      type="button"
      aria-label={label}
      aria-pressed={pressed === -1 ? false : true}
      className={["Calendar-item", bthState].join(" ")}
      data-timestamp={day.unix()}
      data-day={`day-${dayNum}`}
      onClick={() => {
        dispatch({ type: "SELECT_DATE", payload: yearMonthDay(day) });
      }}
      {...currentState}
      {...tabIndex}
    >
      {dayNum}
    </button>
  );
};