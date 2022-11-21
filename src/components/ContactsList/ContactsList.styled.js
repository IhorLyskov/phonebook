import styled from 'styled-components';

export const ContactListStyled = styled.ul`
  padding-left: ${p => p.theme.space[5]}px;
`;

export const ContactItemStyled = styled.li`
  margin-top: ${p => p.theme.space[3]}px;
`;

export const ContactStyled = styled.span``;

export const DeleteButton = styled.button`
  width: ${p => p.theme.space[7]}px;
  padding: ${p => p.theme.space[0]}px;
  margin-left: ${p => p.theme.space[2]}px;

  font-size: ${p => p.theme.fontSize[1]}px;
  font-weight: ${p => p.theme.fontWeight.medium};

  border: ${p => p.theme.border.normal};
  border-color: ${p => p.theme.colors.colorBorder};
  border-radius: ${p => p.theme.radius.normal};

  background-color: ${p => p.theme.colors.colorComponentBg};

  :hover {
    border-color: ${p => p.theme.colors.colorAccent};
    background-color: ${p => p.theme.colors.colorAccent};
    color: ${p => p.theme.colors.colorComponentBg};
  }
`;
