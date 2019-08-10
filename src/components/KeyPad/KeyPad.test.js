import KeyPad from "./index";
import { render, fireEvent, cleanup } from "@testing-library/react";
import React from "react";

const myMock = jest.fn();
afterEach(cleanup);
describe(" should test the callback function with particular value", () => {
  it(" should test call back with particular number ", () => {
    const { getByTestId } = render(<KeyPad onClickNumber={myMock} />);

    fireEvent.click(getByTestId("1"));
    expect(myMock).toHaveBeenCalledWith("1");
    fireEvent.click(getByTestId("2"));
    expect(myMock).toHaveBeenCalledWith("2");
    fireEvent.click(getByTestId("3"));
    expect(myMock).toHaveBeenCalledWith("3");
    fireEvent.click(getByTestId("4"));
    expect(myMock).toHaveBeenCalledWith("4");
    fireEvent.click(getByTestId("5"));
    expect(myMock).toHaveBeenCalledWith("5");
    fireEvent.click(getByTestId("6"));
    expect(myMock).toHaveBeenCalledWith("6");
    fireEvent.click(getByTestId("7"));
    expect(myMock).toHaveBeenCalledWith("7");
    fireEvent.click(getByTestId("8"));
    expect(myMock).toHaveBeenCalledWith("8");
    fireEvent.click(getByTestId("9"));
    expect(myMock).toHaveBeenCalledWith("9");
  });
});
