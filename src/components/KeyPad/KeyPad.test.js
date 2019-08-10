import KeyPad from "./index";
import { render, fireEvent, cleanup } from "@testing-library/react";
import React from "react";

const myMock = jest.fn();

describe(" should test the callback function with particular value", () => {
  let getByTestId;
  beforeAll(() => {
    const renderObject = render(
      <KeyPad onClickNumber={myMock} onClickOperand={myMock} />
    );
    const { getByTestId } = renderObject;
    getByTestId = getByTestId;
  });
  it(" should test call back with particular number ", () => {
    let array = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
    array.forEach(number => {
      fireEvent.click(getByTestId(number));
      expect(myMock).toHaveBeenCalledWith(number);
    });
  });

  it(" should test call back with operands ", () => {
    let array = ["+", "-", "*", "/", "%"];
    array.forEach(operand => {
      fireEvent.click(getByTestId(operand));
      expect(myMock).toHaveBeenCalledWith(operand);
    });
  });
});
