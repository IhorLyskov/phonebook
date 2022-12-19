import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  padding: ${p => p.theme.space[5]}px;
  margin: ${p => p.theme.space[3]}px auto 0 auto;
  gap: 24px;
  width: ${p => p.theme.space[11]}px;
  border: 1px solid black;
`;
