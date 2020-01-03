import React, { useState } from "react";

const populate = (_24hr = false) => {
  let hours, hours24, minutes, ampm;
  let arr = [];

  for (let i = 0; i <= 1380; i += 60) {
    hours = Math.floor(i / 60);
    hours24 = Math.floor(i / 60);

    minutes = i % 60;
    if (minutes < 10) {
      minutes = "0" + minutes; // adding leading zero
    }

    ampm = "";
    ampm = hours % 24 < 12 ? "AM" : "PM";
    hours = hours % 12;
    if (hours === 0) {
      hours = 12;
    }

    if (hours24 < 10) {
      hours24 = "0" + hours24; // adding leading zero
    }

    let postfix = ampm ? ` ${ampm}` : "";
    let label = `${hours24}:${minutes}`;

    if (!_24hr) {
      label = `${hours}:${minutes}${postfix}`;
    }

    arr.push({ val: `${hours24}:${minutes}`, label });
  }

  return arr;
};

export const Time = ({ name, values = populate(true) }) => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="Calendar-nav--select">
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
