import styled from 'styled-components';

export const LogBox = styled.div`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
`;

export const LogText = styled.p`
  font-size: ${p => p.theme.fontSize[3]}px;
  font-weight: ${p => p.theme.fontWeight.bold};
`;
