import React, { useState } from "react";

export const Toggle = props => {
  const [toggleState, setToggleState] = useState("off");

  function toggle() {
    setToggleState(toggleState === "off" ? "on" : "off");
  }

  return (
    <div className="toggle-holder">
      <div className="toggle-label">am/pm</div>
      <div className={`switch ${toggleState}`} onClick={toggle} />
      <div className="toggle-label">24h</div>
    </div>
  );
};
