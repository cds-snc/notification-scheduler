import React from "react";

export const SelectMenu = ({ name, values, selected, handleChange }) => {
  return (
    <select
      onChange={handleChange}
      id={name}
      aria-label={name}
      defaultValue={selected}
    >
      {values.map(item => {
        return (
          <option key={item.label} value={item.val}>
            {item.label}
          </option>
        );
      })}
    </select>
  );
};
