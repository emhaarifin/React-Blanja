import React from "react";
import "./CustomRadio.css";

function CustomRadio(props) {
  return (
    <div>
      <label className={`custom-radio ${props.styling}`}>
        {props.nameLabel}
        <input type="radio" name="radio"></input>
        <span className="checkmark-radio"></span>
      </label>
    </div>
  );
}

export default CustomRadio;
