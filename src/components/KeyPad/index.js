import React, { Component } from "react";

export default class KeyPad extends Component {
  submit = e => {
    this.props.onSubmit(e.target.value);
  };

  render() {
    return (
      <div>
        <button value="1" onClick={this.submit} data-testid="1">
          1{" "}
        </button>
      </div>
    );
  }
}
