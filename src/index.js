import React from "react";
import ReactDOM from "react-dom";
import { App } from "./scheduler/App";

// schedule-send-at
window.renderCalendar = target => {
  ReactDOM.render(<App />, document.getElementById(target));
};
