import styled from "styled-components";
export const SingleNumber = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  text-align: center;
  margin-bottom: 0px;
  margin: 3px;
  background-color: #696969;
  color: white;
  border: none;
`;

export const SingleNumberZero = styled(SingleNumber)`
  width: 123px;
  border: none;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const KeypadNumbers = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  margin: 0px;
  font-size: 20px;
`;
export const KeypadOperators = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 14px;
`;

export const SingleOperator = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  text-align: center;
  margin: 3px;
  background-color: orange;
  color: white;
  border: none;
`;

export const SpecialButtons = styled.div`
  display: flex;
  flex-dirction: row;
`;

export const NumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`;
export const SingleSpecialButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin: 3px;
  background-color: #dcdcdc;
  color: black;
  border: none;
`;
