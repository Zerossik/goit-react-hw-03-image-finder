import styled from 'styled-components';

export const FormButton = styled.button`
  padding: 5px 15px;
  margin-bottom: 16px;

  cursor: pointer;

  border: 1px solid black;
  border-radius: 10px;
`;

export const Input = styled.input`
  width: 250px;
  height: 20px;
  outline: none;
  border-radius: 5px;

  font-size: 18px;
  color: #444f56;

  margin-bottom: 16px;
  padding: 4px;
`;

export const StyledLabel = styled.label`
  font-size: 24px;
  color: #444f56;
`;

export const Required = styled.span`
  color: red;
`;
