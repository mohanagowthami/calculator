import CalculatorContainer from "./index";
import React, { Component } from "react";

import { render, fireEvent, cleanup } from "@testing-library/react";
describe(" testing the integration of keypad and screen", () => {
  it("should test the callback,rendering the same value", () => {
    const { getByText, getByTestId } = render(<CalculatorContainer />);

    fireEvent.click(getByTestId("1"));
    expect(myMock).toHaveBeenCalledWith("1");
    fireEvent.click(getByTestId("+"));
    expect(myMock).toHaveBeenCalledWith("+");
    fireEvent.click(getByTestId("1"));
    expect(myMock).toHaveBeenCalledWith("1");
    fireEvent.click(getByText("="));
    expect(myMock).toHaveBeenCalled();
    expect(getByText("1+1").id).toBe(1);
  });
});
