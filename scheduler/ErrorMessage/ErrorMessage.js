import React, { useContext } from "react";
import "./style.css";

const ErrorItem = ({ text, target }) => {
  return (
    <li className="error-list__list-item">
      <a className="error-list__link" href={`#${target}`}>
        {text}
      </a>
    </li>
  );
};

export const ErrorMessage = ({ messages }) => {
  if (!messages || messages.length > 1) {
    return null;
  }

  return (
    <div className="error-list" role="alert">
      <h3 className="error-list__header">
        Please correct the errors on the page
      </h3>
      <ol className="error-list__list" id="formErrors">
        {messages.map(item => {
          return <ErrorItem key={item.id} text={item.text} />;
        })}
      </ol>
    </div>
  );
};
