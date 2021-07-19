import React from "react";

import "./TabButton.css";

const TabButton = (props) => {
  return (
    <button
      className={`tabs ${props.typeTab}`}
      type={props.type}
      onClick={props.toggleTab}
    >
      {props.children}
    </button>
  );
};

export default TabButton;
