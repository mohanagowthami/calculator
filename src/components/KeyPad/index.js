import React, { Component } from "react";

export default class KeyPad extends Component {
  onClickNumber = e => {
    this.props.onClickNumber(e.target.value);
  };

  render() {
    return (
      <div>
        <button value="1" onClick={this.onClickNumber} data-testid="1">
          1
        </button>
        <button value="2" onClick={this.onClickNumber} data-testid="2">
          2
        </button>
        <button value="3" onClick={this.onClickNumber} data-testid="3">
          3
        </button>
        <button value="4" onClick={this.onClickNumber} data-testid="4">
          4
        </button>
        <button value="5" onClick={this.onClickNumber} data-testid="5">
          5
        </button>

        <button value="6" onClick={this.onClickNumber} data-testid="6">
          6
        </button>
        <button value="7" onClick={this.onClickNumber} data-testid="7">
          7
        </button>
        <button value="8" onClick={this.onClickNumber} data-testid="8">
          8
        </button>
        <button value="9" onClick={this.onClickNumber} data-testid="9">
          9
        </button>
      </div>
    );
  }
}
