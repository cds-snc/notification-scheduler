export const onKeyDown = ({ value, key, dispatch }) => {
  if (key.match(/Up|Down|Left|Right|Home|End|PageUp|PageDown/)) {
    switch (key) {
      case "Right":
        dispatch({ type: "KEY_RIGHT", payload: "" });
        break;
      case "Left":
        dispatch({ type: "KEY_LEFT", payload: "" });
        break;
      case "Up":
        dispatch({ type: "KEY_UP", payload: "" });
        break;
      case "Down":
        dispatch({ type: "KEY_DOWN", payload: "" });
        break;
      case "Home":
        //next = getFirstDate();
        break;
      case "End":
        // next = getLastDate();
        break;
      case "PageUp":
      case "PageDown":
        break;
      default:
    }
  }

  return null;
};
