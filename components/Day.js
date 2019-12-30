import React, { useContext } from "react";
import { isBlockedDay, formattedDay, yearMonthDay } from "./util";
import { store } from "../store";

export const Day = ({ day }) => {
  const { today, dispatch } = useContext(store);
  const { $D: dayNum } = day;
  const isDisabled = isBlockedDay(day, today);
  const isCurrent = day.isSame(today);
  const isSelected = day.isSame("");
  const bthState = isDisabled
    ? "Calendar-item--unavailable"
    : "Calendar-item--active";
  const currentState = isCurrent ? { "aria-current": "date" } : {};
  const tabIndex = dayNum !== today.$D ? { tabIndex: -1 } : {};
  const label = (isDisabled ? `Unavailable, ` : "") + formattedDay(day);

  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={isSelected}
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
