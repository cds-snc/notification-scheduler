export const populateTimes = (_24hr = false) => {
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

    if (_24hr === "off") {
      label = `${hours}:${minutes}${postfix}`;
    }

    arr.push({ val: `${hours24}:${minutes}`, label });
  }

  return arr;
};
