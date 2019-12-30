import React from "react";
export const SelectMenu = ({ name, values, selected }) => {
  const vals = Object.entries(values);
  return (
    <select id={name} aria-label={name} defaultValue={selected}>
      {vals.map(val => {
        return (
          <option key={val[1]} value={val[0]}>
            {val[1]}
          </option>
        );
      })}
    </select>
  );
};
