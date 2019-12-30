import dayjs from "dayjs";

export const today = dayjs()
  .set("hour", 0)
  .set("minute", 0)
  .set("second", 0)
  .set("millisecond", 0);

export const isWeekend = day => {
  return day.$W === 0 || day.$W === 6;
};

export const formattedDay = day => {
  return dayjs(day).format("D, dddd MMMM YYYY");
};

export const isBlockedDay = (day, today = today) => {
  return isWeekend(day) || day.isBefore(today);
};

export const yearMonthDay = day => {
  const { $y: y, $M: m, $D: d } = day;
  return `${y}-${m}-${d}`;
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
