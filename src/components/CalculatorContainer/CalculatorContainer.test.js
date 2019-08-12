import CalculatorContainer from "./index";
import React from "react";

import { render, fireEvent, cleanup } from "@testing-library/react";
afterEach(cleanup);
describe(" testing the integration of keypad and screen", () => {
  it("should test the callback,rendering the same value", () => {
    const { getByTestId } = render(<CalculatorContainer />);
    fireEvent.click(getByTestId("1"));
    fireEvent.click(getByTestId("+"));
    expect(getByTestId("input").innerHTML).toBe("1+");
  });

  it("should test the callback,functionality of clear method", () => {
    const { getByText, getByTestId } = render(<CalculatorContainer />);
    fireEvent.click(getByTestId("1"));
    fireEvent.click(getByText("C"));
    expect(getByTestId("input").innerHTML).toBe("");
    fireEvent.click(getByText("C"));
    expect(getByTestId("input").innerHTML).toBe("");
  });

  it("should test the callback,functionality of del method", () => {
    const { getByText, getByTestId } = render(<CalculatorContainer />);
    fireEvent.click(getByTestId("1"));

    expect(getByTestId("input").innerHTML).toBe("1");
    fireEvent.click(getByText("Del"));
    expect(getByTestId("input").innerHTML).toBe("");
    fireEvent.click(getByText("Del"));
    expect(getByTestId("input").innerHTML).toBe("");
  });
  it("should test the callback,functionality of equals to method", () => {
    const { getByText, getByTestId } = render(<CalculatorContainer />);
    fireEvent.click(getByTestId("1"));
    fireEvent.click(getByTestId("+"));
    fireEvent.click(getByTestId("1"));
    expect(getByTestId("input").innerHTML).toBe("1+1");
    fireEvent.click(getByText("="));
    expect(getByTestId("input").innerHTML).toBe("2");
    expect(getByTestId("previousInput").innerHTML).toBe("1+1");
  });
});
