import React, { useState, useContext } from "react";
import { store } from "./index";
import { populateTimes } from "./_util";

export const Time = ({ name }) => {
  const { _24hr } = useContext(store);
  const values = populateTimes(_24hr);
  const [selected, setSelected] = useState("10:00");
  return (
    <div className="Nav--select">
      <select
        onChange={event => {
          setSelected(event.currentTarget.value);
        }}
        id={name}
        aria-label={name}
        value={selected}
      >
        {values.map(item => {
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
