import Screen from "./index";
import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
afterEach(cleanup);
describe(" testing the screen input", () => {
  it("should  test the screen dividing on clicking eual to button", () => {
    const { getByTestId } = render(<Screen />);
    fireEvent.click(getByTestId("eualsTo"));
  });
});
