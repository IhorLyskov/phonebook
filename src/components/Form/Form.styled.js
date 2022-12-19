import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormStyle = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  margin: 0 auto;
  gap: 8px;
  width: 400px;
  border: 1px solid black;
`;

export const InputStyled = styled(Field)`
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
