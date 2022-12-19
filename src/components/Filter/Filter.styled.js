import styled from 'styled-components';

export const Label = styled.label`
  margin-top: ${p => p.theme.space[3]}px;
  display: flex;
  flex-direction: column;
  font-size: ${p => p.theme.fontSize[2]}px;
  font-weight: ${p => p.theme.fontWeight.bold};
`;
