import styled from "styled-components";
export const SingleNumber = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  text-align: center;
  margin-bottom: 0px;
  margin: 0px;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 250px;
`;
export const KeypadNumbers = styled.div`
  display: flex;
  align-items: flex-end;
  width: 80%
  flex-wrap: wrap;
  margin: 0px;
`;
export const KeypadOperators = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 25%;
`;

export const SingleOperator = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  text-align: center;
`;

export const SpecialButtons = styled.div`
  width: 20%;
`;

export const NumberContainer = styled.div`
  display: flex;
  width: 75%;
`;
