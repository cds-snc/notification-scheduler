import React from "react";
import ReactDOM from "react-dom";
import { App } from "./scheduler/App";

/*
window.schedulerOptions.populateTimes = () => {
  console.log("new populateTimes");
  return [
    { val: "1:00", label: "1:00 PM" },
    { val: "2:00", label: "2:00 PM" },
    { val: "3:00", label: "3:00 PM" },
    { val: "4:00", label: "4:00 PM" }
  ];
};

const myEvent = new CustomEvent("build", { detail: "hello" });
window.dispatchEvent(myEvent);
*/

// schedule-send-at
window.renderCalendar = target => {
  ReactDOM.render(<App />, document.getElementById(target));
};
