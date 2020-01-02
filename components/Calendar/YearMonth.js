import React, { useContext } from "react";
import { SelectMenu } from "./SelectMenu";
import { store } from "./index";
import dayjs from "dayjs";

const years = [
  { val: "2020", label: "2020" },
  { val: "2021", label: "2021" }
];

const months = [
  { val: "01", label: "January" },
  { val: "02", label: "February" },
  { val: "03", label: "March" },
  { val: "04", label: "April" },
  { val: "05", label: "May" },
  { val: "06", label: "June" },
  { val: "07", label: "July" },
  { val: "08", label: "August" },
  { val: "09", label: "September" },
  { val: "10", label: "October" },
  { val: "11", label: "November" },
  { val: "12", label: "December" }
];

const prevNav = date => {
  //
  const prevMonth = dayjs(date)
    .subtract(1, "month")
    .format("YYYY-MM-DD");

  if (dayjs(prevMonth).isBefore(firstAvailableDate())) {
    return ["Calendar-nav--button--unavailable"];
  }

  return [];
};

const nextNav = (month, year) => {
  // @todo make this dynamic
  const nextMonth = dayjs(`${year}-${month}-01`)
    .add(1, "month")
    .endOf("month")
    .format("YYYY-MM-DD");

  if (dayjs(nextMonth).isAfter(lastAvailableDate())) {
    return ["Calendar-nav--button--unavailable"];
  }

  return [];
};

const firstAvailableDate = () => {
  //@todo make this dynamic
  return "2020-01-01";
};

const lastAvailableDate = day => {
  //@todo make this dynamic
  return "2021-12-31";
};

export const YearMonth = () => {
  const { month, year, dispatch, date } = useContext(store);

  return (
    <section aria-label="Calendar Navigation" className="Calendar-nav u-flex">
      <button
        id="previous"
        className={["Calendar-nav--button", ...prevNav(date)].join(" ")}
        type="button"
        aria-label=""
        onClick={() => {
          dispatch({
            type: "SELECT_PREVIOUS",
            payload: "previous"
          });
        }}
      >
        &#10094;
      </button>
      <div className="Calendar-nav--selects">
        <div className="Calendar-nav--select">
          {
            <SelectMenu
              name="months"
              selected={month}
              values={months}
              handleChange={event => {
                dispatch({
                  type: "SELECT_MONTH",
                  payload: event.currentTarget.value
                });
              }}
            />
          }
        </div>
        <div className="Calendar-nav--select">
          {
            <SelectMenu
              name="years"
              selected={year}
              values={years}
              handleChange={event => {
                dispatch({
                  type: "SELECT_YEAR",
                  payload: event.currentTarget.value
                });
              }}
            />
          }
        </div>
      </div>
      <button
        id="next"
        className={["Calendar-nav--button", ...nextNav(month, year)].join(" ")}
        type="button"
        aria-label=""
        onClick={() => {
          dispatch({
            type: "SELECT_NEXT",
            payload: "next"
          });
        }}
      >
        &#10095;
      </button>
    </section>
  );
};
