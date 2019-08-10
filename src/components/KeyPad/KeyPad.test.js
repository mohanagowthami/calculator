import KeyPad from "./index";
import { render, fireEvent, cleanup } from "@testing-library/react";
import React from "react";

const myMock = jest.fn();
afterEach(cleanup);
describe(" should test the callback function with particular value", () => {
  it(" should test call back with particular number ", () => {
    const { getByTestId } = render(<KeyPad onSubmit={myMock} />);
    fireEvent.click(getByTestId("1"));
    expect(myMock).toHaveBeenCalledWith("1");
  });
});
