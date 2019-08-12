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
    this.previousInput = "";
  };
  onClickDel = () => {
    this.input = this.input.slice(0, -1);
  };
  onClickEqualsTo = () => {
    let t = this.input;
    this.input = eval(this.input).toString();
    this.previousInput = t;
  };
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
          onClickEqualsTo={this.onClickEqualsTo}
          onClickOperator={this.onClickOperator}
        />
      </Calculator>
    );
  }
}
export default CalculatorContainer;
