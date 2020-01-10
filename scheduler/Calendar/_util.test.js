import {
  isBlockedDay,
  formattedDay,
  yearMonthDay,
  parseDay,
  parseMonth,
  parseYear,
  getFirstDay,
  getLastDay,
  getDates
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
