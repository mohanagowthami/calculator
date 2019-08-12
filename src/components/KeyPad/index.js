import React, { Component } from "react";
import {
  SingleNumber,
  FlexContainer,
  KeypadNumbers,
  KeypadOperators,
  SingleOperator,
  SpecialButtons,
  NumberContainer,
  SingleSpecialButton,
  SingleNumberZero
} from "./styleComponents.js";
export default class KeyPad extends Component {
  onClickNumber = e => {
    this.props.onClickNumber(e.target.value);
  };

  onClickOperator = e => {
    console.log(e.target.value);
    this.props.onClickOperator(e.target.value);
    console.log(e.target.value);
  };
  renderDisplay = () => {
    let A;
    let array = ["0", ".", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    array.reverse();
    array = array.map(number => {
      A = number == "0" ? SingleNumberZero : SingleNumber;
      return (
        <A data-testid={number} value={number} onClick={this.onClickNumber}>
          {number}
        </A>
      );
    });
    //console.log(array);
    return array;
  };
  renderDisplayOperands = () => {
    let array = ["+", "-", "*", "/", "%"];
    array = array.map(operator => {
      return (
        <SingleOperator
          data-testid={operator}
          value={operator}
          onClick={this.onClickOperator}
        >
          {operator}
        </SingleOperator>
      );
    });

    return array;
  };
  renderDisplaySpecialButtons = () => {
    return (
      <div>
        <SingleSpecialButton onClick={this.props.onClickClear}>
          C
        </SingleSpecialButton>
        <SingleSpecialButton onClick={this.props.onClickDel}>
          Del
        </SingleSpecialButton>
        <SingleSpecialButton onClick={this.props.onClickEqualsTo}>
          =
        </SingleSpecialButton>
      </div>
    );
  };

  render() {
    return (
      <FlexContainer>
        <NumberContainer>
          <SpecialButtons> {this.renderDisplaySpecialButtons()}</SpecialButtons>
          <KeypadNumbers>{this.renderDisplay()} </KeypadNumbers>
        </NumberContainer>
        <KeypadOperators>{this.renderDisplayOperands()}</KeypadOperators>
      </FlexContainer>
    );
  }
}
