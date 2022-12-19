import styled from 'styled-components';

export const ContactsListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  width: ${p => p.theme.space[11]}px;
`;

export const ContactsItemStyled = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${p => p.theme.space[1]}px;
`;

export const TextStyle = styled.p`
  font-size: ${p => p.theme.fontSize[3]}px;
`;
