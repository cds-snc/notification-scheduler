import dayjs from "dayjs";
import React, { createContext, useReducer } from "react";
import {
  isBlockedDay,
  setSelected,
  parseMonth,
  parseDay,
  parseYear,
  yearMonthDay,
  getFirstDay,
  getLastDay,
  getNextDay
} from "./index";

const today = dayjs()
  .set("hour", 0)
  .set("minute", 0)
  .set("second", 0)
  .set("millisecond", 0);

const initialState = {
  month: "01",
  year: "2020",
  date: "2020-01-01",
  today,
  selected: [],
  focusedDayNum: 1,
  updateMessage: "initial"
};

const store = createContext(initialState);
const { Provider } = store;

// @todo
// - handle next, previous too far in the past or future
// - handle announce

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    let newState = {};
    switch (action.type) {
      case "CALENDAR_UPDATES":
        newState = { ...state, updateMessage: action.payload };
        break;
      case "SELECT_DATE":
        if (isBlockedDay(dayjs(action.payload), state.today)) {
          newState = { ...state };
        } else {
          newState = {
            ...state,
            selected: setSelected(state.selected, action.payload),
            focusedDayNum: parseDay(action.payload)
          };
        }
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
      case "FOCUS_DAY":
        newState = {
          ...state,
          focusedDayNum: action.payload
        };
        break;
      case "KEY_UP":
        newState = {
          ...state,
          ...getNextDay(Number(state.focusedDayNum) - 7, state, "up")
        };
        break;
      case "KEY_DOWN":
        newState = {
          ...state,
          ...getNextDay(Number(state.focusedDayNum) + 7, state, "down")
        };
        break;
      case "KEY_RIGHT":
        newState = {
          ...state,
          ...getNextDay(Number(state.focusedDayNum) + 1, state, "right")
        };
        break;
      case "KEY_LEFT":
        newState = {
          ...state,
          ...getNextDay(Number(state.focusedDayNum) - 1, state, "left")
        };
        break;
      default:
        newState = state;
    }

    newState.month = parseMonth(newState.date);
    newState.year = parseYear(newState.date);
    newState.firstDay = getFirstDay(newState.date);
    newState.lastDay = getLastDay(newState.date);

    console.log(newState);

    return newState;
  }, initialState);

  return <Provider value={{ ...state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
