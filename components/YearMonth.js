import React, { useContext } from "react";
import { SelectMenu } from "./SelectMenu";
import { store } from "../store";

const years = [
  { val: "2019", label: "2019" },
  { val: "2020", label: "2020" }
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

export const YearMonth = () => {
  const { month, year, dispatch } = useContext(store);
  return (
    <section aria-label="Calendar Navigation" className="Calendar-nav u-flex">
      <button
        id="previous"
        className="Calendar-nav--button"
        type="button"
        aria-label="Previous month, October 2018"
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
              selected="2020"
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
        className="Calendar-nav--button"
        type="button"
        aria-label="Next month, December 2018"
      >
        &#10095;
      </button>
    </section>
  );
};
