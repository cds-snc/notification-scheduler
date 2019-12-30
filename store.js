import React, { createContext, useReducer } from "react";
import {
  today,
  setSelected,
  parseMonth,
  parseYear,
  yearMonthDay
} from "./components/util";
import dayjs from "dayjs";

const initialState = {
  month: "02",
  year: "2020",
  today,
  selected: ["2020-01-01"]
};
const store = createContext(initialState);
const { Provider } = store;

// @todo handle next, previous too far in the past or future
const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    let newState = {};
    switch (action.type) {
      case "SELECT_DATE":
        newState = {
          ...state,
          selected: setSelected(state.selected, action.payload)
        };
        break;
      case "SELECT_MONTH":
        newState = {
          ...state,
          date: (state.date = `${state.year}-${action.payload}-01`)
        };
        break;
      case "SELECT_YEAR":
        newState = {
          ...state,
          date: (state.date = `${action.payload}-${state.month}-01`)
        };
        break;
      case "SELECT_NEXT":
        newState = {
          ...state,
          date: yearMonthDay(dayjs(state.date).add(1, "month"))
        };
        break;
      case "SELECT_PREVIOUS":
        newState = {
          ...state,
          date: yearMonthDay(dayjs(state.date).subtract(1, "month"))
        };
        break;
      default:
        newState = state;
    }

    newState.month = parseMonth(newState.date);
    newState.year = parseYear(newState.date);

    return newState;
  }, initialState);

  return <Provider value={{ ...state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
