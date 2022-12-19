import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { FormStyled } from './RegistForm.styled';
import {
  ButtonStyled,
  LabelStyled,
  InputStyled,
} from '../Elements/Elements.styled';

function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit} autoComplete="on">
      <LabelStyled>
        Username
        <InputStyled type="text" name="name" placeholder="Enter name..." />
      </LabelStyled>
      <LabelStyled>
        Email
        <InputStyled type="email" name="email" placeholder="Enter email..." />
      </LabelStyled>
      <LabelStyled>
        Password
        <InputStyled
          type="password"
          name="password"
          placeholder="Enter password..."
        />
      </LabelStyled>
      <ButtonStyled type="submit">Register</ButtonStyled>
    </FormStyled>
  );
}

export default RegisterForm;
