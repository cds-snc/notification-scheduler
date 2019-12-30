// store.js
import React, { createContext, useReducer } from "react";
import { today, setSelected } from "./components/util";

const initialState = { date: "2019-12-01", today, selected: ["2020-01-01"] };
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
      default:
        return state;
    }
  }, initialState);

  return <Provider value={{ ...state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
