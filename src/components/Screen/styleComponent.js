import styled from "styled-components";
export const Display = styled.div`
display:flex
flex-direction:column;
margin-bottom:20px;

`;

export const Input = styled.div`
  font-size: 40px;
  height: 40px;
  text-align: right;
  width: 266px;
`;
export const PreviousInput = styled.div`
  font-size: 20px;
  height: 40px;
  text-align: right;
`;
export const ChangedStyledInput = styled(Input)`
  font-size: 42px;
`;
