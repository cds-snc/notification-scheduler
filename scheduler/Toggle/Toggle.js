import React, { useContext, useState } from "react";
import { store, I18nContext } from "./index";
import "./style.css";

export const Toggle = () => {
  const { _24hr, dispatch } = useContext(store);
  const { translate } = useContext(I18nContext);

  return (
    <div className="multiple-choice multiple-choice--radios">
      <div className="multiple-choice__item">
        <input
          name="time-toggle"
          type="radio"
          id="am_pm"
          value="am_pm"
          onChange={() => {
            dispatch({ type: "AM_PM", payload: "off" });
          }}
          checked={_24hr === "off" ? true : false}
        />
        <label htmlFor="am_pm">am/pm</label>
      </div>

      <div className="multiple-choice__item">
        <input
          name="time-toggle"
          type="radio"
          id="_24"
          value="_24"
          onChange={() => {
            console.log("turn on");
            dispatch({ type: "AM_PM", payload: "on" });
          }}
          checked={_24hr === "on" ? true : false}
        />
        <label htmlFor="_24">24h</label>
      </div>
    </div>
  );
  /*
  return (
    <div
      className={
        active ? "toggle-holder toggle-holder-active" : "toggle-holder"
      }
    >
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
        type="button"
        aria-label={translate("toggle_label")}
        onFocus={() => {
          setActive(true);
        }}
        onBlur={() => {
          setActive(false);
        }}
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
  */
};
