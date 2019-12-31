import dayjs from "dayjs";

export const isWeekend = day => {
  return day.$W === 0 || day.$W === 6;
};

export const formattedDay = day => {
  return dayjs(day).format("dddd MMMM YYYY");
};

export const isBlockedDay = (day, today = today) => {
  return false;
  //return isWeekend(day) || day.isBefore(today);
};

export const yearMonthDay = day => {
  return dayjs(day).format("YYYY-MM-DD");
};

export const getDates = date => {
  let start = dayjs(date)
    .startOf("month")
    .startOf("week")
    .subtract(1, "day");
  const end = dayjs(date)
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
  console.log(date);
  return dayjs(date).format("YYYY");
};

///// events

const getFirstDate = () => {
  return false;
};

const nextMonth = () => {
  return false;
};

const previousMonth = () => {
  return false;
};

const getLastDate = () => {
  return false;
};
