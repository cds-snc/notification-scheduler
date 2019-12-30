import React from "react";
import { Day } from "./Day";
import { yearMonthDay } from "./util";

export const Days = ({ week }) => {
  return week.map(day => {
    return <Day key={yearMonthDay(day)} day={day} />;
  });
};
