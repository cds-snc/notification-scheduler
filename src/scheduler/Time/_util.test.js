import {
  populateTimes,
  dateIsToday,
  timeValuesToday,
} from "./_util";
import dayjs from "dayjs";

const state = {
  today: "2020-01-01",
  selected: ["2020-01-01"],
  time_values: [
    { val: "1:00", label: "1:00 AM" },
    { val: "9:00", label: "9:00 AM" },
    { val: "13:00", label: "1:00 PM" },
    { val: "14:00", label: "2:00 PM" },
    { val: "15:00", label: "3:00 PM" },
    { val: "16:00", label: "4:00 PM" }
  ]
};

describe("Time utils", function() {
  const dayjsToday = dayjs()
    .set("hour", 0)
    .set("minute", 0)
    .set("second", 0)
    .set("millisecond", 0);

  const constructedToday = dayjsToday.year() + "-" + (dayjsToday.month() + 1) + "-" + dayjsToday.date()

  test("Populate Times shows all 24h for a future date", async () => {
    expect(populateTimes(false)).toHaveLength(24)
  });

  test("dateIsToday returns true when evaluating today", async () => {
    expect(dateIsToday([dayjsToday])).toBeTruthy;
  });

  test("dateIsToday returns false when evaluating a different day", async () => {
    expect(dateIsToday(state.selected)).toBeFalsy;
  });

  test("timeValuesToday culls times that have already passed", async () => {
    const now = dayjs().hour(13).minute(59).toString();
    const culled_time_values = timeValuesToday(now, constructedToday, state.time_values);
    expect(culled_time_values).toHaveLength(3);
  })

})