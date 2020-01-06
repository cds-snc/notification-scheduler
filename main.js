import ReactDOM from "react-dom";
import React from "react";
import { StateProvider } from "./components/_store";
import { Calendar } from "./components/Calendar/Calendar";
import { Date } from "./components/Date/Date";
import { Toggle } from "./components/Toggle/Toggle";
import { Time } from "./components/Time/Time";
import "./style.css";

export const App = () => {
  return (
    <StateProvider>
      <div className="schedule">
        <div>
          <Calendar />
        </div>
        <div className="column">
          <div className="selected-date-time-box">
            <div className="triangle"></div>
            <div className="date-time-box">
              <Date />
              <Time name="time" />
              <Toggle />
            </div>
          </div>
        </div>
      </div>
    </StateProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
