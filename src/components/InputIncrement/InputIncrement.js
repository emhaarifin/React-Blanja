import React, { Component } from "react";
import "./InputIncrement.css";

export class InputIncrement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      show: true,
      max: 10,
      min: 1,
    };
  }

  IncrementItem = () => {
    this.setState((prevState) => {
      if (prevState.quantity < this.state.max) {
        return {
          quantity: prevState.quantity + 1,
        };
      } else {
        return null;
      }
    });
  };
  DecreaseItem = () => {
    this.setState((prevState) => {
      if (prevState.quantity !== this.state.min) {
        return {
          quantity: prevState.quantity - 1,
        };
      } else {
        return null;
      }
    });
  };
  ToggleClick = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  handleChange = (event) => {
    this.setState({ quantity: event.target.value });
  };

  render() {
    return (
      <div>
        <button className="btn-quantity dec" onClick={this.DecreaseItem}>
          -
        </button>
        <input
          className="input-quantity"
          value={this.state.quantity}
          onChange={this.handleChange}
        />
        <button className="btn-quantity inc" onClick={this.IncrementItem}>
          +
        </button>
      </div>
    );
  }
}

export default InputIncrement;
