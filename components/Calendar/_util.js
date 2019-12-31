import dayjs from "dayjs";

export const isWeekend = day => {
  return day.$W === 0 || day.$W === 6;
};

export const formattedDay = day => {
  return dayjs(day).format("dddd MMMM YYYY");
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

export const setSelected = (arr, date) => {
  const index = isSelected(arr, date);

  if (index !== -1) {
    const cleaned = arr.filter(e => {
      return e !== date;
    });

    return cleaned;
  }

  return [...arr, date];
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
  // first day of the month check
  console.log("pastFirstDayInMonth");

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
  console.log("pastLastDayInMonth");
  if (Number(state.focusedDayNum) === Number(state.lastDay)) {
    const newMonth = dayjs(state.date)
      .add(1, "month")
      .format("YYYY-MM-DD");
    return { date: newMonth, focusedDayNum: 1 };
  }

  return {};
};

export const getNextDay = (day, state, direction) => {
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

  if (day <= 0) {
    return pastFirstDayInMonth(day, state);
  }

  if (direction != "left" && day > state.lastDay) {
    return pastLastDayInMonth(day, state);
  }

  console.log("got here", day);

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
