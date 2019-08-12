import React, { Component } from "react";
import { observer } from "mobx-react";
import { Display, PreviousInput, Input } from "./styleComponent";
@observer
class Screen extends Component {
  render() {
    return (
      <Display>
        <PreviousInput
          value={this.props.previousInput}
          data-testid="previousInput"
        >
          {this.props.previousInput}
        </PreviousInput>
        <Input data-testid="input" value={this.props.input}>
          {this.props.input}
        </Input>
      </Display>
    );
  }
}
export default Screen;
