import dayjs from "dayjs";

export const isWeekend = day => {
  return day.$W === 0 || day.$W === 6;
};

export const formattedDay = day => {
  return dayjs(day).format("dddd MMMM DD YYYY");
};

export const isBlockedDay = (day, today) => {
  return isWeekend(day) || day.isBefore(today);
};

export const yearMonthDay = day => {
  return dayjs(day).format("YYYY-MM-DD");
};

export const getDates = date => {
  let start = dayjs(date)
    .startOf("month")
    .startOf("week")
    .subtract(1, "day");

  let end = dayjs(date)
    .endOf("month")
    .endOf("week")
    .subtract(1, "day");

  let calendar = [];

  while (start.isBefore(end)) {
    calendar.push(
      Array(7)
        .fill(0)
        .map(() => {
          start = start.add(1, "day");
          return start;
        })
    );
  }

  return calendar;
};

export const setSelected = (arr, date, multi = false) => {
  const index = isSelected(arr, date);

  // toggle this value if it's already been set
  if (index !== -1) {
    const cleaned = arr.filter(e => {
      return e !== date;
    });

    return cleaned;
  }

  if (multi) {
    return [...arr, date];
  }

  return [date];
};

export const isSelected = (arr, date) => {
  return arr.findIndex(val => val === date);
};

export const parseDay = date => {
  return dayjs(date).format("D");
};

export const parseMonth = date => {
  return dayjs(date).format("MM");
};

export const parseYear = date => {
  return dayjs(date).format("YYYY");
};

const pastFirstDayInMonth = (day, state) => {
  if (Number(state.focusedDayNum) === 1) {
    const newMonth = dayjs(state.date)
      .subtract(1, "month")
      .format("YYYY-MM-DD");
    return {
      date: newMonth,
      focusedDayNum: Number(getLastDay(newMonth))
    };
  }
  return {};
};

const pastLastDayInMonth = (day, state) => {
  if (Number(state.focusedDayNum) === Number(state.lastDay)) {
    const newMonth = dayjs(state.date)
      .add(1, "month")
      .format("YYYY-MM-DD");
    return { date: newMonth, focusedDayNum: 1 };
  }

  return {};
};

export const firstAvailableDate = () => {
  //@todo make this dynamic
  return "2020-01-01";
};

export const lastAvailableDate = day => {
  //@todo make this dynamic
  return "2021-12-31";
};

export const isBeforeFirstAvailableDate = () => {
  return false;
};

export const isAfterFirstAvailableDate = () => {
  return false;
};

export const getNextDay = (day, state, direction) => {
  /*
  console.log(
    "day",
    day,
    "focused day num",
    state.focusedDayNum,
    "state last day",
    state.lastDay,
    "direction",
    direction
  );
  */

  if (isBeforeFirstAvailableDate() || isAfterFirstAvailableDate()) {
    return {};
  }

  if (day <= 0) {
    return pastFirstDayInMonth(day, state);
  }

  if (direction != "left" && day > state.lastDay) {
    return pastLastDayInMonth(day, state);
  }

  return { focusedDayNum: day };
};

export const getFirstDay = date => {
  return dayjs(date)
    .startOf("month")
    .format("D");
};

export const getLastDay = date => {
  return dayjs(date)
    .endOf("month")
    .format("D");
};
