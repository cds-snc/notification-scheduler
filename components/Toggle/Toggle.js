import React, { useContext } from "react";
import { store } from "./index";

export const Toggle = () => {
  const { _24hr, dispatch } = useContext(store);
  return (
    <div className="toggle-holder">
      <div className="toggle-label">am/pm</div>
      <button
        className={`switch ${_24hr}`}
        onClick={() => {
          dispatch({ type: "AM_PM", payload: _24hr });
        }}
      />
      <div className="toggle-label">24h</div>
    </div>
  );
};
