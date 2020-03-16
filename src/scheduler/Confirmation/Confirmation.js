import React, { useContext } from "react";
import dayjs from "dayjs";
import { store } from "./index";

export const Confirmation = () => {
  const { selected, time } = useContext(store);

  // reconstruct date for display:
  const date = selected + "T" + time;

  return (selected && time) ? (
    <div className="confirmation set">
      <p>Message will be sent on:</p>
      <p><strong>{dayjs(date).format('dddd, MMMM D, YYYY')} at {dayjs(date).format('h:mm A')}</strong></p>
    </div>
  ) : (
    <div className="confirmation unset">
      <p>No date or time selected. Please use the calendar above to schedule</p>
    </div>
  );
};
