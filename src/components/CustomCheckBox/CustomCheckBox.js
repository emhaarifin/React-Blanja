import React, { Component } from "react";
import "./CustomCheckBox.css";

export class CustomCheckBox extends Component {
  render() {
    return (
      <label className="checker-checkbox">
        <input type="checkbox"></input>
        <span className="checkmark-checkbox"></span>
      </label>
    );
  }
}

export default CustomCheckBox;
