import React, { Component } from "react";
import Screen from "../Screen/index";
import KeyPad from "../KeyPad/index";
import { Calculator } from "./styleComponents";
import { observable } from "mobx";
import { observer } from "mobx-react";

@observer
class CalculatorContainer extends Component {
  @observable previousInput = " ";
  @observable input = "";
  onClickClear = () => {
    this.input = "";
  };
  onClickDel = () => {};
  onClickEqualsTo = () => {};
  onClickNumber = number => {
    this.input = this.input.concat(`${number}`);
  };
  onClickOperator = operator => {
    this.input = this.input.concat(`${operator}`);
  };

  render() {
    return (
      <Calculator>
        <Screen previousInput={this.previousInput} input={this.input} />
        <KeyPad
          onClickNumber={this.onClickNumber}
          onClickClear={this.onClickClear}
          onClickDel={this.onClickDel}
          onClickEqualsTo={this.onClickEqualsT}
          onClickOperator={this.onClickOperator}
        />
      </Calculator>
    );
  }
}
export default CalculatorContainer;
