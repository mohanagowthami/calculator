import KeyPad from "./index";
import { render, fireEvent, cleanup } from "@testing-library/react";
import React from "react";
import { clear } from "sisteransi";

const myMock = jest.fn();

describe(" should test the callback function with particular value", () => {
  const renderObject = render(<KeyPad onClickNumber={myMock} />);
  const { getByTestId } = renderObject;
  it(" should test call back with particular number ", () => {
    let array = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
    array.forEach(number => {
      fireEvent.click(getByTestId(number));
      expect(myMock).toHaveBeenCalledWith(number);
    });
  });
});
// describe(" naming", () => {
//   const renderObject = render(
//     <KeyPad onClickOperator={myMock} onClickOperator={myMock} />
//   );
//   const { getByTestId } = renderObject;
//   it(" should test call back with operators ", () => {
//     let array = ["+", "-", "*", "/", "%"];
//     array.forEach(operators => {
//       fireEvent.click(getByTestId(operators));
//       expect(myMock).toHaveBeenCalledWith(operators);
//     });
//   });
// });

describe(" writing the test case for special buttons like clear,del and equals", () => {
  it("should test the special buttons like clear,del and equals ", () => {
    const { getByText } = render(
      <KeyPad
        onClickNumber={myMock}
        onClickClear={myMock}
        onClickDel={myMock}
        onClickEqualsTo={myMock}
      />
    );

    fireEvent.click(getByText(/C/i));
    expect(myMock).toHaveBeenCalled();
    fireEvent.click(getByText(/Del/i));
    expect(myMock).toHaveBeenCalled();
    fireEvent.click(getByText(/=/i));
    expect(myMock).toHaveBeenCalled();
  });
});
