import React, { useContext } from "react";
import { store } from "./index";

const setDateAndTimeValue = val => {
  return val;
};

export const SetDateTime = () => {
  const { selected: selectedDate, time } = useContext(store);

  if (!time) {
    setDateAndTimeValue("");
    return null;
  }

  setDateAndTimeValue(`${selectedDate[0]} ${time}`);
  return null;
};
