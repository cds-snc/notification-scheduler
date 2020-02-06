import React from "react";
import ReactDOM from "react-dom";
import { App } from "./scheduler/App";
import dayjs from "dayjs";
window.dayjs = dayjs;

ReactDOM.render(<App />, document.getElementById("schedule-send-at"));
