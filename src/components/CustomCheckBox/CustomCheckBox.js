import React, { Component } from "react";
import "./CustomCheckBox.css";

export class CustomCheckBox extends Component {
  render() {
    return (
      <label className="checker-checkbox">
        <input
          checked={this.props.checked}
          onChange={this.props.onChange}
          defaultChecked={this.props.defaultChecked}
          type="checkbox"
        ></input>
        <span className="checkmark-checkbox"></span>
      </label>
    );
  }
}

export default CustomCheckBox;
