import React, { Component } from "react";
import {
  SingleNumber,
  FlexContainer,
  KeypadNumbers,
  KeypadOperators,
  SingleOperator,
  SpecialButtons,
  NumberContainer
} from "./styleComponents.js";
export default class KeyPad extends Component {
  onClickNumber = e => {
    this.props.onClickNumber(e.target.value);
  };

  onClickOperator = e => {
    this.props.onClickOperator(e.target.value);
  };
  renderDisplay = () => {
    let array = ["0", ".", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    array.reverse();
    array = array.map(number => {
      return (
        <SingleNumber
          data-testid={number}
          value={number}
          onClick={this.onClickNumber}
        >
          {number}
        </SingleNumber>
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
  renderDisplaySpecialButtons = () => {};

  render() {
    return (
      <FlexContainer>
        <NumberContainer>
          <SpecialButtons> {this.renderDisplaySpecialButtons}</SpecialButtons>
          <KeypadNumbers>{this.renderDisplay()} </KeypadNumbers>
        </NumberContainer>
        <KeypadOperators>{this.renderDisplayOperands()}</KeypadOperators>
      </FlexContainer>
    );
  }
}
