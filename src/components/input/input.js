import React from "react";
import "./input.css";

const input = (props) => {
  const element =
    props.element === "input" ? (
      <input
        className={"custom-input"}
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
      />
    ) : (
      <textarea
        className={"custom-input"}
        id={props.id}
        rows={props.rows || 3}
        placeholder={props.placeholder}
      />
    );
  return <div>{element}</div>;
};

export default input;
