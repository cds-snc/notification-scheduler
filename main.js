import ReactDOM from "react-dom";
import React from "react";
import { StateProvider } from "./components/_store";
import { Calendar } from "./components/Calendar/Calendar";
import { Toggle } from "./components/Toggle/Toggle";
import { Time } from "./components/Time/Time";

export const App = () => {
  return (
    <StateProvider>
      <div className="schedule">
        <div>
          <Calendar />
        </div>
        <div className="column">
          <Time name="time" />
          <Toggle />
        </div>
      </div>
    </StateProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
