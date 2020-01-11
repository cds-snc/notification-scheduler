import {
  isBlockedDay,
  formattedDay,
  yearMonthDay,
  parseDay,
  parseMonth,
  parseYear,
  getFirstDay,
  getLastDay,
  getDates,
  isSelected,
  setSelected,
  beforeFirstDayInMonth,
  pastLastDayInMonth
} from "./_util";
import dayjs from "dayjs";

const state = {
  today: "2020-01-01",
  firstAvailableDate: "2020-01-01",
  lastAvailableDate: "2020-01-15"
};

describe("Handles blocked days", function() {
  test("Isn't blocked day", async () => {
    const day = dayjs("2020-01-02");
    const blocked = isBlockedDay(day, state);
    expect(blocked).toEqual(false);
  });

  test("Is blocked day", async () => {
    const day = dayjs("2020-02-02");
    const blocked = isBlockedDay(day, state);
    expect(blocked).toEqual(true);
  });
});

describe("Handles formatting", function() {
  test("Full date", async () => {
    const day = formattedDay("2020-01-01");
    expect(day).toEqual("Wednesday January 01 2020");
  });

  test("YYYY-MM-DD", async () => {
    const day = yearMonthDay("2020-01-01");
    expect(day).toEqual("2020-01-01");
  });

  test("day", async () => {
    const day = parseDay("2020-01-01");
    expect(day).toEqual("1");
  });

  test("month", async () => {
    const day = parseMonth("2020-01-01");
    expect(day).toEqual("01");
  });

  test("year", async () => {
    const day = parseYear("2020-01-01");
    expect(day).toEqual("2020");
  });
});

describe("First and Last days", function() {
  test("First day", async () => {
    const day = getFirstDay("2020-01-01");
    expect(day).toEqual("1");
  });

  test("Last day", async () => {
    const day = getLastDay("2020-01-01");
    expect(day).toEqual("31");
  });
});

describe("Creates an array of dayjs dates", function() {
  test("Dates", async () => {
    const dates = getDates("2020-01-01");
    const { $D: day } = dates[1][0];
    expect(day).toEqual(5);
  });
});

describe("Selected dates", function() {
  test("Is selected", async () => {
    expect(isSelected(["2020-01-01"], "2020-01-01")).toEqual(0);
    expect(isSelected(["2020-01-01"], "2020-01-02")).toEqual(-1);
  });

  test("Date select & deselect", async () => {
    const dates = setSelected([], "2020-01-01");
    expect(dates[0]).toEqual("2020-01-01");
    expect(setSelected(dates, "2020-01-01")).toEqual([]);
  });

  test("Multi date select & deselect", async () => {
    let dates = [];

    //select a day
    dates = setSelected(dates, "2020-01-01", true);
    // select another day
    dates = setSelected(dates, "2020-01-02", true);

    expect(dates[1]).toEqual("2020-01-02");

    // deselect the second day
    dates = setSelected(dates, "2020-01-02", true);
    expect(dates[0]).toEqual("2020-01-01");
  });
});

describe("Is before or after date", function() {
  
  test("Is at start of calendar", async () => {
    let date = "2020-01-15";
    let firstAvailableDate = dayjs(date);
    let stateObj = { ...state, firstAvailableDate, focusedDayNum: 1 };
    expect(beforeFirstDayInMonth(stateObj)).toEqual({
      updateMessage: "at_start_of_calendar"
    });
  });

  test("Is at start of month but before first available", async () => {

    let date = "2020-03-01"; // year month date we're displaying on the calendar
    let firstAvailableDate = dayjs("2020-01-14");
    let stateObj = { ...state, date, firstAvailableDate, focusedDayNum: 1 };

    // Calendar date is March 01 2020
    // expecting to move to last day in the previous month (Feb 29 2020)
    expect(beforeFirstDayInMonth(stateObj)).toEqual({
      date: "2020-02-01",
      focusedDayNum: 29,
      updateMessage: ""
    });
  });
});
