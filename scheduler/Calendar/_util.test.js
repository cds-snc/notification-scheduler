import { isBlockedDay } from "./_util";
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
