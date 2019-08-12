import React, { Component } from "react";
import { observer } from "mobx-react";
@observer
class Screen extends Component {
  render() {
    return (
      <div>
        <p value={this.props.previousInput} data-testid="1*">
          {this.props.previousInput}
        </p>
        <p data-testid="2*" value={this.props.input}>
          {this.props.input}
        </p>
      </div>
    );
  }
}
export default Screen;
