import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { FormStyled } from '../RegistForm/RegistForm.styled';
import {
  ButtonStyled,
  LabelStyled,
  InputStyled,
} from '../Elements/Elements.styled';

function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <LabelStyled>
        Email
        <InputStyled type="email" name="email" placeholter="Enter email..." />
      </LabelStyled>
      <LabelStyled>
        Password
        <InputStyled
          type="password"
          name="password"
          placeholter="Enter password..."
        />
      </LabelStyled>
      <ButtonStyled type="submit">Log In</ButtonStyled>
    </FormStyled>
  );
}

export default LoginForm;
