import React, { useContext } from "react";
import dayjs from "dayjs";
import { Day } from "./Day";
import { store, yearMonthDay } from "./index";

export const Days = ({ week }) => {
  const { date } = useContext(store);
  const month = dayjs(date).format("MM");
  return week.map(day => {
    if (Number(day.$M) + 1 !== Number(month)) {
      return (
        <span
          key={yearMonthDay(day)}
          className="Calendar-item Calendar-item--empty"
        ></span>
      );
    }

    return <Day key={yearMonthDay(day)} day={day} />;
  });
};
