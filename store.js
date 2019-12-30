// store.js
import React, { createContext, useReducer } from "react";
import { today, setSelected, getDates } from "./components/util";

const initialState = {
  month: "02",
  year: "2020",
  today,
  selected: ["2020-01-01"]
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "SELECT_DATE":
        return {
          ...state,
          selected: setSelected(state.selected, action.payload)
        };
      case "SELECT_MONTH":
        return {
          ...state,
          month: action.payload
        };
      case "SELECT_YEAR":
        return {
          ...state,
          year: action.payload
        };

      default:
        return state;
    }
  }, initialState);

  state.date = `${state.year}-${state.month}-01`;

  console.log(state);

  return <Provider value={{ ...state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
