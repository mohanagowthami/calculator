import React, { Component } from "react";

export default class KeyPad extends Component {
  onClickNumber = e => {
    this.props.onClickNumber(e.target.value);
  };

  onClickOperand = e => {
    this.props.onClickOperand(e.target.value);
  };
  renderDisplay = () => {
    let array = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
    array = array.map(number => {
      return (
        <button
          data-testid={number}
          value={number}
          onClick={this.onClickNumber}
        >
          {number}
        </button>
      );
    });
    console.log(array);
    return array;
  };
  renderDisplayOperands = () => {
    let array = ["+", "-", "*", "/", "%"];
    array = array.map(operand => {
      return (
        <button
          data-testid={operand}
          value={operand}
          onClick={this.onClickOperand}
        >
          {operand}
        </button>
      );
    });

    return array;
  };

  render() {
    return (
      <div>
        {this.renderDisplay()}
        <div>{this.renderDisplayOperands()}</div>
      </div>
    );
  }
}
