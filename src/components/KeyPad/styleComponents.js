import styled from "styled-components";
export const SingleNumber = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  text-align: center;
  margin-bottom: 0px;
  margin: 3px;
`;

export const SingleNumberZero = styled(SingleNumber)`
  width: 123px;
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
`;
export const KeypadOperators = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const SingleOperator = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  text-align: center;
  margin: 3px;
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
`;
