import React from "react";
import { SelectMenu } from "./SelectMenu";

const years = { 2019: "2019", 2020: "2020" };

const months = {
  "1": "January",
  "2": "February",
  "3": "March",
  "4": "April",
  "5": "May",
  "6": "June",
  "7": "July",
  "8": "August",
  "9": "September",
  "10": "October",
  "11": "November",
  "12": "December"
};

export const YearMonth = () => {
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
          {<SelectMenu name="years" selected="2" values={months} />}
        </div>
        <div className="Calendar-nav--select">
          {<SelectMenu selected="2020" name="years" values={years} />}
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
