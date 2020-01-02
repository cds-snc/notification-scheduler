import React from "react";

const months = [
  { val: "01", label: "9:00 am" },
  { val: "02", label: "10:00 am" }
];

export const Time = ({
  name,
  values = months,
  selected = "",
  handleChange = () => {}
}) => {
  return (
    <div  className="Calendar-nav--select">
      <select
        onChange={handleChange}
       
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
