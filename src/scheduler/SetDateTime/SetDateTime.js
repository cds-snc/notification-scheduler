import React, { useContext } from "react";
import { store } from "./index";

const setDateAndTimeValue = val => {
  const ref = document.getElementById("hidden-value")
  if (ref && val) {
    ref.setAttribute("value", val)
  }
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
