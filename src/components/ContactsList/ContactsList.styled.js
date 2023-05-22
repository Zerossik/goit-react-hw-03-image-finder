import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;

  margin-top: 16px;
`;
export const ContactListButton = styled.button`
  padding: 5px 15px;
  margin-top: 8px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 10px;
`;

export const ContactItem = styled.li`
  padding: 10px;
  border-radius: 5px;

  font-size: 18px;
  &:nth-child(2n) {
    background-color: #ecf1f4;
  }
  &:nth-child(2n + 1) {
    background-color: #b8e4ff;
  }
`;
