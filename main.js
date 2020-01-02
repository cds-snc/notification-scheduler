import ReactDOM from "react-dom";
import React from "react";
import { CalendarWrapper } from "./components/Calendar/Calendar";
import { Toggle } from "./components/Toggle/Toggle";
import { Time } from "./components/Time/Time";

export const App = () => {
  return (
    <div className="schedule">
      <div>
        <CalendarWrapper />
      </div>
      <div className="column">
        <Toggle />
        <Time name="time" />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
