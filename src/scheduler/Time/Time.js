import React, { useContext } from "react";
import { store } from "./index";

export const Time = ({ name }) => {
  const { time, time_values, dispatch } = useContext(store);
  return (
    <div className="Nav--select">
      <select
        onChange={event => {
          const time = event.currentTarget.value;
          dispatch({
            type: "SELECT_TIME",
            payload: time
          });
        }}
        id={name}
        name={name}
        aria-label={name}
        value={time}
      >
        {time_values.map(item => {
          return (
            <option key={item.label} value={item.val}>
              {item.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};
