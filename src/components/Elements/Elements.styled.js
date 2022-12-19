import styled from 'styled-components';

export const LabelStyled = styled.label`
  font-size: ${p => p.theme.fontSize[2]}px;
  font-weight: ${p => p.theme.fontWeight.bold};
`;

export const ButtonStyled = styled.button`
  padding: ${p => p.theme.space[1]}px ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.colorText};
  background-color: ${p => p.theme.colors.colorKeyBg};
  border: ${p => p.theme.border.normal};
  border-color: ${p => p.theme.colors.colorKeyBg};
  border-radius: ${p => p.theme.radius.normal};
  font-size: ${p => p.theme.fontSize[2]}px;
  text-decoration: none;
  font-weight: ${p => p.theme.fontWeight.medium};
  cursor: pointer;
  &:hover {
    color: ${p => p.theme.colors.colorComponentBg};
  }
`;

export const InputStyled = styled.input`
  font-size: ${p => p.theme.fontSize[2]}px;
  margin-top: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[2]}px;
  width: ${p => p.theme.space[10]}px;
  border: ${p => p.theme.border.normal};
  border-radius: ${p => p.theme.radius.normal};
  :hover {
    border-color: ${p => p.theme.colors.colorComponentBg};
    box-shadow: 0 0 4px 2px ${p => p.theme.colors.colorAccent};
  }
`;
