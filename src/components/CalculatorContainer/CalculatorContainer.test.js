import CalculatorContainer from "./index";
import React, { Component } from "react";

import { render, fireEvent, cleanup } from "@testing-library/react";
describe(" testing the integration of keypad and screen", () => {
  it("should test the callback,rendering the same value", () => {
    const { getByText, getByTestId } = render(<CalculatorContainer />);

    fireEvent.click(getByTestId("1"));

    fireEvent.click(getByTestId("+"));
    console.log(getByTestId("2*"));
    expect(getByTestId("2*").innerHTML).toBe("1+");
  });

  it("should test the callback,functionality of clear method", () => {
    const { getByText, getByTestId } = render(<CalculatorContainer />);

    fireEvent.click(getByText("C"));

    expect(getByTestId("2*").innerHTML).toBe("");
  });

  it("should test the callback,functionality of del method", () => {
    const { getByText, getByTestId } = render(<CalculatorContainer />);
    fireEvent.click(getByTestId("1"));

    fireEvent.click(getByTestId("+"));
    expect(getByTestId("2*").innerHTML).toBe("1+");

    fireEvent.click(getByText("Del"));

    expect(getByTestId("2*").innerHTML).toBe("1");
  });
});
