import React, { useContext } from "react";
import { store } from "./index";

export const Toggle = () => {
  const { _24hr, dispatch } = useContext(store);
  return (
    <div className="toggle-holder">
      <div
        className={[
          "toggle-label",
          _24hr === "off" ? "toggle-label-active" : ""
        ].join(" ")}
      >
        am/pm
      </div>
      <button
        className={`switch ${_24hr}`}
        aria-label="AM PM 24hr time toggle"
        onClick={() => {
          dispatch({ type: "AM_PM", payload: _24hr });
        }}
      />
      <div
        className={[
          "toggle-label",
          _24hr === "on" ? "toggle-label-active" : ""
        ].join(" ")}
      >
        24h
      </div>
    </div>
  );
};
