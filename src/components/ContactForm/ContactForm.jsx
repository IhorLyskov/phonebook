import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { customAlphabet } from 'nanoid';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { namePattern, phonePattern } from '../constants/Constants';

import {
  FormStyled,
  ErrorMessageStyled,
  FieldStyled,
  ButtonStyled,
  LabelStyled,
} from './ContactForm.styled';

const schema = Yup.object().shape({
  name: Yup.string()
    .matches(
      namePattern,
      'Name may contain only letters, apostrophe, dash and spaces!'
    )
    .required('This field is required!'),

  number: Yup.string()
    .matches(
      phonePattern,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +!'
    )
    .required('This field is required!'),
});

function ContactForm() {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const handleSubmit = ({ name, number }, { resetForm }) => {
    if (contacts.some(contact => contact.name === name)) {
      Notify.info(`${name} is already in contacts`);
      return;
    }
    const contact = {
      id: 'id-' + customAlphabet('1234567890', 3)(),
      name,
      number,
    };
    dispatch(addContact(contact));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormStyled>
        <LabelStyled htmlFor="name">Name</LabelStyled>
        <FieldStyled type="text" name="name" />
        <ErrorMessageStyled name="name" component="div" />

        <LabelStyled htmlFor="number">Number</LabelStyled>
        <FieldStyled type="tel" name="number" />
        <ErrorMessageStyled name="number" component="div" />

        <ButtonStyled type="submit">Add contact</ButtonStyled>
      </FormStyled>
    </Formik>
  );
}

export default ContactForm;
